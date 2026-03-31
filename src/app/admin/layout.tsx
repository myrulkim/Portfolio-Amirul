"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide main navigation and footer when in admin dashboard
  useEffect(() => {
    // We achieve isolation by relying on the folder structure
    // But since root layout might wrap this with nav, we can add a class to body
    // or conditionally render nav in root layout.
    // For now, we'll let this be simple and just render children.
  }, [pathname]);

  return <div className="min-h-screen bg-black text-white selection:bg-apple-blue selection:text-white">{children}</div>;
}
