"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SUPPORTED_LOCALES } from "../locales/messages";

function stripLocale(pathname) {
  if (!pathname) return "/";
  if (pathname === "/") return "/";
  const parts = pathname.split("/");
  const maybeLocale = parts[1];

  if (SUPPORTED_LOCALES.includes(maybeLocale)) {
    const rest = parts.slice(2).join("/");
    const normalized = `/${rest}`.replace(/\/+$/, "");
    return normalized || "/";
  }

  return pathname;
}

export function LocaleSwitcher() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const basePath = mounted ? stripLocale(pathname) : "/";

  const trHref = basePath === "/" ? "/" : basePath;
  const enHref = `/en${basePath === "/" ? "" : basePath}`;
  const isEnglish = mounted && pathname?.startsWith("/en");

  return (
    <span className="cs_fs_12 text-white" suppressHydrationWarning>
      <Link
        href={trHref}
        aria-current={!isEnglish ? "true" : undefined}
        className={!isEnglish ? "cs_accent_color" : ""}
      >
        TR
      </Link>
      <span className="mx-1">/</span>
      <Link
        href={enHref}
        aria-current={isEnglish ? "true" : undefined}
        className={isEnglish ? "cs_accent_color" : ""}
      >
        EN
      </Link>
    </span>
  );
}
