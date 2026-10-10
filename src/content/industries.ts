import type { ContentPage } from "./types";

export const industryPages: ContentPage[] = [
  {
    slug: "schools",
    section: "industries",
    navLabel: "Schools",
    title: "The Operating System for K-12 Schools",
    highlight: "K-12 Schools",
    metaTitle: "School Management Platform for K-12 Schools | CBSE, ICSE, IB, IGCSE",
    description:
      "Run admissions, academics, fees, transport, communication and compliance for CBSE, ICSE, State Board, IB, IGCSE and GCC curriculum schools on one platform.",
    eyebrow: "Schools",
    intro:
      "From kindergarten to grade 12, CareerBook ERP™ helps schools deliver a seamless experience to parents, empower teachers and give management complete visibility.",
    icon: "school",
    features: [
      { icon: "book", title: "Every board & curriculum", text: "CBSE, ICSE, State Boards, IB, Cambridge IGCSE, American and Ministry curricula." },
      { icon: "users", title: "Parent experience", text: "Mobile app for fees, attendance, homework, report cards and transport tracking." },
      { icon: "clipboard", title: "Report cards", text: "Board-compliant report cards, CCE and competency-based assessment." },
      { icon: "mapPin", title: "Transport safety", text: "GPS tracking, RFID boarding and instant parent alerts." },
    ],
    related: ["industries/educational-groups", "solutions/student-information-system", "solutions/communication-engagement"],
  },
  {
    slug: "colleges",
    section: "industries",
    navLabel: "Colleges",
    title: "Built for Colleges and Autonomous Institutions",
    highlight: "Colleges",
    metaTitle: "College Management Platform | Autonomous & Affiliated Colleges",
    description:
      "Manage CBCS academics, examinations, accreditation, placements and finance for affiliated and autonomous colleges with CareerBook ERP™.",
    eyebrow: "Colleges",
    intro:
      "Affiliated, autonomous and professional colleges rely on CareerBook ERP™ to simplify CBCS, examinations, NAAC accreditation and placements while improving student outcomes.",
    icon: "graduation",
    features: [
      { icon: "layers", title: "CBCS & electives", text: "Credit-based choice systems, elective allocation and credit transfer management." },
      { icon: "badge", title: "NAAC & NBA ready", text: "Automated evidence collection and SSR/AQAR report generation." },
      { icon: "briefcase", title: "Training & placements", text: "Recruiter management, drives, student readiness and placement analytics." },
      { icon: "clipboard", title: "Autonomous examinations", text: "Question papers, digital evaluation and result processing in-house." },
    ],
    related: ["solutions/accreditation-governance-suite", "solutions/examination-digital-evaluation", "industries/universities"],
  },
  {
    slug: "universities",
    section: "industries",
    navLabel: "Universities",
    title: "An Enterprise Platform for Universities",
    highlight: "Universities",
    metaTitle: "University ERP Platform | Enterprise Education Operating System",
    description:
      "An enterprise platform for public, private and deemed universities: affiliation management, research, examinations, accreditation and executive intelligence.",
    eyebrow: "Universities",
    intro:
      "Universities operate at the scale of enterprises. CareerBook ERP™ handles multiple faculties, affiliated colleges, research programmes and tens of thousands of students on a single, secure platform.",
    icon: "university",
    visual: "governance",
    features: [
      { icon: "network", title: "Affiliation management", text: "Manage affiliated colleges, inspections, approvals and university-wide reporting." },
      { icon: "search", title: "Research & PhD", text: "Research proposals, supervisor allocation, grants and thesis lifecycle." },
      { icon: "scan", title: "Large-scale evaluation", text: "On-screen evaluation for lakhs of scripts with secure moderation." },
      { icon: "dashboard", title: "Vice-Chancellor dashboards", text: "University-wide intelligence for VCs, registrars and controllers of examinations." },
    ],
    related: ["solutions/examination-digital-evaluation", "solutions/accreditation-governance-suite", "solutions/executive-intelligence-suite"],
  },
  {
    slug: "training-academies",
    section: "industries",
    navLabel: "Training Academies",
    title: "Software for Training Academies and Coaching Institutes",
    highlight: "Training Academies",
    metaTitle: "Training Academy & Coaching Institute Management Software",
    description:
      "Batch management, enquiries, online tests, fees, faculty scheduling and performance analytics for training academies, coaching and test-prep institutes.",
    eyebrow: "Training Academies",
    intro:
      "Coaching, test-prep, vocational and corporate training academies use CareerBook ERP™ to grow enrolments, run batches efficiently and prove learner outcomes.",
    icon: "target",
    features: [
      { icon: "funnel", title: "Enquiry to enrolment", text: "Lead capture, counselling, demo classes and fast online enrolment." },
      { icon: "calendar", title: "Batch scheduling", text: "Flexible batches, faculty allocation and multi-centre timetables." },
      { icon: "clipboard", title: "Online test series", text: "Mock tests, rank analysis and performance insights for every learner." },
      { icon: "banknote", title: "Flexible fees", text: "Course packages, instalments, EMI integrations and refunds." },
    ],
    related: ["solutions/student-recruitment-admission-crm", "solutions/examination-digital-evaluation", "platform/mobile-apps"],
  },
  {
    slug: "sports-academies",
    section: "industries",
    navLabel: "Sports Academies",
    title: "Run Sports Academies Like High-Performance Organisations",
    highlight: "Sports Academies",
    metaTitle: "Sports Academy Management Software | Athlete & Coach Management",
    description:
      "Athlete registration, coaching schedules, performance tracking, facility booking, memberships and fees for sports academies and residential sports schools.",
    eyebrow: "Sports Academies",
    intro:
      "From grassroots programmes to elite residential academies, CareerBook ERP™ manages athletes, coaches, facilities and memberships — while balancing academics for student-athletes.",
    icon: "trophy",
    features: [
      { icon: "users", title: "Athlete profiles", text: "Registrations, medical records, fitness assessments and progression history." },
      { icon: "chartLine", title: "Performance tracking", text: "Training loads, assessments and competition results with coach analytics." },
      { icon: "calendar", title: "Facilities & sessions", text: "Ground, court and pool booking with coach and session scheduling." },
      { icon: "dumbbell", title: "Memberships", text: "Programme memberships, renewals and automated fee collection." },
    ],
    related: ["solutions/student-information-system", "platform/mobile-apps", "solutions/financial-intelligence-suite"],
  },
  {
    slug: "educational-groups",
    section: "industries",
    navLabel: "Educational Groups",
    title: "Govern Educational Groups, Trusts and Dioceses",
    highlight: "Educational Groups",
    metaTitle: "Platform for Educational Groups, Trusts & Diocese Institutions",
    description:
      "Centralised governance, consolidated finance and executive intelligence for education groups, trusts, societies and diocese institutions running multiple campuses.",
    eyebrow: "Educational Groups",
    intro:
      "Groups running ten or two hundred institutions choose CareerBook ERP™ to standardise operations, consolidate finances and give trustees a live view of every campus.",
    icon: "building",
    visual: "governance",
    features: [
      { icon: "network", title: "Group hierarchy", text: "Trusts, societies, dioceses, regions and campuses modelled exactly as you operate." },
      { icon: "chartPie", title: "Consolidated finance", text: "Group-level revenue, collections and budgets with campus drill-down." },
      { icon: "clipboard", title: "Standard operating procedures", text: "Uniform policies, workflows and quality standards across every institution." },
      { icon: "dashboard", title: "Trustee dashboards", text: "Real-time executive intelligence for chairmen, secretaries and board members." },
    ],
    related: ["solutions/multi-campus-governance-platform", "solutions/executive-intelligence-suite", "solutions/financial-intelligence-suite"],
  },
];
