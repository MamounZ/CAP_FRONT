// Mock Data for Team Hub Application
// This file contains all mock data used across the application

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'Owner' | 'Admin' | 'Developer' | 'Viewer';
  reviews: number;
  projects: number;
  status: 'Active' | 'Pending' | 'Inactive';
  avatar?: string;
  joinedDate?: string;
  lastActive?: string;
}

export interface Project {
  id: string;
  name: string;
  language: string;
  githubStatus: 'Connected' | 'Disconnected';
  score: number;
  issues: number;
  lastScan: string;
  description?: string;
  repository?: string;
  createdDate?: string;
  contributors?: string[];
}

export interface CodeReview {
  id: string;
  project: string;
  projectId: string;
  reviewer: string;
  reviewerId: string;
  score: number;
  issues: number;
  status: 'Completed' | 'Failed' | 'In Progress' | 'Pending';
  date: string;
  timestamp?: string;
  duration?: string;
  fixedIssues?: number;
}

export interface Activity {
  id: string;
  text: string;
  time: string;
  type: 'review' | 'commit' | 'fix' | 'member' | 'quality' | 'chat' | 'project';
  userId?: string;
  projectId?: string;
}

export interface GitHubRepository {
  id: string;
  name: string;
  fullName: string;
  language: string;
  lastScan: string;
  issues: number;
  automated: boolean;
  stars?: number;
  forks?: number;
  openPRs?: number;
  branches?: number;
}

export interface ChatMessage {
  id: string;
  sender: string;
  avatar: string;
  content: string;
  timestamp: string;
  isCurrentUser?: boolean;
  attachments?: string[];
  reactions?: { emoji: string; count: number }[];
}

export interface ProjectChat {
  id: string;
  projectId: string;
  projectName: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  participants: number;
  messages: ChatMessage[];
  isPinned?: boolean;
}

export interface TeamAnalytics {
  teamScore: number;
  teamScoreTrend: string;
  reviewsThisWeek: number;
  reviewsTrend: string;
  issuesFixed: number;
  issuesTrend: string;
  activeMembers: number;
  onlineMembers: number;
  totalProjects: number;
  connectedRepos: number;
  automatedReviews: number;
}

export interface TeamSettings {
  teamName: string;
  description: string;
  logo: string;
  permissions: {
    whoCanRunReviews: 'All Members' | 'Admins Only' | 'Developers & Admins';
    whoCanAddProjects: 'All Members' | 'Admins Only' | 'Developers & Admins';
    whoCanInviteMembers: 'All Members' | 'Admins Only' | 'Owner Only';
  };
  automation: {
    autoReviewOnPush: boolean;
    autoFixIssues: boolean;
    prComments: boolean;
  };
}

