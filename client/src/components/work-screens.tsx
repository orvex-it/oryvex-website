import type { ReactNode } from "react";

function BrowserChrome({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-md border border-neutral-200 bg-white shadow-[0_18px_50px_-24px_rgba(15,23,42,0.45)]">
      <div className="flex h-9 items-center gap-2 border-b border-neutral-200 bg-[#f3f4f6] px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-2 flex h-6 min-w-0 flex-1 items-center rounded bg-white px-2 text-[11px] text-neutral-500">
          <span className="truncate">{url}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

export function MobileAppScreen() {
  const stops = [
    { time: "08:40", title: "Warehouse A", detail: "12 parcels · loaded" },
    { time: "09:15", title: "Clinic Nord", detail: "Signature pending" },
    { time: "10:05", title: "Atelier Mare", detail: "Next stop · 2.4 km" },
  ];

  return (
    <div className="relative mx-auto w-[268px]">
      <span className="absolute -left-[3px] top-[92px] h-7 w-[3px] rounded-l-sm bg-[#3a3a3c]" />
      <span className="absolute -left-[3px] top-[132px] h-11 w-[3px] rounded-l-sm bg-[#3a3a3c]" />
      <span className="absolute -left-[3px] top-[184px] h-11 w-[3px] rounded-l-sm bg-[#3a3a3c]" />
      <span className="absolute -right-[3px] top-[148px] h-16 w-[3px] rounded-r-sm bg-[#3a3a3c]" />

      <div className="rounded-[2.6rem] bg-[#1c1c1e] p-[11px] shadow-[0_30px_60px_-28px_rgba(0,0,0,0.65),inset_0_0_0_1px_rgba(255,255,255,0.14)]">
        <div className="relative overflow-hidden rounded-[2.05rem] bg-[#f4f5f7]">
          <div className="absolute left-1/2 top-[10px] z-20 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

          <div className="flex items-center justify-between px-6 pb-1 pt-[14px] text-[12px] font-semibold text-neutral-900">
            <span>09:14</span>
            <span className="flex items-center gap-1 text-[10px]">
              <span className="flex items-end gap-[1px]">
                <span className="h-1 w-[2px] bg-neutral-900" />
                <span className="h-1.5 w-[2px] bg-neutral-900" />
                <span className="h-2 w-[2px] bg-neutral-900" />
                <span className="h-2.5 w-[2px] bg-neutral-900" />
              </span>
              <span className="ml-1 h-[9px] w-[18px] rounded-[2px] border border-neutral-900 p-[1px]">
                <span className="block h-full w-[70%] rounded-[1px] bg-neutral-900" />
              </span>
            </span>
          </div>

          <div className="bg-white px-4 pb-3 pt-5">
            <p className="text-[11px] text-neutral-500">Tuesday route</p>
            <p className="text-[16px] font-semibold text-neutral-900">Lina · 18 stops</p>
          </div>
          <div className="mx-3 mb-3 rounded-xl bg-[#167DB5] px-3 py-2.5 text-white">
            <p className="text-[10px] uppercase tracking-wide text-white/80">In progress</p>
            <p className="text-[13px] font-semibold">Clinic Nord</p>
            <p className="text-[11px] text-white/85">Arrive 09:15 · dock 2</p>
          </div>
          <div className="space-y-2 px-3 pb-5">
            {stops.map((stop) => (
              <div key={stop.title} className="flex items-start gap-2 rounded-lg bg-white px-2.5 py-2">
                <span className="w-9 shrink-0 text-[11px] font-medium text-[#167DB5]">{stop.time}</span>
                <span>
                  <span className="block text-[12px] font-medium text-neutral-900">{stop.title}</span>
                  <span className="block text-[11px] text-neutral-500">{stop.detail}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center bg-[#f4f5f7] pb-2 pt-1">
            <span className="h-1 w-28 rounded-full bg-neutral-900/80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WebSystemScreen() {
  const rows = [
    ["INV-2041", "Northwind Labs", "€12,480", "Paid"],
    ["INV-2042", "Helio Retail", "€3,260", "Open"],
    ["INV-2048", "Mare Atelier", "€8,910", "Review"],
  ];

  return (
    <BrowserChrome url="app.ledger.oryvex.dev/invoices">
      <div className="grid min-h-[280px] grid-cols-[132px_1fr] bg-white text-neutral-900">
        <aside className="border-r border-neutral-200 bg-[#f8fafc] px-3 py-4 text-[12px]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-400">Ledger</p>
          {["Overview", "Invoices", "Clients", "Payments"].map((item, index) => (
            <p key={item} className={`mb-2 rounded px-2 py-1 ${index === 1 ? "bg-[#167DB5]/10 font-medium text-[#167DB5]" : "text-neutral-600"}`}>
              {item}
            </p>
          ))}
        </aside>
        <div className="px-4 py-4">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="text-[11px] text-neutral-500">October</p>
              <p className="text-sm font-semibold">Open invoices</p>
            </div>
            <p className="text-[12px] font-medium text-neutral-700">€24,650</p>
          </div>
          <div className="overflow-hidden rounded border border-neutral-200 text-[11px]">
            <div className="grid grid-cols-4 bg-neutral-50 px-2 py-1.5 font-medium text-neutral-500">
              <span>Ref</span><span>Client</span><span>Amount</span><span>Status</span>
            </div>
            {rows.map((row) => (
              <div key={row[0]} className="grid grid-cols-4 border-t border-neutral-100 px-2 py-1.5">
                {row.map((cell) => <span key={cell}>{cell}</span>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export function ManagementScreen() {
  const items = [
    { sku: "CAB-12", name: "Patch cable", stock: "184", state: "OK" },
    { sku: "SRV-04", name: "Rack rail kit", stock: "6", state: "Low" },
    { sku: "PSU-90", name: "Power unit", stock: "22", state: "OK" },
  ];

  return (
    <BrowserChrome url="ops.northline.internal/stock">
      <div className="min-h-[280px] bg-[#f4f6f8] p-4 text-neutral-900">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold">Stock · Warehouse Lyon</p>
          <span className="rounded bg-white px-2 py-1 text-[11px] text-neutral-600">3 alerts</span>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-2 text-[11px]">
          {[
            ["On hand", "1,284"],
            ["Reserved", "96"],
            ["To receive", "41"],
          ].map(([label, value]) => (
            <div key={label} className="rounded bg-white px-2 py-2">
              <p className="text-neutral-500">{label}</p>
              <p className="text-sm font-semibold">{value}</p>
            </div>
          ))}
        </div>
        <div className="rounded bg-white text-[11px]">
          {items.map((item) => (
            <div key={item.sku} className="grid grid-cols-[64px_1fr_40px_40px] items-center border-b border-neutral-100 px-2 py-1.5 last:border-0">
              <span className="font-medium">{item.sku}</span>
              <span>{item.name}</span>
              <span>{item.stock}</span>
              <span className={item.state === "Low" ? "text-amber-700" : "text-emerald-700"}>{item.state}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

export function WebsiteScreen() {
  return (
    <BrowserChrome url="mare-atelier.com">
      <div className="min-h-[280px] bg-[#fbfbf9] text-neutral-900">
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2 text-[11px]">
          <span className="font-semibold tracking-wide">MARE</span>
          <span className="hidden gap-3 text-neutral-500 sm:flex">
            <span>Work</span><span>Studio</span><span>Contact</span>
          </span>
        </div>
        <div className="grid gap-3 px-4 py-5 sm:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-neutral-500">Furniture studio</p>
            <p className="mt-1 text-xl font-semibold leading-tight">Tables made for long rooms.</p>
            <p className="mt-2 max-w-[220px] text-[12px] leading-relaxed text-neutral-600">Oak, steel, and a two-week lead time from the Lyon workshop.</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-700">
            <div className="flex h-24 items-end bg-[#d7e3ea] p-2">Oak table</div>
            <div className="flex h-24 items-end bg-[#c5d0c8] p-2">Steel bench</div>
            <div className="col-span-2 flex h-16 items-end bg-[#e7e1d8] p-2">Workshop · Lyon</div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export function CloudScreen() {
  const services = [
    ["api-gateway", "3/3", "healthy"],
    ["billing-worker", "2/2", "healthy"],
    ["search-index", "1/2", "degraded"],
  ];

  return (
    <BrowserChrome url="console.cloud.oryvex.dev/clusters/prod-eu">
      <div className="min-h-[280px] bg-[#0f1720] p-4 font-mono text-[11px] text-slate-200">
        <div className="mb-3 flex items-center justify-between">
          <p>prod-eu-1 · Kubernetes 1.31</p>
          <span className="text-emerald-400">region eu-west-3</span>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            ["CPU", "42%"],
            ["Memory", "61%"],
            ["Pods", "86"],
          ].map(([label, value]) => (
            <div key={label} className="rounded border border-white/10 bg-white/5 px-2 py-2">
              <p className="text-slate-400">{label}</p>
              <p className="text-sm text-white">{value}</p>
            </div>
          ))}
        </div>
        {services.map(([name, ready, status]) => (
          <div key={name} className="grid grid-cols-[1fr_40px_72px] border-t border-white/10 py-1.5">
            <span>{name}</span>
            <span>{ready}</span>
            <span className={status === "degraded" ? "text-amber-300" : "text-emerald-400"}>{status}</span>
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

function FlowNode({ kicker, title, detail, tone = "neutral" }: { kicker: string; title: string; detail: string; tone?: "neutral" | "ai" }) {
  return (
    <div className="min-w-[140px] flex-1 rounded border border-neutral-200 bg-white px-2.5 py-2 shadow-sm">
      <p className={`text-[10px] uppercase ${tone === "ai" ? "text-[#167DB5]" : "text-neutral-400"}`}>{kicker}</p>
      <p className="font-medium text-neutral-900">{title}</p>
      <p className="text-neutral-500">{detail}</p>
    </div>
  );
}

export function AutomationScreen() {
  return (
    <BrowserChrome url="n8n.oryvex.dev/workflow/184">
      <div className="min-h-[280px] bg-[#f6f6f7] p-4 text-[11px]">
        <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
          <FlowNode kicker="Trigger" title="Gmail" detail="new invoice" />
          <span className="hidden h-px w-6 shrink-0 bg-neutral-300 lg:block" />
          <div className="flex flex-1 flex-col gap-2">
            <FlowNode kicker="AI" title="Extract fields" detail="vendor, total, due date" tone="ai" />
            <FlowNode kicker="IF" title="Amount > 5,000" detail="review branch" />
          </div>
          <span className="hidden h-px w-6 shrink-0 bg-neutral-300 lg:block" />
          <div className="flex flex-1 flex-col gap-2">
            <FlowNode kicker="Action" title="ERP" detail="create bill" />
            <FlowNode kicker="Action" title="Slack" detail="#finance" />
          </div>
        </div>
        <p className="mt-4 text-neutral-500">Last run 09:02 · 146 items · 0 errors</p>
      </div>
    </BrowserChrome>
  );
}
