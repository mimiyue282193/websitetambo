import React, { useState, useEffect } from 'react';
import { ChatMessage, DirectMessage } from '@/types';
import { communicationService, conferenceService } from '@/services/api';
import './Communication.css';

const CommunicationHub: React.FC<{ classId: string; userId: string }> = ({ classId, userId }) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'forum' | 'conference'>('chat');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [directMessages, setDirectMessages] = useState<DirectMessage[]>([]);
  const [conferenceUrl, setConferenceUrl] = useState<string>('');

  const handleSendChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      const message = await communicationService.sendChatMessage(classId, {
        classId,
        senderId: userId,
        content: newMessage,
        type: 'text',
      });
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleJoinConference = async (provider: 'zoom' | 'teams' | 'jitsi' | 'google-meet') => {
    try {
      const room = await conferenceService.createConferenceRoom({
        classId,
        provider,
        externalRoomId: `${provider}-${Date.now()}`,
        joinUrl: '',
      });
      const joinUrl = await conferenceService.getConferenceJoinUrl(room.id, userId);
      setConferenceUrl(joinUrl);
      window.open(joinUrl, '_blank');
    } catch (error) {
      console.error('Error joining conference:', error);
    }
  };

  return (
    <div className="communication-hub">
      <div className="comm-header">
        <h2>💬 Giao Tiếp & Họp Trực Tuyến</h2>
        <p>Tính năng 13-15: Diễn đàn, chat thời gian thực, video conference</p>
      </div>

      <div className="comm-tabs">
        <button
          className={`comm-tab ${activeTab === 'chat' ? 'active' : ''}`}
          onClick={() => setActiveTab('chat')}
        >
          💬 Chat Thời Gian Thực
        </button>
        <button
          className={`comm-tab ${activeTab === 'forum' ? 'active' : ''}`}
          onClick={() => setActiveTab('forum')}
        >
          📋 Diễn Đàn
        </button>
        <button
          className={`comm-tab ${activeTab === 'conference' ? 'active' : ''}`}
          onClick={() => setActiveTab('conference')}
        >
          🎥 Họp Trực Tuyến
        </button>
      </div>

      {activeTab === 'chat' && (
        <div className="comm-chat">
          <div className="chat-messages">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.senderId === userId ? 'own' : 'other'}`}>
                <div className="chat-bubble">{msg.content}</div>
                <span className="chat-time">{new Date(msg.timestamp).toLocaleTimeString('vi-VN')}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendChat} className="chat-input-form">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Nhập tin nhắn..."
              className="chat-input"
            />
            <button type="submit" className="chat-send-btn">Gửi</button>
          </form>
        </div>
      )}

      {activeTab === 'forum' && (
        <div className="comm-forum">
          <div className="forum-feature">
            <h3>📋 Diễn Đàn Theo Chủ Đề</h3>
            <p>Thảo luận không đồng bộ theo chủ đề, dễ tìm kiếm lại thông tin</p>
            <div className="forum-topics">
              <div className="forum-topic">
                <span>📌 Câu hỏi về Bài 1</span>
                <span className="topic-count">5 bài viết</span>
              </div>
              <div className="forum-topic">
                <span>📌 Thảo luận Dự Án Nhóm</span>
                <span className="topic-count">12 bài viết</span>
              </div>
              <div className="forum-topic">
                <span>📌 Hỏi Đáp Kỹ Thuật</span>
                <span className="topic-count">8 bài viết</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'conference' && (
        <div className="comm-conference">
          <div className="conference-header">
            <h3>🎥 Họp Trực Tuyến Tích Hợp</h3>
            <p>Hỗ trợ thảo luận nhóm và project-based learning</p>
          </div>
          <div className="conference-providers">
            <button onClick={() => handleJoinConference('zoom')} className="provider-btn zoom">
              <span className="provider-icon">🔘</span>
              <span className="provider-name">Zoom</span>
            </button>
            <button onClick={() => handleJoinConference('teams')} className="provider-btn teams">
              <span className="provider-icon">💼</span>
              <span className="provider-name">Microsoft Teams</span>
            </button>
            <button onClick={() => handleJoinConference('google-meet')} className="provider-btn google">
              <span className="provider-icon">📹</span>
              <span className="provider-name">Google Meet</span>
            </button>
            <button onClick={() => handleJoinConference('jitsi')} className="provider-btn jitsi">
              <span className="provider-icon">🎭</span>
              <span className="provider-name">Jitsi Meet</span>
            </button>
          </div>
          {conferenceUrl && (
            <div className="conference-info">
              <p>✅ Phòng họp đã được tạo. Bạn sẽ được chuyển hướng tới phòng...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommunicationHub;
