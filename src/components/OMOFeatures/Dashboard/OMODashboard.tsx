import React, { useState, useEffect } from 'react';
import { User, AuditLog } from '@/types';
import { authService, auditService, progressService } from '@/services/api';
import './Dashboard.css';

const OMODashboard: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [stats, setStats] = useState({
    totalClasses: 0,
    activeStudents: 0,
    completedMaterials: 0,
    recordingHours: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      // Get current user
      const user = await authService.getCurrentUser();
      setCurrentUser(user);

      // Get audit logs
      const logs = await auditService.getAuditLogs({ limit: 10 });
      setAuditLogs(logs);

      // Mock stats (in real app, fetch from API)
      setStats({
        totalClasses: 8,
        activeStudents: 156,
        completedMaterials: 542,
        recordingHours: 28,
      });
    } catch (error) {
      console.error('Error loading dashboard:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem('token');
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="omo-dashboard">
      <div className="dashboard-header">
        <div className="dashboard-user">
          <div className="user-avatar">
            {currentUser?.fullName.charAt(0) || 'U'}
          </div>
          <div className="user-info">
            <h2>{currentUser?.fullName || 'Người Dùng'}</h2>
            <p>{currentUser?.role === 'instructor' ? '👨‍🏫 Giảng Viên' : '👨‍🎓 Học Viên'}</p>
          </div>
          <button onClick={handleLogout} className="dashboard-logout">Đăng Xuất</button>
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <div className="stat-value">{stats.totalClasses}</div>
            <div className="stat-label">Lớp Học</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <div className="stat-value">{stats.activeStudents}</div>
            <div className="stat-label">Học Viên Hoạt Động</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <div className="stat-value">{stats.completedMaterials}</div>
            <div className="stat-label">Tài Liệu Hoàn Thành</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📹</div>
          <div className="stat-content">
            <div className="stat-value">{stats.recordingHours}h</div>
            <div className="stat-label">Ghi Hình (Giờ)</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-section">
          <h3>🔒 Hệ Thống Xác Thực & Phân Quyền</h3>
          <div className="auth-features">
            <div className="feature-item">
              <span className="feature-icon">🆔</span>
              <div>
                <h4>SSO/LDAP/OAuth</h4>
                <p>OpenID Connect, SAML 2.0, LDAP/AD integration</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">👥</span>
              <div>
                <h4>Vai Trò & Quyền</h4>
                <p>RBAC theo resource-action, policy-as-code (OPA)</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📋</span>
              <div>
                <h4>Audit Log</h4>
                <p>SHA-256 chain bất biến, lưu ≥365 ngày, xuất JSON/CSV</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <div>
                <h4>SCIM 2.0</h4>
                <p>Đồng bộ người dùng, vai trò, nhóm tự động</p>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h3>📊 Lịch Sử Hoạt Động (Audit Log)</h3>
          <div className="audit-logs">
            {auditLogs.slice(0, 5).map((log) => (
              <div key={log.id} className="audit-item">
                <div className="audit-action">{log.action}</div>
                <div className="audit-resource">{log.resource}</div>
                <div className="audit-time">
                  {new Date(log.timestamp).toLocaleString('vi-VN')}
                </div>
              </div>
            ))}
            {auditLogs.length === 0 && (
              <p className="no-logs">Chưa có hoạt động nào</p>
            )}
          </div>
          <button className="view-all-logs">Xem tất cả → </button>
        </div>
      </div>

      <div className="dashboard-features">
        <h3>📋 18 Tính Năng OMO v2</h3>
        <div className="features-overview">
          <div className="feature-group">
            <h4>Tổ Chức & Tham Gia (1-2)</h4>
            <ul>
              <li>✓ Lên lịch buổi học</li>
              <li>✓ Tạo phòng trực tuyến</li>
              <li>✓ Tham gia 1 chạm</li>
            </ul>
          </div>

          <div className="feature-group">
            <h4>Lịch & Nhắc Việc (3)</h4>
            <ul>
              <li>✓ Thời khóa biểu hợp nhất</li>
              <li>✓ Nhắc tự động</li>
              <li>✓ Đồng bộ Calendar/Outlook</li>
            </ul>
          </div>

          <div className="feature-group">
            <h4>Ghi Hình (4-8)</h4>
            <ul>
              <li>✓ Ghi hình tự động SSR</li>
              <li>✓ H.264 + Opus 48kHz</li>
              <li>✓ HLS adaptive streaming</li>
              <li>✓ AES-128 watermark</li>
            </ul>
          </div>

          <div className="feature-group">
            <h4>Nội Dung (9-13)</h4>
            <ul>
              <li>✓ Webhook auto-push</li>
              <li>✓ Lộ trình học kết hợp</li>
              <li>✓ xAPI & SCORM API</li>
              <li>✓ Video, PDF, H5P, SCORM</li>
            </ul>
          </div>

          <div className="feature-group">
            <h4>Giao Tiếp (14-15)</h4>
            <ul>
              <li>✓ Diễn đàn theo chủ đề</li>
              <li>✓ Chat thời gian thực</li>
              <li>✓ Zoom, Teams, Jitsi, Meet</li>
            </ul>
          </div>

          <div className="feature-group">
            <h4>Quản Lý (16-18)</h4>
            <ul>
              <li>✓ Mã lớp Base32</li>
              <li>✓ Theo dõi tiến độ</li>
              <li>✓ SSO/LDAP/SAML</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OMODashboard;
