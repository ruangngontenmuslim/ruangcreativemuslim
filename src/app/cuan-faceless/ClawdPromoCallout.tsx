"use client";

import React from "react";
import { ClawdPromoVisual } from "@/components/ui/ClawdLoadingVisuals";
import { Sparkles, ArrowDown } from "lucide-react";

export function ClawdPromoCallout() {
  return (
    <div className="w-full flex flex-col items-center justify-center my-3 select-none">
      <div className="relative w-full max-w-[440px] sm:max-w-[480px] p-3.5 sm:p-4 rounded-2xl bg-gradient-to-b from-orange-500/[0.08] via-amber-500/[0.04] to-transparent dark:from-orange-500/[0.14] dark:via-amber-500/[0.06] dark:to-transparent border border-orange-500/25 dark:border-orange-500/35 shadow-xs flex flex-row items-center gap-3 sm:gap-4">
        
        {/* Animated Mascot Clawd */}
        <div className="shrink-0 flex items-center justify-center -my-2.5">
          <ClawdPromoVisual className="scale-110 sm:scale-125 drop-shadow-sm" />
        </div>

        {/* Speech Bubble / CTA Content */}
        <div className="flex-1 flex flex-col items-start text-left min-w-0">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-500/15 dark:bg-orange-500/25 text-orange-600 dark:text-orange-400 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider mb-1">
            <Sparkles className="w-3 h-3 text-amber-500 animate-spin" />
            <span>Spesial Hari Ini &amp; Besok</span>
          </div>

          <p className="text-[13px] sm:text-[14px] font-bold text-gray-950 dark:text-white leading-snug">
            Yuk pilih paket terbaikmu sekarang!
          </p>

          <p className="text-[11px] sm:text-[12px] text-gray-600 dark:text-gray-300 mt-0.5 flex items-center gap-1">
            <span>Klik <strong className="text-orange-600 dark:text-orange-400 font-semibold">Detail Paket</strong> di bawah untuk cek isinya</span>
            <ArrowDown className="w-3 h-3 text-orange-500 animate-bounce shrink-0" />
          </p>
        </div>

      </div>
    </div>
  );
}
