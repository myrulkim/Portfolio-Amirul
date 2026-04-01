import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Software Engineering",
  description: "Manage portfolio content and details",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-apple-blue selection:text-white">
      {children}
    </div>
  );
}
