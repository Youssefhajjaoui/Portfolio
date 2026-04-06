/** Edit this file to personalize your portfolio copy. */

export const profile = {
  name: "Youssef Hajjaoui",
  title: "Full-Stack Developer",
  tagline:
    "I build reliable backends, polished web apps, and mobile experiences — from Unix-like tooling to production taxi apps used by real riders.",
  email: "youssefhajjaoui67@gmail.com",
  location: "Available worldwide · Remote-friendly",
  links: {
    github: "https://github.com/youssefhajjaoui",
    linkedin: "https://linkedin.com/in/yocef",
  },
};

export const summary = {
  headline: "At a glance",
  body: `Passionate full-stack developer focused on building innovative digital solutions. Trained at Zone01, I developed strong web skills by contributing to more than 15 collaborative projects during the program—spanning database design, API development, and cloud deployment. Adaptable and team-oriented, I want to apply my expertise to real-world projects that improve the user experience and help businesses succeed.`,
};

export type Project = {
  name: string;
  role: string;
  description: string;
  stack: string[];
  highlight: string;
  link: string;
};

export const projects: Project[] = [
  {
    name: "LocalServer",
    role: "Backend · Java",
    description:
      "HTTP/1.1 server in Java with java.nio—single-threaded, event-driven, no Jetty/Netty. Serves static content and APIs with GET/POST/DELETE, sessions, uploads, config routes, custom errors, and CGI via ProcessBuilder; validated under load.",
    stack: ["Java", "HTTP/1.1", "java.nio", "Sockets", "CGI"],
    highlight:
      "Compliant HTTP from sockets up: sessions, uploads, and CGI without a heavyweight server framework.",
    link: "https://github.com/youssefhajjaoui/java-localserver",
  },
  {
    name: "0-Shell",
    role: "Systems · Rust",
    description:
      "Unix-like shell in Rust (BusyBox-style): builtins from echo and cd to ls, cp, rm, mkdir, etc.—implemented in-process, no bash/sh. Prompt loop, EOF handling, and spec-correct errors; core build avoids pipes/redirection; bonuses like SIGINT, history, or pipes optional.",
    stack: ["Rust", "Unix", "std::process", "std::fs", "CLI"],
    highlight:
      "Filesystem and process control in Rust—real shell behavior without delegating to external binaries.",
    link: "https://github.com/youssefhajjaoui/0-shell",
  },
  {
    name: "01Blog",
    role: "Full-stack · Spring Boot & Angular",
    description:
      "Student social blog: public blocks, posts with media, follows, likes, comments, notifications, and user reports. Spring Boot REST + Spring Security/JWT and Angular (Material or Bootstrap); SQL/JPA backend and file or cloud media storage—built without JHipster-style generators.",
    stack: ["Spring Boot", "Angular", "Spring Security", "JPA", "PostgreSQL", "TypeScript"],
    highlight:
      "Full-stack product: secure APIs, admin moderation, and a responsive SPA for real user-generated content.",
    link: "https://github.com/youssefhajjaoui/01blog",
  },
  {
    name: "Social Network",
    role: "Full-stack · Go + JS framework",
    description:
      "Facebook-like app: JS framework SPA + Go API, SQLite + migrations, dual Docker images. Sessions/cookies and registration; public/private profiles with follow requests (instant follow on public); posts/comments with JPEG/PNG/GIF and three privacy levels; groups (browse, invites, join requests), member posts, events with RSVP; Gorilla WebSocket DMs and group chat with emojis; notifications kept separate from messages. Caddy or custom server.",
    stack: ["Go", "SQLite", "Docker", "Gorilla WS", "TypeScript"],
    highlight:
      "End-to-end social product: graph, groups, events, realtime chat, and migrations—split across containerized client and server.",
    link: "https://github.com/youssefhajjaoui/social-network",
  },
  {
    name: "mini-framework",
    role: "Frontend · Vanilla JS",
    description:
      "Vanilla-JS SPA framework (no React/Angular/Vue): inverted control with a structured DOM abstraction, URL-synced routing, shared state, and a custom event API on top of the browser. Markdown docs with examples; TodoMVC clone matches the reference UI and proves the stack end to end.",
    stack: ["JavaScript", "DOM", "Routing", "State", "TodoMVC"],
    highlight:
      "Framework calls your code: routing, state, events, and DOM updates—then a full TodoMVC proves it works.",
    link: "https://github.com/youssefhajjaoui/mini-framework",
  },
  {
    name: "lem-in",
    role: "Algorithms · Go",
    description:
      "Ant-farm path planner in Go (stdlib only): read rooms/tunnels/##start/##end and ant count, reject bad input, then minimize turns to move all ants to ##end while respecting one ant per room (except start/end) and one tunnel crossing per turn. Prints the map back plus Lx-y moves; optional coordinate visualizer as bonus.",
    stack: ["Go", "Graphs", "Pathfinding", "Parsing", "CLI"],
    highlight:
      "Shortest paths aren’t enough—flow and collisions matter; robust parsing and a clean move plan on stdout.",
    link: "https://github.com/youssefhajjaoui/lem-in",
  },
  {
    name: "Ile de France Taxi",
    role: "Mobile · In production testing",
    description:
      "Taxi booking and ops app in active field use—real riders, iterative delivery from client feedback and usage.",
    stack: ["Mobile", "APIs", "Production"],
    highlight: "Shipped features tested by real users, not just demos.",
    link: "https://github.com/e-aub/tik-_taxi",
  },
];

