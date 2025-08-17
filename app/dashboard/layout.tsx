import { Sidebar } from "../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="fixed inset-y-0 left-0 w-64">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto px-30 py-8">{children}</div>
    </div>
  );
}
