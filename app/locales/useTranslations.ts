"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { getMessages, resolveLocaleFromPath } from "./messages";

export function useTranslations() {
  const pathname = usePathname();

  const locale = useMemo(
    () => resolveLocaleFromPath(pathname ?? null),
    [pathname],
  );

  const t = useMemo(() => getMessages(locale), [locale]);

  return { locale, t };
}
