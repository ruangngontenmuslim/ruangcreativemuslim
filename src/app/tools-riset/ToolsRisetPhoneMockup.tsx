"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  Play,
  Heart,
  MessageSquare,
  Search,
  Check,
  CheckCircle2,
  FileSpreadsheet,
  Layers,
  Film,
  Sparkles,
  SlidersHorizontal,
  X,
  Copy,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

// Platform meta definitions
export type PlatformType = "instagram" | "tiktok" | "youtube" | "facebook";

interface PlatformConfig {
  id: PlatformType;
  name: string;
  badge: string;
  iconBg: string;
  targetHandle: string;
  targetName: string;
  followers: string;
  avgViews: string;
  viralCount: string;
  formatTag: string;
  hookText: string;
  scriptSnippet: string;
  posts: {
    id: string;
    outlier: number;
    views: string;
    likes: string;
    comments: string;
    format: "reel" | "carousel" | "video" | "photo";
    colorBg: string;
    caption: string;
  }[];
}

const PLATFORMS: Record<PlatformType, PlatformConfig> = {
  instagram: {
    id: "instagram",
    name: "Instagram",
    badge: "Reels & Carousel",
    iconBg: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    targetHandle: "ruangcreativemuslim",
    targetName: "Ruang Creative Muslim",
    followers: "162K Followers",
    avgViews: "85.4K Views",
    viralCount: "8 Konten Outlier",
    formatTag: "Reels",
    hookText: "3 Kesalahan fatal bikin konten yang bikin views kamu mentok 200...",
    scriptSnippet:
      "Banyak kreator pemula mikir harus punya kamera mahal. Padahal 3 detik pertama di video ini kuncinya ada pada pola kontras visual...",
    posts: [
      {
        id: "ig-1",
        outlier: 14.8,
        views: "2.4M",
        likes: "185K",
        comments: "4.2K",
        format: "reel",
        colorBg: "from-amber-600/40 via-purple-700/50 to-pink-600/40",
        caption: "3 Kesalahan bikin konten faceless",
      },
      {
        id: "ig-2",
        outlier: 8.4,
        views: "1.1M",
        likes: "94K",
        comments: "1.8K",
        format: "reel",
        colorBg: "from-blue-600/40 via-indigo-700/50 to-purple-600/40",
        caption: "Bongkar cara jual produk digital",
      },
      {
        id: "ig-3",
        outlier: 5.2,
        views: "680K",
        likes: "52K",
        comments: "950",
        format: "carousel",
        colorBg: "from-emerald-600/40 via-teal-700/50 to-cyan-600/40",
        caption: "Roadmap 30 hari konten FYP",
      },
      {
        id: "ig-4",
        outlier: 3.8,
        views: "410K",
        likes: "31K",
        comments: "620",
        format: "reel",
        colorBg: "from-rose-600/40 via-orange-700/50 to-amber-600/40",
        caption: "Ide konten faceless modal HP",
      },
    ],
  },
  tiktok: {
    id: "tiktok",
    name: "TikTok",
    badge: "FYP & Photo Slide",
    iconBg: "from-gray-900 via-gray-800 to-black",
    targetHandle: "kreatorviral.id",
    targetName: "Kreator Viral ID",
    followers: "480K Followers",
    avgViews: "120K Views",
    viralCount: "12 Konten FYP",
    formatTag: "Photo Slide",
    hookText: "Trik rahasia tembus FYP TikTok dalam 24 jam cuma modal HP doang!",
    scriptSnippet:
      "Slide 1 langsung to the point. Jangan basa-basi pengenalan diri, gunakan pertanyaan menggugah rasa penasaran pembaca...",
    posts: [
      {
        id: "tt-1",
        outlier: 16.5,
        views: "3.8M",
        likes: "290K",
        comments: "6.8K",
        format: "video",
        colorBg: "from-cyan-600/40 via-blue-700/50 to-black/60",
        caption: "Cara tembus FYP 24 jam",
      },
      {
        id: "tt-2",
        outlier: 9.1,
        views: "1.4M",
        likes: "120K",
        comments: "2.3K",
        format: "photo",
        colorBg: "from-rose-600/40 via-pink-700/50 to-purple-800/60",
        caption: "5 Niche konten cuan tanpa wajah",
      },
      {
        id: "tt-3",
        outlier: 6.0,
        views: "890K",
        likes: "75K",
        comments: "1.4K",
        format: "video",
        colorBg: "from-emerald-600/40 via-teal-700/50 to-gray-900/60",
        caption: "Tools AI gratis buat kreator",
      },
      {
        id: "tt-4",
        outlier: 4.3,
        views: "540K",
        likes: "42K",
        comments: "810",
        format: "photo",
        colorBg: "from-amber-600/40 via-orange-700/50 to-gray-900/60",
        caption: "Struktur caption TikTok viral",
      },
    ],
  },
  youtube: {
    id: "youtube",
    name: "YouTube",
    badge: "Shorts & Video",
    iconBg: "from-red-600 via-rose-600 to-red-700",
    targetHandle: "BisnisDigitalID",
    targetName: "Bisnis Digital ID",
    followers: "350K Subs",
    avgViews: "45K Views",
    viralCount: "6 Konten Outlier",
    formatTag: "Shorts",
    hookText: "Cara dapatin omset 2 digit dari produk digital tanpa nampilin wajah!",
    scriptSnippet:
      "Di video ini saya bongkar step-by-step dari cari produk PLR, bikin landing page simpel, sampai automasi DM yang closing otomatis...",
    posts: [
      {
        id: "yt-1",
        outlier: 12.2,
        views: "1.8M",
        likes: "140K",
        comments: "3.1K",
        format: "reel",
        colorBg: "from-red-600/40 via-rose-700/50 to-amber-700/40",
        caption: "Omset 2 digit tanpa wajah",
      },
      {
        id: "yt-2",
        outlier: 7.9,
        views: "920K",
        likes: "68K",
        comments: "1.5K",
        format: "reel",
        colorBg: "from-orange-600/40 via-amber-700/50 to-red-800/40",
        caption: "Bongkar algoritma YouTube Shorts",
      },
      {
        id: "yt-3",
        outlier: 4.5,
        views: "480K",
        likes: "32K",
        comments: "820",
        format: "video",
        colorBg: "from-purple-600/40 via-indigo-700/50 to-blue-800/40",
        caption: "Tutorial tools AI ngonten",
      },
      {
        id: "yt-4",
        outlier: 3.2,
        views: "310K",
        likes: "21K",
        comments: "490",
        format: "reel",
        colorBg: "from-teal-600/40 via-emerald-700/50 to-gray-900/40",
        caption: "Setup channel faceless 2026",
      },
    ],
  },
  facebook: {
    id: "facebook",
    name: "Facebook",
    badge: "Reels & Video",
    iconBg: "from-blue-600 via-indigo-600 to-blue-700",
    targetHandle: "InspirasiBisnisMuslim",
    targetName: "Inspirasi Bisnis Muslim",
    followers: "210K Pengikut",
    avgViews: "35K Views",
    viralCount: "9 Konten Outlier",
    formatTag: "FB Reels",
    hookText: "Pola jualan online yang sering diabaikan tapi hasilnya paling kencang...",
    scriptSnippet:
      "Facebook punya audiens matang yang daya belinya tinggi. Begitu kamu pakai format storytelling yang pas, engagement bakal meledak...",
    posts: [
      {
        id: "fb-1",
        outlier: 15.4,
        views: "2.1M",
        likes: "165K",
        comments: "5.4K",
        format: "reel",
        colorBg: "from-blue-600/40 via-indigo-700/50 to-sky-700/40",
        caption: "Pola jualan online paling kencang",
      },
      {
        id: "fb-2",
        outlier: 8.7,
        views: "1.2M",
        likes: "92K",
        comments: "2.1K",
        format: "video",
        colorBg: "from-indigo-600/40 via-blue-700/50 to-cyan-800/40",
        caption: "Cara optimasi halaman Facebook",
      },
      {
        id: "fb-3",
        outlier: 5.8,
        views: "640K",
        likes: "45K",
        comments: "1.1K",
        format: "photo",
        colorBg: "from-emerald-600/40 via-blue-700/50 to-indigo-900/40",
        caption: "Copywriting storytelling viral",
      },
      {
        id: "fb-4",
        outlier: 3.6,
        views: "390K",
        likes: "28K",
        comments: "640",
        format: "reel",
        colorBg: "from-purple-600/40 via-blue-700/50 to-indigo-800/40",
        caption: "Mulai bisnis dari rumah",
      },
    ],
  },
};

