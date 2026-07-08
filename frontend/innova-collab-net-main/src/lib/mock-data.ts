// Mock data for ProjectHub. Ready to be swapped for API calls later.

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  department: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  skills: string[];
  teamSize: number;
  filled: number;
  timeline: string;
  owner: { name: string; avatar: string; role: string };
  members: { name: string; avatar: string }[];
  updatedAt: string;
  bookmarked?: boolean;
  progress: number;
};

const av = (seed: string) => `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}&backgroundColor=fff2d7,fff8ec,f8e8c8`;

export const projects: Project[] = [
  {
    id: "aurora",
    title: "Aurora — Campus Carbon Ledger",
    tagline: "A live carbon accounting layer for university operations.",
    description: "Aurora ingests building energy, cafeteria, and travel data to produce a transparent, per-department carbon ledger. Built for sustainability offices and student researchers.",
    department: "Environmental Engineering",
    category: "Research",
    difficulty: "Advanced",
    skills: ["React", "Python", "Time-series", "GIS"],
    teamSize: 6, filled: 4,
    timeline: "12 weeks",
    owner: { name: "Ines Okafor", avatar: av("ines"), role: "Lead" },
    members: [{ name: "Ines", avatar: av("ines") }, { name: "Ravi", avatar: av("ravi") }, { name: "Mika", avatar: av("mika") }, { name: "Joon", avatar: av("joon") }],
    updatedAt: "2h ago",
    progress: 42,
  },
  {
    id: "atlas",
    title: "Atlas — Peer Study Rooms",
    tagline: "Realtime study rooms with shared whiteboards.",
    description: "A minimalist study platform. Book a room, invite peers, share a whiteboard. Focus timers, low-friction voice, and note handoff to Notion.",
    department: "Computer Science",
    category: "Product",
    difficulty: "Intermediate",
    skills: ["Next.js", "WebRTC", "TypeScript", "Postgres"],
    teamSize: 5, filled: 3,
    timeline: "8 weeks",
    owner: { name: "Theo Marín", avatar: av("theo"), role: "Founder" },
    members: [{ name: "Theo", avatar: av("theo") }, { name: "Ada", avatar: av("ada") }, { name: "Lea", avatar: av("lea") }],
    updatedAt: "Yesterday",
    progress: 68,
  },
  {
    id: "kiln",
    title: "Kiln — Ceramic Print Toolchain",
    tagline: "Slicer + firing profiles for ceramic 3D printing.",
    description: "An open toolchain for ceramic FDM: slicer plugins, shrinkage compensation, and community firing profiles. Bridging fabrication studios and materials science.",
    department: "Mechanical Engineering",
    category: "Hardware",
    difficulty: "Advanced",
    skills: ["C++", "Three.js", "Materials", "CAD"],
    teamSize: 4, filled: 2,
    timeline: "16 weeks",
    owner: { name: "Sana Kapoor", avatar: av("sana"), role: "Lead" },
    members: [{ name: "Sana", avatar: av("sana") }, { name: "Owen", avatar: av("owen") }],
    updatedAt: "3d ago",
    progress: 24,
  },
  {
    id: "vellum",
    title: "Vellum — Editorial CMS for student mags",
    tagline: "A quiet CMS built for long-form college publications.",
    description: "Editorial workflows, typography-first drafts, and a print export pipeline. Designed for student magazines who care about the page.",
    department: "Design & Media",
    category: "Product",
    difficulty: "Intermediate",
    skills: ["React", "Typography", "InDesign API"],
    teamSize: 4, filled: 4,
    timeline: "10 weeks",
    owner: { name: "Mira Halden", avatar: av("mira"), role: "Editor" },
    members: [{ name: "Mira", avatar: av("mira") }, { name: "Jun", avatar: av("jun") }, { name: "Isa", avatar: av("isa") }, { name: "Ola", avatar: av("ola") }],
    updatedAt: "1w ago",
    progress: 82,
  },
  {
    id: "nimbus",
    title: "Nimbus — Weather DAO for farmers",
    tagline: "Hyperlocal weather signals for smallholder farms.",
    description: "Combines low-cost sensors, community reports, and satellite data. Payouts to sensor hosts via on-chain settlements. A partnership with the Agri department.",
    department: "Agricultural Sciences",
    category: "Research",
    difficulty: "Advanced",
    skills: ["IoT", "Solidity", "Python", "ML"],
    teamSize: 7, filled: 3,
    timeline: "20 weeks",
    owner: { name: "Kofi Asare", avatar: av("kofi"), role: "PI" },
    members: [{ name: "Kofi", avatar: av("kofi") }, { name: "Ren", avatar: av("ren") }, { name: "Vera", avatar: av("vera") }],
    updatedAt: "5h ago",
    progress: 15,
  },
  {
    id: "prism",
    title: "Prism — Accessibility audit for lecture videos",
    tagline: "Automated captions, chapters, and reading levels.",
    description: "Batch-process a semester of lectures into indexed, captioned, chaptered archives with reading-level summaries. Piloting with the Disability Services office.",
    department: "Computer Science",
    category: "Social Impact",
    difficulty: "Intermediate",
    skills: ["Whisper", "FFmpeg", "React", "NLP"],
    teamSize: 5, filled: 5,
    timeline: "6 weeks",
    owner: { name: "Yuki Tanaka", avatar: av("yuki"), role: "Lead" },
    members: [{ name: "Yuki", avatar: av("yuki") }, { name: "Ade", avatar: av("ade") }, { name: "Ken", avatar: av("ken") }, { name: "Lin", avatar: av("lin") }, { name: "Sam", avatar: av("sam") }],
    updatedAt: "Just now",
    progress: 95,
  },
];

