"use client";

import React, { useState, useEffect } from "react";
import {
  Zap,
  Play,
  Heart,
  Search,
  CheckCircle2,
  Layers,
  SlidersHorizontal,
  ArrowLeft,
  Bell,
  Check,
  FileSpreadsheet,
  X,
  Sparkles,
  ChevronDown,
  Calendar,
  Grid,
  TrendingUp,
  MessageSquare,
  Clock,
} from "lucide-react";
import { PlatformType } from "./ToolsRisetPhoneMockup";

interface MiniPhoneProps {
  platform: PlatformType;
}

interface PlatformData {
  name: string;
  badge: string;
  handle: string;
  targetName: string;
  followers: string;
  avgViews: string;
  formatBadge: string;
  hubDesc: string;
  points: string[];
  hook: string;
  scriptSnippet: string;
  posts: {
    id: string;
    outlier: number;
    views: string;
    likes: string;
    format: "reel" | "carousel" | "video" | "photo";
    colorBg: string;
    caption: string;
  }[];
}

const DATA_MAP: Record<PlatformType, PlatformData> = {
  instagram: {
    name: "Instagram",
    badge: "Reels & Carousel",
    handle: "ruangcreativemuslim",
    targetName: "Ruang Creative Muslim",
    followers: "162K Followers",
    avgViews: "85.4K Views",
    formatBadge: "Reels",
    hubDesc: "Analisis performa akun, temukan Reels dengan Outlier Score tinggi, dan urutkan konten viral.",
    points: [
      "Bongkar Outlier Score & Konten Paling Viral",
      "Urutkan Reels Berdasarkan Views & Komentar",
      "Ekspor Naskah, Hook, & Data ke CSV/Excel",
    ],
    hook: "3 Kesalahan fatal bikin konten yang bikin views mentok 200...",
    scriptSnippet: "Banyak kreator salah fokus di visual, padahal hook 3 detik pertama yang nentuin...",
    posts: [
      {
        id: "ig-1",
        outlier: 14.8,
        views: "2.4M",
        likes: "185K",
        format: "reel",
        colorBg: "from-amber-600/40 via-purple-700/50 to-pink-600/40",
        caption: "3 Kesalahan bikin konten",
      },
      {
        id: "ig-2",
        outlier: 8.4,
        views: "1.1M",
        likes: "94K",
        format: "reel",
        colorBg: "from-blue-600/40 via-indigo-700/50 to-purple-600/40",
        caption: "Bongkar produk digital",
      },
      {
        id: "ig-3",
        outlier: 5.2,
        views: "680K",
        likes: "52K",
        format: "carousel",
        colorBg: "from-emerald-600/40 via-teal-700/50 to-cyan-600/40",
        caption: "Roadmap 30 hari FYP",
      },
      {
        id: "ig-4",
        outlier: 3.8,
        views: "410K",
        likes: "31K",
        format: "reel",
        colorBg: "from-rose-600/40 via-orange-700/50 to-amber-600/40",
        caption: "Ide konten faceless",
      },
    ],
  },
  youtube: {
    name: "YouTube",
    badge: "Shorts & Video",
    handle: "BisnisDigitalID",
    targetName: "Bisnis Digital ID",
    followers: "350K Subs",
    avgViews: "45K Views",
    formatBadge: "Shorts",
    hubDesc: "Bongkar Outlier Score video & Shorts kompetitor, pisahkan format konten, dan ekspor data ide.",
    points: [
      "Bongkar Outlier Score & Video Paling Meledak",
      "Pilah Format YouTube Shorts vs Video Reguler",
      "Ekspor Referensi Ide ke CSV / Excel",
    ],
    hook: "Cara dapat omset 2 digit dari produk digital tanpa nampilin wajah!",
    scriptSnippet: "Gunakan format micro-learning 45 detik untuk shorts...",
    posts: [
      {
        id: "yt-1",
        outlier: 12.2,
        views: "1.8M",
        likes: "140K",
        format: "reel",
        colorBg: "from-red-600/40 via-rose-700/50 to-amber-700/40",
        caption: "Omset 2 digit tanpa wajah",
      },
      {
        id: "yt-2",
        outlier: 7.9,
        views: "920K",
        likes: "68K",
        format: "reel",
        colorBg: "from-orange-600/40 via-amber-700/50 to-red-800/40",
        caption: "Algoritma Shorts meledak",
      },
      {
        id: "yt-3",
        outlier: 4.5,
        views: "480K",
        likes: "32K",
        format: "video",
        colorBg: "from-purple-600/40 via-indigo-700/50 to-blue-800/40",
        caption: "Tutorial sistem AI",
      },
      {
        id: "yt-4",
        outlier: 3.2,
        views: "310K",
        likes: "21K",
        format: "reel",
        colorBg: "from-teal-600/40 via-emerald-700/50 to-gray-900/40",
        caption: "Setup channel faceless",
      },
    ],
  },
  tiktok: {
    name: "TikTok",
    badge: "FYP & Photo Slide",
    handle: "kreatorviral.id",
    targetName: "Kreator Viral ID",
    followers: "480K Followers",
    avgViews: "120K Views",
    formatBadge: "Photo Slide",
    hubDesc: "Bongkar Outlier Score video & Photo Slide kompetitor, sortir views tertinggi, dan ekspor data ide.",
    points: [
      "Bongkar Outlier Score & Konten Paling FYP",
      "Pilah Format Video vs Photo Slide",
      "Ekspor Naskah, Hook, & Data ke CSV / Excel",
    ],
    hook: "Trik rahasia tembus FYP TikTok dalam 24 jam modal HP doang!",
    scriptSnippet: "Slide 1 langsung to the point jangan basa-basi perkenalan...",
    posts: [
      {
        id: "tt-1",
        outlier: 16.5,
        views: "3.8M",
        likes: "290K",
        format: "video",
        colorBg: "from-cyan-600/40 via-blue-700/50 to-black/60",
        caption: "Cara tembus FYP 24 jam",
      },
      {
        id: "tt-2",
        outlier: 9.1,
        views: "1.4M",
        likes: "120K",
        format: "photo",
        colorBg: "from-rose-600/40 via-pink-700/50 to-purple-800/60",
        caption: "5 Niche konten cuan",
      },
      {
        id: "tt-3",
        outlier: 6.0,
        views: "890K",
        likes: "75K",
        format: "video",
        colorBg: "from-emerald-600/40 via-teal-700/50 to-gray-900/60",
        caption: "Tools AI gratis kreator",
      },
      {
        id: "tt-4",
        outlier: 4.3,
        views: "540K",
        likes: "42K",
        format: "photo",
        colorBg: "from-amber-600/40 via-orange-700/50 to-gray-900/60",
        caption: "Format slide FYP",
      },
    ],
  },
  facebook: {
    name: "Facebook",
    badge: "Reels & Halaman",
    handle: "InspirasiBisnisMuslim",
    targetName: "Inspirasi Bisnis Muslim",
    followers: "210K Pengikut",
    avgViews: "35K Views",
    formatBadge: "FB Reels",
    hubDesc: "Bongkar Outlier Score Reels, Video & Foto halaman kompetitor, sortir interaksi tertinggi, dan ekspor data ide.",
    points: [
      "Bongkar Outlier Score & Konten Paling Viral",
      "Pilah Format Reels & Video vs Postingan Foto",
      "Ekspor Caption, Hook, & Data ke CSV / Excel",
    ],
    hook: "Pola jualan online yang sering diabaikan tapi hasilnya paling kencang...",
    scriptSnippet: "Audiens Facebook menyukai cerita personal yang relatable...",
    posts: [
      {
        id: "fb-1",
        outlier: 15.4,
        views: "2.1M",
        likes: "165K",
        format: "reel",
        colorBg: "from-blue-600/40 via-indigo-700/50 to-sky-700/40",
        caption: "Pola jualan online kencang",
      },
      {
        id: "fb-2",
        outlier: 8.7,
        views: "1.2M",
        likes: "92K",
        format: "video",
        colorBg: "from-indigo-600/40 via-blue-700/50 to-cyan-800/40",
        caption: "Optimasi halaman FB",
      },
      {
        id: "fb-3",
        outlier: 5.8,
        views: "640K",
        likes: "45K",
        format: "photo",
        colorBg: "from-emerald-600/40 via-blue-700/50 to-indigo-900/40",
        caption: "Copywriting storytelling",
      },
      {
        id: "fb-4",
        outlier: 3.6,
        views: "390K",
        likes: "28K",
        format: "reel",
        colorBg: "from-purple-600/40 via-blue-700/50 to-indigo-800/40",
        caption: "Bisnis dari rumah",
      },
    ],
  },
};

