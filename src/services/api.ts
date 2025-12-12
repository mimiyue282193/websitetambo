import * as types from '@/types';

const API_BASE = 'http://192.168.1.135:5000/api';

// ============ Class Management ============
export const classService = {
  // Get all classes for instructor
  getInstructorClasses: async (instructorId: string): Promise<types.Class[]> => {
    const response = await fetch(`${API_BASE}/classes?instructorId=${instructorId}`);
    return response.json();
  },

  // Create new class
  createClass: async (classData: Omit<types.Class, 'id' | 'createdAt'>): Promise<types.Class> => {
    const response = await fetch(`${API_BASE}/classes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(classData),
    });
    return response.json();
  },

  // Get class by code
  getClassByCode: async (code: string): Promise<types.Class> => {
    const response = await fetch(`${API_BASE}/classes/code/${code}`);
    return response.json();
  },

  // Update class
  updateClass: async (classId: string, updates: Partial<types.Class>): Promise<types.Class> => {
    const response = await fetch(`${API_BASE}/classes/${classId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    return response.json();
  },

  // Delete class
  deleteClass: async (classId: string): Promise<void> => {
    await fetch(`${API_BASE}/classes/${classId}`, { method: 'DELETE' });
  },

  // Import classes from CSV/XLSX
  importClasses: async (file: File): Promise<types.Class[]> => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`${API_BASE}/classes/import`, {
      method: 'POST',
      body: formData,
    });
    return response.json();
  },
};

// ============ Session & Schedule ============
export const sessionService = {
  // Create class session
  createSession: async (sessionData: Omit<types.ClassSession, 'id' | 'joinLink' | 'status'>): Promise<types.ClassSession> => {
    const response = await fetch(`${API_BASE}/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sessionData),
    });
    return response.json();
  },

  // Get class schedule
  getClassSchedule: async (classId: string): Promise<types.ClassSession[]> => {
    const response = await fetch(`${API_BASE}/classes/${classId}/schedule`);
    return response.json();
  },

  // Get session details
  getSession: async (sessionId: string): Promise<types.ClassSession> => {
    const response = await fetch(`${API_BASE}/sessions/${sessionId}`);
    return response.json();
  },

  // Update session
  updateSession: async (sessionId: string, updates: Partial<types.ClassSession>): Promise<types.ClassSession> => {
    const response = await fetch(`${API_BASE}/sessions/${sessionId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    return response.json();
  },

  // Generate join link
  generateJoinLink: async (sessionId: string): Promise<string> => {
    const response = await fetch(`${API_BASE}/sessions/${sessionId}/join-link`, {
      method: 'POST',
    });
    const data = await response.json();
    return data.joinLink;
  },
};

// ============ Recording ============
export const recordingService = {
  // Get recordings for session
  getSessionRecordings: async (sessionId: string): Promise<types.Recording[]> => {
    const response = await fetch(`${API_BASE}/sessions/${sessionId}/recordings`);
    return response.json();
  },

  // Get recording details
  getRecording: async (recordingId: string): Promise<types.Recording> => {
    const response = await fetch(`${API_BASE}/recordings/${recordingId}`);
    return response.json();
  },

  // Get recording stream URL with pre-signed access
  getRecordingUrl: async (recordingId: string, userId: string): Promise<string> => {
    const response = await fetch(`${API_BASE}/recordings/${recordingId}/stream?userId=${userId}`);
    const data = await response.json();
    return data.streamUrl;
  },

  // Get HLS playlist for adaptive streaming
  getHLSPlaylist: async (recordingId: string, userId: string): Promise<string> => {
    const response = await fetch(`${API_BASE}/recordings/${recordingId}/hls?userId=${userId}`);
    const data = await response.json();
    return data.hlsUrl;
  },

  // Update recording metadata
  updateRecordingMetadata: async (recordingId: string, metadata: Partial<types.Recording['metadata']>): Promise<types.Recording> => {
    const response = await fetch(`${API_BASE}/recordings/${recordingId}/metadata`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metadata),
    });
    return response.json();
  },

  // Delete recording
  deleteRecording: async (recordingId: string): Promise<void> => {
    await fetch(`${API_BASE}/recordings/${recordingId}`, { method: 'DELETE' });
  },
};