// ============================================================================
// MOCK DATA
// ============================================================================

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Ahmed Hassan',
    email: 'ahmed@team.com',
    role: 'Owner',
    reviews: 45,
    projects: 8,
    status: 'Active',
    avatar: 'AH',
    joinedDate: 'Jan 15, 2024',
    lastActive: 'Just now',
  },
  {
    id: '2',
    name: 'Rama Singh',
    email: 'rama@team.com',
    role: 'Admin',
    reviews: 38,
    projects: 6,
    status: 'Active',
    avatar: 'RS',
    joinedDate: 'Jan 20, 2024',
    lastActive: '5 min ago',
  },
  {
    id: '3',
    name: 'Sarah Chen',
    email: 'sarah@team.com',
    role: 'Developer',
    reviews: 32,
    projects: 5,
    status: 'Active',
    avatar: 'SC',
    joinedDate: 'Feb 1, 2024',
    lastActive: '1 hour ago',
  },
  {
    id: '4',
    name: 'Mike Johnson',
    email: 'mike@team.com',
    role: 'Developer',
    reviews: 28,
    projects: 4,
    status: 'Active',
    avatar: 'MJ',
    joinedDate: 'Feb 5, 2024',
    lastActive: '2 hours ago',
  },
  {
    id: '5',
    name: 'Lisa Park',
    email: 'lisa@team.com',
    role: 'Viewer',
    reviews: 12,
    projects: 2,
    status: 'Pending',
    avatar: 'LP',
    joinedDate: 'Mar 1, 2024',
    lastActive: '1 day ago',
  },
  {
    id: '6',
    name: 'Emma Wilson',
    email: 'emma@team.com',
    role: 'Developer',
    reviews: 35,
    projects: 5,
    status: 'Active',
    avatar: 'EW',
    joinedDate: 'Feb 10, 2024',
    lastActive: '30 min ago',
  },
  {
    id: '7',
    name: 'John Doe',
    email: 'john@team.com',
    role: 'Developer',
    reviews: 29,
    projects: 4,
    status: 'Active',
    avatar: 'JD',
    joinedDate: 'Feb 15, 2024',
    lastActive: '3 hours ago',
  },
  {
    id: '8',
    name: 'David Kim',
    email: 'david@team.com',
    role: 'Developer',
    reviews: 31,
    projects: 6,
    status: 'Active',
    avatar: 'DK',
    joinedDate: 'Jan 25, 2024',
    lastActive: '1 hour ago',
  },
  {
    id: '9',
    name: 'Rachel Green',
    email: 'rachel@team.com',
    role: 'Admin',
    reviews: 40,
    projects: 7,
    status: 'Active',
    avatar: 'RG',
    joinedDate: 'Jan 18, 2024',
    lastActive: '15 min ago',
  },
  {
    id: '10',
    name: 'Tom Brown',
    email: 'tom@team.com',
    role: 'Developer',
    reviews: 26,
    projects: 3,
    status: 'Active',
    avatar: 'TB',
    joinedDate: 'Feb 20, 2024',
    lastActive: '4 hours ago',
  },
  {
    id: '11',
    name: 'Chris Evans',
    email: 'chris@team.com',
    role: 'Developer',
    reviews: 33,
    projects: 5,
    status: 'Active',
    avatar: 'CE',
    joinedDate: 'Feb 8, 2024',
    lastActive: '2 hours ago',
  },
  {
    id: '12',
    name: 'Anna White',
    email: 'anna@team.com',
    role: 'Developer',
    reviews: 27,
    projects: 4,
    status: 'Active',
    avatar: 'AW',
    joinedDate: 'Feb 25, 2024',
    lastActive: '5 hours ago',
  },
];

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Frontend App',
    language: 'TypeScript',
    githubStatus: 'Connected',
    score: 92,
    issues: 3,
    lastScan: '2 hours ago',
    description: 'Main customer-facing web application built with React and TypeScript',
    repository: 'team-hub/frontend-app',
    createdDate: 'Jan 10, 2024',
    contributors: ['1', '3', '6', '8', '9'],
  },
  {
    id: '2',
    name: 'API Service',
    language: 'Python',
    githubStatus: 'Connected',
    score: 88,
    issues: 5,
    lastScan: '4 hours ago',
    description: 'RESTful API service handling all backend logic and data processing',
    repository: 'team-hub/api-service',
    createdDate: 'Jan 12, 2024',
    contributors: ['2', '4', '7', '10'],
  },
  {
    id: '3',
    name: 'Mobile App',
    language: 'React Native',
    githubStatus: 'Connected',
    score: 95,
    issues: 2,
    lastScan: '6 hours ago',
    description: 'Cross-platform mobile application for iOS and Android',
    repository: 'team-hub/mobile-app',
    createdDate: 'Jan 15, 2024',
    contributors: ['3', '6', '8', '9', '11', '12'],
  },
  {
    id: '4',
    name: 'Dashboard',
    language: 'JavaScript',
    githubStatus: 'Disconnected',
    score: 78,
    issues: 8,
    lastScan: '1 day ago',
    description: 'Analytics and monitoring dashboard for internal team use',
    repository: 'team-hub/dashboard',
    createdDate: 'Jan 20, 2024',
    contributors: ['1', '10', '12'],
  },
  {
    id: '5',
    name: 'Auth Service',
    language: 'Go',
    githubStatus: 'Connected',
    score: 90,
    issues: 4,
    lastScan: '3 hours ago',
    description: 'Authentication and authorization microservice',
    repository: 'team-hub/auth-service',
    createdDate: 'Jan 18, 2024',
    contributors: ['2', '4', '11'],
  },
  {
    id: '6',
    name: 'Database Layer',
    language: 'PostgreSQL',
    githubStatus: 'Connected',
    score: 85,
    issues: 6,
    lastScan: '5 hours ago',
    description: 'Database schemas, migrations, and stored procedures',
    repository: 'team-hub/database-layer',
    createdDate: 'Jan 8, 2024',
    contributors: ['1', '2', '7', '12'],
  },
];

