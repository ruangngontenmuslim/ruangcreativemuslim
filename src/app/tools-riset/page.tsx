import type { Metadata } from "next";
import Link from "next/link";
import { Check, Flame, Zap, Sparkles, TrendingUp, Search, Smartphone, ShieldCheck, ArrowRight, Download, FileSpreadsheet } from "lucide-react";
import { ToolsRisetNavbar } from "./ToolsRisetNavbar";
import { ToolsRisetPromoCallout } from "./ToolsRisetPromoCallout";
import { ToolsRisetMiniPhone } from "./ToolsRisetMiniPhone";

export const metadata: Metadata = {
  title: "Tools Riset Konten Viral Instagram, TikTok, YouTube & Facebook | ruangcreativemuslim",
  description:
    "Bongkar rahasia konten viral dan Outlier Score kompetitor di Instagram, TikTok, YouTube, dan Facebook. Temukan ide konten yang pasti ramai tanpa tebak-tebakan.",
  openGraph: {
    title: "Tools Riset Konten Viral 4 Platform | ruangcreativemuslim",
    description:
      "Temukan konten dengan Outlier Score tinggi dalam hitungan detik. 100% bisa diakses lewat HP!",
    url: "https://www.ruangcreativemuslim.com/tools-riset",
    siteName: "ruangcreativemuslim",
    locale: "id_ID",
    type: "website",
  },
};

