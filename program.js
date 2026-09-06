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
   4. Abstract / bio      -> add `abstract` and/or `bio` to that talk (see
                             below). Both are optional and independent; talks
                             without them are unchanged.
   5. Talk clock times    -> set `showTalkTimes: true` below. Start times are then
                             computed from the session `start` and each talk's
                             `mins`. Leave it `false` while the running order is
                             still provisional (durations are shown instead).

   TALK FIELDS (all optional except `mins`)
   ----------------------------------------
     speaker     "Jane Doe"                 omit -> renders as "To be announced"
     affiliation "University of Toronto"
     title       "Title of the talk"        shown when known
     topic       "Short topic"              fallback when the title isn't known
     abstract    "Full abstract text..."    optional; adds a collapsible
                                            "Abstract" toggle under the talk
     bio         "Speaker biography..."     optional; adds a collapsible
                                            "Bio" toggle next to it
     kind        "invited" | "paper"        controls the tag on the right
     paper       "1848"                     paper number, for kind: "paper"
     mins        22                         length in minutes (talk + questions)
     note        "Session to be confirmed"  small caveat chip

   ABSTRACTS AND BIOS
   ------------------
   Both are optional — leave them out and the talk renders exactly as before.
   Each one you add shows as a small collapsed toggle under the talk, opened by
   the reader. Long text is easiest to write with back-ticks, which may span
   lines:

     {
       speaker: "Jane Doe",
       affiliation: "University of Toronto",
       title: "Title of the talk",
       kind: "invited",
       mins: 22,
       abstract: `First paragraph of the abstract. Single line breaks are
       ignored, so wrap the text however is comfortable to read here.

       Leave a blank line to start a second paragraph.`,
       bio: `Jane Doe is a professor of ... Same formatting rules as the
       abstract: wrap freely, blank line for a new paragraph.`
     }
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
      { speaker: "Hanyu Wang", affiliation: "UCLA", title: "Structure-Aware Synthesis for Fault-Tolerant Quantum Compilation", kind: "invited", mins: 22,
        abstract: `Fault-tolerant quantum computing requires efficient compilation across multiple abstraction levels, from constructing logical circuits to executing them on specific hardware. In this talk, I will present our recent work on structure-aware synthesis and compilation. First, I will discuss how structure in quantum states and arithmetic functions can be exploited to synthesize resource-efficient fault-tolerant circuits, with an emphasis on reducing costly non-Clifford operations. I will then turn to backend-specific execution, such as lattice-surgery compilation for superconducting qubits. These results illustrate how exploiting structure at both the circuit and architecture levels can reduce the cost of fault-tolerant quantum computation and provide an accurate input for design partitioning for multi-QPU designs with quantum networking.`,
       },
      { speaker: "Anita Buckley", affiliation: "USI", title: "Formal reasoning about quantum networks - Specification and verification of quantum network protocols", kind: "invited", mins: 22,
          abstract: `Abstract: We present BellKAT, an expressive language for specification, verification, and optimization of quantum network protocols for Bell pair distribution. BellKAT comes with a novel algebraic structure based on Kleene algebra, providing a sound and complete axiomatization that enables equational reasoning.
Probabilistic BellKAT extends the language with primitives for expressing probabilistic and nondeterministic behavior, along with semantics designed for quantitative analysis of real-world protocols. We further implement a tool to automate the use of BellKAT for protocol verification and optimization.`,
       },
      { kind: "invited", mins: 22 },
      { speaker: "Jonas Stein", affiliation: "LMU Munich", title: "Distributed Training of Variational Quantum Circuits using Telegates", kind: "paper", paper: "1848", mins: 12,
        abstract: `Using the distributed quantum computing (DQC) paradigm, we train a standard variational quantum circuit (VQC) under noise where remote operations are implemented through the telegate protocol. The training is implemented using a simplified framework in which the entire system is modeled as a single circuit consisting of computational and communication qubits of each QPU. We evaluate the framework on a binary classification task using image data of hand-written digits. We compare a monolithic circuit with circuits distributed on two, three, and six QPUs. The results show that with increasing QPUs the classification accuracy drops; however, adding communication qubits can improve the classification accuracy.`,
       },
      { speaker: "Pouya Kananian", affiliation: "University of Toronto", title: "Quantum Architecture Search for Partitionable Variational Quantum Circuits", kind: "paper", paper: "2044", mins: 12,
        abstract: `Circuit cutting enables the execution of quantum circuits that exceed a single device’s capacity by partitioning them into smaller subcircuits. Partitioning a highly entangled circuit typically requires more cuts than a sparsely entangled one, creating a trade-off between circuit expressivity and cutting overhead. We propose a cut-aware quantum architecture search framework using an autoregressive graph neural network (GNN) circuit generator and a multi-objective GNN surrogate evaluator which optimizes parameterized circuits jointly for classification performance and partitioning cost.`
       }
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
      { speaker: "Eleanor Rieffel", affiliation: "University of Queensland", title: "A tour of the many faces of distributed quantum algorithms", kind: "invited", mins: 22,
         abstract: `While quantum algorithms have generally been described in a parallel fashion from their earliest days, more sophisticated versions of distributed quantum algorithms have flourished in recent years. In this tour,  we will first visit distributed algorithms for intrinsically distributed problems in which classical or quantum data is available at geographically separated nodes. Here, we will take a few quick stops to view different examples of algorithms for intrinsically distributed problems, pointing to research horizons where the outlook is still hazy. We will then visit distributed versions of quantum algorithms, including quantum-enhanced classical algorithms, again stopping to take in various landmarks and open spaces. The tour will conclude with views of heterogeneous quantum architectures for quantum supercomputers of the future, pointing to opportunities for further development.`,
         bio: `Dr. Eleanor G. Rieffel is a Professor of Electrical Engineering and Computer Science (EECS) at the University of Queensland and is the Director of the Queensland Quantum Decarbonisation Alliance. She previously led the Quantum Artificial Intelligence Laboratory (QuAIL) at the NASA Ames Research Center and was the NASA Senior Researcher for Advanced Computing and Data Analytics. Her research focuses on quantum algorithms, distributed quantum computing, quantum error correction, logical and fault-tolerant quantum architectures, applications of quantum computing, resource estimation, and fundamental underpinnings of quantum computation. She received her PhD in mathematics from the University of California, Los Angeles. She is best known for her 2011 book "Quantum Computing: A Gentle Introduction" (MIT Press), with co-author Wolfgang Polak.`
      },
      { kind: "invited", mins: 22 },
      { kind: "invited", mins: 22 },
      { speaker: "Grier M. Jones", affiliation: "University of Toronto", title: "Quantifying Teleportation Overhead in Distributed Unitary Coupled-Cluster Ansätze", kind: "paper", paper: "2043", mins: 12,
        abstract: `Distributed quantum computing (DQC) has been proposed as a way to scale quantum algorithms for practical applications beyond monolithic quantum processor architectures. Among these applications, molecular electronic structure theory is widely regarded as one of the most promising use cases for quantum computing. In this work, we estimate the distributed-resource requirements of unitary coupled-cluster ans¨atze for quantum chemistry, focusing on coupled-cluster singles and doubles (UCCSD), unitary pair coupled-cluster doubles (UpCCD), and unitary pair coupled-cluster with generalized singles and doubles (UpCCGSD) circuits for hydrogen chains. We compare circuit cutting via local-operation quasiprobability simulation with gate teleportation using shared Bell pairs and classical communication. For both approaches, we estimate the cost of handling nonlocal two-qubit gates across a fixed midpoint or quarter-point partition, reporting sampling-overhead implications for cutting and for Bell-pair/classical-communication costs in teleportation.`
       },
      { speaker: "Riccardo Bassoli", affiliation: "TU Dresden", title: "When Does Coherent Quantum Closure Phase Help? A Cross-Layer DQC Benchmark for HEP Telescope Networks", kind: "paper", paper: "1789", mins: 12,
        abstract: `Quantum networks could support optical and near-infrared aperture synthesis for high-energy-physics (HEP) science, including compact-object imaging and dark-matter lensing. Existing quantum-telescope work has established pairwise entanglement-assisted interferometry, multi-station resource constructions, and reference-frame-independent observables, but it does not give a simple systems test for deciding when a noisy DQC network should coherently fuse a closed baseline cycle rather than read its edges independently. We introduce such a cross-layer benchmark: a graph-cycle closure observable whose information rate couples link loading, memory waiting-time dephasing, postselected local fusion, network readiness, and application-level Fisher information. For one memory per edge with stochastic loading, we compile three stored edge coherences into a logical cycle state using local odd-parity projections and derive its wall-clock Fisher-information rate. At one explicitly illustrative asymmetric two-point-source and hardware point, zero-floor RMSEs are $0.36^\circ$ for pairwise readout and $0.86^\circ$ for cycle fusion; coherent fusion becomes preferable only when the non-closing pairwise reference floor exceeds $0.78^\circ$ while the local differential floor is $0.10^\circ$. The $0.78^\circ$ value is not universal, and a sufficiently stable simultaneous shared reference removes the advantage. The benchmark is therefore a conditional systems criterion with explicit targets for memory lifetime, link rate, contrast, fusion acceptance, and local differential stability in DQC-enabled HEP telescope networks.`
       }
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
      { speaker: "Aharon Brodutch", title: "Assessing requirements for entanglement distribution in distributed quantum computing", affiliation: "IonQ", kind: "invited", mins: 22,
        abstract: `Distributed quantum computers will require a method to exchange entanglement between quantum processing units. Two main metrics for entanglement distribution are the rate at which entanglement is generated and the fidelity of the entangled pairs. I will examine entanglement distribution in different regimes. I will show that the entanglement generation rate does not need to be high in order to exploit the distributed setting and speed up the computation (compared to using a single processor).  This result is demonstrated through numerical simulations of a partial quantum error correction task. Entanglement generation rates that are up to 5 times slower than two-qubit gates are sufficient to take advantage of a distributed quantum computer for increased parallelism [ arXiv:2512.10693]. More generally, I will discuss how we can compare different methods for entanglement distribution, with different rates and fidelities, for use in a fault-tolerant setting. 
        
        Joint work with Evan Dobbs, Ada Warren, Batuhan Yilmaz and Nicolas Delfosse.`,
        bio: `Aharon Brodutch is a senior staff researcher on IonQ’s quantum error correction team. He holds a PhD in theoretical physics and quantum information from Macquarie University, and earned his M.Sc. and B.Sc. from Tel Aviv University. Between 2012 and 2020, he held postdoctoral positions at the Institute for Quantum Computing in Waterloo and the Centre for Quantum Information and Quantum Control in Toronto. He was a co-founder and CEO of Entangled Networks, a startup building solutions for distributed quantum computing, which was acquired by IonQ in 2022. Following the acquisition, he joined IonQ’s architecture team. `
      },
      { speaker: "Alexandre Choquette", affiliation: "IBM", title: "T.B.D.", kind: "invited", mins: 22 },
      { speaker: "Robert Stockill", affiliation: "QphoX", title: "T.B.D.", kind: "invited", mins: 22 },
      { speaker: "Mathieu Juan", affiliation: "UdeS / SilQ", title: "Leveraging magnetomechanical interactions for transduction: an avenue towards distributed quantum computing", kind: "invited", mins: 22,
        abstract: `Optomechanical interactions in the microwave regime have been a very active field of research, leveraging advanced micro-fabrication techniques and the larger non-linearities enabled by superconducting circuits to reach regimes difficult to access in the optical regime. In this context, the interaction between the mechanical system and the circuit is realized through a change in the capacitance or the inductance. More recently, large interactions have been demonstrated with the inductive approach, providing a promising avenue towards the strong coupling regime. This approach relies on a flux sensitive microwave resonator coupled to a mechanical mode via a magnetic field.
In this presentation, I will present our group's recent progress in developing magneto-mechanical systems with clamped resonators for quantum transduction. Our methodology relies on distinct chips for the mechanical resonator and the circuit, enabling independent optimization of each component. We are developing micro-fabricated magnets to enhance the magneto-mechanical coupling of silicon-nitride membranes. In parallel, we are developing the optomechanical system to realize the complete magneto-optomechanical transducer. In preliminary experimental demonstrations, we have shown microwave-mechanics coupling in the kHz range, far stronger than other approaches, showing promise for distributed quantum networking.`
       }
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
