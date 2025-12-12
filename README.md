Tài liệu ngắn để chạy và phát triển dự án trên máy local.

Yêu cầu trước khi bắt đầu
- Node.js (16+) và npm hoặc pnpm
- Git (nếu bạn muốn đẩy mã lên remote)

Cài đặt và chạy
1. Cài dependencies:

```bash
npm install
# hoặc dùng pnpm
pnpm install
```

2. Chạy server phát triển (hot-reload):

```bash
npm run dev
# hoặc pnpm dev
```

3. Build production:

```bash
npm run build
```

4. Xem bản build tĩnh:

```bash
npm run preview
```

Về tài liệu (PDF) và `public/catalog`
- Thư mục `public/catalog` chứa các tập tin brochure / catalogue (ví dụ PDF) và sẽ được phục vụ tĩnh bởi Vite tại đường dẫn `/catalog/...`.
- `.gitignore` hiện không chặn `public/catalog`, nên để đẩy các PDF lên remote bạn chỉ cần thêm (git add/commit) thư mục đó.

Ví dụ để đẩy `public/catalog` lên GitHub (nếu repository đã khởi tạo remote):

```bash
git add public/catalog
git commit -m "Add product catalogs"
git push origin main
```

Nếu bạn chưa thêm remote:

```bash
git remote add origin git@github.com:<your-org>/<repo>.git
git push -u origin main
```

Gợi ý UI/UX và cấu trúc
- Trang chính: `src/pages/Home.tsx` dùng các component `Hero`, `Overview`, `Product`, `Partner`.
- Menu sản phẩm liên kết tới các route trong `src/router.tsx` (ví dụ `/san-pham/telemed-ris`).

Gặp lỗi TypeScript/Build
- Chạy `npm run build` để kiểm tra lỗi TypeScript trước khi commit.
- Nếu gặp lỗi thiếu dependency, cài thêm package tương ứng rồi chạy lại `npm install`.

Liên hệ
- Nếu cần tôi sửa README chi tiết hơn (cách deploy Docker, CI, v.v.), nói tôi biết.

Chúc bạn dev thuận tiện!