const ALL_PLATFORMS: { id: PlatformType; name: string; iconEmoji: string }[] = [
  { id: "instagram", name: "Riset Instagram", iconEmoji: "📸" },
  { id: "youtube", name: "Riset YouTube", iconEmoji: "▶️" },
  { id: "tiktok", name: "Riset TikTok", iconEmoji: "🎵" },
  { id: "facebook", name: "Riset Facebook", iconEmoji: "📘" },
];

/**
 * Precision Classic Arrow Cursor (Kursor Panah Standar OS / Web)
 * - Ujung lancip panah terkunci presisi di titik (0, 0)
 * - Tampilan panah klasik putih bersih dengan outline hitam tegas
 * - Efek riak sentuh (touch ripple ping) memancar tepat dari ujung lancip (0, 0)
 */
function PrecisionArrowPointer({ isClicking }: { isClicking: boolean }) {
  return (
    <div
      className="relative select-none pointer-events-none"
      style={{
        transformOrigin: "0px 0px",
        transform: isClicking ? "scale(0.85)" : "scale(1)",
        transition: "transform 130ms cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
    >
      {/* 1. Touch Ripple Ping: Memancar tepat dari ujung lancip panah (0, 0) */}
      {isClicking && (
        <span
          className="absolute rounded-full border-2 border-orange-500 bg-orange-400/25 animate-ping pointer-events-none z-10"
          style={{
            top: 0,
            left: 0,
            width: 22,
            height: 22,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* 2. Titik Indikator Sentuhan Halus di Ujung Lancip (0, 0) */}
      <span
        className="absolute rounded-full pointer-events-none z-30 transition-all duration-150"
        style={{
          top: 0,
          left: 0,
          width: isClicking ? 5 : 3.5,
          height: isClicking ? 5 : 3.5,
          transform: "translate(-50%, -50%)",
          backgroundColor: isClicking ? "#EA580C" : "#F97316",
          boxShadow: isClicking
            ? "0 0 8px #EA580C, 0 0 3px #F97316"
            : "0 0 4px rgba(249,115,22,0.8)",
        }}
      />

      {/* 3. Vektor Kursor Panah Standar Klasik (Sharp Tip at 0, 0) */}
      <svg
        width="22"
        height="26"
        viewBox="-2 -2 22 26"
        className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] select-none pointer-events-none relative z-20"
        style={{
          overflow: "visible",
        }}
      >
        <path
          d="
            M 0 0
            L 0 17
            L 4.5 13
            L 8 20.5
            L 11 19.2
            L 7.5 11.8
            L 13 11.8
            Z
          "
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function ToolsRisetMiniPhone({ platform }: MiniPhoneProps) {
  const data = DATA_MAP[platform];

  // Stage sequence:
  // "hub" -> "studio_empty" -> "filter_open" -> "typing" -> "scanning" -> "results" -> "hook_modal"
  const [stage, setStage] = useState<
    "hub" | "studio_empty" | "filter_open" | "typing" | "scanning" | "results" | "hook_modal"
  >("hub");

  // Dynamic filter state for modal animation
  const [filterTab, setFilterTab] = useState<"posts" | "date">("posts");
  const [sortOption, setSortOption] = useState<"views" | "outlier">("views"); // starts as views (unselected outlier!)

  // Hub vertical scroll position
  const [hubScrollY, setHubScrollY] = useState(0);

  const [typedHandle, setTypedHandle] = useState("");
  const [scanPercent, setScanPercent] = useState(0);
  const [showExportToast, setShowExportToast] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50, click: false, visible: true });

  // Calculate target scroll offset in hub list for this platform
  const targetScroll =
    platform === "instagram"
      ? 0
      : platform === "youtube"
      ? 108
      : platform === "tiktok"
      ? 216
      : 324; // facebook is at the bottom

  useEffect(() => {
    let t: NodeJS.Timeout;

    // =========================================================================
    // SCENE 1: HUB "Mau mulai dari mana?"
    // =========================================================================
    if (stage === "hub") {
      setTypedHandle("");
      setScanPercent(0);
      setShowExportToast(false);
      setFilterTab("posts");
      setSortOption("views");
      setHubScrollY(0);

      // If Instagram (top card): No scroll needed, hand taps directly on card header
      if (platform === "instagram") {
        setCursor({ x: 50, y: 60, click: false, visible: true });
        t = setTimeout(() => {
          // Hand moves 100% PRECISELY to Instagram Card Header (x = 50%, y = 31.5%)
          setCursor({ x: 50, y: 31.5, click: false, visible: true });
          t = setTimeout(() => {
            // Tap Card
            setCursor({ x: 50, y: 31.5, click: true, visible: true });
            t = setTimeout(() => {
              setStage("studio_empty");
            }, 350);
          }, 600);
        }, 1200);
      } else {
        // For YouTube, TikTok, or Facebook (scroll down to reveal card):
        setCursor({ x: 55, y: 65, click: false, visible: true });

        t = setTimeout(() => {
          // Smooth swipe up gesture
          setCursor({ x: 55, y: 35, click: false, visible: true });
          setHubScrollY(targetScroll); // Scroll container to target card!

          t = setTimeout(() => {
            // Target card is now scrolled directly into top slot (x = 50%, y = 31.5%)
            setCursor({ x: 50, y: 31.5, click: false, visible: true });
            t = setTimeout(() => {
              setCursor({ x: 50, y: 31.5, click: true, visible: true });
              t = setTimeout(() => {
                setStage("studio_empty");
              }, 350);
            }, 600);
          }, 800);
        }, 1100);
      }
    }

    // =========================================================================
    // SCENE 2: SEARCH STUDIO ("Mau riset akun siapa?")
    // =========================================================================
    else if (stage === "studio_empty") {
      // Hand starts in lower middle
      setCursor({ x: 50, y: 55, click: false, visible: true });
      t = setTimeout(() => {
        // Hand moves 100% PRECISELY to Filter Icon (x = 87.5%, y = 32.8%)
        setCursor({ x: 87.5, y: 32.8, click: false, visible: true });
        t = setTimeout(() => {
          // Tap Filter Icon
          setCursor({ x: 87.5, y: 32.8, click: true, visible: true });
          t = setTimeout(() => {
            setStage("filter_open");
          }, 300);
        }, 550);
      }, 400);
    }

    // =========================================================================
    // SCENE 3: FILTER MODAL INTERACTIVE ANIMATION ("Sort & Filter Feed")
    // =========================================================================
    else if (stage === "filter_open") {
      // Step 3a: Hand points 100% PRECISELY to [ Date ] tab button (x = 71.5%, y = 41.2%)
      t = setTimeout(() => {
        setCursor({ x: 71.5, y: 41.2, click: false, visible: true });
        t = setTimeout(() => {
          setCursor({ x: 71.5, y: 41.2, click: true, visible: true });
          setFilterTab("date"); // Switch to Date tab & "All Time"

          // Step 3b: Hand moves 100% PRECISELY to [ Posts ] tab button (x = 28.5%, y = 41.2%)
          t = setTimeout(() => {
            setCursor({ x: 28.5, y: 41.2, click: false, visible: true });
            t = setTimeout(() => {
              setCursor({ x: 28.5, y: 41.2, click: true, visible: true });
              setFilterTab("posts"); // Switch back to Posts tab & "Latest 25 Posts"

              // Step 3c: Hand moves 100% PRECISELY to "⚡ Outlier score" row (x = 50%, y = 62.3%)
              t = setTimeout(() => {
                setCursor({ x: 50, y: 62.3, click: false, visible: true });
                t = setTimeout(() => {
                  setCursor({ x: 50, y: 62.3, click: true, visible: true });
                  // AT CLICK: Outlier score turns orange & checkmark animates in!
                  setSortOption("outlier");

                  // Step 3d: Hand moves 100% PRECISELY to "Apply Filter" button (x = 78.5%, y = 79.5%)
                  t = setTimeout(() => {
                    setCursor({ x: 78.5, y: 79.5, click: false, visible: true });
                    t = setTimeout(() => {
                      // Click "Apply Filter"
                      setCursor({ x: 78.5, y: 79.5, click: true, visible: true });
                      t = setTimeout(() => {
                        setStage("typing");
                      }, 300);
                    }, 500);
                  }, 650);
                }, 500);
              }, 500);
            }, 450);
          }, 600);
        }, 450);
      }, 400);
    }

    // =========================================================================
    // SCENE 4: TYPING USERNAME & CLICK "🔍 Riset Konten"
    // =========================================================================
    else if (stage === "typing") {
      setCursor({ x: 80, y: 36, click: false, visible: false });
      let i = 0;
      const typeInterval = setInterval(() => {
        i++;
        setTypedHandle(data.handle.slice(0, i));
        if (i >= data.handle.length) {
          clearInterval(typeInterval);
          t = setTimeout(() => {
            // Hand moves 100% PRECISELY to the center of orange "🔍 Riset Konten" button (x = 50%, y = 41.5%)
            setCursor({ x: 50, y: 41.5, click: false, visible: true });
            t = setTimeout(() => {
              setCursor({ x: 50, y: 41.5, click: true, visible: true });
              t = setTimeout(() => {
                setStage("scanning");
              }, 300);
            }, 500);
          }, 300);
        }
      }, 45);

      return () => clearInterval(typeInterval);
    }

    // =========================================================================
    // SCENE 5: SCANNING PROGRESS
    // =========================================================================
    else if (stage === "scanning") {
      setCursor({ x: 50, y: 50, click: false, visible: false });
      setScanPercent(30);
      t = setTimeout(() => {
        setScanPercent(75);
        t = setTimeout(() => {
          setScanPercent(100);
          t = setTimeout(() => {
            setStage("results");
          }, 300);
        }, 400);
      }, 400);
    }

    // =========================================================================
    // SCENE 6: RESULTS FEED (Outlier ⚡)
    // =========================================================================
    else if (stage === "results") {
      // Hand moves 100% PRECISELY to Card #1 center (x = 26.5%, y = 40.0%)
      t = setTimeout(() => {
        setCursor({ x: 26.5, y: 40.0, click: false, visible: true });
        t = setTimeout(() => {
          // Tap on Card #1
          setCursor({ x: 26.5, y: 40.0, click: true, visible: true });
          t = setTimeout(() => {
            setStage("hook_modal");
          }, 300);
        }, 700);
      }, 400);
    }

    // =========================================================================
    // SCENE 7: DETAIL HOOK MODAL & EXPORT EXCEL
    // =========================================================================
    else if (stage === "hook_modal") {
      // Hand moves 100% PRECISELY to "Export Excel" button center (x = 50%, y = 93.5%)
      t = setTimeout(() => {
        setCursor({ x: 50, y: 93.5, click: false, visible: true });
        t = setTimeout(() => {
          // Tap "Export Excel"
          setCursor({ x: 50, y: 93.5, click: true, visible: true });
          setShowExportToast(true);
          t = setTimeout(() => {
            // Loop reset back to hub
            setStage("hub");
          }, 2400);
        }, 700);
      }, 400);
    }

    return () => clearTimeout(t);
  }, [stage, data.handle, platform, targetScroll]);

  return (
    <div className="relative w-full max-w-[220px] sm:max-w-[235px] aspect-[9/18.5] bg-gray-950 rounded-[32px] sm:rounded-[36px] p-[6px] sm:p-[7px] shadow-xl dark:shadow-2xl border-[3.5px] border-gray-800 dark:border-gray-700/80 ring-1 ring-white/10 select-none mx-auto shrink-0 transition-transform duration-300 hover:scale-[1.02]">
      
      {/* Top Camera Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 rounded-full bg-black flex items-center justify-between px-1.5 z-50">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
        <div className="w-4 h-0.5 rounded-full bg-gray-800" />
        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
      </div>

      {/* Screen Canvas */}
      <div className="relative w-full h-full rounded-[26px] sm:rounded-[30px] overflow-hidden bg-white dark:bg-[#0c1224] text-gray-900 dark:text-gray-100 flex flex-col font-sans border border-black/15 text-[9px]">
        
        {/* Virtual Status Bar */}
        <div className="w-full pt-1.5 px-3 pb-0.5 flex items-center justify-between text-[8px] font-bold text-gray-500 dark:text-gray-400 shrink-0 z-30">
          <span>09:41</span>
          <div className="flex items-center gap-1">
            <span className="text-[7px]">5G</span>
            <div className="w-3.5 h-1.5 rounded-[3px] border border-current p-0.5 flex items-center">
              <div className="w-2 h-full bg-current rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Global App Bar (Identik dengan Screenshot 1 & 2) */}
        <div className="w-full px-2.5 py-1.5 border-b border-gray-100 dark:border-white/5 flex items-center justify-between shrink-0 bg-white dark:bg-[#0c1224] z-20">
          <div className="flex items-center gap-1.5">
            <div className="flex flex-col gap-0.5">
              <div className="w-2.5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded" />
              <div className="w-2.5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded" />
              <div className="w-2.5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded" />
            </div>
            <span className="font-bold text-[9.5px] tracking-tight">ruangcreativemuslim</span>
          </div>
          <div className="flex items-center gap-1">
            <Bell className="w-2.5 h-2.5 text-gray-400" />
            <div className="w-3.5 h-3.5 rounded-full bg-amber-400 text-gray-950 flex items-center justify-center font-black text-[7px] border border-black/20">
              R
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SCENE 1: PLATFORM HUB DENGAN SCROLL ANIMASI */}
        {/* ========================================================================= */}
        {stage === "hub" && (
          <div className="flex-1 w-full p-2.5 space-y-1.5 overflow-hidden flex flex-col justify-start animate-in fade-in duration-200">
            {/* Headline */}
            <div className="text-center space-y-0.5 pt-0.5 shrink-0">
              <h4 className="font-extrabold text-[12px] text-gray-950 dark:text-white leading-tight">
                Mau mulai dari mana?
              </h4>
              <p className="text-[7.5px] text-gray-500 dark:text-gray-400 leading-tight line-clamp-2 px-1">
                Pilih platform media sosial di bawah ini untuk riset topik tren viral &amp; analisis kompetitor.
              </p>
            </div>

            {/* Scrollable List Container */}
            <div className="flex-1 w-full overflow-hidden relative pt-1">
              <div
                className="w-full space-y-2 transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${hubScrollY}px)` }}
              >
                {ALL_PLATFORMS.map((plat) => {
                  const isCurrent = plat.id === platform;
                  const itemData = DATA_MAP[plat.id];

                  return (
                    <div
                      key={plat.id}
                      className={`w-full p-2.5 rounded-xl border-2 transition-all ${
                        isCurrent
                          ? `border-orange-500 bg-white dark:bg-[#141B31] shadow-md ring-2 ring-orange-500/20 ${
                              cursor.click && stage === "hub" && isCurrent ? "scale-[0.97]" : ""
                            }`
                          : "border-gray-200/80 dark:border-white/10 bg-white dark:bg-[#141B31] opacity-75"
                      } space-y-1.5 text-left`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-800 dark:text-white shrink-0">
                            <span className="text-[11px]">{plat.iconEmoji}</span>
                          </div>
                          <span className="font-extrabold text-[10px] text-gray-950 dark:text-white">
                            {plat.name}
                          </span>
                        </div>
                        <span className="text-[7.5px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-1 py-0.5 rounded border border-emerald-500/20">
                          FREE
                        </span>
                      </div>

                      <p className="text-[7.5px] text-gray-600 dark:text-gray-300 leading-tight line-clamp-2">
                        {itemData.hubDesc}
                      </p>

                      {/* 3 Connected Points */}
                      <div className="space-y-0.5 pt-0.5">
                        {itemData.points.map((pt, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-[7px] text-gray-700 dark:text-gray-300">
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                idx === 0 ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-600"
                              }`}
                            />
                            <span className="truncate">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* SCENE 2, 3, 4: SEARCH STUDIO & MODAL "Sort & Filter Feed" */}
        {/* ========================================================================= */}
        {(stage === "studio_empty" || stage === "filter_open" || stage === "typing" || stage === "scanning") && (
          <div className="flex-1 w-full p-2.5 space-y-2 overflow-hidden flex flex-col justify-start animate-in fade-in duration-200 text-left relative">
            
            {/* Back Button & Headline (Persis Gambar 2) */}
            <div className="flex items-center gap-1 pt-0.5 text-gray-600 dark:text-gray-300">
              <ArrowLeft className="w-3 h-3" />
            </div>

            <div className="text-center space-y-0.5 pt-0.5">
              <h4 className="font-extrabold text-[12px] text-gray-950 dark:text-white leading-tight">
                Mau riset akun siapa?
              </h4>
              <p className="text-[7.5px] text-gray-500 dark:text-gray-400 leading-tight px-1">
                Ketik username {data.name} akun rujukan untuk menyortir konten dengan tayangan terbanyak dan Outlier Score tertinggi.
              </p>
            </div>

            {/* Authentic Search Input with Filter Icon on the Right */}
            <div className="relative w-full mt-0.5">
              <div className="w-full h-8 rounded-xl border border-gray-200 dark:border-[#2C3246] bg-white dark:bg-[#141B31] shadow-2xs px-2.5 flex items-center justify-between text-[9px]">
                <div className="flex items-center gap-1 overflow-hidden">
                  <span className="text-gray-400 font-bold">@</span>
                  <span className="font-medium text-gray-900 dark:text-white truncate">
                    {stage === "typing" || stage === "scanning" ? typedHandle : data.handle}
                  </span>
                  {stage === "typing" && (
                    <span className="w-1 h-3 bg-orange-500 inline-block animate-pulse" />
                  )}
                </div>

                {/* Filter Icon Button (SlidersHorizontal) */}
                <div
                  className={`p-1 rounded-md transition-all ${
                    stage === "filter_open" || (cursor.click && stage === "studio_empty")
                      ? "text-orange-500 bg-orange-500/20 scale-90 ring-1 ring-orange-500/30"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <SlidersHorizontal className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Big Orange "🔍 Riset Konten" Button */}
            <button
              type="button"
              className={`w-full py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-[9.5px] flex items-center justify-center gap-1.5 shadow-xs transition-transform ${
                cursor.click && stage === "typing" ? "scale-95 bg-orange-600" : ""
              }`}
            >
              <Search className="w-3 h-3 stroke-[2.5]" />
              <span>Riset Konten</span>
            </button>

            {/* =================================================================== */}
            {/* MODAL "Sort & Filter Feed" (ANIMATED INTERACTION PERSIS SCREENSHOT!) */}
            {/* =================================================================== */}
            {stage === "filter_open" && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px] z-40 p-2 flex flex-col justify-center animate-in fade-in duration-150">
                <div className="w-full bg-white dark:bg-[#141B31] rounded-2xl border border-gray-200 dark:border-[#2C3246] shadow-2xl p-2.5 space-y-2 text-left animate-in zoom-in-95 duration-200">
                  
                  {/* Modal Header */}
                  <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-md bg-orange-500/10 text-orange-600 flex items-center justify-center">
                        <SlidersHorizontal className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="font-bold text-[10px] text-gray-950 dark:text-white leading-none">
                        Sort &amp; Filter Feed
                      </span>
                    </div>
                    <X className="w-3 h-3 text-gray-400 cursor-pointer" />
                  </div>

                  {/* Section Filters: Interactive Toggle [Posts] vs [Date] */}
                  <div className="space-y-1">
                    <span className="text-[7.5px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Filters
                    </span>
                    
                    {/* Toggle Buttons: [Posts] & [Date] with Animated Blue Active Border */}
                    <div className="grid grid-cols-2 gap-1">
                      <div
                        className={`py-1 px-2 rounded-lg font-bold text-[7.5px] flex items-center justify-center gap-1 transition-all ${
                          filterTab === "posts"
                            ? "border-2 border-blue-600 bg-white dark:bg-white/5 text-blue-600 dark:text-blue-400 shadow-2xs"
                            : "border border-gray-200 dark:border-white/10 text-gray-500 font-medium"
                        } ${
                          cursor.click && stage === "filter_open" && cursor.x < 50 && cursor.y < 50
                            ? "scale-95"
                            : ""
                        }`}
                      >
                        <Grid className="w-2.5 h-2.5" />
                        <span>Posts</span>
                      </div>
                      <div
                        className={`py-1 px-2 rounded-lg font-bold text-[7.5px] flex items-center justify-center gap-1 transition-all ${
                          filterTab === "date"
                            ? "border-2 border-blue-600 bg-white dark:bg-white/5 text-blue-600 dark:text-blue-400 shadow-2xs"
                            : "border border-gray-200 dark:border-white/10 text-gray-500 font-medium"
                        } ${
                          cursor.click && stage === "filter_open" && cursor.x > 50 && cursor.y < 50
                            ? "scale-95"
                            : ""
                        }`}
                      >
                        <Calendar className="w-2.5 h-2.5" />
                        <span>Date</span>
                      </div>
                    </div>

                    {/* Dropdown: Switches between "Latest 25 Posts" & "All Time" */}
                    <div className="w-full py-1 px-2 rounded-lg border border-orange-500 bg-white dark:bg-[#141B31] flex items-center justify-between text-[7.5px] font-bold text-gray-800 dark:text-gray-200 shadow-2xs transition-all">
                      <span>{filterTab === "posts" ? "Latest 25 Posts" : "All Time"}</span>
                      <ChevronDown className="w-2.5 h-2.5 text-gray-400" />
                    </div>
                  </div>

                  {/* Section Sort: Interactive Click Lights Up "Outlier score" & Checkmark! */}
                  <div className="space-y-0.5 pt-0.5">
                    <span className="text-[7.5px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Sort
                    </span>

                    <div className="space-y-0.5 text-[7.5px]">
                      {/* Likes */}
                      <div className="flex items-center gap-1.5 py-0.5 px-1.5 text-gray-600 dark:text-gray-300">
                        <Heart className="w-2.5 h-2.5 text-gray-400" />
                        <span>Likes</span>
                      </div>

                      {/* Views */}
                      <div
                        className={`flex items-center gap-1.5 py-0.5 px-1.5 rounded transition-colors ${
                          sortOption === "views" ? "text-gray-900 dark:text-white font-semibold" : "text-gray-500"
                        }`}
                      >
                        <Play className="w-2.5 h-2.5 text-gray-400" />
                        <span>Views</span>
                      </div>

                      {/* Outlier score (Dinamis: Berubah Menjadi Oranye & Muncul Centang ✓ Saat Diklik Jari!) */}
                      <div
                        className={`flex items-center justify-between py-1 px-1.5 rounded-lg transition-all duration-200 ${
                          sortOption === "outlier"
                            ? "bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 font-extrabold shadow-2xs ring-1 ring-orange-500/30"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100"
                        } ${
                          cursor.click && stage === "filter_open" && cursor.y > 55 && cursor.y < 70
                            ? "scale-95 bg-orange-100 dark:bg-orange-950/50"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <Zap
                            className={`w-2.5 h-2.5 ${
                              sortOption === "outlier" ? "fill-current text-orange-500" : "text-gray-400"
                            }`}
                          />
                          <span>Outlier score</span>
                        </div>
                        {sortOption === "outlier" && (
                          <Check className="w-3 h-3 stroke-[3] text-orange-500 animate-in zoom-in-75 duration-150" />
                        )}
                      </div>

                      {/* Engagement Rate */}
                      <div className="flex items-center gap-1.5 py-0.5 px-1.5 text-gray-600 dark:text-gray-300">
                        <TrendingUp className="w-2.5 h-2.5 text-gray-400" />
                        <span>Engagement Rate</span>
                      </div>

                      {/* Comments */}
                      <div className="flex items-center gap-1.5 py-0.5 px-1.5 text-gray-600 dark:text-gray-300">
                        <MessageSquare className="w-2.5 h-2.5 text-gray-400" />
                        <span>Comments</span>
                      </div>

                      {/* Oldest */}
                      <div className="flex items-center gap-1.5 py-0.5 px-1.5 text-gray-600 dark:text-gray-300">
                        <Clock className="w-2.5 h-2.5 text-gray-400" />
                        <span>Oldest</span>
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer: Reset (Left) & Apply Filter (Right) */}
                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/5 pt-1.5">
                    <span className="text-[7.5px] font-bold text-gray-400">Reset</span>
                    <button
                      type="button"
                      className={`py-1 px-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-[8px] shadow-xs transition-transform ${
                        cursor.click && stage === "filter_open" && cursor.y > 75 ? "scale-95 bg-orange-600" : ""
                      }`}
                    >
                      Apply Filter
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* SCANNING PROGRESS CARD (During Scanning Phase) */}
            {stage === "scanning" && (
              <div className="p-2 rounded-xl bg-white dark:bg-[#141B31] border border-orange-500/30 shadow-md space-y-1.5 text-center animate-in fade-in duration-200 mt-2">
                <div className="flex items-center justify-center gap-1 text-[8.5px] font-bold text-orange-600 dark:text-orange-400">
                  <Sparkles className="w-3 h-3 animate-spin" />
                  <span>Scanning &amp; Menghitung Outlier...</span>
                </div>
                <div className="w-full h-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300"
                    style={{ width: `${scanPercent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[7.5px] text-gray-400">
                  <span>Menganalisis konten viral</span>
                  <span className="font-bold text-orange-500">{scanPercent}%</span>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ========================================================================= */}
        {/* SCENE 6 & 7: RESULTS FEED & HOOK MODAL */}
        {/* ========================================================================= */}
        {(stage === "results" || stage === "hook_modal") && (
          <div className="flex-1 w-full p-2 space-y-1.5 overflow-hidden flex flex-col justify-start animate-in fade-in duration-200 relative text-left">
            
            {/* Target Profile Mini Header */}
            <div className="p-1.5 rounded-lg bg-white dark:bg-[#141B31] border border-gray-200 dark:border-[#2C3246] shadow-2xs flex items-center justify-between">
              <div>
                <div className="font-extrabold text-[9px] text-gray-900 dark:text-white truncate max-w-[90px]">
                  {data.targetName}
                </div>
                <div className="text-[7.5px] text-gray-400">{data.followers}</div>
              </div>
              <div className="text-right">
                <div className="text-[7px] uppercase tracking-wider text-gray-400 font-bold">Rata-rata</div>
                <div className="font-black text-[8px] text-emerald-600 dark:text-emerald-400">
                  {data.avgViews}
                </div>
              </div>
            </div>

            {/* Sort Toolbar: Urutkan Outlier */}
            <div className="flex items-center justify-between px-0.5 text-[8px]">
              <span className="text-gray-500 font-bold">4 Konten Outlier</span>
              <div className="flex items-center gap-0.5 px-1 py-0.5 rounded bg-amber-400 text-gray-950 font-black shadow-xs">
                <Zap className="w-2 h-2 fill-current" />
                <span>Outlier ⚡</span>
              </div>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-2 gap-1">
              {data.posts.map((p, idx) => {
                const isTop = idx === 0;
                return (
                  <div
                    key={p.id}
                    className={`relative aspect-[3/4] rounded-md overflow-hidden bg-gradient-to-b ${p.colorBg} border border-white/10 p-1 flex flex-col justify-between transition-transform ${
                      isTop ? "ring-1 ring-amber-400" : ""
                    } ${isTop && cursor.click && stage === "results" ? "scale-95 ring-2 ring-amber-400" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex items-center gap-0.5 px-1 py-0.2 rounded text-[7px] font-black ${
                          p.outlier >= 8 ? "bg-amber-400 text-gray-950" : "bg-black/75 text-amber-300"
                        }`}
                      >
                        <Zap className="w-2 h-2 fill-current" />
                        {p.outlier}×
                      </span>
                      <div className="w-3 h-3 rounded-full bg-black/60 flex items-center justify-center text-white">
                        {p.format === "carousel" || p.format === "photo" ? (
                          <Layers className="w-2 h-2" />
                        ) : (
                          <Play className="w-1.5 h-1.5 fill-white" />
                        )}
                      </div>
                    </div>

                    <div className="bg-black/75 backdrop-blur-xs rounded p-0.5 text-white">
                      <div className="font-bold text-[7.5px] truncate text-white">{p.caption}</div>
                      <div className="text-[6.5px] text-gray-300 flex items-center justify-between font-semibold">
                        <span>{p.views}</span>
                        <span className="flex items-center gap-0.5">
                          <Heart className="w-1.5 h-1.5 fill-rose-500 text-rose-500" />
                          {p.likes}
                        </span>
                      </div>
                    </div>

                    {isTop && (
                      <div className="absolute inset-0 border border-amber-400 rounded-md pointer-events-none opacity-80 animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* HOOK & EXPORT MODAL */}
            {stage === "hook_modal" && (
              <div className="absolute inset-0 bg-black/85 backdrop-blur-xs z-30 p-2 flex flex-col justify-end animate-in fade-in duration-150">
                <div className="w-full bg-white dark:bg-[#141B31] rounded-xl p-2 border border-orange-500/40 shadow-xl space-y-1.5 text-left">
                  <div className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-400 font-black text-[7.5px]">
                    <Zap className="w-2 h-2 fill-current" />
                    <span>OUTLIER 14.8× (Viral)</span>
                  </div>
                  <div className="p-1 rounded bg-orange-50 dark:bg-orange-950/30 text-[7.5px] font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                    &ldquo;{data.hook}&rdquo;
                  </div>
                  <div className="flex gap-1 pt-0.5">
                    <div
                      className={`flex-1 py-1 rounded bg-emerald-600 text-white font-bold text-[7.5px] flex items-center justify-center gap-0.5 transition-transform ${
                        cursor.click && stage === "hook_modal" ? "scale-95 bg-emerald-700" : ""
                      }`}
                    >
                      <FileSpreadsheet className="w-2 h-2" />
                      <span>Export Excel</span>
                    </div>
                  </div>
                  {showExportToast && (
                    <div className="p-1 rounded bg-emerald-500 text-white font-bold text-[7px] text-center flex items-center justify-center gap-0.5 animate-in fade-in">
                      <CheckCircle2 className="w-2 h-2" />
                      <span>✅ Data &amp; Hook Berhasil Diekspor!</span>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        )}

        {/* ========================================================================= */}
        {/* ANIMATED ARROW POINTER (Ujung Lancip Terkunci Presisi di Titik 0, 0) */}
        {/* ========================================================================= */}
        {cursor.visible && (
          <div
            className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
            style={{
              left: `${cursor.x}%`,
              top: `${cursor.y}%`,
            }}
          >
            <PrecisionArrowPointer isClicking={cursor.click} />
          </div>
        )}

      </div>
    </div>
  );
}
