export const AGENCY_INFO = {
  name: "LIS ADVISORY",
  fullName: "LIS Advisory | Enterprise Information Architecture & Knowledge Labs",
  tagline: "Translating Human Knowledge into Machine-Intelligent Architecture",
  description: "Specialized Information & Library Science advisory. We architect enterprise taxonomies, open-source repositories (DSpace & Koha), semantic ontologies, and zero-hallucination AI datasets.",
  stats: [
    { label: "Digital Assets Cataloged", value: "3.8M+" },
    { label: "Search Efficiency Gain", value: "68%" },
    { label: "Retrieval Accuracy (RAG/AI)", value: "98.2%" },
    { label: "Institutional Repositories Live", value: "45+" },
  ],
};

export const SERVICES = [
  {
    id: "taxonomy-ontology",
    category: "AI & Taxonomy",
    title: "Enterprise Taxonomy & Semantic Ontology Engineering",
    tagline: "The foundation of search, retrieval, and knowledge discovery",
    description: "Unstructured enterprise data costs companies millions in lost productivity. We design faceted classification schemes, controlled vocabularies, and SKOS/OWL ontologies tailored to your industry domain.",
    features: [
      "Faceted categorization and hierarchical metadata schema design",
      "Controlled vocabularies (Thesauri, ANSI/NISO Z39.19 compliant)",
      "Knowledge graph schema development (Neo4j, RDF, SPARQL)",
      "Cross-system metadata mapping (Dublin Core, MODS, Schema.org)",
      "Search engine facet optimization and synset synonym dictionaries",
    ],
    tools: ["Protégé", "PoolParty", "Neo4j", "SKOS", "Dublin Core", "Python RDFlib"],
    deliverables: "Comprehensive Taxonomy Workbook, Machine-readable OWL/RDF Schema, Search Engine Rules",
    duration: "3 - 6 Weeks",
    popular: true,
  },
  {
    id: "ai-data-curation",
    category: "AI & Taxonomy",
    title: "Information Curation for LLMs & Semantic RAG Systems",
    tagline: "High-grade training & grounding data for corporate AI",
    description: "Large Language Models are only as good as the structured information fed into them. We clean, chunk, annotate, and enrich institutional text archives to eliminate hallucinations in Retrieval-Augmented Generation (RAG).",
    features: [
      "Information extraction, de-duplication, and semantic chunking",
      "Metadata enrichment for high-precision hybrid vector-lexical search",
      "Knowledge base audit for source freshness, contradiction, and authority",
      "Citation linking and provenance tracking for regulatory compliance",
      "Synthetic query generation for evaluation benchmarks",
    ],
    tools: ["LlamaIndex", "LangChain", "ChromaDB", "Zotero API", "spaCy", "Sentence Transformers"],
    deliverables: "Vector-ready Tagged Corpus, Provenance Audit Ledger, Embedding Evaluation Report",
    duration: "4 - 8 Weeks",
    popular: true,
  },
  {
    id: "repository-koha",
    category: "Digital Repositories",
    title: "Institutional Repositories & Library Modernization",
    tagline: "Turnkey DSpace, Koha, and Omeka deployments",
    description: "From academic universities and medical research hubs to corporate law libraries, we deploy, customize, and migrate open-source institutional repositories and integrated library systems (ILS).",
    features: [
      "DSpace 7.x / 8.x repository deployment and REST API integration",
      "Koha ILS cloud installation, patron management, and OPAC customization",
      "Legacy database migration (MARC21, MARCXML, Excel to Dublin Core)",
      "OAI-PMH harvest protocol configuration for global academic indexing",
      "RFID tagging workflow architecture and self-checkout integration",
    ],
    tools: ["DSpace", "Koha ILS", "Omeka S", "MarcEdit", "Linux/Ubuntu", "OAI-PMH"],
    deliverables: "Fully Hosted Repository, Tailored Discovery Interface, Staff Training, API Documentation",
    duration: "4 - 10 Weeks",
    popular: false,
  },
  {
    id: "digital-preservation",
    category: "Archival Preservation",
    title: "Archival Digitization & Digital Preservation (OAIS)",
    tagline: "Preserving rare collections and critical corporate records for centuries",
    description: "Physical and digital degradation threatens corporate memory and cultural heritage. We implement ISO 14721 (OAIS) standard digital preservation pipelines, ensuring long-term bit preservation and semantic access.",
    features: [
      "Physical digitization workflow design (Rare books, blueprints, legal deeds)",
      "Master archival TIFF & PDF/A format conversion with embedded metadata",
      "Checksum validation (SHA-256) and fixity monitoring protocols",
      "Archivematica & Islandora ingestion pipeline engineering",
      "Disaster recovery and multi-cloud cold storage strategy",
    ],
    tools: ["Archivematica", "FITS (File Information Tool Set)", "ExifTool", "PDF/A-3", "AWS Glacier"],
    deliverables: "Archival Information Packages (AIP), Access Information Packages (DIP), Preservation Policy",
    duration: "6 - 12 Weeks",
    popular: false,
  },
  {
    id: "research-synthesis",
    category: "Research Intelligence",
    title: "Systematic Literature Reviews & Bibliometric Intelligence",
    tagline: "Evidence-based research synthesis and scientific landscape mapping",
    description: "Expert information retrieval using advanced Boolean, MeSH, and proximity search strategies across PubMed, Scopus, Web of Science, and IEEE for academic, biotech, and policy organizations.",
    features: [
      "PRISMA-P compliant systematic review search protocols and deduplication",
      "Comprehensive grey literature harvesting and patent landscape analysis",
      "Bibliometric mapping and citation network analysis (VOSviewer, Bibliometrix)",
      "Evidence synthesis, screening facilitation (Rayyan, Covidence), and synthesis dossiers",
      "Competitor R&D activity tracking and emerging tech horizon scanning",
    ],
    tools: ["VOSviewer", "Rayyan", "Covidence", "R Bibliometrix", "PubMed MeSH", "Scopus API"],
    deliverables: "PRISMA Flow Diagram, Search Strategy Appendix, Bibliometric Cluster Report, Executive Brief",
    duration: "2 - 5 Weeks",
    popular: true,
  },
  {
    id: "records-governance",
    category: "Archival Preservation",
    title: "Corporate Records Management & Information Governance",
    tagline: "ISO 15489 compliance, retention scheduling & dark data reduction",
    description: "Eliminate legal liability and reduce cloud storage bloat by establishing defensible data retention, classification schemes, and disposition schedules for regulated enterprises.",
    features: [
      "Corporate file plan creation and functional business classification",
      "Retention & disposal schedules aligned with regulatory statutes",
      "Confidentiality & access privilege taxonomy (RBAC metadata)",
      "Dark data auditing across shared drives, SharePoint, and emails",
      "Records manager staff certification and SOP documentation",
    ],
    tools: ["SharePoint Syntex", "Purview", "Excel Modeling", "ISO 15489 Framework"],
    deliverables: "Enterprise Retention Schedule, Records Management Policy Manual, Remediation Plan",
    duration: "4 - 8 Weeks",
    popular: false,
  },
];

