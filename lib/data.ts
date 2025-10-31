export const personalInfo = {
  name: "Nguyễn Khang Hy",
  alias: "HyIsNoob",
  occupation: "Computer Science Student, Content Creator, Video Editor & Developer",
  dateOfBirth: "February 11, 2005",
  age: 20,
  location: "Ho Chi Minh City, Vietnam",
  passion: "Video Editing (Games & Anime), Game Development",
  email: "khanghyomni@gmail.com",
  education: {
    current: "Computer Science Student at University of Information Technology (K18), Vietnam National University - Ho Chi Minh City",
    year: "2023 - Present"
  },
  bio: "Freestyle creator who loves experimenting with new technologies. Learning by doing, creating by passion.",
  timezone: "UTC+7",
  languages: ["Vietnamese", "English"],
  motto: "Learning by doing, creating by passion"
};

export const socialLinks = [
  {
    name: "YouTube",
    username: "@hyisnoob1102",
    url: "https://youtube.com/@hyisnoob1102",
    channelId: "UCDabE6mnD9G-1xljiTszRoA",
    followers: "5,000+",
    priority: 1,
    icon: "youtube"
  },
  {
    name: "TikTok",
    username: "@hyisno0b",
    url: "https://tiktok.com/@hyisno0b",
    followers: "100+",
    priority: 2,
    icon: "music"
  },
  {
    name: "GitHub",
    username: "HyIsNoob",
    url: "https://github.com/HyIsNoob",
    priority: 3,
    icon: "github"
  },
  {
    name: "Discord",
    username: "HyIsNoob",
    userId: "534002704327114763",
    priority: 4,
    icon: "messageCircle"
  },
  {
    name: "Facebook",
    username: "hyisnoob1102",
    url: "https://facebook.com/hyisnoob1102/",
    icon: "facebook"
  },
  {
    name: "Roblox",
    username: "HyIsNoob",
    url: "https://roblox.com/users/196566911/profile",
    userId: "196566911",
    icon: "gamepad2"
  }
];

export const skills = {
  videoEditing: {
    title: "Video Editing",
    items: [
      "Freestyle Video Editing (Games & Anime)",
      "Motion Graphics & Visual Effects",
      "Color Grading & Audio Mixing",
      "Content Creation for YouTube & TikTok",
      "Editing Project Management"
    ]
  },
  programming: {
    title: "Programming / Development",
    languages: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "WebGL"],
    frontend: ["React", "Next.js", "TailwindCSS", "Three.js (React Three Fiber)"],
    desktop: ["Electron.js (Cross-platform applications)"],
    backend: ["Node.js", "API Development"],
    database: ["Basic SQL/NoSQL knowledge"],
    tools: ["Git", "GitHub", "VS Code", "GitHub Copilot Pro", "Cursor Pro"],
    areas: [
      "Desktop Application Development (Electron)",
      "Web Development (Full-stack)",
      "Automation Tools (Python)",
      "3D Graphics (Three.js, WebGL)",
      "Game Development (Basic)"
    ]
  },
  design: {
    title: "Design & Creative",
    items: [
      "UI/UX Design concepts",
      "Glassmorphism & Neon Cyberpunk aesthetics",
      "3D Visual Effects & Animations"
    ]
  }
};

