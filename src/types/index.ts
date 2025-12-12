// Class & Course Types
export interface Class {
  id: string;
  name: string;
  code: string; // 6-10 ký tự Base32
  description: string;
  instructorId: string;
  createdAt: Date;
  semester: string;
  department: string;
}

// Session & Schedule Types
export interface ClassSession {
  id: string;
  classId: string;
  title: string;
  scheduledTime: Date;
  duration: number; // minutes
  roomId: string;
  joinLink: string;
  recordingId?: string;
  status: 'scheduled' | 'live' | 'completed' | 'cancelled';
}

// Recording Types
export interface Recording {
  id: string;
  sessionId: string;
  filename: string;
  duration: number;
  codec: 'H.264'; // High Profile, Level 4.1
  audioCodec: 'Opus'; // 48 kHz
  bitrate: number; // 1.5-4.5 Mbps
  resolution: '1080p' | '720p' | '480p';
  createdAt: Date;
  s3Path: string;
  hlsPlaylistUrl: string;
  metadata: {
    classId: string;
    instructorId: string;
    sessionDate: Date;
    duration: number;
  };
  watermarkConfig: {
    userId: string;
    timestamp: string;
  };
  accessLevel: 'private' | 'class' | 'public';
}

// Learning Material Types
export interface LearningMaterial {
  id: string;
  classId: string;
  title: string;
  type: 'video' | 'pdf' | 'link' | 'h5p' | 'scorm' | 'xapi';
  content: string; // URL or embedded content
  sequenceOrder: number;
  duration?: number;
  prerequisites?: string[]; // Material IDs
  completionCriteria: {
    type: 'view' | 'score' | 'time';
    value: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Learning Path Types
export interface LearningPath {
  id: string;
  classId: string;
  name: string;
  sequence: LearningSequence[];
  createdAt: Date;
}

export interface LearningSequence {
  order: number;
  materialId: string;
  type: 'lesson' | 'assignment' | 'quiz';
  unlockCondition?: {
    type: 'previous_completed' | 'date' | 'score';
    value?: string | number;
  };
}

// Progress & Completion Types
export interface StudentProgress {
  id: string;
  studentId: string;
  classId: string;
  materialId: string;
  status: 'not_started' | 'in_progress' | 'completed' | 'passed' | 'failed';
  startedAt?: Date;
  completedAt?: Date;
  score?: number;
  attempts: number;
  xapiStatement?: string; // xAPI format
}

// Communication Types
export interface Forum {
  id: string;
  classId: string;
  topic: string;
  description: string;
  createdBy: string;
  createdAt: Date;
  threads: ForumThread[];
}

export interface ForumThread {
  id: string;
  forumId: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  replies: ForumReply[];
}

export interface ForumReply {
  id: string;
  threadId: string;
  content: string;
  author: string;
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  classId: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'file';
}

export interface DirectMessage {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

// User & Authentication Types
export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  avatar?: string;
  role: 'student' | 'instructor' | 'admin' | 'parent';
  department?: string;
  createdAt: Date;
  lastLogin?: Date;
}

export interface AuthConfig {
  type: 'sso' | 'oauth' | 'ldap' | 'saml';
  provider: 'openid' | 'oauth2' | 'ldap' | 'saml2.0';
  config: Record<string, unknown>;
}

export interface RolePermission {
  role: string;
  resource: string;
  action: string[]; // 'create', 'read', 'update', 'delete'
  conditions?: Record<string, unknown>;
}

// Audit Log Types
export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resource: string;
  resourceId: string;
  timestamp: Date;
  changes: {
    field: string;
    oldValue: unknown;
    newValue: unknown;
  }[];
  ipAddress?: string;
  userAgent?: string;
}

// Rule & Condition Types
export interface Rule {
  id: string;
  classId: string;
  name: string;
  trigger: 'event' | 'cron' | 'webhook';
  condition: RuleCondition;
  action: RuleAction;
  enabled: boolean;
  createdAt: Date;
}

export interface RuleCondition {
  type: string;
  field: string;
  operator: 'equals' | 'greater' | 'less' | 'contains';
  value: unknown;
}

export interface RuleAction {
  type: string;
  target: string;
  payload: Record<string, unknown>;
}

// Calendar Event Types
export interface CalendarEvent {
  id: string;
  classId: string;
  title: string;
  startTime: Date;
  endTime: Date;
  description: string;
  type: 'session' | 'deadline' | 'exam';
  syncCalendars: ('google' | 'outlook')[];
}

// Video Conference Types
export interface ConferenceRoom {
  id: string;
  classId: string;
  provider: 'zoom' | 'teams' | 'jitsi' | 'google-meet';
  externalRoomId: string;
  joinUrl: string;
  createdAt: Date;
}

// Enrollment & Access Types
export interface ClassEnrollment {
  id: string;
  classId: string;
  studentId: string;
  status: 'pending' | 'approved' | 'rejected' | 'active' | 'dropped';
  enrolledAt: Date;
  approvedAt?: Date;
  approvedBy?: string;
}