export const mockCodeReviews: CodeReview[] = [
  {
    id: '1',
    project: 'Frontend App',
    projectId: '1',
    reviewer: 'Ahmed',
    reviewerId: '1',
    score: 92,
    issues: 3,
    status: 'Completed',
    date: '2 hours ago',
    timestamp: '2024-04-03T10:30:00Z',
    duration: '12 min',
    fixedIssues: 1,
  },
  {
    id: '2',
    project: 'API Service',
    projectId: '2',
    reviewer: 'Rama',
    reviewerId: '2',
    score: 88,
    issues: 5,
    status: 'Completed',
    date: '4 hours ago',
    timestamp: '2024-04-03T08:30:00Z',
    duration: '18 min',
    fixedIssues: 3,
  },
  {
    id: '3',
    project: 'Mobile App',
    projectId: '3',
    reviewer: 'AI Bot',
    reviewerId: 'ai-1',
    score: 95,
    issues: 2,
    status: 'Completed',
    date: '6 hours ago',
    timestamp: '2024-04-03T06:30:00Z',
    duration: '8 min',
    fixedIssues: 2,
  },
  {
    id: '4',
    project: 'Dashboard',
    projectId: '4',
    reviewer: 'Sarah',
    reviewerId: '3',
    score: 78,
    issues: 8,
    status: 'Failed',
    date: '1 day ago',
    timestamp: '2024-04-02T12:30:00Z',
    duration: '25 min',
    fixedIssues: 0,
  },
  {
    id: '5',
    project: 'Auth Service',
    projectId: '5',
    reviewer: 'Mike',
    reviewerId: '4',
    score: 90,
    issues: 4,
    status: 'Completed',
    date: '8 hours ago',
    timestamp: '2024-04-03T04:30:00Z',
    duration: '15 min',
    fixedIssues: 2,
  },
  {
    id: '6',
    project: 'Database Layer',
    projectId: '6',
    reviewer: 'AI Bot',
    reviewerId: 'ai-1',
    score: 85,
    issues: 6,
    status: 'Completed',
    date: '10 hours ago',
    timestamp: '2024-04-03T02:30:00Z',
    duration: '20 min',
    fixedIssues: 4,
  },
  {
    id: '7',
    project: 'Frontend App',
    projectId: '1',
    reviewer: 'Emma',
    reviewerId: '6',
    score: 94,
    issues: 2,
    status: 'Completed',
    date: '12 hours ago',
    timestamp: '2024-04-03T00:30:00Z',
    duration: '10 min',
    fixedIssues: 1,
  },
  {
    id: '8',
    project: 'Mobile App',
    projectId: '3',
    reviewer: 'David',
    reviewerId: '8',
    score: 96,
    issues: 1,
    status: 'Completed',
    date: '14 hours ago',
    timestamp: '2024-04-02T22:30:00Z',
    duration: '6 min',
    fixedIssues: 1,
  },
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    text: 'Ahmed ran a security review on Frontend App',
    time: '2 hours ago',
    type: 'review',
    userId: '1',
    projectId: '1',
  },
  {
    id: '2',
    text: 'Rama pushed a new commit to API Service',
    time: '3 hours ago',
    type: 'commit',
    userId: '2',
    projectId: '2',
  },
  {
    id: '3',
    text: 'AI auto-fixed 3 performance issues in API Service',
    time: '5 hours ago',
    type: 'fix',
    projectId: '2',
  },
  {
    id: '4',
    text: 'New member Lisa Park joined the team',
    time: '1 day ago',
    type: 'member',
    userId: '5',
  },
  {
    id: '5',
    text: 'Code quality improved by 12% across all projects',
    time: '2 days ago',
    type: 'quality',
  },
  {
    id: '6',
    text: 'Sarah started a chat in Mobile App project',
    time: '6 hours ago',
    type: 'chat',
    userId: '3',
    projectId: '3',
  },
  {
    id: '7',
    text: 'Mike completed code review for Auth Service',
    time: '8 hours ago',
    type: 'review',
    userId: '4',
    projectId: '5',
  },
  {
    id: '8',
    text: 'Database Layer project was created',
    time: '3 days ago',
    type: 'project',
    projectId: '6',
  },
  {
    id: '9',
    text: 'Emma fixed 2 critical bugs in Frontend App',
    time: '12 hours ago',
    type: 'fix',
    userId: '6',
    projectId: '1',
  },
  {
    id: '10',
    text: 'David pushed updates to Mobile App navigation',
    time: '14 hours ago',
    type: 'commit',
    userId: '8',
    projectId: '3',
  },
];

