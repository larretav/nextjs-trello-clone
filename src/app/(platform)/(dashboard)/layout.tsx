import { Navbar } from "./organization/_components";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}