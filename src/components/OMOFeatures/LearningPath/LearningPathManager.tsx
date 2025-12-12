import React, { useState, useEffect } from 'react';
import { LearningPath, LearningMaterial } from '@/types';
import { learningPathService, materialService, progressService } from '@/services/api';
import './LearningPath.css';

const LearningPathManager: React.FC<{ classId: string; studentId?: string }> = ({ classId, studentId }) => {
  const [path, setPath] = useState<LearningPath | null>(null);
  const [materials, setMaterials] = useState<LearningMaterial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLearningPath();
  }, [classId]);

  const loadLearningPath = async () => {
    try {
      setLoading(true);
      const pathData = await learningPathService.getClassPath(classId);
      setPath(pathData);
      const materialsData = await materialService.getClassMaterials(classId);
      setMaterials(materialsData.sort((a, b) => a.sequenceOrder - b.sequenceOrder));
    } catch (error) {
      console.error('Error loading learning path:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMaterialComplete = async (materialId: string, score?: number) => {
    if (!studentId) return;
    try {
      await progressService.markMaterialComplete(studentId, materialId, score);
    } catch (error) {
      console.error('Error marking material complete:', error);
    }
  };

  const getMaterialIcon = (type: string) => {
    const icons: { [key: string]: string } = {
      video: '🎥',
      pdf: '📄',
      link: '🔗',
      h5p: '🎮',
      scorm: '📦',
      xapi: '📊',
    };
    return icons[type] || '📝';
  };

  if (loading) return <div className="learning-path-manager">Đang tải...</div>;

  return (
    <div className="learning-path-manager">
      <div className="lp-header">
        <h2>📚 Lộ Trình Học Tập</h2>
        <p>Tính năng 9-12: Chuỗi học, đánh dấu hoàn thành, điều kiện mở bài tiếp theo</p>
      </div>

      {path && (
        <div className="lp-sequence">
          <h3>Chuỗi Học: Bài Giảng → Bài Tập → Kiểm Tra</h3>
          <div className="lp-flow">
            <div className="lp-stage">
              <div className="lp-stage-icon">📖</div>
              <div className="lp-stage-name">Bài Giảng</div>
              <p className="lp-stage-desc">Nội dung chính</p>
            </div>
            <div className="lp-arrow">→</div>
            <div className="lp-stage">
              <div className="lp-stage-icon">✍️</div>
              <div className="lp-stage-name">Bài Tập</div>
              <p className="lp-stage-desc">Thực hành</p>
            </div>
            <div className="lp-arrow">→</div>
            <div className="lp-stage">
              <div className="lp-stage-icon">✅</div>
              <div className="lp-stage-name">Kiểm Tra</div>
              <p className="lp-stage-desc">Đánh giá</p>
            </div>
          </div>
        </div>
      )}

      <div className="lp-materials">
        <h3>Tài Liệu Học Tập</h3>
        <div className="lp-materials-list">
          {materials.map((material, index) => (
            <div key={material.id} className="lp-material-card">
              <div className="lp-material-number">{index + 1}</div>
              <div className="lp-material-icon">{getMaterialIcon(material.type)}</div>
              <div className="lp-material-content">
                <h4>{material.title}</h4>
                <p className="lp-material-type">{material.type.toUpperCase()}</p>
                <p className="lp-material-criteria">
                  ✓ Tiêu chí: {material.completionCriteria.type === 'score'
                    ? `Điểm ≥ ${material.completionCriteria.value}%`
                    : material.completionCriteria.type === 'time'
                      ? `Xem ≥ ${material.completionCriteria.value} phút`
                      : 'Xem toàn bộ'}
                </p>
                {material.prerequisites && material.prerequisites.length > 0 && (
                  <p className="lp-material-prereq">
                    🔒 Yêu cầu: Hoàn thành các bài trước
                  </p>
                )}
              </div>
              <button
                onClick={() => handleMaterialComplete(material.id)}
                className="lp-material-btn"
              >
                ▶️ Học
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="lp-features">
        <h3>Tính Năng Điều Kiện</h3>
        <div className="lp-features-grid">
          <div className="lp-feature">
            <div className="lp-feature-icon">🔓</div>
            <h4>Mở Bài Tiếp Theo</h4>
            <p>Tự động mở khóa bài tiếp theo sau khi hoàn thành tiêu chí</p>
          </div>
          <div className="lp-feature">
            <div className="lp-feature-icon">⏰</div>
            <h4>Rule-based & Cron</h4>
            <p>Điều kiện theo quy tắc và lịch định kỳ</p>
          </div>
          <div className="lp-feature">
            <div className="lp-feature-icon">🪝</div>
            <h4>Webhook Event-driven</h4>
            <p>Kích hoạt khi submit/grade tự động cập nhật</p>
          </div>
          <div className="lp-feature">
            <div className="lp-feature-icon">📊</div>
            <h4>xAPI & SCORM API</h4>
            <p>Lưu trạng thái completed/passed/failed với điểm số</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathManager;
