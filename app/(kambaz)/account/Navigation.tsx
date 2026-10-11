"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const links = [
    { label: "Signin", href: "/account/signin", id: "wd-account-signin-link" },
    { label: "Signup", href: "/account/signup", id: "wd-account-signup-link" },
    { label: "Profile", href: "/account/profile", id: "wd-account-profile-link" },
  ];
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map(({ label, href, id }) => (
        <Link
          key={id}
          href={href}
          id={id}
          className={pathname.startsWith(href)
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}