export const projects = [
  {
    id: 1,
    title: "UIT Manager",
    description: "Comprehensive management app for UIT students with homework management, course tracking, schedule planner, and integrated tools",
    category: "Electron",
    url: "https://github.com/HyIsNoob/uit-manager",
    techStack: ["Electron", "JavaScript", "HTML/CSS"],
    featured: true
  },
  {
    id: 2,
    title: "Media Downloader",
    description: "Desktop application for downloading videos/audio from multiple platforms including YouTube, Facebook, and TikTok",
    category: "Electron",
    url: "https://github.com/HyIsNoob/media-downloader",
    techStack: ["Electron", "Node.js"],
    featured: true
  },
  {
    id: 3,
    title: "Desuwa - Wuthering Waves Meme Site",
    description: "Fun static website about Carlotta character memes from Wuthering Waves",
    category: "Web",
    url: "https://github.com/HyIsNoob/Desuwa",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: false
  },
  {
    id: 4,
    title: "UIT DKHP Remaster",
    description: "UI/UX redesign for UIT course registration system with modern design principles",
    category: "Web",
    url: "https://github.com/HyIsNoob/uit-dkhp-remaster",
    techStack: ["Web technologies", "Modern UI design"],
    featured: false
  },
  {
    id: 5,
    title: "UIT Survey Tool",
    description: "Automated survey tool for UIT, integrated into UIT Manager",
    category: "Python",
    url: "https://github.com/HyIsNoob/UIT_Survey",
    techStack: ["Python", "Selenium", "Automation"],
    featured: false
  },
  {
    id: 6,
    title: "TDT Auto Survey",
    description: "Automated survey tool for Ton Duc Thang University",
    category: "Python",
    url: "https://github.com/HyIsNoob/TDT_AutoSurvey",
    techStack: ["Python", "Automation"],
    featured: false
  },
  {
    id: 7,
    title: "Editing Tool",
    description: "Video editing project management tool with folder creation, file management, compression, and integrated media downloader",
    category: "Python",
    url: "https://github.com/HyIsNoob/EditingTool",
    techStack: ["Python", "File Management"],
    featured: false
  },
  {
    id: 8,
    title: "History Grading Web",
    description: "Automated essay grading system for History subject. Third Prize in High School Science Research Competition (2021)",
    category: "Academic",
    url: "https://github.com/HyIsNoob/History-Grading-Web",
    techStack: ["Web technologies", "NLP", "Text Processing"],
    featured: true,
    award: "Third Prize in High School Science Research Award"
  },
  {
    id: 9,
    title: "SE104 - Student Management System",
    description: "Student management application for Software Engineering course",
    category: "Academic",
    url: "https://github.com/HyIsNoob/SE104_QuanLyHocSinh",
    techStack: ["Desktop application development"],
    featured: false
  },
  {
    id: 10,
    title: "CS116 - Recommendation System",
    description: "Product recommendation system based on customer shopping behavior for Artificial Intelligence course",
    category: "Academic",
    url: "https://github.com/HyIsNoob/CS116_RecommendationSystem",
    techStack: ["Machine Learning", "Python"],
    featured: false
  },
  {
    id: 11,
    title: "CS105 - The Backrooms Game",
    description: "Horror game \"The Backrooms\" created with WebGL for Computer Graphics course",
    category: "Academic",
    url: "https://github.com/HyIsNoob/CS105_GraphicComputer",
    techStack: ["WebGL", "JavaScript", "HTML/CSS"],
    featured: true
  }
];

export const achievements = [
  {
    year: 2021,
    title: "Third Prize in High School Science Research Award",
    description: "History Grading Web - Automated grading system for History essays"
  },
  {
    year: 2023,
    title: "Enrolled at University of Information Technology (K18)",
    description: "Vietnam National University - Ho Chi Minh City"
  },
  {
    year: 2024,
    title: "Reached 5,000+ Total Subscribers Across YouTube Channels",
    description: "Content: Game Editing, Anime Editing, Tutorials"
  },
  {
    year: 2024,
    title: "Reached 100+ TikTok Followers",
    description: "Short-form video content and editing clips"
  },
  {
    year: 2024,
    title: "GitHub Copilot Pro & Cursor Pro User",
    description: "Advanced AI-assisted development tools"
  }
];

export const goals = {
  shortTerm: [
    "Complete academic courses at UIT with excellence",
    "Grow YouTube channel to 10,000 subscribers",
    "Complete and deploy interactive portfolio website",
    "Improve 3D graphics and shader programming skills",
    "Create more useful automation tools"
  ],
  longTerm: [
    "Develop and release a complete indie game",
    "Become a professional Full-stack Developer",
    "Build a professional editing studio",
    "Contribute to open-source community",
    "Share knowledge through tutorials and courses",
    "Create software products with positive impact"
  ]
};

export const categories = ["All", "Electron", "Web", "Python", "Academic"];