// ============ Learning Materials ============
export const materialService = {
  // Get class materials
  getClassMaterials: async (classId: string): Promise<types.LearningMaterial[]> => {
    const response = await fetch(`${API_BASE}/classes/${classId}/materials`);
    return response.json();
  },

  // Create material
  createMaterial: async (materialData: Omit<types.LearningMaterial, 'id' | 'createdAt' | 'updatedAt'>): Promise<types.LearningMaterial> => {
    const response = await fetch(`${API_BASE}/materials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(materialData),
    });
    return response.json();
  },

  // Update material
  updateMaterial: async (materialId: string, updates: Partial<types.LearningMaterial>): Promise<types.LearningMaterial> => {
    const response = await fetch(`${API_BASE}/materials/${materialId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    return response.json();
  },

  // Delete material
  deleteMaterial: async (materialId: string): Promise<void> => {
    await fetch(`${API_BASE}/materials/${materialId}`, { method: 'DELETE' });
  },

  // Reorder materials
  reorderMaterials: async (classId: string, materialIds: string[]): Promise<void> => {
    await fetch(`${API_BASE}/classes/${classId}/materials/reorder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ materialIds }),
    });
  },
};

// ============ Learning Path ============
export const learningPathService = {
  // Get learning path for class
  getClassPath: async (classId: string): Promise<types.LearningPath> => {
    const response = await fetch(`${API_BASE}/classes/${classId}/learning-path`);
    return response.json();
  },

  // Create learning path
  createPath: async (pathData: Omit<types.LearningPath, 'id' | 'createdAt'>): Promise<types.LearningPath> => {
    const response = await fetch(`${API_BASE}/learning-paths`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pathData),
    });
    return response.json();
  },

  // Update path
  updatePath: async (pathId: string, updates: Partial<types.LearningPath>): Promise<types.LearningPath> => {
    const response = await fetch(`${API_BASE}/learning-paths/${pathId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    return response.json();
  },
};

// ============ Progress Tracking ============
export const progressService = {
  // Get student progress
  getStudentProgress: async (studentId: string, classId: string): Promise<types.StudentProgress[]> => {
    const response = await fetch(`${API_BASE}/progress?studentId=${studentId}&classId=${classId}`);
    return response.json();
  },

  // Mark material as complete
  markMaterialComplete: async (studentId: string, materialId: string, score?: number): Promise<types.StudentProgress> => {
    const response = await fetch(`${API_BASE}/progress/complete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentId, materialId, score }),
    });
    return response.json();
  },

  // Submit xAPI statement
  submitXAPIStatement: async (statement: Record<string, unknown>): Promise<void> => {
    await fetch(`${API_BASE}/xapi/statements`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(statement),
    });
  },

  // Get progress report
  getProgressReport: async (classId: string): Promise<Record<string, unknown>> => {
    const response = await fetch(`${API_BASE}/classes/${classId}/progress-report`);
    return response.json();
  },
};

// ============ Communication ============
export const communicationService = {
  // Get forum threads
  getForumThreads: async (forumId: string): Promise<types.ForumThread[]> => {
    const response = await fetch(`${API_BASE}/forums/${forumId}/threads`);
    return response.json();
  },

  // Create forum thread
  createThread: async (forumId: string, threadData: Omit<types.ForumThread, 'id' | 'createdAt' | 'replies'>): Promise<types.ForumThread> => {
    const response = await fetch(`${API_BASE}/forums/${forumId}/threads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(threadData),
    });
    return response.json();
  },

  // Post reply
  postReply: async (threadId: string, replyData: Omit<types.ForumReply, 'id' | 'createdAt'>): Promise<types.ForumReply> => {
    const response = await fetch(`${API_BASE}/forum-threads/${threadId}/replies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(replyData),
    });
    return response.json();
  },

  // Send chat message
  sendChatMessage: async (classId: string, message: Omit<types.ChatMessage, 'id' | 'timestamp'>): Promise<types.ChatMessage> => {
    const response = await fetch(`${API_BASE}/classes/${classId}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
    return response.json();
  },

  // Send direct message
  sendDirectMessage: async (messageData: Omit<types.DirectMessage, 'id' | 'timestamp' | 'read'>): Promise<types.DirectMessage> => {
    const response = await fetch(`${API_BASE}/messages/direct`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageData),
    });
    return response.json();
  },

  // Get direct messages
  getDirectMessages: async (userId: string, otherUserId: string): Promise<types.DirectMessage[]> => {
    const response = await fetch(`${API_BASE}/messages/direct?userId=${userId}&otherUserId=${otherUserId}`);
    return response.json();
  },
};

// ============ Authentication & Authorization ============
export const authService = {
  // SSO/LDAP login
  login: async (credentials: { username: string; password: string }): Promise<{ token: string; user: types.User }> => {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  // OAuth callback handler
  handleOAuthCallback: async (code: string, provider: string): Promise<{ token: string; user: types.User }> => {
    const response = await fetch(`${API_BASE}/auth/oauth/callback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, provider }),
    });
    return response.json();
  },

  // Get current user
  getCurrentUser: async (): Promise<types.User> => {
    const response = await fetch(`${API_BASE}/auth/me`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.json();
  },

  // Logout
  logout: async (): Promise<void> => {
    await fetch(`${API_BASE}/auth/logout`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  },

  // Check permission
  checkPermission: async (resource: string, action: string): Promise<boolean> => {
    const response = await fetch(`${API_BASE}/auth/permission?resource=${resource}&action=${action}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    const data = await response.json();
    return data.allowed;
  },
};

// ============ Calendar Integration ============
export const calendarService = {
  // Create calendar event
  createEvent: async (eventData: Omit<types.CalendarEvent, 'id'>): Promise<types.CalendarEvent> => {
    const response = await fetch(`${API_BASE}/calendar/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
    });
    return response.json();
  },

  // Sync to Google Calendar
  syncToGoogleCalendar: async (eventId: string): Promise<void> => {
    await fetch(`${API_BASE}/calendar/events/${eventId}/sync-google`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  },

  // Sync to Outlook
  syncToOutlook: async (eventId: string): Promise<void> => {
    await fetch(`${API_BASE}/calendar/events/${eventId}/sync-outlook`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  },
};

// ============ Video Conferencing ============
export const conferenceService = {
  // Create conference room
  createConferenceRoom: async (roomData: Omit<types.ConferenceRoom, 'id' | 'createdAt'>): Promise<types.ConferenceRoom> => {
    const response = await fetch(`${API_BASE}/conference/rooms`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(roomData),
    });
    return response.json();
  },

  // Get conference room
  getConferenceRoom: async (roomId: string): Promise<types.ConferenceRoom> => {
    const response = await fetch(`${API_BASE}/conference/rooms/${roomId}`);
    return response.json();
  },

  // Get join URL
  getConferenceJoinUrl: async (roomId: string, userId: string): Promise<string> => {
    const response = await fetch(`${API_BASE}/conference/rooms/${roomId}/join?userId=${userId}`);
    const data = await response.json();
    return data.joinUrl;
  },
};

// ============ Enrollment ============
export const enrollmentService = {
  // Enroll student in class
  enrollStudent: async (classId: string, studentId: string): Promise<types.ClassEnrollment> => {
    const response = await fetch(`${API_BASE}/classes/${classId}/enroll`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentId }),
    });
    return response.json();
  },

  // Enroll via class code
  enrollViaCode: async (classCode: string, studentId: string): Promise<types.ClassEnrollment> => {
    const response = await fetch(`${API_BASE}/enroll/code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ classCode, studentId }),
    });
    return response.json();
  },

  // Get enrollment requests
  getEnrollmentRequests: async (classId: string): Promise<types.ClassEnrollment[]> => {
    const response = await fetch(`${API_BASE}/classes/${classId}/enrollment-requests`);
    return response.json();
  },

  // Approve enrollment
  approveEnrollment: async (enrollmentId: string, instructorId: string): Promise<types.ClassEnrollment> => {
    const response = await fetch(`${API_BASE}/enrollments/${enrollmentId}/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ instructorId }),
    });
    return response.json();
  },

  // Reject enrollment
  rejectEnrollment: async (enrollmentId: string): Promise<void> => {
    await fetch(`${API_BASE}/enrollments/${enrollmentId}/reject`, { method: 'POST' });
  },
};

// ============ Rules & Conditions ============
export const ruleService = {
  // Create rule
  createRule: async (ruleData: Omit<types.Rule, 'id' | 'createdAt'>): Promise<types.Rule> => {
    const response = await fetch(`${API_BASE}/rules`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ruleData),
    });
    return response.json();
  },

  // Get class rules
  getClassRules: async (classId: string): Promise<types.Rule[]> => {
    const response = await fetch(`${API_BASE}/classes/${classId}/rules`);
    return response.json();
  },

  // Update rule
  updateRule: async (ruleId: string, updates: Partial<types.Rule>): Promise<types.Rule> => {
    const response = await fetch(`${API_BASE}/rules/${ruleId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    return response.json();
  },
};

// ============ Audit Logs ============
export const auditService = {
  // Get audit logs
  getAuditLogs: async (filters?: Record<string, unknown>): Promise<types.AuditLog[]> => {
    const query = new URLSearchParams(filters as Record<string, string>);
    const response = await fetch(`${API_BASE}/audit-logs?${query}`);
    return response.json();
  },

  // Export audit logs
  exportAuditLogs: async (format: 'json' | 'csv'): Promise<Blob> => {
    const response = await fetch(`${API_BASE}/audit-logs/export?format=${format}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.blob();
  },
};