export const mockGitHubRepositories: GitHubRepository[] = [
  {
    id: '1',
    name: 'frontend-app',
    fullName: 'team-hub/frontend-app',
    language: 'TypeScript',
    lastScan: '2 hours ago',
    issues: 3,
    automated: true,
    stars: 127,
    forks: 34,
    openPRs: 5,
    branches: 8,
  },
  {
    id: '2',
    name: 'api-service',
    fullName: 'team-hub/api-service',
    language: 'Python',
    lastScan: '4 hours ago',
    issues: 5,
    automated: true,
    stars: 89,
    forks: 21,
    openPRs: 3,
    branches: 6,
  },
  {
    id: '3',
    name: 'mobile-app',
    fullName: 'team-hub/mobile-app',
    language: 'React Native',
    lastScan: '6 hours ago',
    issues: 2,
    automated: false,
    stars: 203,
    forks: 56,
    openPRs: 8,
    branches: 12,
  },
  {
    id: '4',
    name: 'dashboard',
    fullName: 'team-hub/dashboard',
    language: 'JavaScript',
    lastScan: '1 day ago',
    issues: 8,
    automated: true,
    stars: 45,
    forks: 12,
    openPRs: 2,
    branches: 4,
  },
  {
    id: '5',
    name: 'auth-service',
    fullName: 'team-hub/auth-service',
    language: 'Go',
    lastScan: '3 hours ago',
    issues: 4,
    automated: true,
    stars: 76,
    forks: 18,
    openPRs: 4,
    branches: 5,
  },
  {
    id: '6',
    name: 'database-layer',
    fullName: 'team-hub/database-layer',
    language: 'PostgreSQL',
    lastScan: '5 hours ago',
    issues: 6,
    automated: true,
    stars: 34,
    forks: 9,
    openPRs: 1,
    branches: 3,
  },
];