const PLATFORM_KEYS: PlatformType[] = ["instagram", "tiktok", "youtube", "facebook"];

// Virtual Cursor coordinates for each animation step
interface CursorPos {
  x: number; // percentage (0 - 100)
  y: number; // percentage (0 - 100)
  isClicking?: boolean;
}

export function ToolsRisetPhoneMockup() {
  const [activePlatform, setActivePlatform] = useState<PlatformType>("instagram");
  const [animStep, setAnimStep] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>("");
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanPercent, setScanPercent] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isSortedOutlier, setIsSortedOutlier] = useState<boolean>(false);
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [cursorPos, setCursorPos] = useState<CursorPos>({ x: 50, y: 35 });

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const currentPlatform = PLATFORMS[activePlatform];

  // Manual platform switch
  const handleSelectPlatform = (p: PlatformType) => {
    setActivePlatform(p);
    resetStateForPlatform(p);
  };

  const resetStateForPlatform = (p: PlatformType) => {
    setAnimStep(0);
    setTypedText("");
    setIsScanning(false);
    setScanPercent(0);
    setShowResults(false);
    setIsSortedOutlier(false);
    setShowDetailModal(false);
    setCopiedToast(false);
  };

  // State Machine Loop for Animated Simulation
  useEffect(() => {
    if (!isAutoPlaying) return;

    let timeout: NodeJS.Timeout;

    // Step 0: Idle at Search, Move cursor to Input Box
    if (animStep === 0) {
      setCursorPos({ x: 42, y: 32, isClicking: false });
      timeout = setTimeout(() => {
        setCursorPos({ x: 42, y: 32, isClicking: true });
        setAnimStep(1);
      }, 700);
    }

    // Step 1: Type the username handle
    else if (animStep === 1) {
      const fullText = currentPlatform.targetHandle;
      let charIdx = 0;
      const typeInterval = setInterval(() => {
        charIdx++;
        setTypedText(fullText.slice(0, charIdx));
        if (charIdx >= fullText.length) {
          clearInterval(typeInterval);
          timeout = setTimeout(() => {
            // Move cursor to "Riset Konten" Button
            setCursorPos({ x: 80, y: 32, isClicking: false });
            setAnimStep(2);
          }, 400);
        }
      }, 60);

      return () => clearInterval(typeInterval);
    }

    // Step 2: Click "Riset Konten" Button
    else if (animStep === 2) {
      timeout = setTimeout(() => {
        // Trigger click ripple
        setCursorPos({ x: 80, y: 32, isClicking: true });
        timeout = setTimeout(() => {
          setIsScanning(true);
          setScanPercent(15);
          setAnimStep(3);
        }, 350);
      }, 400);
    }

    // Step 3: Scanning simulation (0 -> 45 -> 85 -> 100%)
    else if (animStep === 3) {
      setCursorPos({ x: 50, y: 48, isClicking: false });
      timeout = setTimeout(() => {
        setScanPercent(55);
        timeout = setTimeout(() => {
          setScanPercent(100);
          timeout = setTimeout(() => {
            setIsScanning(false);
            setShowResults(true);
            setAnimStep(4);
          }, 450);
        }, 550);
      }, 500);
    }

    // Step 4: Results shown, Move cursor to "Urutkan: Outlier" Filter
    else if (animStep === 4) {
      timeout = setTimeout(() => {
        setCursorPos({ x: 74, y: 47, isClicking: false });
        timeout = setTimeout(() => {
          setCursorPos({ x: 74, y: 47, isClicking: true });
          setIsSortedOutlier(true);
          timeout = setTimeout(() => {
            setAnimStep(5);
          }, 600);
        }, 600);
      }, 500);
    }

    // Step 5: Click Top Viral Card (#1 Card with highest Outlier)
    else if (animStep === 5) {
      timeout = setTimeout(() => {
        setCursorPos({ x: 30, y: 62, isClicking: false });
        timeout = setTimeout(() => {
          setCursorPos({ x: 30, y: 62, isClicking: true });
          timeout = setTimeout(() => {
            setShowDetailModal(true);
            setAnimStep(6);
          }, 350);
        }, 650);
      }, 400);
    }

    // Step 6: Inside Post Modal: Cursor clicks "Export Excel / CSV"
    else if (animStep === 6) {
      timeout = setTimeout(() => {
        setCursorPos({ x: 75, y: 82, isClicking: false });
        timeout = setTimeout(() => {
          setCursorPos({ x: 75, y: 82, isClicking: true });
          setCopiedToast(true);

          timeout = setTimeout(() => {
            // Close modal & prepare next platform
            setShowDetailModal(false);
            setCopiedToast(false);
            setAnimStep(7);
          }, 1800);
        }, 700);
      }, 600);
    }

    // Step 7: Transition to next platform!
    else if (animStep === 7) {
      timeout = setTimeout(() => {
        const nextIdx = (PLATFORM_KEYS.indexOf(activePlatform) + 1) % PLATFORM_KEYS.length;
        const nextPlatform = PLATFORM_KEYS[nextIdx];
        
        // Move cursor to that platform tab
        const tabX = nextIdx === 0 ? 18 : nextIdx === 1 ? 40 : nextIdx === 2 ? 62 : 84;
        setCursorPos({ x: tabX, y: 22, isClicking: false });

        timeout = setTimeout(() => {
          setCursorPos({ x: tabX, y: 22, isClicking: true });
          timeout = setTimeout(() => {
            setActivePlatform(nextPlatform);
            resetStateForPlatform(nextPlatform);
          }, 300);
        }, 600);
      }, 800);
    }

    return () => clearTimeout(timeout);
  }, [animStep, isAutoPlaying, activePlatform, currentPlatform]);

  return (
    <div className="w-full flex flex-col items-center justify-center my-4 select-none">
      
      {/* 4 Platform Switcher Pill Buttons (Di Luar Layar HP) */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-4 px-2">
        {PLATFORM_KEYS.map((key) => {
          const p = PLATFORMS[key];
          const isActive = activePlatform === key;
          return (
            <button
              key={key}
              onClick={() => handleSelectPlatform(key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shadow-xs ${
                isActive
                  ? "bg-orange-500 text-white shadow-orange-500/25 ring-2 ring-orange-500/40 scale-105"
                  : "bg-gray-100 dark:bg-white/[0.06] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-current opacity-80" />
              <span>{p.name}</span>
            </button>
          );
        })}

        {/* Play/Pause Auto-Demo Toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-semibold bg-gray-50 dark:bg-white/[0.04] text-gray-500 dark:text-gray-400 hover:text-orange-500 border border-gray-200/80 dark:border-white/10 transition-colors ml-1 cursor-pointer"
          title={isAutoPlaying ? "Jeda Simulasi" : "Jalankan Simulasi"}
        >
          {isAutoPlaying ? (
            <>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Demo Aktif</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-orange-500 fill-orange-500" />
              <span>Play Demo</span>
            </>
          )}
        </button>
      </div>

      {/* ========================================================================= */}
      {/* SMARTPHONE FRAME (MOCKUP HP REALISTIS) */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[9/18.5] bg-gray-950 rounded-[42px] sm:rounded-[46px] p-[8px] sm:p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] border-[4px] border-gray-800 dark:border-gray-700/60 ring-1 ring-white/10">
        
        {/* Phone Speaker & Dynamic Island Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4.5 rounded-full bg-black flex items-center justify-between px-2.5 z-40 shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue-900/60" />
          </div>
          <div className="w-8 h-1 rounded-full bg-gray-800/80" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
        </div>

        {/* SCREEN CANVAS (Inner Mobile Screen) */}
        <div className="relative w-full h-full rounded-[34px] sm:rounded-[37px] overflow-hidden bg-gray-50 dark:bg-[#0c1224] text-gray-900 dark:text-gray-100 flex flex-col font-sans select-none border border-black/20">
          
          {/* Virtual Status Bar (09:41, WiFi, Battery) */}
          <div className="w-full pt-2 px-5 pb-1 flex items-center justify-between text-[11px] font-bold text-gray-500 dark:text-gray-400 shrink-0 select-none z-30">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              {/* WiFi */}
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 2c3.99 0 7.6 1.57 10.28 4.14L12 18.42 1.72 10.14C4.4 7.57 8.01 6 12 6z" />
              </svg>
              {/* Battery */}
              <div className="w-5 h-2.5 rounded-[4px] border border-current p-0.5 flex items-center">
                <div className="w-3 h-full bg-current rounded-[2px]" />
              </div>
            </div>
          </div>

          {/* APP HEADER */}
          <div className="w-full px-3.5 pt-1.5 pb-2 border-b border-gray-200/80 dark:border-white/10 flex items-center justify-between shrink-0 bg-white/70 dark:bg-[#0c1224]/70 backdrop-blur-md z-20">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-lg bg-orange-500 text-white flex items-center justify-center font-black text-xs shadow-xs">
                R
              </div>
              <div>
                <div className="font-extrabold text-[12px] leading-tight flex items-center gap-1">
                  Ruang Riset
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-[9px] text-gray-400 leading-none">Auto Outlier Detector</div>
              </div>
            </div>

            <div className="px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold text-[9px] border border-orange-500/20">
              ⚡ Outlier Mode
            </div>
          </div>

          {/* 4 PLATFORM TABS INSIDE APP */}
          <div className="w-full px-2 py-1.5 bg-gray-100/80 dark:bg-black/30 border-b border-gray-200/80 dark:border-white/10 grid grid-cols-4 gap-1 shrink-0 z-10 text-[10px] font-bold">
            {PLATFORM_KEYS.map((key) => {
              const p = PLATFORMS[key];
              const isSelected = activePlatform === key;
              return (
                <button
                  key={key}
                  onClick={() => handleSelectPlatform(key)}
                  className={`py-1.5 rounded-lg flex flex-col items-center gap-0.5 transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-white dark:bg-white/15 text-orange-500 dark:text-white shadow-xs font-extrabold"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  }`}
                >
                  <span className="text-[11px]">
                    {key === "instagram" ? "📸" : key === "tiktok" ? "🎵" : key === "youtube" ? "▶️" : "📘"}
                  </span>
                  <span className="scale-90">{p.name}</span>
                </button>
              );
            })}
          </div>

          {/* SCROLLABLE INNER APP CONTENT */}
          <div className="flex-1 w-full overflow-y-auto px-3 py-2 space-y-2.5 relative">
            
            {/* SEARCH BOX & ACTION BUTTON */}
            <div className="p-2.5 rounded-xl bg-white dark:bg-[#141B31] border border-gray-200/80 dark:border-[#2C3246] shadow-xs space-y-2">
              <div className="flex items-center justify-between text-[10px] font-bold text-gray-400">
                <span>Riset Akun {currentPlatform.name}</span>
                <span className="text-orange-500">{currentPlatform.badge}</span>
              </div>

              <div className="flex items-center gap-1.5">
                {/* Simulated Input Field */}
                <div className="relative flex-1 h-8 rounded-lg bg-gray-50 dark:bg-[#0c1224] border border-gray-200 dark:border-[#2C3246] px-2.5 flex items-center text-[11px] text-gray-800 dark:text-gray-200 font-medium">
                  <span className="text-gray-400 font-bold mr-1">@</span>
                  <span className="truncate">{typedText}</span>
                  {/* Blinking typing cursor */}
                  {animStep <= 1 && (
                    <span className="w-1.5 h-3.5 bg-orange-500 inline-block ml-0.5 animate-pulse" />
                  )}
                </div>

                {/* Simulated "Riset" Button */}
                <button
                  type="button"
                  className="h-8 px-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-[10px] flex items-center gap-1 shadow-xs shrink-0 cursor-pointer"
                >
                  <Search className="w-3 h-3" />
                  <span>Riset</span>
                </button>
              </div>
            </div>

            {/* SCANNING PROGRESS CARD */}
            {isScanning && (
              <div className="p-3 rounded-xl bg-white dark:bg-[#141B31] border border-orange-500/30 shadow-xs space-y-2 text-center animate-in fade-in duration-200">
                <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-orange-600 dark:text-orange-400">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>Scanning &amp; Menghitung Outlier Score...</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 rounded-full"
                    style={{ width: `${scanPercent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[9px] text-gray-400">
                  <span>Menganalisis 50+ video kompetitor</span>
                  <span className="font-bold text-orange-500">{scanPercent}%</span>
                </div>
              </div>
            )}

            {/* RESULTS VIEW */}
            {showResults && (
              <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                
                {/* Mini Profile Header Target */}
                <div className="p-2 rounded-xl bg-white dark:bg-[#141B31] border border-gray-200/80 dark:border-[#2C3246] shadow-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 text-white font-black text-xs flex items-center justify-center shadow-xs">
                      {currentPlatform.targetHandle.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-extrabold text-[11px] text-gray-900 dark:text-white leading-tight">
                        {currentPlatform.targetName}
                      </div>
                      <div className="text-[9px] text-gray-400">
                        @{currentPlatform.targetHandle} • {currentPlatform.followers}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[8px] uppercase tracking-wider text-gray-400 font-bold">Rata-rata</div>
                    <div className="font-black text-[10px] text-emerald-600 dark:text-emerald-400">
                      {currentPlatform.avgViews}
                    </div>
                  </div>
                </div>

                {/* Toolbar Filter / Sortir */}
                <div className="flex items-center justify-between px-1 text-[10px]">
                  <div className="flex items-center gap-1 font-bold text-gray-500 dark:text-gray-400">
                    <TrendingUp className="w-3 h-3 text-orange-500" />
                    <span>{currentPlatform.viralCount} Ditemukan</span>
                  </div>

                  {/* Filter Button: Urutkan Outlier */}
                  <div
                    className={`flex items-center gap-1 px-2 py-0.5 rounded-md font-bold text-[9px] transition-all duration-200 ${
                      isSortedOutlier
                        ? "bg-amber-500 text-gray-950 font-black shadow-xs ring-1 ring-amber-400 scale-105"
                        : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <Zap className="w-2.5 h-2.5 fill-current" />
                    <span>Urutkan: Outlier ⚡</span>
                  </div>
                </div>

                {/* 2-Column Mobile Feed Grid */}
                <div className="grid grid-cols-2 gap-1.5">
                  {currentPlatform.posts.map((post, idx) => {
                    const isTop1 = idx === 0;
                    return (
                      <div
                        key={post.id}
                        onClick={() => {
                          if (isTop1) setShowDetailModal(true);
                        }}
                        className={`group relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-b ${post.colorBg} border border-white/10 shadow-xs p-1.5 flex flex-col justify-between cursor-pointer transition-all ${
                          isTop1 ? "ring-2 ring-amber-400 ring-offset-1 ring-offset-black/50" : ""
                        }`}
                      >
                        {/* Top: Outlier Score Badge */}
                        <div className="flex items-center justify-between">
                          <div
                            className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[9px] font-black shadow-sm ${
                              post.outlier >= 8
                                ? "bg-amber-400 text-gray-950 animate-pulse"
                                : "bg-black/75 text-amber-300"
                            }`}
                          >
                            <Zap className="w-2.5 h-2.5 fill-current" />
                            <span>{post.outlier}×</span>
                          </div>

                          <div className="w-4 h-4 rounded-full bg-black/60 flex items-center justify-center text-white">
                            {post.format === "carousel" || post.format === "photo" ? (
                              <Layers className="w-2.5 h-2.5" />
                            ) : (
                              <Play className="w-2 h-2 fill-white" />
                            )}
                          </div>
                        </div>

                        {/* Bottom: Views & Title */}
                        <div className="bg-black/70 backdrop-blur-xs rounded-md p-1 space-y-0.5 text-white">
                          <div className="font-extrabold text-[10px] leading-tight text-white line-clamp-1">
                            {post.caption}
                          </div>
                          <div className="flex items-center justify-between text-[8px] text-gray-300 font-bold">
                            <span>{post.views} Views</span>
                            <span className="flex items-center gap-0.5">
                              <Heart className="w-2 h-2 fill-rose-500 text-rose-500" />
                              {post.likes}
                            </span>
                          </div>
                        </div>

                        {/* Visual Ripple Hint on Top Card */}
                        {isTop1 && (
                          <div className="absolute inset-0 border-2 border-amber-400 rounded-lg pointer-events-none opacity-60 animate-pulse" />
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            )}

            {/* DETAIL MODAL (BEDAH HOOK & EXPORT NASKAH) */}
            {showDetailModal && (
              <div className="absolute inset-0 bg-black/85 backdrop-blur-xs z-30 p-3 flex flex-col justify-end animate-in fade-in duration-200">
                <div className="w-full bg-white dark:bg-[#141B31] rounded-2xl p-3 border border-orange-500/40 shadow-xl space-y-2.5 animate-in slide-in-from-bottom-4 duration-300 text-left">
                  
                  {/* Modal Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 font-black text-[9px] border border-amber-500/30">
                        <Zap className="w-2.5 h-2.5 fill-current" />
                        <span>OUTLIER 14.8× (Viral Luar Biasa)</span>
                      </div>
                      <h4 className="font-extrabold text-[11px] text-gray-950 dark:text-white mt-1 leading-tight">
                        Bedah Hook &amp; Ide Konten
                      </h4>
                    </div>

                    <button
                      onClick={() => setShowDetailModal(false)}
                      className="p-1 rounded-full text-gray-400 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Hook Box */}
                  <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-500/20 text-[10px]">
                    <div className="font-bold text-orange-600 dark:text-orange-400 text-[8px] uppercase tracking-wider mb-0.5">
                      💡 Kalimat Hook 3 Detik Pertama:
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                      &ldquo;{currentPlatform.hookText}&rdquo;
                    </p>
                  </div>

                  {/* Script Excerpt */}
                  <div className="p-2 rounded-lg bg-gray-50 dark:bg-[#0c1224] border border-gray-200 dark:border-white/10 text-[9px] text-gray-600 dark:text-gray-400 leading-relaxed">
                    <div className="font-bold text-gray-400 text-[8px] uppercase tracking-wider mb-0.5">
                      Transkrip / Kerangka Naskah:
                    </div>
                    <p className="line-clamp-2">{currentPlatform.scriptSnippet}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                    <button
                      type="button"
                      className="py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 font-bold text-[9px] flex items-center justify-center gap-1 hover:bg-gray-200"
                    >
                      <Copy className="w-2.5 h-2.5" />
                      <span>Salin Hook</span>
                    </button>

                    <button
                      type="button"
                      className="py-1.5 px-2 rounded-lg bg-emerald-600 text-white font-bold text-[9px] flex items-center justify-center gap-1 shadow-xs"
                    >
                      <FileSpreadsheet className="w-2.5 h-2.5" />
                      <span>Export Excel</span>
                    </button>
                  </div>

                  {/* Success Toast inside modal */}
                  {copiedToast && (
                    <div className="p-1.5 rounded-lg bg-emerald-500 text-white font-bold text-[9px] text-center flex items-center justify-center gap-1 shadow-md animate-in fade-in duration-150">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>✅ Data &amp; Hook Berhasil Diekspor!</span>
                    </div>
                  )}

                </div>
              </div>
            )}

          </div>

          {/* VIRTUAL TOUCH CURSOR (Simulasi Gerakan & Efek Tap Jari) */}
          <div
            className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
            style={{
              left: `${cursorPos.x}%`,
              top: `${cursorPos.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* The Outer Touch Ripple Wave */}
            {cursorPos.isClicking && (
              <span className="absolute -inset-2 rounded-full border-2 border-orange-500 animate-ping opacity-75" />
            )}

            {/* The Main Virtual Cursor Circle */}
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-150 ${
                cursorPos.isClicking
                  ? "scale-75 bg-orange-500 ring-4 ring-orange-500/40 shadow-lg"
                  : "scale-100 bg-white/90 dark:bg-white/95 ring-2 ring-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-colors ${
                  cursorPos.isClicking ? "bg-white" : "bg-orange-500"
                }`}
              />
            </div>
          </div>

        </div>

      </div>

      {/* Caption Keterangan Di Bawah HP */}
      <div className="mt-3 text-center max-w-[340px]">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold">
          <Sparkles className="w-3 h-3 text-orange-500" />
          <span>Simulasi Nyata: IG &bull; TikTok &bull; YouTube &bull; Facebook</span>
        </div>
        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
          Klik tab platform di atas untuk melihat proses riset tiap sosmed secara langsung.
        </p>
      </div>

    </div>
  );
}