export default function ToolsRisetLandingPage() {
  return (
    <div className="w-full min-h-screen bg-[#EEF2F6] dark:bg-[#050814] flex justify-center -mt-16 -mb-1 font-sans selection:bg-amber-300 selection:text-gray-950 transition-colors duration-200">
      
      {/* Centered Canvas Container (Lebar Pas ~680px dengan Batas Kiri-Kanan) */}
      <div className="w-full max-w-[680px] min-h-screen bg-white dark:bg-[#0A1128] border-x border-gray-200/90 dark:border-[#1E2640] shadow-[0_0_30px_rgba(0,0,0,0.03)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col justify-between transition-colors duration-200">
        
        {/* Top Header Inside the Canvas */}
        <ToolsRisetNavbar />

        {/* Hero Section Container */}
        <main className="flex-1 w-full px-5 sm:px-8 py-2 flex flex-col items-center text-center">
          
          {/* Promo Pill Link (Identik dengan LP Cuan Faceless) */}
          <Link
            href="/?pricing=true&cat=riset"
            className="group inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold border border-amber-500/30 bg-amber-500/5 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-200 mb-3 mt-1 select-none shadow-xs active:scale-95"
          >
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
            <span>PROMO hingga 50%</span>
            <span className="ml-0.5 text-sm leading-none transition-transform duration-200 group-hover:translate-x-0.5">&rsaquo;</span>
          </Link>

          {/* Main Headline (Harmonized 3-Line Cascade) */}
          <h1 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center max-w-[480px] mx-auto">
            <span className="block">Bongkar Rahasia</span>
            <span className="block">Konten Viral Kompetitor</span>
            <span className="block">Tanpa Tebak-Tebakan</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-3 text-[13.5px] sm:text-[15px] text-gray-600 dark:text-gray-300 max-w-[480px] mx-auto leading-relaxed text-balance">
            Sistem riset 4 platform (<strong className="text-gray-950 dark:text-white font-bold">Instagram, TikTok, YouTube, dan Facebook</strong>) yang otomatis menemukan konten dengan <strong className="text-amber-600 dark:text-amber-400 font-bold">performa tinggi</strong> hanya dalam hitungan detik.
          </p>

          {/* ========================================================================= */}
          {/* SEKSI CERITA & MASALAH: "Pernah Ngerasa Gini Pas Bikin Konten?" */}
          {/* ========================================================================= */}
          <div className="w-full mt-[28px] mb-0 flex flex-col items-center">
            
            <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto text-center">
              <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] mb-4">
                <span className="block">Pernah Ngerasain Ini</span>
                <span className="block">Saat Bikin Konten?</span>
              </h2>

              <div className="space-y-2 text-[14px] sm:text-[15px] text-gray-700 dark:text-gray-300 leading-[1.55] text-left">
                <p>
                  Sudah capek-capek rekam video, mikirin konsep berjam-jam, dan edit sampai larut malam. Tapi begitu di-upload, <strong className="text-gray-950 dark:text-white font-bold">view-nya mentok di angka 200.</strong>
                </p>
                <p>
                  Mau bikin konten setiap hari, tapi bingung mau bahas apa. Akhirnya buka Instagram atau TikTok buat cari inspirasi, eh malah keasyikan scroll sampai lupa waktu.
                </p>
                <p className="font-bold text-gray-950 dark:text-white pt-0.5">
                  Padahal, rahasia akun besar bisa berkembang pesat bukan karena mereka selalu punya ide sendiri dari nol!
                </p>
              </div>

              {/* 3 Highlight Masalah vs Solusi */}
              <div className="mt-4 text-left space-y-2">
                <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                  <div className="w-5 h-5 rounded-md bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                    <strong className="text-gray-950 dark:text-white font-bold">Mereka meriset konten yang sudah terbukti menarik banyak penonton</strong>, bukan sekadar menebak-nebak.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                  <div className="w-5 h-5 rounded-md bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                    <strong className="text-amber-600 dark:text-amber-400 font-bold">Mereka mencari konten dengan Outlier Score tinggi</strong>, yaitu konten yang views-nya jauh di atas rata-rata akun tersebut.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                  <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                    <strong className="text-gray-950 dark:text-white font-bold">Mereka menerapkan metode ATM (Amati, Tiru, Modifikasi)</strong> pada hook dan struktur konten untuk meningkatkan peluang viral.
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* SEKSI: "4 Senjata Riset Lengkap dalam 1 Genggaman HP" (SHOWCASE KIRI-KANAN) */}
          {/* ========================================================================= */}
          <div className="w-full mt-[32px] mb-4 flex flex-col items-center">
            
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center mb-2">
              <span className="block">4 Senjata Riset Lengkap</span>
              <span className="block">dalam 1 Genggaman HP</span>
            </h2>

            <p className="text-[13px] sm:text-[14px] text-gray-600 dark:text-gray-400 text-center max-w-[460px] mx-auto mb-6 leading-relaxed">
              Semua platform tempat berkumpulnya audiens siap kamu bedah performanya secara instan dengan simulasi langsung di layar HP kamu:
            </p>

            {/* List Showcase Per Fitur (Clean Borderless Layout Berdampingan Kiri & Kanan / Zig-Zag) */}
            <div className="w-full space-y-10 sm:space-y-14 mt-2">
              
              {/* ------------------------------------------------------------------- */}
              {/* FITUR 1: INSTAGRAM (Kiri: Penjelasan, Kanan: Simulasi HP) */}
              {/* ------------------------------------------------------------------- */}
              <div className="w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-left">
                {/* Kiri: Teks Penjelasan */}
                <div className="flex-1 space-y-2.5">
                  <h3 className="font-extrabold text-xl sm:text-2xl text-gray-950 dark:text-white tracking-tight leading-tight">
                    Riset Instagram
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Bongkar Outlier Score Reels kompetitor, sortir views terbanyak, lihat hook caption terlaris, dan ekspor data ribuan postingan ke Excel/CSV.
                  </p>
                  <div className="pt-1 space-y-1.5 text-[12.5px] sm:text-[13px] text-gray-600 dark:text-gray-400 font-medium">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                      <span>Deteksi otomatis Outlier Reels ⚡</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Ekspor Hook &amp; Naskah ke Excel / CSV</span>
                    </div>
                  </div>
                </div>

                {/* Kanan: Simulasi HP Instagram */}
                <div className="shrink-0 w-full sm:w-auto flex justify-center">
                  <ToolsRisetMiniPhone platform="instagram" />
                </div>
              </div>

              {/* ------------------------------------------------------------------- */}
              {/* FITUR 2: TIKTOK (Kiri: Simulasi HP, Kanan: Penjelasan) - Zig Zag */}
              {/* ------------------------------------------------------------------- */}
              <div className="w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-left">
                {/* Di Mobile: Teks di atas. Di Desktop (sm): Simulasi di kiri */}
                <div className="shrink-0 w-full sm:w-auto flex justify-center order-2 sm:order-1">
                  <ToolsRisetMiniPhone platform="tiktok" />
                </div>

                {/* Kanan (sm): Teks Penjelasan */}
                <div className="flex-1 space-y-2.5 order-1 sm:order-2">
                  <h3 className="font-extrabold text-xl sm:text-2xl text-gray-950 dark:text-white tracking-tight leading-tight">
                    Riset TikTok
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Pilah konten video pendek vs format photo slide yang sedang trending di niche kamu, unduh media tanpa watermark, dan bedah pola copywriting FYP.
                  </p>
                  <div className="pt-1 space-y-1.5 text-[12.5px] sm:text-[13px] text-gray-600 dark:text-gray-400 font-medium">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                      <span>Bongkar konten dengan FYP tertinggi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Download video / photo slide tanpa watermark</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------------- */}
              {/* FITUR 3: YOUTUBE (Kiri: Penjelasan, Kanan: Simulasi HP) */}
              {/* ------------------------------------------------------------------- */}
              <div className="w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-left">
                {/* Kiri: Teks Penjelasan */}
                <div className="flex-1 space-y-2.5">
                  <h3 className="font-extrabold text-xl sm:text-2xl text-gray-950 dark:text-white tracking-tight leading-tight">
                    Riset YouTube
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Bongkar Outlier Score video &amp; Shorts kompetitor, pisahkan format konten, temukan pola judul pemenang, dan ekspor data ide ke Excel/CSV.
                  </p>
                  <div className="pt-1 space-y-1.5 text-[12.5px] sm:text-[13px] text-gray-600 dark:text-gray-400 font-medium">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                      <span>Filter cepat Shorts vs Video Reguler</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Ekspor database ide judul &amp; hook</span>
                    </div>
                  </div>
                </div>

                {/* Kanan: Simulasi HP YouTube */}
                <div className="shrink-0 w-full sm:w-auto flex justify-center">
                  <ToolsRisetMiniPhone platform="youtube" />
                </div>
              </div>

              {/* ------------------------------------------------------------------- */}
              {/* FITUR 4: FACEBOOK (Kiri: Simulasi HP, Kanan: Penjelasan) - Zig Zag */}
              {/* ------------------------------------------------------------------- */}
              <div className="w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-left">
                {/* Di Mobile: Teks di atas. Di Desktop (sm): Simulasi di kiri */}
                <div className="shrink-0 w-full sm:w-auto flex justify-center order-2 sm:order-1">
                  <ToolsRisetMiniPhone platform="facebook" />
                </div>

                {/* Kanan (sm): Teks Penjelasan */}
                <div className="flex-1 space-y-2.5 order-1 sm:order-2">
                  <h3 className="font-extrabold text-xl sm:text-2xl text-gray-950 dark:text-white tracking-tight leading-tight">
                    Riset Facebook
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Bongkar Outlier Score Reels, Video &amp; Foto halaman kompetitor, sortir interaksi tertinggi, dan intip konten yang menghasilkan share dan omset masif.
                  </p>
                  <div className="pt-1 space-y-1.5 text-[12.5px] sm:text-[13px] text-gray-600 dark:text-gray-400 font-medium">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                      <span>Lacak konten fanspage dengan viralitas tinggi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Ekspor caption &amp; formula copywriting</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* SEKSI: "Yang Kamu Dapetin" (Checklist Cards Hijau) */}
          {/* ========================================================================= */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto mt-[24px] mb-4">
            
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center mb-4">
              Yang Kamu Dapetin
            </h2>

            <div className="space-y-2 text-left">
              {/* Point 1 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Akses sistem riset <strong className="text-gray-950 dark:text-white font-bold">4 Platform Sekaligus</strong> (Instagram, TikTok, YouTube, Facebook).
                </span>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  <strong className="text-amber-600 dark:text-amber-400 font-bold">Kalkulator Outlier Score Otomatis</strong> yang langsung menandai konten juara.
                </span>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Fitur sortir instan berdasarkan <strong className="text-gray-950 dark:text-white font-bold">Views, Likes, Komentar, dan Tanggal Posting</strong>.
                </span>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Fitur <strong className="text-gray-950 dark:text-white font-bold">Ekspor Data &amp; Naskah ke Excel / CSV / Google Sheets</strong> dengan 1 klik.
                </span>
              </div>

              {/* Point 5 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Download media video dan audio referensi <strong className="text-emerald-700 dark:text-emerald-400 font-bold">tanpa watermark</strong>.
                </span>
              </div>

              {/* Point 6 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Bebas riset <strong className="text-gray-950 dark:text-white font-bold">akun kompetitor siapa pun</strong> di niche apa pun tanpa batasan kategori.
                </span>
              </div>

              {/* Point 7 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Panduan video cara menemukan <strong className="text-gray-950 dark:text-white font-bold">Angle &amp; Hook Konten Pemenang</strong>.
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SEKSI: "Kenapa Harus Ruang Riset?" */}
          {/* ========================================================================= */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto mt-[20px] mb-4">
            
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center mb-4">
              Kenapa Harus Ruang Riset?
            </h2>

            <div className="space-y-2 text-left">
              {/* Point 1 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  <strong className="text-gray-950 dark:text-white font-bold">100% Bisa Pakai HP Doang</strong> tanpa harus punya laptop atau PC spek tinggi.
                </span>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  <strong className="text-emerald-700 dark:text-emerald-400 font-bold">100% Aman</strong>: Tidak perlu login akun sosmed pribadi kamu sama sekali.
                </span>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  <strong className="text-gray-950 dark:text-white font-bold">Hemat Waktu 90%</strong>: Dari yang biasanya scroll 3 jam, sekarang cukup 1 menit sudah dapat puluhan ide konten.
                </span>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Tanpa perlu install aplikasi berat, <strong className="text-gray-950 dark:text-white font-bold">langsung buka lewat browser HP</strong> (Chrome / Safari).
                </span>
              </div>

              {/* Point 5 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  <strong className="text-emerald-700 dark:text-emerald-400 font-bold">Free Update</strong> fitur baru tanpa ada biaya tersembunyi.
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SEKSI: "Yang Sering Ditanyain" (FAQ) */}
          {/* ========================================================================= */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto mt-[20px] mb-0">
            
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center mb-4">
              Yang Sering Ditanyain
            </h2>

            <div className="space-y-2.5 text-left">
              {/* Q1 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <h3 className="font-bold text-[13.5px] sm:text-[14.5px] text-gray-950 dark:text-white leading-snug">
                  Apakah harus login pakai akun Instagram / TikTok pribadi saya?
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                  <strong className="text-emerald-600 dark:text-emerald-400 font-bold">SAMA SEKALI TIDAK.</strong> Akun kamu 100% aman karena kamu hanya perlu mengetik username akun kompetitor atau rujukan yang ingin kamu riset.
                </p>
              </div>

              {/* Q2 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <h3 className="font-bold text-[13.5px] sm:text-[14.5px] text-gray-950 dark:text-white leading-snug">
                  Apakah benar-benar bisa lewat HP doang?
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                  Bisa banget! Ruang Riset dirancang dengan antarmuka yang sangat responsif dan ringan, sehingga sangat nyaman dibuka dari browser HP mana pun.
                </p>
              </div>

              {/* Q3 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <h3 className="font-bold text-[13.5px] sm:text-[14.5px] text-gray-950 dark:text-white leading-snug">
                  Apa itu Outlier Score dan kenapa penting?
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                  Outlier Score adalah angka pengali yang menunjukkan seberapa viral sebuah video dibanding rata-rata konten akun tersebut. Misalnya Outlier 10× artinya video itu ditonton 10 kali lipat lebih banyak dari biasanya. Meniru formula video outlier memberi peluang viral jauh lebih besar!
                </p>
              </div>

              {/* Q4 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <h3 className="font-bold text-[13.5px] sm:text-[14.5px] text-gray-950 dark:text-white leading-snug">
                  Apakah cocok untuk akun pemula dengan 0 follower?
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                  Justru akun baru <strong className="text-gray-950 dark:text-white font-bold">sangat butuh riset</strong> agar tidak buang-buang waktu mengunggah konten yang tidak ada peminatnya. Dengan riset, setiap konten yang kamu upload sudah punya dasar data yang kuat.
                </p>
              </div>

              {/* Q5 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <h3 className="font-bold text-[13.5px] sm:text-[14.5px] text-gray-950 dark:text-white leading-snug">
                  Bagaimana jika saya gaptek atau butuh bantuan teknis?
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                  Tenang, kami sudah siapkan video tutorial penggunaan yang sangat mudah dipahami langkah demi langkah, plus tim support siap membantu jika ada kendala.
                </p>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* SEKSI: "Promo Spesial Hari Ini & Besok!" (PILIHAN PAKET & TIMER) */}
          {/* ========================================================================= */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto mt-[24px] mb-6 flex flex-col items-center">
            
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center mb-2.5">
              <span className="block">Promo Akses Spesial</span>
              <span className="block">Hari Ini &amp; Besok!</span>
            </h2>

            <p className="text-[13px] sm:text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-1">
              Daftar sekarang sebelum kuota promo ditutup. Pilih paket Ruang Riset yang paling pas untuk kebutuhan kamu:
            </p>

            {/* Animated Clawd Mascot Callout */}
            <ToolsRisetPromoCallout />

            {/* 3 Pricing Packages */}
            <div className="w-full space-y-3.5">
              
              {/* Package 1: Riset 1 Bulan */}
              <div className="w-full p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Paket Bulanan</span>
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-950 dark:text-white leading-tight">
                    Paket Riset 1 Bulan
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      Rp99.000
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 block mt-0.5">
                    Masa aktif 30 hari penuh
                  </span>
                </div>
                <Link
                  href="/?pricing=true&cat=riset"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-center bg-orange-500 hover:bg-orange-600 text-white shadow-xs transition-all active:scale-[0.98] shrink-0"
                >
                  Detail Paket
                </Link>
              </div>

              {/* Package 2: Riset 3 Bulan (Paling Populer) */}
              <div className="relative w-full p-4 rounded-2xl bg-orange-50/50 dark:bg-orange-950/20 border-2 border-orange-500/80 dark:border-orange-500/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-orange-500 text-white font-extrabold text-[10px] tracking-wider uppercase shadow-xs">
                  Paling Populer (Hemat)
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">3 Bulan Akses</span>
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-950 dark:text-white leading-tight">
                    Paket Riset 3 Bulan
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 line-through">
                      Rp297.000
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      Rp249.000
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">
                    Hanya ~Rp 83rb/bulan (Hemat 18%)
                  </span>
                </div>
                <Link
                  href="/?pricing=true&cat=riset"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-center bg-orange-500 hover:bg-orange-600 text-white shadow-xs transition-all active:scale-[0.98] shrink-0"
                >
                  Detail Paket
                </Link>
              </div>

              {/* Package 3: Riset Tahunan */}
              <div className="relative w-full p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-extrabold text-[10px] tracking-wider uppercase shadow-xs">
                  Paling Hemat
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">1 Tahun Penuh</span>
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-950 dark:text-white leading-tight">
                    Paket Riset Tahunan
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 line-through">
                      Rp1.188.000
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      Rp599.000
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">
                    Hanya ~Rp 49rb/bulan (365 hari akses tanpa jeda)
                  </span>
                </div>
                <Link
                  href="/?pricing=true&cat=riset"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-center bg-orange-500 hover:bg-orange-600 text-white shadow-xs transition-all active:scale-[0.98] shrink-0"
                >
                  Detail Paket
                </Link>
              </div>

            </div>

          </div>

        </main>

        {/* Bottom Footer Inside the Canvas */}
        <footer className="w-full pb-6 pt-3 sm:pt-4 flex flex-col items-center justify-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-[#0A1128] transition-colors duration-200">
          <div className="flex items-center gap-1.5">
            <span>Product by</span>
            <a
              href="https://www.instagram.com/ruangcreativemuslim/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              ruangcreativemuslim
            </a>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-gray-400 dark:text-gray-500">
            <Link
              href="/kebijakan-privasi"
              className="hover:underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <span>•</span>
            <Link
              href="/syarat-ketentuan"
              className="hover:underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
