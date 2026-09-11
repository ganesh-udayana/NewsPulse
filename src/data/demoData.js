const ADDITIONAL_STORIES = [
  {
    id: "story-ai-chip-export-controls",
    title: "Chipmakers Unveil Energy-Efficient AI Processors for Edge Devices",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Blue digital circuit board with processor lines",
    momentum: 81,
    status: "Developing",
    lastUpdated: "24 minutes ago",
    publishedDate: "2026-09-10",
    summary: "Semiconductor companies are moving inference workloads closer to users with smaller processors designed for phones, vehicles, and industrial sensors.",
    keyPoints: [
      "New processors reduce inference power use compared with cloud-only workloads.",
      "Vehicle and robotics manufacturers are testing local models for lower response latency.",
      "Export licensing remains a concern for advanced manufacturing equipment."
    ],
    whyItMatters: "Local AI processing could reduce cloud costs and improve privacy for everyday devices.",
    whatsNext: "Independent benchmarks and first commercial device announcements are expected this quarter.",
    uncertainties: ["Long-term supply of advanced packaging capacity.", "Whether performance gains justify higher device prices."],
    whatsNew: { lastCompared: "24m ago vs 3h ago", newlyReported: ["Two automotive suppliers began fleet trials."], changedDetails: ["Projected power savings increased from 30% to 36%."], conflictingReports: ["Analysts disagree on near-term production volumes."], stillUnknown: ["Final retail pricing for consumer devices."] },
    sourceAgreement: { ratio: "5 of 6 sources agree on the efficiency gains", score: 82, disclaimer: "Source Agreement measures reporting consensus across tracked outlets. It is not an independent truth score." },
    sources: [{ id: "s12", name: "MIT Technology Review", headline: "The Next AI Race Is Happening at the Edge", time: "24m ago", focus: "Processor architecture and deployment", url: "https://www.technologyreview.com" }, { id: "s13", name: "IEEE Spectrum", headline: "Tiny AI Chips Move Inference Out of the Cloud", time: "2h ago", focus: "Engineering benchmarks", url: "https://spectrum.ieee.org" }],
    timeline: [{ id: "t12", time: "Today, 14:36", headline: "Automotive suppliers begin edge processor fleet trials", source: "MIT Technology Review", tag: "Trial" }, { id: "t13", time: "Today, 12:10", headline: "Chip consortium publishes efficiency benchmark", source: "IEEE Spectrum", tag: "Benchmark" }]
  },
  {
    id: "story-ocean-mapping-mission",
    title: "Autonomous Ocean Survey Maps Deep-Sea Thermal Vents in Unprecedented Detail",
    category: "Science",
    image: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Deep blue ocean surface viewed from above",
    momentum: 74,
    status: "Active",
    lastUpdated: "46 minutes ago",
    publishedDate: "2026-09-10",
    summary: "A coordinated fleet of autonomous underwater vehicles has completed the first high-resolution survey of a remote Pacific ridge system.",
    keyPoints: ["Vehicles operated for 19 days without surfacing.", "The maps reveal previously unknown mineral-rich vent fields.", "Biologists collected environmental DNA samples for new species analysis."],
    whyItMatters: "The survey improves understanding of deep-ocean ecosystems while informing responsible resource policy.",
    whatsNext: "Researchers will compare the samples with historical expedition records before publishing the full dataset.",
    uncertainties: ["Whether the vent ecosystem is seasonal.", "How mining proposals could affect the habitat."],
    whatsNew: { lastCompared: "46m ago vs 5h ago", newlyReported: ["A second vent field was detected beyond the original search zone."], changedDetails: ["Survey coverage expanded by 18%."], conflictingReports: ["Teams differ on the age of the newly mapped formations."], stillUnknown: ["The number of species unique to the ridge." ] },
    sourceAgreement: { ratio: "6 of 6 sources confirm the survey coverage", score: 91, disclaimer: "Source Agreement measures reporting consensus across tracked outlets. It is not an independent truth score." },
    sources: [{ id: "s14", name: "Science News", headline: "Robotic Fleet Reveals Hidden Life on Pacific Ridge", time: "46m ago", focus: "Marine biology findings", url: "https://www.sciencenews.org" }, { id: "s15", name: "Nature", headline: "Deep-Sea Robots Extend the Map of Earth", time: "3h ago", focus: "Survey technology and geography", url: "https://www.nature.com" }],
    timeline: [{ id: "t14", time: "Today, 13:54", headline: "Autonomous fleet completes final ridge transect", source: "Science News", tag: "Survey" }, { id: "t15", time: "Today, 09:20", headline: "Environmental DNA samples transferred to research vessel", source: "Nature", tag: "Discovery" }]
  },
  {
    id: "story-grid-storage-project",
    title: "Long-Duration Grid Storage Project Connects First Demonstration Array",
    category: "Energy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Solar panels and wind turbines in a renewable energy field",
    momentum: 72,
    status: "Monitoring",
    lastUpdated: "1 hour ago",
    publishedDate: "2026-09-10",
    summary: "A hybrid renewable-energy site has connected a multi-day storage array designed to stabilize power during extended periods of low wind and sunlight.",
    keyPoints: ["The array can deliver power for up to 72 hours.", "Operators will test the system through the autumn demand cycle.", "The project combines solar, wind, and iron-based storage chemistry."],
    whyItMatters: "Long-duration storage could make renewable power more dependable without relying on fossil-fuel peaker plants.",
    whatsNext: "Grid operators will publish reliability data after the first full seasonal test.",
    uncertainties: ["Maintenance costs at commercial scale.", "Performance during extreme winter temperatures."],
    whatsNew: { lastCompared: "1h ago vs 7h ago", newlyReported: ["The demonstration array completed its first overnight discharge."], changedDetails: ["Expected round-trip efficiency was revised to 78%."], conflictingReports: ["Project backers report different estimates for levelized storage cost."], stillUnknown: ["Final insurance requirements for multi-day operation."] },
    sourceAgreement: { ratio: "5 of 5 sources confirm the first grid connection", score: 89, disclaimer: "Source Agreement measures reporting consensus across tracked outlets. It is not an independent truth score." },
    sources: [{ id: "s16", name: "Canary Media", headline: "A New Test for Multi-Day Grid Batteries", time: "1h ago", focus: "Grid operations and storage", url: "https://www.canarymedia.com" }, { id: "s17", name: "Utility Dive", headline: "Hybrid Storage Site Begins Reliability Trial", time: "4h ago", focus: "Utility planning and costs", url: "https://www.utilitydive.com" }],
    timeline: [{ id: "t16", time: "Today, 13:05", headline: "Storage array completes first overnight discharge", source: "Canary Media", tag: "Milestone" }, { id: "t17", time: "Today, 08:45", headline: "Grid control room accepts demonstration site", source: "Utility Dive", tag: "Connection" }]
  },
  {
    id: "story-ransomware-healthcare-network",
    title: "Healthcare Network Restores Clinical Systems After Coordinated Ransomware Incident",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rows of secure network servers in a data center",
    momentum: 79,
    status: "Rapidly Developing",
    lastUpdated: "29 minutes ago",
    publishedDate: "2026-09-10",
    summary: "A regional healthcare network is bringing hospitals back online after isolating an intrusion that disrupted scheduling and diagnostic workflows.",
    keyPoints: ["Emergency care remained operational on segmented systems.", "The network disconnected affected identity and scheduling services.", "Investigators are reviewing whether patient data was accessed."],
    whyItMatters: "Healthcare incidents can affect patient safety as well as privacy, making recovery speed and disclosure decisions critical.",
    whatsNext: "The network will publish a preliminary incident notice after forensic imaging is complete.",
    uncertainties: ["Whether attackers copied protected health information.", "The initial access vector used in the intrusion."],
    whatsNew: { lastCompared: "29m ago vs 3h ago", newlyReported: ["Three hospitals returned to normal scheduling operations."], changedDetails: ["The estimated recovery window moved forward by one day."], conflictingReports: ["Sources disagree about whether a third-party vendor was involved."], stillUnknown: ["The identity of the threat group."] },
    sourceAgreement: { ratio: "4 of 5 sources agree on the recovery sequence", score: 78, disclaimer: "Source Agreement measures reporting consensus across tracked outlets. It is not an independent truth score." },
    sources: [{ id: "s18", name: "BleepingComputer", headline: "Hospital Network Begins Recovery After Ransomware Attack", time: "29m ago", focus: "Incident response and malware", url: "https://www.bleepingcomputer.com" }, { id: "s19", name: "HealthITSecurity", headline: "Clinical Services Return as Forensics Continue", time: "2h ago", focus: "Patient safety and disclosure", url: "https://healthitsecurity.com" }],
    timeline: [{ id: "t18", time: "Today, 14:22", headline: "Three hospitals restore scheduling services", source: "BleepingComputer", tag: "Recovery" }, { id: "t19", time: "Today, 11:40", headline: "Network isolates identity management systems", source: "HealthITSecurity", tag: "Containment" }]
  }
];

