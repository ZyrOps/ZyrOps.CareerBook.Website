import type { VisualKey } from "@/content/types";
import { ExecutiveDashboard } from "@/components/home/executive-dashboard";
import { roleDashboards } from "@/components/home/executive-data";
import { GlobalMap } from "@/components/home/global-presence";
import { LifecycleDiagram } from "@/components/home/student-lifecycle";
import { ArchitectureDiagram } from "./architecture-diagram";
import { FinancialDiagram } from "./financial-diagram";
import { GovernanceDiagram } from "./governance-diagram";

export function Visual({ kind }: { kind: VisualKey }) {
  switch (kind) {
    case "architecture":
      return <ArchitectureDiagram />;
    case "governance":
      return <GovernanceDiagram />;
    case "financial":
      return <FinancialDiagram />;
    case "dashboard":
      return <ExecutiveDashboard data={roleDashboards[0]} />;
    case "map":
      return (
        <div className="rounded-2xl border border-line bg-white p-4 shadow-float">
          <GlobalMap showList={false} />
        </div>
      );
    case "lifecycle":
      return (
        <div className="rounded-2xl border border-line bg-white p-6 shadow-float">
          <LifecycleDiagram compact />
        </div>
      );
  }
}
