import type { IconKey } from "@/components/ui/icon";

export interface RoleDashboard {
  id: string;
  role: string;
  icon: IconKey;
  heading: string;
  points: string[];
  kpis: { label: string; value: string; delta: string }[];
  bars: { title: string; values: number[]; labels: string[] };
  trend: { title: string; values: number[]; labels: string[] };
}

const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const roleDashboards: RoleDashboard[] = [
  {
    id: "chairman",
    role: "Chairman / CEO",
    icon: "building",
    heading: "Institutional Overview",
    points: [
      "Complete visibility across all campuses",
      "Real-time academic and financial insights",
      "Track performance and growth",
      "Data-driven decision making",
    ],
    kpis: [
      { label: "Total Institutions", value: "12", delta: "2 new" },
      { label: "Total Students", value: "1,25,500", delta: "8.2%" },
      { label: "Total Revenue", value: "₹320 Cr", delta: "12%" },
      { label: "Overall Growth", value: "24%", delta: "4.1%" },
    ],
    bars: {
      title: "Students by Institution",
      values: [18, 24, 12, 30, 16, 22],
      labels: ["CBS Main", "North", "Intl School", "Engineering", "Business", "University"],
    },
    trend: { title: "Revenue Trend", values: [210, 228, 225, 252, 266, 260, 288, 301, 320], labels: months },
  },
  {
    id: "principal",
    role: "Principal",
    icon: "school",
    heading: "Campus Performance",
    points: [
      "Live attendance for students and staff",
      "Syllabus coverage and academic progress",
      "At-risk student early warnings",
      "Parent engagement and feedback",
    ],
    kpis: [
      { label: "Students", value: "4,820", delta: "3.1%" },
      { label: "Attendance", value: "95.4%", delta: "1.2%" },
      { label: "Pass Rate", value: "92%", delta: "2.6%" },
      { label: "Staff Present", value: "98%", delta: "0.4%" },
    ],
    bars: {
      title: "Attendance by Grade",
      values: [96, 94, 97, 92, 95, 93],
      labels: ["Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    },
    trend: { title: "Academic Performance", values: [71, 73, 72, 76, 78, 77, 81, 83, 85], labels: months },
  },
  {
    id: "finance",
    role: "Finance Head",
    icon: "wallet",
    heading: "Financial Control",
    points: [
      "Collections and dues across every campus",
      "Budget versus actuals in real time",
      "AI-powered default forecasting",
      "Same-day gateway reconciliation",
    ],
    kpis: [
      { label: "Collected", value: "₹48.6 Cr", delta: "9.4%" },
      { label: "Outstanding", value: "₹6.2 Cr", delta: "3.8%" },
      { label: "Collection Rate", value: "88.7%", delta: "5.1%" },
      { label: "Budget Utilised", value: "72%", delta: "On track" },
    ],
    bars: {
      title: "Collections by Campus",
      values: [12, 9, 7, 11, 5, 8],
      labels: ["CBS Main", "North", "Intl School", "Engineering", "Business", "University"],
    },
    trend: { title: "Monthly Cash Flow", values: [3.8, 5.6, 4.1, 6.4, 4.9, 5.2, 6.8, 5.7, 7.1], labels: months },
  },
  {
    id: "registrar",
    role: "Registrar",
    icon: "idCard",
    heading: "Admissions & Records",
    points: [
      "Application pipeline by programme",
      "Enrolment and seat utilisation",
      "Examination and result timelines",
      "Certificate and verification workflows",
    ],
    kpis: [
      { label: "Applications", value: "18,420", delta: "14%" },
      { label: "Admitted", value: "6,940", delta: "9.6%" },
      { label: "Conversion", value: "37.7%", delta: "2.2%" },
      { label: "Results Published", value: "98%", delta: "On time" },
    ],
    bars: {
      title: "Admissions by Programme",
      values: [22, 16, 28, 12, 19, 9],
      labels: ["B.Tech", "BBA", "B.Sc", "MBA", "B.Com", "PhD"],
    },
    trend: { title: "Application Trend", values: [900, 1400, 2600, 2100, 3200, 2400, 1800, 2200, 1820], labels: months },
  },
];
