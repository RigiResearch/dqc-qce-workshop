/* ==========================================================================
   DQC 2026 — WORKSHOP CONFIGURATION
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to keep the website up to date.
   Everything below (dates, sessions, talks, speakers, organizers) is rendered
   automatically. Save the file, refresh the page — no build step, no tooling.

   QUICK GUIDE
   -----------
   1. Session times      -> `start` / `end` in each SESSIONS entry.
   2. Add / remove a talk -> add or delete an object in that session's `talks`.
   3. A slot not yet filled -> just leave out `speaker` (it renders as "To be
                               announced" and is excluded from the Speakers grid).
   4. Talk clock times    -> set `showTalkTimes: true` below. Start times are then
                             computed from the session `start` and each talk's
                             `mins`. Leave it `false` while the running order is
                             still provisional (durations are shown instead).

   TALK FIELDS (all optional except `mins`)
   ----------------------------------------
     speaker     "Jane Doe"                 omit -> renders as "To be announced"
     affiliation "University of Toronto"
     title       "Title of the talk"        shown when known
     topic       "Short topic"              fallback when the title isn't known
     kind        "invited" | "paper"        controls the tag on the right
     paper       "1848"                     paper number, for kind: "paper"
     mins        22                         length in minutes (talk + questions)
     note        "Session to be confirmed"  small caveat chip
   ========================================================================== */

const WORKSHOP = {
  /* ---- Identity ---- */
  shortTitle: "DQC 2026",
  title: "Distributed Quantum Computing",
  tagline: "Alliances, Sandboxes & Emerging Opportunities",
  code: "WKS::QDC::QECS::740",
  intro:
    "A half-day workshop at IEEE Quantum Week 2026 on how distributed architectures — " +
    "the alliances, platforms and sandboxes forming around them — are shaping the road to " +
    "scalable quantum computing.",

  /* ---- When & where ---- */
  date: "Thursday, September 17, 2026",
  dateShort: "Thu 17 Sep 2026",
  timeSpan: "10:00 – 16:30",
  format: "4.5 hours · three 90-minute sessions",
  venue: "Metro Toronto Convention Centre",
  city: "Toronto, Canada",
  room: "718A",

  /* ---- Links ---- */
  conferenceName: "IEEE Quantum Week 2026 (QCE26)",
  conferenceDates: "September 13–18, 2026",
  conferenceUrl: "https://qce.quantum.ieee.org/2026/",
  registrationUrl: "https://qce.quantum.ieee.org/2026/registration/",
  scheduleUrl: "https://qce.quantum.ieee.org/2026/qce26-schedule/workshop-schedule/",
  projectName: "Quantum Software Consortium (QSC Canada)",
  projectUrl: "https://www.qscc.ca",
  contactEmail: "hausi@uvic.ca",

  /* ---- Display switches ---- */
  showTalkTimes: false,           // true -> compute a start time for every talk
  programNote:
    "Preliminary program. Speakers, running order and talk times may still change."
};

/* ==========================================================================
   SESSIONS
   ========================================================================== */