export const mockProjectChats: ProjectChat[] = [
  {
    id: '1',
    projectId: '1',
    projectName: 'Frontend App',
    lastMessage: 'Updated the login component',
    lastMessageTime: '5 min ago',
    unreadCount: 3,
    participants: 5,
    isPinned: true,
    messages: [
      {
        id: '1',
        sender: 'Sarah Chen',
        avatar: 'SC',
        content: 'Hey team, I just pushed the new authentication flow. Can someone review it?',
        timestamp: '10:30 AM',
      },
      {
        id: '2',
        sender: 'Mike Johnson',
        avatar: 'MJ',
        content: 'Looking at it now. The implementation looks good!',
        timestamp: '10:35 AM',
      },
      {
        id: '3',
        sender: 'Emma Wilson',
        avatar: 'EW',
        content: 'Updated the login component with better error handling.',
        timestamp: '5 min ago',
      },
      {
        id: '4',
        sender: 'Ahmed Hassan',
        avatar: 'AH',
        content: 'Great work everyone! Let\'s merge this today.',
        timestamp: '2 min ago',
      },
    ],
  },
  {
    id: '2',
    projectId: '2',
    projectName: 'API Service',
    lastMessage: 'Fixed the rate limiting issue',
    lastMessageTime: '1 hour ago',
    unreadCount: 0,
    participants: 4,
    isPinned: false,
    messages: [
      {
        id: '1',
        sender: 'John Doe',
        avatar: 'JD',
        content: 'The API is responding slower than expected. Any ideas?',
        timestamp: '9:00 AM',
      },
      {
        id: '2',
        sender: 'Rama Singh',
        avatar: 'RS',
        content: 'I think we need to implement rate limiting on the endpoints.',
        timestamp: '9:15 AM',
      },
      {
        id: '3',
        sender: 'Tom Brown',
        avatar: 'TB',
        content: 'Also noticed some N+1 queries in the user endpoint.',
        timestamp: '9:30 AM',
      },
      {
        id: '4',
        sender: 'John Doe',
        avatar: 'JD',
        content: 'Fixed the rate limiting issue and optimized the queries.',
        timestamp: '1 hour ago',
      },
    ],
  },
  {
    id: '3',
    projectId: '3',
    projectName: 'Mobile App',
    lastMessage: 'Great work on the UI updates!',
    lastMessageTime: '2 hours ago',
    unreadCount: 1,
    participants: 6,
    isPinned: true,
    messages: [
      {
        id: '1',
        sender: 'David Kim',
        avatar: 'DK',
        content: 'Working on the new navigation system for iOS',
        timestamp: '8:00 AM',
      },
      {
        id: '2',
        sender: 'Rachel Green',
        avatar: 'RG',
        content: 'Great work on the UI updates!',
        timestamp: '2 hours ago',
      },
      {
        id: '3',
        sender: 'Emma Wilson',
        avatar: 'EW',
        content: 'Should we add dark mode support in this sprint?',
        timestamp: '1 hour ago',
      },
    ],
  },
  {
    id: '4',
    projectId: '4',
    projectName: 'Dashboard',
    lastMessage: 'Chart rendering is now much faster',
    lastMessageTime: '3 hours ago',
    unreadCount: 0,
    participants: 3,
    isPinned: false,
    messages: [
      {
        id: '1',
        sender: 'Tom Brown',
        avatar: 'TB',
        content: 'The dashboard charts are loading slowly. We need to optimize.',
        timestamp: '7:00 AM',
      },
      {
        id: '2',
        sender: 'Anna White',
        avatar: 'AW',
        content: 'I\'ll look into implementing lazy loading for the data visualizations.',
        timestamp: '7:30 AM',
      },
      {
        id: '3',
        sender: 'Anna White',
        avatar: 'AW',
        content: 'Chart rendering is now much faster with the new implementation!',
        timestamp: '3 hours ago',
      },
    ],
  },
  {
    id: '5',
    projectId: '5',
    projectName: 'Auth Service',
    lastMessage: 'OAuth integration complete',
    lastMessageTime: '5 hours ago',
    unreadCount: 0,
    participants: 4,
    isPinned: false,
    messages: [
      {
        id: '1',
        sender: 'Chris Evans',
        avatar: 'CE',
        content: 'Starting work on the OAuth integration with Google and GitHub',
        timestamp: 'Yesterday',
      },
      {
        id: '2',
        sender: 'Mike Johnson',
        avatar: 'MJ',
        content: 'Make sure to handle token refresh properly!',
        timestamp: 'Yesterday',
      },
      {
        id: '3',
        sender: 'Chris Evans',
        avatar: 'CE',
        content: 'OAuth integration complete. Both providers are working.',
        timestamp: '5 hours ago',
      },
    ],
  },
  {
    id: '6',
    projectId: '6',
    projectName: 'Database Layer',
    lastMessage: 'Migration scripts are ready for review',
    lastMessageTime: '1 day ago',
    unreadCount: 2,
    participants: 3,
    isPinned: false,
    messages: [
      {
        id: '1',
        sender: 'Ahmed Hassan',
        avatar: 'AH',
        content: 'We need to update the database schema for the new features',
        timestamp: '2 days ago',
      },
      {
        id: '2',
        sender: 'Anna White',
        avatar: 'AW',
        content: 'I\'ve created the migration scripts. Adding indexes for better performance.',
        timestamp: '1 day ago',
      },
      {
        id: '3',
        sender: 'Anna White',
        avatar: 'AW',
        content: 'Migration scripts are ready for review. Please check before we deploy.',
        timestamp: '1 day ago',
      },
    ],
  },
];