export type ExperienceItem = {
  company: string;
  period: string;
  title: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "0-Shell",
    period: "Recent",
    title: "Systems / shell-oriented development",
    points: [
      "Unix-like shell behavior, tooling, and platform pieces aligned with how developers expect terminals to work.",
    ],
  },
  {
    company: "01Blog",
    period: "Recent",
    title: "Full-stack — Spring Boot & Angular",
    points: [
      "Backend services and REST/API design with Java Spring Boot.",
      "Angular SPA for authoring, reading, and managing blog content.",
    ],
  },
  {
    company: "Ile de France Taxi",
    period: "Ongoing",
    title: "Mobile application · Live field testing",
    points: [
      "Mobile app still actively worked on and validated by real clients in production-like conditions.",
      "Focus on reliability, UX for riders/drivers, and iteration from real-world usage.",
    ],
  },
];

export type Recommendation = {
  /** One or more paragraphs (full testimonial). */
  paragraphs: string[];
  name: string;
  role: string;
  context?: string;
};

export const recommendations: Recommendation[] = [
  {
    paragraphs: [
      "I worked with Youssef as a fellow student on more than six projects, including a POSIX-compliant shell, a JavaScript library, a social network, and several other complex systems. Every time, he showed the same qualities: fast learner, sharp problem solver, and someone who takes responsibility for the team’s success.",
      "He motivates the group, stays focused under pressure, and always pushes for clean, reliable solutions. His problem-solving approach is unique and consistently helped us move forward, even in the hardest parts of our projects.",
      "I strongly recommend Youssef for any team that needs someone smart, reliable, and genuinely committed to delivering solid work.",
    ],
    name: "Ayoub El Haddad",
    role: "Talent @ Zone01 Oujda · Full-stack developer",
    context: "Studied together at Zone01 Oujda · December 2025",
  },
  {
    paragraphs: [
      "I highly recommend this talented and dedicated development team.",
      "Working with them has been a genuinely positive experience. They not only delivered a modern and flexible solution, but also showed a great attitude throughout the entire process.",
      "What truly makes them stand out is how they work as people. They communicate clearly, listen carefully, and adapt quickly when needed. They are reliable, easy to collaborate with, and always approach challenges with a constructive and solution-oriented mindset.",
      "It’s rare to find a team that combines strong technical skills with such professionalism and human qualities. I would confidently recommend them to any company looking for a trustworthy and motivated tech partner.",
    ],
    name: "Mohammed",
    role: "CEO · Ile de France Taxi",
  },
];