export const COMPARISON_DATA = {
  swamp: {
    title: "The Unmanaged Data Swamp (Without LIS)",
    subtitle: "Typical corporate drive, wiki, or legacy archive",
    searchTime: "24 minutes average search time",
    accuracy: "34% relevant hit rate",
    aiReadiness: "High hallucinations & outdated citations",
    cost: "Estimated $14,000 lost per employee annually",
    items: [
      { name: "Final_Report_v2_final_edited_v3.pdf", status: "Untagged", issue: "No author, duplicate versions, unknown date" },
      { name: "Compliance_Q3_Review_new.docx", status: "Unclassified", issue: "Missing retention policy; violates GDPR" },
      { name: "Scan_0049283_page4.tif", status: "Dark Asset", issue: "No OCR, zero metadata, completely invisible to search" },
      { name: "Customer_Agreement_2022_scan.pdf", status: "Risky", issue: "Confidential data stored in general public folder" },
    ]
  },
  structured: {
    title: "The Curated Knowledge Architecture (With LIS Advisory)",
    subtitle: "Semantic ontology, Dublin Core metadata & automated governance",
    searchTime: "4 seconds instant faceted discovery",
    accuracy: "99.1% verified precision hit rate",
    aiReadiness: "Vectorized, grounded & source-linked",
    cost: "Zero search drag, full compliance auditability",
    items: [
      { name: "REP-2024-FIN-089", title: "Global Financial Strategy 2024", tags: ["Dublin Core", "Financial Reporting", "Status: Approved", "Retention: 7 Yrs"] },
      { name: "POL-COMPL-GDPR-012", title: "Data Protection & Privacy Standard", tags: ["Classification: ISO 15489", "Security: Level 3", "Review: Annual"] },
      { name: "ARCH-HIST-MS-1892", title: "Founding Charter (1892) High-Res", tags: ["OAIS AIP", "SHA-256 Validated", "Full OCR", "Dublin Core XML"] },
      { name: "AGR-CLIENT-T1-992", title: "Enterprise Master Services Agreement", tags: ["Legal Taxonomy", "RBAC Protected", "Contract ID: #4492"] },
    ]
  }
};