export const mockTeamAnalytics: TeamAnalytics = {
  teamScore: 87,
  teamScoreTrend: '+5%',
  reviewsThisWeek: 24,
  reviewsTrend: '+12%',
  issuesFixed: 156,
  issuesTrend: '+23%',
  activeMembers: 12,
  onlineMembers: 2,
  totalProjects: 6,
  connectedRepos: 5,
  automatedReviews: 4,
};

export const mockTeamSettings: TeamSettings = {
  teamName: 'Development Team',
  description: 'Our main development team working on AI code review tools',
  logo: 'DT',
  permissions: {
    whoCanRunReviews: 'All Members',
    whoCanAddProjects: 'Admins Only',
    whoCanInviteMembers: 'Admins Only',
  },
  automation: {
    autoReviewOnPush: true,
    autoFixIssues: true,
    prComments: false,
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Get member by ID
export const getMemberById = (id: string): TeamMember | undefined => {
  return mockTeamMembers.find(member => member.id === id);
};

// Get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return mockProjects.find(project => project.id === id);
};

// Get reviews by project ID
export const getReviewsByProjectId = (projectId: string): CodeReview[] => {
  return mockCodeReviews.filter(review => review.projectId === projectId);
};

// Get reviews by reviewer ID
export const getReviewsByReviewerId = (reviewerId: string): CodeReview[] => {
  return mockCodeReviews.filter(review => review.reviewerId === reviewerId);
};

// Get chat by project ID
export const getChatByProjectId = (projectId: string): ProjectChat | undefined => {
  return mockProjectChats.find(chat => chat.projectId === projectId);
};

// Get activities by project ID
export const getActivitiesByProjectId = (projectId: string): Activity[] => {
  return mockActivities.filter(activity => activity.projectId === projectId);
};

// Get activities by user ID
export const getActivitiesByUserId = (userId: string): Activity[] => {
  return mockActivities.filter(activity => activity.userId === userId);
};

// Get project members
export const getProjectMembers = (projectId: string): TeamMember[] => {
  const project = getProjectById(projectId);
  if (!project || !project.contributors) return [];

  return mockTeamMembers.filter(member =>
    project.contributors?.includes(member.id)
  );
};

// Calculate team statistics
export const getTeamStatistics = () => {
  return {
    totalMembers: mockTeamMembers.length,
    activeMembers: mockTeamMembers.filter(m => m.status === 'Active').length,
    pendingMembers: mockTeamMembers.filter(m => m.status === 'Pending').length,
    totalProjects: mockProjects.length,
    connectedProjects: mockProjects.filter(p => p.githubStatus === 'Connected').length,
    totalReviews: mockCodeReviews.length,
    completedReviews: mockCodeReviews.filter(r => r.status === 'Completed').length,
    totalIssues: mockProjects.reduce((sum, p) => sum + p.issues, 0),
    averageScore: Math.round(mockProjects.reduce((sum, p) => sum + p.score, 0) / mockProjects.length),
    totalChats: mockProjectChats.length,
    unreadMessages: mockProjectChats.reduce((sum, c) => sum + c.unreadCount, 0),
  };
};
