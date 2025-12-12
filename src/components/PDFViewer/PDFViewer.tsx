import React, { useEffect, useRef } from "react";
import "./PDFViewer.css";

type Props = {
  src: string;
  height?: number | string;
};

const PDF_CDN = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js";
const PDF_WORKER = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

function loadScript(src: string, waitForGlobal?: string, timeout = 5000): Promise<void> {
  // Cache a single loading promise on the window to avoid duplicate script inserts
  const globalKey = `__loader_${src}`;
  const win = window as any;
  if (win[globalKey]) return win[globalKey];

  win[globalKey] = new Promise<void>((resolve, reject) => {
    // If script tag already present but the global not yet available, still wait
    const existing = document.querySelector(`script[src="${src}"]`);
    if (!existing) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onerror = (e) => reject(e);
      document.head.appendChild(s);
    }

  if (!waitForGlobal) return resolve();

    const start = Date.now();
    const tick = () => {
  if ((window as any)[waitForGlobal]) return resolve();
      if (Date.now() - start > timeout) return reject(new Error(`${waitForGlobal} not available after ${timeout}ms`));
      setTimeout(tick, 100);
    };
    tick();
  });

  return win[globalKey];
}

const PDFViewer: React.FC<Props> = ({ src, height }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const renderId = { id: 0 } as { id: number };

    async function renderPDF() {
      renderId.id += 1;
      const myId = renderId.id;
      try {
        // load pdf.js and wait for the global pdfjsLib to be available
        await loadScript(PDF_CDN, "pdfjsLib", 7000);
        const pdfjsLib = (window as any).pdfjsLib;
        if (!pdfjsLib) throw new Error("pdfjsLib not loaded");
        pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_WORKER;

        const loadingTask = pdfjsLib.getDocument(src);
        const pdf = await loadingTask.promise;

        if (cancelled || myId !== renderId.id) return;

        const container = containerRef.current;
        if (!container) return;
        container.innerHTML = "";

        for (let i = 1; i <= pdf.numPages; i++) {
          if (cancelled || myId !== renderId.id) break;
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1 });
          const canvasWrapper = document.createElement("div");
          canvasWrapper.className = "pdf-page";
          const canvas = document.createElement("canvas");
          canvasWrapper.appendChild(canvas);
          container.appendChild(canvasWrapper);

          const context = canvas.getContext("2d");
          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);

          const renderContext = {
            canvasContext: context,
            viewport,
          };

          await page.render(renderContext).promise;
        }
      } catch (err: any) {
        // silently fail and let the user retry by refreshing
      }
    }

    renderPDF();

    // re-render on resize to recalc scale; debounce to avoid frequent reloads
    let resizeTimer: any = null;
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => renderPDF(), 300);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
    };
  }, [src]);

  return (
    <div className="pdf-viewer-root">
      <div
        ref={containerRef}
        className="pdf-viewer-container"
        style={height ? { height: typeof height === "number" ? `${height}px` : height } : undefined}
      />
    </div>
  );
};

export default PDFViewer;