export const departments = ["All", "Computer Science", "Mechanical Engineering", "Environmental Engineering", "Agricultural Sciences", "Design & Media"];
export const categories = ["All", "Research", "Product", "Hardware", "Social Impact"];
export const difficulties = ["All", "Beginner", "Intermediate", "Advanced"] as const;

export const currentUser = {
  name: "Ava Chen",
  handle: "@ava",
  avatar: av("ava-chen"),
  role: "Product Designer · Year 3",
  college: "Northfield Institute of Technology",
  department: "Design & Media",
  bio: "Interested in editorial tools, accessibility, and the intersection of design and civic tech.",
  skills: ["Figma", "React", "Typography", "Systems Thinking", "Prototyping"],
  interests: ["Publishing", "Sustainability", "AI"],
  contribution: 1240,
  github: "github.com/ava",
  linkedin: "linkedin.com/in/ava",
  portfolio: "ava.design",
};

export const activities = [
  { id: 1, actor: "Ines", verb: "invited you to", target: "Aurora", time: "2h" },
  { id: 2, actor: "Theo", verb: "shipped a build in", target: "Atlas", time: "5h" },
  { id: 3, actor: "Mira", verb: "requested review on", target: "Vellum", time: "1d" },
  { id: 4, actor: "Kofi", verb: "opened join requests for", target: "Nimbus", time: "1d" },
  { id: 5, actor: "Yuki", verb: "closed 3 tasks in", target: "Prism", time: "2d" },
];

export const tasks = [
  { id: "t1", title: "Draft carbon ledger schema", status: "todo", priority: "High", due: "Fri", assignee: "Ava", project: "Aurora" },
  { id: "t2", title: "WebRTC signaling proof", status: "todo", priority: "Medium", due: "Mon", assignee: "Theo", project: "Atlas" },
  { id: "t3", title: "Firing profile parser", status: "inprogress", priority: "High", due: "Thu", assignee: "Sana", project: "Kiln" },
  { id: "t4", title: "Editorial grid audit", status: "inprogress", priority: "Low", due: "Wed", assignee: "Ava", project: "Vellum" },
  { id: "t5", title: "Sensor onboarding flow", status: "review", priority: "Medium", due: "Tue", assignee: "Kofi", project: "Nimbus" },
  { id: "t6", title: "Caption model eval", status: "review", priority: "High", due: "Fri", assignee: "Yuki", project: "Prism" },
  { id: "t7", title: "Landing page polish", status: "done", priority: "Low", due: "—", assignee: "Ava", project: "Vellum" },
  { id: "t8", title: "Team charter v1", status: "done", priority: "Medium", due: "—", assignee: "Ines", project: "Aurora" },
] as const;

export const messages = [
  { id: "m1", name: "Aurora — Team", last: "Ines: Let's align on the ledger schema Friday.", time: "2h", unread: 2, avatar: av("aurora-team") },
  { id: "m2", name: "Theo Marín", last: "Sent the WebRTC draft.", time: "5h", unread: 0, avatar: av("theo") },
  { id: "m3", name: "Vellum — Editors", last: "Mira: Cover story lands Thursday.", time: "1d", unread: 1, avatar: av("vellum-team") },
  { id: "m4", name: "Sana Kapoor", last: "Shrinkage test results attached.", time: "2d", unread: 0, avatar: av("sana") },
  { id: "m5", name: "Kofi Asare", last: "Farmer onboarding sync?", time: "3d", unread: 0, avatar: av("kofi") },
];

export const events = [
  { id: "e1", title: "Aurora ledger sync", date: "Thu, Mar 14", time: "10:00", kind: "Meeting", project: "Aurora" },
  { id: "e2", title: "Vellum print deadline", date: "Fri, Mar 15", time: "17:00", kind: "Deadline", project: "Vellum" },
  { id: "e3", title: "Spring Hackathon", date: "Sat, Mar 23", time: "All day", kind: "Hackathon", project: "—" },
  { id: "e4", title: "Prism accessibility demo", date: "Tue, Mar 26", time: "14:00", kind: "Demo", project: "Prism" },
];

export const leaderboard = [
  { rank: 1, name: "Ines Okafor", score: 2840, projects: 4, avatar: av("ines") },
  { rank: 2, name: "Yuki Tanaka", score: 2612, projects: 3, avatar: av("yuki") },
  { rank: 3, name: "Theo Marín", score: 2401, projects: 5, avatar: av("theo") },
  { rank: 4, name: "Sana Kapoor", score: 2188, projects: 2, avatar: av("sana") },
  { rank: 5, name: "Ava Chen", score: 1240, projects: 3, avatar: av("ava-chen") },
  { rank: 6, name: "Kofi Asare", score: 1120, projects: 2, avatar: av("kofi") },
  { rank: 7, name: "Mira Halden", score: 998, projects: 2, avatar: av("mira") },
];