export const INITIAL_STORIES = [
  {
    id: "story-ai-eu-regulations",
    title: "Global Tech Giants Announce Compliance Framework for Landmark EU AI Act",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Circuit board representing artificial intelligence technology",
    momentum: 95,
    status: "Rapidly Developing",
    lastUpdated: "12 minutes ago",
    publishedDate: "2026-09-10",
    summary: "Major frontier artificial intelligence labs and sovereign cloud providers have released their initial governance disclosures to satisfy newly effective EU AI Act risk classification deadlines.",
    keyPoints: [
      "Tier-1 general purpose AI models must disclose training compute, energy metrics, and copyrighted material registries.",
      "High-risk deployment categories face mandatory third-party cybersecurity and fairness audits starting next quarter.",
      "Penalties for non-compliance can reach up to €35 million or 7% of worldwide annual turnover.",
      "Open-source model architectures under specific compute thresholds receive partial regulatory exemptions."
    ],
    whyItMatters: "Establishes the world's first enforceable legal regime for foundation models, directly impacting model architecture decisions across the US, Europe, and Asia.",
    whatsNext: "The European AI Office will release final harmonized benchmark evaluations before cross-border stress testing begins next month.",
    uncertainties: [
      "Whether sovereign defense and national security deployments qualify for statutory exceptions.",
      "The exact computational threshold measuring next-generation multimodal agent systems."
    ],
    whatsNew: {
      lastCompared: "12m ago vs 2h ago",
      newlyReported: [
        "A consortium of six major tech providers submitted unified algorithmic audit dossiers at 14:30 CET.",
        "France and Germany published an emergency joint communiqué on computational tier formulas for startups."
      ],
      changedDetails: [
        "Compliance grace period for legacy healthcare diagnostic models was shortened from 24 months to 18 months."
      ],
      conflictingReports: [
        "Reuters reports three providers requested provisional waivers; TechCrunch sources maintain all exemption requests were denied."
      ],
      stillUnknown: [
        "Whether automated synthetic data generators qualify for technical watermarking waivers."
      ]
    },
    sourceAgreement: {
      ratio: "7 of 8 sources report identical core compliance timelines",
      score: 88,
      disclaimer: "Source Agreement measures reporting consensus across tracked outlets. It is not an independent truth score."
    },
    sources: [
      { id: "s1", name: "Reuters", headline: "Tech Majors Submit First Disclosures Under New EU AI Statute", time: "12m ago", focus: "Regulatory compliance mechanics and filing details", url: "https://reuters.com" },
      { id: "s2", name: "Financial Times", headline: "Silicon Valley Braces for Heavy Fines as EU AI Office Opens Enforcement Portal", time: "28m ago", focus: "Financial liability and corporate risk governance", url: "https://ft.com" },
      { id: "s3", name: "The Verge", headline: "Open Source AI Receives Crucial Carveouts in Final Directives", time: "1h ago", focus: "Developer ecosystem and open weights impact", url: "https://theverge.com" },
      { id: "s4", name: "Bloomberg", headline: "Tech Stocks Hold Steady Amid Landmark EU Governance Rollout", time: "2h ago", focus: "Market indices and tech enterprise valuation", url: "https://bloomberg.com" }
    ],
    timeline: [
      { id: "t1", time: "Today, 14:48", headline: "Six-firm industry consortium releases joint auditing transparency paper", source: "Reuters", tag: "Compliance" },
      { id: "t2", time: "Today, 13:20", headline: "EU AI Office activates online technical inquiry bureau for startups", source: "Financial Times", tag: "Enforcement" },
      { id: "t3", time: "Today, 11:15", headline: "Franco-German joint statement clarifies foundation model definitions", source: "Bloomberg", tag: "Diplomacy" },
      { id: "t4", time: "Yesterday, 18:30", headline: "Leaked draft guidance details synthetic watermarking requirements", source: "The Verge", tag: "Initial Report" }
    ]
  },
  {
    id: "story-space-commercial-station",
    title: "Next-Gen Commercial Orbital Laboratory Completes Critical Burst-Pressure Hull Tests",
    category: "Science",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Earth viewed from orbit",
    momentum: 84,
    status: "Active",
    lastUpdated: "38 minutes ago",
    publishedDate: "2026-09-10",
    summary: "Aerospace contractors have confirmed the successful burst-pressure validation of an inflatable habitat module designed to succeed the International Space Station before 2030.",
    keyPoints: [
      "Full-scale inflatable test unit exceeded NASA safety pressure thresholds by 27% under ultimate stress.",
      "Multi-layered Vectran shield demonstrated complete debris resistance during hypervelocity impact trials.",
      "First operational station module launch targeted for late 2027 aboard commercial heavy-lift vehicles."
    ],
    whyItMatters: "Secures continuous human commercial presence in low Earth orbit before the planned retirement and de-orbit of the ISS.",
    whatsNext: "Full-scale thermal vacuum chamber endurance tests commence at NASA Glenn Research Center in November.",
    uncertainties: [
      "Commercial orbital berth pricing structure for private biomedical researchers.",
      "Long-term degradation of polymer bladder materials under high ultraviolet exposure."
    ],
    whatsNew: {
      lastCompared: "38m ago vs 4h ago",
      newlyReported: [
        "Engineers successfully held test module at 77.4 psi, surpassing the standard 60.8 psi requirement.",
        "ESA initiated exploratory negotiations for dedicated European research berths."
      ],
      changedDetails: [
        "Initial launch target window adjusted from Q1 2027 to Q3 2027 to incorporate upgraded docking avionics."
      ],
      conflictingReports: [
        "Aerospace Daily states private equity tranche is closed; Wall Street Journal reports a bridge round remains open."
      ],
      stillUnknown: [
        "Selection of secondary environmental life support subcontractor."
      ]
    },
    sourceAgreement: {
      ratio: "5 of 6 sources agree on test pressure metrics and milestone criteria",
      score: 83,
      disclaimer: "Source Agreement measures reporting consensus across tracked outlets. It is not an independent truth score."
    },
    sources: [
      { id: "s5", name: "SpaceNews", headline: "Commercial Station Builder Clears Structural Burst Milestone", time: "38m ago", focus: "Engineering metrics and burst threshold data", url: "https://spacenews.com" },
      { id: "s6", name: "Ars Technica", headline: "Why Inflatable Space Stations Are Finally Moving Beyond Concepts", time: "1h ago", focus: "Architecture analysis and ISS transition roadmap", url: "https://arstechnica.com" },
      { id: "s7", name: "Aviation Week", headline: "NASA Commercial LEO Destinations Enters Phase II Evaluation", time: "3h ago", focus: "Procurement milestones and federal subsidies", url: "https://aviationweek.com" }
    ],
    timeline: [
      { id: "t5", time: "Today, 14:15", headline: "Pressure chamber reaches 77.4 psi with zero structural fatigue", source: "SpaceNews", tag: "Milestone" },
      { id: "t6", time: "Today, 10:00", headline: "Live telemetry stream confirms successful initial inflation", source: "Ars Technica", tag: "Testing" },
      { id: "t7", time: "Yesterday, 16:00", headline: "Test unit hoisted into vacuum containment vessel", source: "Aviation Week", tag: "Preparation" }
    ]
  },
  {
    id: "story-clean-energy-battery-breakthrough",
    title: "Solid-State Sodium-Ion Battery Achieves 1,200 Rapid-Charge Cycles with Zero Cobalt",
    category: "Energy",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Wind turbines generating renewable energy",
    momentum: 76,
    status: "Active",
    lastUpdated: "1 hour ago",
    publishedDate: "2026-09-10",
    summary: "Academic labs and battery industrial consortia report verified longevity metrics for non-lithium solid-state cells capable of 80% charge in under 11 minutes.",
    keyPoints: [
      "Eliminates dependency on scarce cobalt, nickel, and lithium deposits through abundant sodium salts.",
      "Retained 91.4% storage capacity after 1,200 high-voltage rapid charging cycles.",
      "Projected manufacturing costs are 40% below conventional lithium iron phosphate (LFP) cells."
    ],
    whyItMatters: "Drastically lowers EV manufacturing costs and unlocks high-density grid battery storage free from geopolitical supply chain bottlenecks.",
    whatsNext: "Automotive pilot packaging tests with two major automakers planned for spring 2027.",
    uncertainties: [
      "Electrochemical stability during sub-zero operational trials below -20°C."
    ],
    whatsNew: {
      lastCompared: "1h ago vs 6h ago",
      newlyReported: [
        "Nature Energy published the peer-reviewed crystallographic data validating solid electrolyte durability."
      ],
      changedDetails: [
        "Gravimetric energy density updated to 220 Wh/kg from preliminary lab estimate of 205 Wh/kg."
      ],
      conflictingReports: [
        "Patent holders differ on whether exclusive global manufacturing rights have been granted."
      ],
      stillUnknown: [
        "Yield rates on continuous high-speed roll-to-roll production lines."
      ]
    },
    sourceAgreement: {
      ratio: "4 of 4 sources confirm scientific publication metrics",
      score: 95,
      disclaimer: "Source Agreement measures reporting consensus across tracked outlets. It is not an independent truth score."
    },
    sources: [
      { id: "s8", name: "Nature Energy", headline: "High-Conductivity Solid Electrolytes for Low-Cost Sodium Cells", time: "1h ago", focus: "Peer-reviewed material science telemetry", url: "https://nature.com" },
      { id: "s9", name: "Electrek", headline: "Could This Sodium Battery Make $20,000 EVs Commonplace?", time: "2h ago", focus: "Automotive economics and mass adoption", url: "https://electrek.co" }
    ],
    timeline: [
      { id: "t8", time: "Today, 13:00", headline: "Full peer-reviewed findings released in Nature Energy", source: "Nature Energy", tag: "Publication" },
      { id: "t9", time: "Today, 09:30", headline: "Consortium signs pilot validation agreements with vehicle makers", source: "Electrek", tag: "Partnership" }
    ]
  },
  {
    id: "story-quantum-encryption-standard",
    title: "NIST Publishes Mandatory Post-Quantum Cryptography Migration Deadlines for Banking",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Digital security lock on a laptop",
    momentum: 68,
    status: "Active",
    lastUpdated: "2 hours ago",
    publishedDate: "2026-09-10",
    summary: "Federal standards agencies and international central banking groups have established strict 2028 migration milestones to deploy quantum-resistant algorithms across SWIFT and global transaction rails.",
    keyPoints: [
      "Financial institutions must replace RSA-2048 with lattice-based ML-KEM algorithms on primary gateways.",
      "Encrypted historical archives identified as prime target for 'harvest now, decrypt later' threats.",
      "Estimated transition cost for global banking exceeds $14 billion over three years."
    ],
    whyItMatters: "Preemptively shields global electronic commerce and sovereign financial communications from decryption by future quantum supercomputers.",
    whatsNext: "Interbank trial transactions using post-quantum signatures begin across 40 global banks next month.",
    uncertainties: [
      "Hardware latency overhead on legacy ATM and point-of-sale terminals."
    ],
    whatsNew: {
      lastCompared: "2h ago vs 8h ago",
      newlyReported: [
        "European Central Bank issued synchronized guidance aligning with NIST standards."
      ],
      changedDetails: [
        "Tier-2 regional banks granted an additional 6 months for legacy protocol retrofits."
      ],
      conflictingReports: [
        "Security researchers debate whether hybrid classical/quantum keys create temporary side-channel vulnerabilities."
      ],
      stillUnknown: [
        "Final hardware cryptographic accelerator production capacities."
      ]
    },
    sourceAgreement: {
      ratio: "6 of 7 sources align on 2028 enforcement timeline",
      score: 86,
      disclaimer: "Source Agreement measures reporting consensus across tracked outlets. It is not an independent truth score."
    },
    sources: [
      { id: "s10", name: "Wall Street Journal", headline: "Banks Face Looming Quantum Deadline for Encryption Overhaul", time: "2h ago", focus: "Banking compliance costs and board liability", url: "https://wsj.com" },
      { id: "s11", name: "Wired", headline: "NIST's Quantum-Proof Cryptography Is Officially Ready for Deployment", time: "3h ago", focus: "Algorithmic mechanics and lattice mathematics", url: "https://wired.com" }
    ],
    timeline: [
      { id: "t10", time: "Today, 12:00", headline: "NIST and BIS issue joint implementation roadmap", source: "Wall Street Journal", tag: "Standard" },
      { id: "t11", time: "Today, 08:30", headline: "First commercial PQC interbank test completed in Frankfurt", source: "Wired", tag: "Trial" }
    ]
  },
  ...ADDITIONAL_STORIES
];

export const DEMO_USER = {
  id: "user-1",
  name: "Alex Rivera",
  username: "alexrivera",
  email: "demo@newspulse.ai",
  role: "Senior Intelligence Analyst",
  organization: "Global News Desk",
  interests: ["Technology", "Science", "Energy", "Cybersecurity", "Markets"],
  savedCount: 3,
  followedCount: 2
};

export const DEMO_NOTIFICATIONS = [
  { 
    id: "n1", 
    storyId: "story-ai-eu-regulations", 
    title: "Breaking update on EU AI Act", 
    message: "France and Germany published an emergency joint communiqué on computational tier formulas.", 
    time: "12m ago", 
    read: false 
  },
  { 
    id: "n2", 
    storyId: "story-space-commercial-station", 
    title: "Module Burst Test Passed", 
    message: "NASA safety margins exceeded by 27% under ultimate pressure run.", 
    time: "38m ago", 
    read: false 
  },
  { 
    id: "n3", 
    storyId: "story-clean-energy-battery-breakthrough", 
    title: "Peer-reviewed telemetry published", 
    message: "Nature Energy verified solid-state sodium battery 1,200 cycle durability.", 
    time: "1h ago", 
    read: true 
  }
];