export const CASE_STUDIES = [
  {
    client: "Apex Health Sciences University",
    sector: "Higher Education & Medical Research",
    challenge: "Over 85,000 research papers, theses, and clinical dissertations scattered across FTP servers and disconnected hard drives with no unified discovery or citation indexing.",
    solution: "Deployed enterprise DSpace 7 with tailored Dublin Core and MeSH ontology, automated batch ingest with MarcEdit, and configured OAI-PMH indexing with Google Scholar and PubMed.",
    results: [
      "100% of 85,000 research assets preserved and indexed",
      "Over 420,000 global international downloads within 6 months",
      "Integrated with campus Single Sign-On (SSO) and ORCID researchers profiles",
    ],
    metric: "4.8x",
    metricLabel: "Increase in Scholarly Citations",
  },
  {
    client: "Vanguard Global Legal LLP",
    sector: "Corporate Law & Litigation",
    challenge: "Law firm attorneys wasted an average of 45 minutes searching for prior precedent cases, settlement agreements, and contract clauses across 180,000 unindexed documents.",
    solution: "Built a customized legal taxonomy with 4-tier faceted search, automated metadata tagging using semantic NLP, and established an ISO 15489 digital records retention framework.",
    results: [
      "Average document search time plummeted from 45 minutes to 12 seconds",
      "$420,000 annual billable hour recovery across 65 associates",
      "Eliminated risk of non-compliant shredded or orphaned records",
    ],
    metric: "94%",
    metricLabel: "Reduction in Retrieval Latency",
  },
  {
    client: "BioGenex Therapeutics",
    sector: "Pharmaceutical AI & Oncology",
    challenge: "Internal RAG AI assistant had a 42% hallucination rate because scientific PDFs were ingested blindly without semantic chunking or clinical ontology grounding.",
    solution: "Our Information Specialists curated, chunked, and mapped 12,000 preclinical oncology papers to the NCI Thesaurus and Gene Ontology, establishing a verified Knowledge Graph.",
    results: [
      "AI hallucination rate dropped from 42% to under 1.8%",
      "Exact source citation link generated for every generated answer",
      "Preclinical literature review cycle shortened from 6 weeks to 3 days",
    ],
    metric: "98.2%",
    metricLabel: "Ground-Truth Retrieval Precision",
  },
];

export const METHODOLOGIES = [
  {
    code: "ISO 14721 (OAIS)",
    title: "Open Archival Information System",
    description: "The gold standard for digital preservation. We design Ingest (SIP), Archival Storage (AIP), and Dissemination (DIP) workflows ensuring data can be read in 2125 just as easily as 2025.",
  },
  {
    code: "ANSI/NISO Z39.19",
    title: "Controlled Vocabularies & Thesauri",
    description: "Guidelines for the construction, format, and management of monolingual controlled vocabularies, ensuring term relationships (BT, NT, RT, USE) are mathematically sound.",
  },
  {
    code: "Dublin Core & Schema.org",
    title: "Interoperable Metadata Architecture",
    description: "We implement 15 core elements and extended qualified metadata so search engines, harvest bots, and enterprise search platforms can index your holdings effortlessly.",
  },
  {
    code: "ISO 15489-1",
    title: "Information & Documentation Records Management",
    description: "Defensible policies and lifecycle control for records creation, maintenance, retention, and disposition to fulfill audit, regulatory, and legal discovery obligations.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Most IT vendors treat data as simple bytes on a drive. LIS Advisory treated our knowledge as an interconnected intellectual ecosystem. Their taxonomy work revolutionized how our researchers discover past clinical trials.",
    author: "Dr. Elena Rostova",
    title: "Dean of Research & Information Systems",
    org: "St. Jude Biomedical Consortium",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Setting up Koha and our custom digital archive was effortless. The team's deep command of library science and cataloging standards meant zero data loss during our 20-year catalog migration.",
    author: "Tariq Mansoor, MLS",
    title: "Director of Library Services",
    org: "National Institute of Public Policy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Our LLM project was failing because raw PDFs were choking the retrieval pipeline. Their information curation and ontology tagging fixed our RAG engine in three weeks flat.",
    author: "Marcus Vance",
    title: "VP of Artificial Intelligence",
    org: "Cognitive Synthetics Inc.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];