const SESSIONS = [
  {
    label: "Session I",
    title: "Distributed QEC, compilation and middleware",
    start: "10:00",
    end: "11:30",
    summary:
      "Error correction across modules, compiling and cutting circuits for distributed " +
      "backends, and the middleware that holds the nodes together.",
    talks: [
      { speaker: "Hanyu Wang", affiliation: "UCLA", topic: "T.B.D.", kind: "invited", mins: 22 },
      { kind: "invited", mins: 22 },
      { speaker: "Ross Duncan", affiliation: "Quantinuum", topic: "T.B.D.", kind: "invited", mins: 22 },
      { speaker: "Jonas Stein", affiliation: "LMU Munich", topic: "Distributed Training of Variational Quantum Circuits using Telegates", kind: "paper", paper: "1848", mins: 12 },
      { speaker: "Pouya Kananian", affiliation: "University of Toronto", topic: "Quantum Architecture Search for Partitionable Variational Quantum Circuits", kind: "paper", paper: "2044", mins: 12 }
    ],
    breakAfter: { label: "Lunch break", start: "11:30", end: "13:00" }
  },

  {
    label: "Session II",
    title: "Distributed algorithms and applications",
    start: "13:00",
    end: "14:30",
    summary:
      "Algorithms that span several QPUs, and the applications — chemistry, optimization, " +
      "machine learning — that stand to gain from them.",
    talks: [
      { speaker: "Eleanor Rieffel", affiliation: "University of Queensland", topic: "T.B.D.", kind: "invited", mins: 22 },
      { kind: "invited", mins: 22 },
      { kind: "invited", mins: 22 },
      { speaker: "Grier M. Jones", affiliation: "University of Toronto", topic: "Quantifying Teleportation Overhead in Distributed Unitary Coupled-Cluster Ansätze", kind: "paper", paper: "2043", mins: 12 },
      { speaker: "Riccardo Bassoli", affiliation: "TU Dresden", topic: "When Does Coherent Quantum Closure Phase Help? A Cross-Layer DQC Benchmark for HEP Telescope Networks", kind: "paper", paper: "1789", mins: 12 }
    ],
    breakAfter: { label: "Break", start: "14:30", end: "15:00" }
  },

  {
    label: "Session III",
    title: "Distributed quantum hardware and interconnects",
    start: "15:00",
    end: "16:30",
    summary:
      "Networked quantum processors in practice: entanglement distribution, interconnects, " +
      "quantum memory, and the alliances building the hardware stack.",
    talks: [
      { speaker: "Aharon Brodutch", affiliation: "IonQ", kind: "invited", mins: 22, note: "Session to be confirmed" },
      { speaker: "Abram Falk", affiliation: "IBM", topic: "Assessing requirements for entanglement distribution in distributed quantum computing", kind: "invited", mins: 22 },
      { kind: "invited", mins: 22 },
      { kind: "invited", mins: 22 }
    ]
  }
];

/* ==========================================================================
   ORGANIZERS
   ========================================================================== */

const ORGANIZERS = [
  { name: "Hans-Arno Jacobsen", affiliation: "University of Toronto", focus: "Distributed systems, middleware, quantum software; leads the QSC Canada consortium." },
  { name: "Grier M. Jones", affiliation: "University of Toronto", focus: "Quantum machine learning and distributed quantum algorithms for chemistry." },
  { name: "Hausi A. Müller", affiliation: "University of Victoria", focus: "Distributed and hybrid quantum algorithms, quantum software engineering; QCE Steering Committee Chair." },
  { name: "Luis F. Rivera", affiliation: "University of Victoria", focus: "Digital twins, generative AI and continuous experimentation for quantum case studies." },
  { name: "Ulrike Stege", affiliation: "University of Victoria", focus: "Hybrid quantum-classical algorithms for NP-hard problems, QAOA, parameterized complexity." },
  { name: "Matthew Amy", affiliation: "Simon Fraser University", focus: "Quantum compilation and verification; Canada Research Chair in Quantum Computing." },
  { name: "Alexandre Choquette", affiliation: "IBM Quantum", focus: "Quantum algorithms and strategic research ecosystem development." },
  { name: "Abram Falk", affiliation: "IBM", focus: "Leads IBM's quantum networking effort." }
];

/* ==========================================================================
   THEMES — the chips shown in the "Topics" strip
   ========================================================================== */

const TOPICS = [
  "Entanglement distribution",
  "Quantum networks & interconnects",
  "Distributed QEC",
  "Circuit cutting & knitting",
  "Cross-platform compilation",
  "Distributed algorithms",
  "Quantum memories",
  "Quantum chemistry at scale",
  "HPC + genAI integration",
  "Sandboxes & testbeds"
];
