import { ReactNode } from "react";
import "./kambaz.css"; 
import KambazNavigation from "./Navigation";
import { AccountProvider } from "./account/AccountContext";
export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <AccountProvider>
      <div id="wd-kambaz" className="font-sans">
        <KambazNavigation />
        <div className="p-3 md:ml-[120px]">{children}</div>
      </div>
    </AccountProvider>
  );
}