"use client";

import React, { useState, useEffect } from "react";
import { ClawdPromoVisual } from "@/components/ui/ClawdLoadingVisuals";
import { Flame } from "lucide-react";

const STORAGE_KEY = "cuan_faceless_promo_deadline_v3";

function createFreshDeadline(): number {
  // Target: Besok malam pukul 23:59:59 (Evergreen 24-48 jam loop)
  const target = new Date();
  target.setDate(target.getDate() + 1);
  target.setHours(23, 59, 59, 999);
  return target.getTime();
}

function getDeadline(): number {
  if (typeof window === "undefined") return Date.now() + 86400000;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const val = parseInt(saved, 10);
      if (!isNaN(val) && val > Date.now()) {
        return val;
      }
    }
    const fresh = createFreshDeadline();
    localStorage.setItem(STORAGE_KEY, fresh.toString());
    return fresh;
  } catch {
    return Date.now() + 86400000;
  }
}

function pad(num: number): string {
  return String(Math.max(0, num)).padStart(2, "0");
}

export function ClawdPromoCallout() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    setMounted(true);
    let deadline = getDeadline();

    const update = () => {
      let diff = deadline - Date.now();

      // Evergreen Auto-Loop: jika timer menyentuh 0 atau habis,
      // otomatis memperbarui siklus promo baru tanpa pernah berhenti di 00:00:00!
      if (diff <= 0) {
        deadline = createFreshDeadline();
        try {
          localStorage.setItem(STORAGE_KEY, deadline.toString());
        } catch {
          // ignore
        }
        diff = Math.max(1000, deadline - Date.now());
      }

      const totalSec = Math.floor(diff / 1000);
      const hours = Math.floor(totalSec / 3600);
      const minutes = Math.floor((totalSec % 3600) / 60);
      const seconds = totalSec % 60;
      setTimeLeft({ hours, minutes, seconds });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center my-3 select-none">
      <div className="relative w-full max-w-[440px] sm:max-w-[480px] p-3.5 sm:p-4 rounded-2xl bg-gradient-to-b from-orange-500/[0.08] via-amber-500/[0.04] to-transparent dark:from-orange-500/[0.14] dark:via-amber-500/[0.06] dark:to-transparent border border-orange-500/25 dark:border-orange-500/35 shadow-xs flex flex-row items-center justify-center gap-3 sm:gap-5">
        
        {/* Animated Mascot Clawd (Lengan proporsional & menunjuk ceria ke timer) */}
        <div className="shrink-0 flex items-center justify-center -my-2">
          <ClawdPromoVisual className="scale-105 sm:scale-115 drop-shadow-sm" />
        </div>

        {/* Countdown Timer dengan Angka Besar & Jelas */}
        <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left min-w-0">
          
          {/* Badge Urgensi */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/15 dark:bg-orange-500/25 text-orange-600 dark:text-orange-400 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider mb-1.5">
            <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500 animate-pulse" />
            <span>Promo Berakhir Dalam:</span>
          </div>

          {/* Kotak Angka Timer Besar */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            
            {/* Jam */}
            <div className="flex flex-col items-center">
              <div className="w-12 sm:w-14 h-11 sm:h-12 rounded-xl bg-gray-900 dark:bg-black text-white dark:text-orange-300 flex items-center justify-center font-black text-xl sm:text-2xl shadow-sm border border-gray-800 dark:border-white/10 tabular-nums">
                {mounted ? pad(timeLeft.hours) : "23"}
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase mt-1 tracking-wider">
                Jam
              </span>
            </div>

            {/* Titik Dua Pemisah */}
            <span className="text-lg sm:text-xl font-black text-gray-400 dark:text-gray-500 mb-3.5 animate-pulse">
              :
            </span>

            {/* Menit */}
            <div className="flex flex-col items-center">
              <div className="w-12 sm:w-14 h-11 sm:h-12 rounded-xl bg-gray-900 dark:bg-black text-white dark:text-orange-300 flex items-center justify-center font-black text-xl sm:text-2xl shadow-sm border border-gray-800 dark:border-white/10 tabular-nums">
                {mounted ? pad(timeLeft.minutes) : "59"}
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase mt-1 tracking-wider">
                Menit
              </span>
            </div>

            {/* Titik Dua Pemisah */}
            <span className="text-lg sm:text-xl font-black text-gray-400 dark:text-gray-500 mb-3.5 animate-pulse">
              :
            </span>

            {/* Detik (Warna Oranye Spesial Berdetak) */}
            <div className="flex flex-col items-center">
              <div className="w-12 sm:w-14 h-11 sm:h-12 rounded-xl bg-orange-500 dark:bg-orange-500 text-white flex items-center justify-center font-black text-xl sm:text-2xl shadow-sm shadow-orange-500/25 tabular-nums">
                {mounted ? pad(timeLeft.seconds) : "59"}
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-orange-600 dark:text-orange-400 uppercase mt-1 tracking-wider">
                Detik
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
