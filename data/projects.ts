export default [
  {
    title: "WalkApart: How DMARC Receivers Diverge in the RFC 9989 Transition",
    year: 2026,
    status: "Manuscript under review",
    description:
      "A differential-testing harness that runs 7 DMARC libraries on identical inputs, scaling from RFC 9989 (DMARCbis) test cases to real-world domains.",
    highlights: [
      "154,886 cases from 60,978 real top-100k domains",
      "9 bugs across 6 libraries, including 2 regressions from an RFC 9989 update",
      "A policy bypass affecting 2,265 real domains",
      "Reported to 6 maintainer teams",
    ],
    tags: ["email security", "differential testing", "DMARC"],
  },
  {
    title: "Unsecret: an open-source C++20 scanner for leaked credentials",
    year: 2026,
    status: "Paper under review · repo going public Dec 2026",
    description:
      "A secret scanner for source code, built around a from-scratch Aho-Corasick keyword prefilter.",
    highlights: [
      "13.6x faster scans on the CredData benchmark, identical findings",
      "64.8% recall at 82.6% precision on a held-out CredData split (167 repos)",
      "2.5x the recall of its format rules alone",
    ],
    tags: ["secret detection", "C++20", "static analysis"],
  },
  {
    title: "A Comprehensive Survey of Sarcasm Detection: Unveiling Features, Approaches and Challenges",
    year: 2025,
    status: "Personal project",
    description:
      "A survey of sarcasm detection research, covering features, modelling approaches and open challenges.",
    highlights: [],
    tags: ["NLP", "survey"],
  },
];
