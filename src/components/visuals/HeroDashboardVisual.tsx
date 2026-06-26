export default function HeroDashboardVisual() {
  return (
    <div className="relative mx-auto mt-12 max-w-3xl animate-fade-in-up animation-delay-300">
      <div className="overflow-hidden rounded-xl border border-mystic-mint bg-white/80 shadow-[0_8px_40px_rgba(17,76,90,0.1)] backdrop-blur-sm">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-mystic-mint px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-forsythia/60" />
          <div className="h-3 w-3 rounded-full bg-deep-saffron/60" />
          <div className="h-3 w-3 rounded-full bg-nocturnal-expedition/20" />
          <span className="ml-3 font-heading text-[11px] font-medium text-nocturnal-expedition/50">
            fluxora-dashboard — workflow monitor
          </span>
        </div>

        {/* Dashboard content */}
        <div className="grid grid-cols-3 gap-3 p-4">
          {/* Stat cards */}
          <div className="rounded-lg bg-arctic-powder p-3">
            <p className="font-heading text-[10px] font-medium uppercase tracking-wider text-nocturnal-expedition/50">
              Active Workflows
            </p>
            <p className="mt-1 font-heading text-xl font-bold text-oceanic-noir">
              2,847
            </p>
            <span className="mt-0.5 inline-block font-heading text-[10px] font-medium text-green-600">
              ↑ 12.4%
            </span>
          </div>
          <div className="rounded-lg bg-arctic-powder p-3">
            <p className="font-heading text-[10px] font-medium uppercase tracking-wider text-nocturnal-expedition/50">
              Data Points
            </p>
            <p className="mt-1 font-heading text-xl font-bold text-oceanic-noir">
              10.2M
            </p>
            <span className="mt-0.5 inline-block font-heading text-[10px] font-medium text-green-600">
              ↑ 8.1%
            </span>
          </div>
          <div className="rounded-lg bg-arctic-powder p-3">
            <p className="font-heading text-[10px] font-medium uppercase tracking-wider text-nocturnal-expedition/50">
              Uptime
            </p>
            <p className="mt-1 font-heading text-xl font-bold text-oceanic-noir">
              99.9%
            </p>
            <span className="mt-0.5 inline-block font-heading text-[10px] font-medium text-forsythia">
              Healthy
            </span>
          </div>
        </div>

        {/* Pipeline visualization */}
        <div className="border-t border-mystic-mint px-4 py-3">
          <p className="mb-2 font-heading text-[10px] font-medium uppercase tracking-wider text-nocturnal-expedition/50">
            Pipeline Flow
          </p>
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 rounded-md bg-nocturnal-expedition/10 px-2 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="font-heading text-[9px] font-medium text-oceanic-noir">
                CRM
              </span>
            </div>
            <div className="h-px w-4 bg-nocturnal-expedition/20" />
            <div className="flex items-center gap-1 rounded-md bg-forsythia/20 px-2 py-1">
              <span className="font-heading text-[9px] font-medium text-oceanic-noir">
                Transform
              </span>
            </div>
            <div className="h-px w-4 bg-nocturnal-expedition/20" />
            <div className="flex items-center gap-1 rounded-md bg-nocturnal-expedition/10 px-2 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="font-heading text-[9px] font-medium text-oceanic-noir">
                Warehouse
              </span>
            </div>
            <div className="h-px w-4 bg-nocturnal-expedition/20" />
            <div className="flex items-center gap-1 rounded-md bg-deep-saffron/20 px-2 py-1">
              <span className="font-heading text-[9px] font-medium text-oceanic-noir">
                AI Route
              </span>
            </div>
            <div className="h-px w-4 bg-nocturnal-expedition/20" />
            <div className="flex items-center gap-1 rounded-md bg-nocturnal-expedition/10 px-2 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="font-heading text-[9px] font-medium text-oceanic-noir">
                Report
              </span>
            </div>
          </div>
        </div>

        {/* Workflow rows */}
        <div className="border-t border-mystic-mint px-4 py-3">
          {[
            { name: "sync-crm-to-warehouse", status: "Running", time: "2s ago" },
            { name: "enrich-leads-ai", status: "Running", time: "5s ago" },
            { name: "daily-report-gen", status: "Scheduled", time: "In 4h" },
          ].map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between border-b border-mystic-mint/50 py-1.5 last:border-0"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`h-1.5 w-1.5 rounded-full ${
                    row.status === "Running" ? "bg-green-500" : "bg-forsythia"
                  }`}
                />
                <span className="font-heading text-[10px] font-medium text-oceanic-noir">
                  {row.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-heading text-[10px] text-nocturnal-expedition/50">
                  {row.time}
                </span>
                <span
                  className={`font-heading text-[9px] font-medium px-1.5 py-0.5 rounded ${
                    row.status === "Running"
                      ? "bg-green-50 text-green-600"
                      : "bg-forsythia/10 text-deep-saffron"
                  }`}
                >
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient behind the dashboard */}
      <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-forsythia/10 via-mystic-mint/50 to-deep-saffron/5 blur-2xl" />
    </div>
  );
}
