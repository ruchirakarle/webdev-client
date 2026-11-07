import { ReactNode } from "react";
import AccountNavigation from "./Navigation";
export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-account-screen" className="flex gap-4">
      <div className="w-[120px] shrink-0">
        <AccountNavigation />
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}