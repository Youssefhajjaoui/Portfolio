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
  body: `Full-stack engineer with hands-on work across systems programming, Spring Boot APIs, Angular front ends, and mobile delivery. Recent focus: a Unix-inspired shell platform, a Java/Spring + Angular blogging product, and an operational taxi app in active field testing with real clients.`,
};

export type Project = {
  name: string;
  role: string;
  description: string;
  stack: string[];
  highlight: string;
};

export const projects: Project[] = [
  {
    name: "0shell",
    role: "Core contributor",
    description:
      "Unix-like shell and platform — command parsing, process semantics, and developer ergonomics closer to a real POSIX-style environment.",
    stack: ["Systems", "CLI", "Platform"],
    highlight: "Deep dive into how shells and OS-facing tools behave.",
  },
  {
    name: "01blog",
    role: "Full-stack",
    description:
      "Blogging platform with a Spring Boot backend and an Angular SPA — auth, content, and API design suited for real editorial workflows.",
    stack: ["Java", "Spring Boot", "Angular"],
    highlight: "End-to-end web product from API to UI.",
  },
  {
    name: "IDF Taxi",
    role: "Mobile · In production testing",
    description:
      "Taxi booking and operations app used in the field: real clients, real rides, continuous iteration from feedback and telemetry.",
    stack: ["Mobile", "APIs", "Production"],
    highlight: "Shipped features tested by real users, not just demos.",
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
    company: "0shell & platform",
    period: "Recent",
    title: "Systems / shell-oriented development",
    points: [
      "Unix-like shell behavior, tooling, and platform pieces aligned with how developers expect terminals to work.",
    ],
  },
  {
    company: "01blog",
    period: "Recent",
    title: "Full-stack — Spring Boot & Angular",
    points: [
      "Backend services and REST/API design with Java Spring Boot.",
      "Angular SPA for authoring, reading, and managing blog content.",
    ],
  },
  {
    company: "IDF Taxi",
    period: "Ongoing",
    title: "Mobile application · Live field testing",
    points: [
      "Mobile app still actively worked on and validated by real clients in production-like conditions.",
      "Focus on reliability, UX for riders/drivers, and iteration from real-world usage.",
    ],
  },
];

export type Recommendation = {
  quote: string;
  name: string;
  role: string;
  context?: string;
};

export const recommendations: Recommendation[] = [
  {
    quote:
      "Placeholder — add a short quote from a manager, client, or teammate. Authentic recommendations build trust quickly.",
    name: "Name",
    role: "Role · Company",
    context: "Replace with real testimonials when you have permission.",
  },
  {
    quote:
      "Second placeholder: e.g. delivery under pressure, code quality, or communication on a cross-functional team.",
    name: "Name",
    role: "Role · Company",
  },
];
