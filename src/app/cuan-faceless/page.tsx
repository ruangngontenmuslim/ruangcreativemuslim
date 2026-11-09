import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { CuanFacelessNavbar } from "./CuanFacelessNavbar";
import { ClawdPromoCallout } from "./ClawdPromoCallout";

export const metadata: Metadata = {
  title: "Cara Dapatin Cuan dari Produk Digital Lewat Konten Faceless | ruangcreativemuslim",
  description: "Cara dapatin cuan dari produk digital lewat konten faceless. Bonus 8 tools untuk ngonten dan riset Instagram, TikTok, Facebook, dan YouTube.",
  openGraph: {
    title: "Cara Dapatin Cuan dari Produk Digital Lewat Konten Faceless",
    description: "Belajar menghasilkan uang dari produk digital tanpa harus tampil wajah. Cukup modal HP dan internet!",
    url: "https://www.ruangcreativemuslim.com/cuan-faceless",
    siteName: "ruangcreativemuslim",
    images: [
      {
        url: "/img_paket/paket_ebook.png",
        width: 1200,
        height: 630,
        alt: "Cara Dapatin Cuan dari Produk Digital Lewat Konten Faceless",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function CuanFacelessLandingPage() {
  return (
    <div className="w-full min-h-screen bg-[#EEF2F6] dark:bg-[#050814] flex justify-center -mt-16 -mb-1 font-sans selection:bg-amber-300 selection:text-gray-950 transition-colors duration-200">

      {/* Centered Canvas Container (Lebar Pas ~680px dengan Batas Kiri-Kanan) */}
      <div className="w-full max-w-[680px] min-h-screen bg-white dark:bg-[#0A1128] border-x border-gray-200/90 dark:border-[#1E2640] shadow-[0_0_30px_rgba(0,0,0,0.03)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col justify-between transition-colors duration-200">
        
        {/* Top Header Inside the Canvas (Sticky & Bounded Strictly Within 680px Canvas Borders) */}
        <CuanFacelessNavbar />

        {/* Hero Section Container */}
        <main className="flex-1 w-full px-5 sm:px-8 py-2 flex flex-col items-center text-center">
          
          {/* Main Headline (Harmonized 3-Line Cascade across Mobile & Desktop) */}
          <h1 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center max-w-[460px] mx-auto">
            <span className="block">Cara Dapatin Cuan</span>
            <span className="block">dari Produk Digital Lewat</span>
            <span className="block">Konten Faceless</span>
          </h1>

          {/* Hero Visual Mockup (Ebook & Smartphone & Points - Borderless) */}
          <div className="mt-[20px] w-full flex justify-center">
            <div className="w-full overflow-hidden rounded-2xl">
              <Image
                src="/cuan-faceless/hero-mockup-ebook-v3.png"
                alt="Ruang Ngonten Faceless - Sudah Dibaca Oleh 800+ Creator Lebih"
                width={1024}
                height={576}
                className="w-full h-auto object-contain block select-none"
                priority
              />
            </div>
          </div>

          {/* Narrative Story Section (Menyatu Bersih di Canvas) */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto mt-[20px] mb-0">
            
            {/* Story Heading (Posisi di Tengah, 2 Baris Terkunci, Ukuran Font Sama dengan Headline Utama) */}
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center mb-4">
              <span className="block">Ceritanya gini,</span>
              <span className="block">teman-teman</span>
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-2 text-[14px] sm:text-[15px] text-gray-700 dark:text-gray-300 leading-[1.55] text-left">
              <p>Di tahun 2025, kantor saya mulai banyak melakukan PHK. Jujur, saya pun khawatir suatu saat akan mengalami hal yang sama.</p>
              <p>Akhirnya, saya mulai mencari cara menghasilkan uang hanya lewat HP dan dari rumah.</p>
              <p>Saya pun iseng mencoba membuat produk digital dan memasarkannya lewat konten faceless.</p>
              <p className="font-bold text-gray-950 dark:text-white pt-0.5">Eh, ternyata peluangnya besar banget!</p>
            </div>

            {/* Achievement Highlights (3 Kotak Poin Pencapaian) */}
            <div className="mt-4 text-left">
              <div className="space-y-2">
                <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                  <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                    Akun Instagram dari <strong className="text-gray-950 dark:text-white font-bold">NOL</strong>, sekarang sudah <strong className="text-gray-950 dark:text-white font-bold">162 ribu followers</strong>.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                  <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                    View yang awalnya sepi, sekarang sering <strong className="text-gray-950 dark:text-white font-bold">VIRAL</strong>.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                  <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                    Bisa menghasilkan cuan setiap hari, dengan total <strong className="text-emerald-700 dark:text-emerald-400 font-bold">penghasilan bulanan mencapai 2 digit</strong>.
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Social Proof (Tanpa Bungkus Kontainer, Jarak Simetris Presisi 20px) */}
            <div className="mt-[20px] w-full flex justify-center">
              <div className="w-full overflow-hidden rounded-2xl dark:ring-1 dark:ring-white/15">
                <Image
                  src="/cuan-faceless/bukti-instagram-v2.jpg"
                  alt="Bukti akun Instagram ruangcreativemuslim 162 ribu followers dan konten viral"
                  width={658}
                  height={769}
                  className="w-full h-auto object-contain block select-none"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Tutorial Creation & Social Response Section (Jarak Simetris Presisi 20px dari Bawah Gambar) */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto mt-[20px] mb-0">
            
            {/* Section Heading (Harmonis dengan Heading Lainnya) */}
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center mb-4">
              <span className="block">Dan dari konten yang</span>
              <span className="block">saya bagikan tersebut</span>
            </h2>

            {/* Section Paragraphs */}
            <div className="space-y-2 text-[14px] sm:text-[15px] text-gray-700 dark:text-gray-300 leading-[1.55] text-left">
              <p>
                Saya juga membuat tutorial cara mendapatkan cuan dari produk digital lewat konten faceless versi saya sendiri.
              </p>
              <p>
                Alhamdulillah, qadarullah, ternyata banyak yang memberikan respons positif dan mulai merasakan hasilnya juga.
              </p>
            </div>

            {/* Visual Testimonial Proof (Tanpa Bungkus Kontainer, Jarak Presisi 20px) */}
            <div className="mt-[20px] w-full flex justify-center">
              <div className="w-full overflow-hidden rounded-2xl dark:ring-1 dark:ring-white/15">
                <Image
                  src="/cuan-faceless/bukti-testimoni-member.jpg"
                  alt="Bukti testimoni dan hasil penjualan member tutorial cuan produk digital faceless"
                  width={724}
                  height={868}
                  className="w-full h-auto object-contain block select-none"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Personal Results Showcase Section */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto mt-[20px] mb-0">
            
            {/* Section Heading (Harmonis & Seragam dengan Heading Lainnya) */}
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center mb-4">
              Nah, Kalo Ini...
            </h2>

            {/* Section Paragraph (Seragam dengan Body Text Lainnya) */}
            <div className="text-[14px] sm:text-[15px] text-gray-700 dark:text-gray-300 leading-[1.55] text-left">
              <p>
                Beberapa hasil yang berhasil saya kumpulkan dari bisnis produk digital lewat konten faceless, tanpa perlu menampilkan wajah, hanya dalam beberapa bulan.
              </p>
            </div>

            {/* Visual Income Proof (Tanpa Bungkus Kontainer, Jarak Presisi 20px) */}
            <div className="mt-[20px] w-full flex justify-center">
              <div className="w-full overflow-hidden rounded-2xl dark:ring-1 dark:ring-white/15">
                <Image
                  src="/cuan-faceless/bukti-penghasilan-lynk.jpg"
                  alt="Bukti omzet penjualan produk digital konten faceless mencapai Rp156 juta di Lynk.id"
                  width={658}
                  height={802}
                  className="w-full h-auto object-contain block select-none"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Deliverables / Curriculum Section (Yang Kamu Dapetin) */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto mt-[20px] mb-4">
            
            {/* Section Heading */}
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center mb-4">
              Yang Kamu Dapetin
            </h2>

            {/* 8 Benefit Checklist Cards */}
            <div className="space-y-2 text-left">
              {/* Point 1 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Dibimbing mulai dari nol memahami <strong className="text-gray-950 dark:text-white font-bold">bisnis produk digital</strong>.
                </span>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Dibimbing membangun <strong className="text-gray-950 dark:text-white font-bold">akun Instagram</strong> dengan lebih terarah.
                </span>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Dibimbing menemukan dan membuat <strong className="text-gray-950 dark:text-white font-bold">konten yang menarik</strong>.
                </span>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Dibimbing memahami cara <strong className="text-gray-950 dark:text-white font-bold">mendistribusikan produk digital</strong>.
                </span>
              </div>

              {/* Point 5 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Dibimbing menemukan cara monetisasi <strong className="text-gray-950 dark:text-white font-bold">tanpa harus punya produk sendiri</strong>.
                </span>
              </div>

              {/* Point 6 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Akses <strong className="text-emerald-700 dark:text-emerald-400 font-bold">8 juta+ produk digital</strong> yang siap dijual kembali.
                </span>
              </div>

              {/* Point 7 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  <strong className="text-gray-950 dark:text-white font-bold">Ebook lengkap</strong> dengan video tutorial.
                </span>
              </div>

              {/* Point 8 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  <strong className="text-emerald-700 dark:text-emerald-400 font-bold">Bonus ebook</strong> untuk personal use.
                </span>
              </div>
            </div>
          </div>

          {/* Advantages Section (Keunggulan Tutorial Ini) */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto mt-[20px] mb-4">
            
            {/* Section Heading */}
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center mb-4">
              Keunggulan Tutorial Ini
            </h2>

            {/* 7 Advantage Checklist Cards */}
            <div className="space-y-2 text-left">
              {/* Point 1 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Praktek <strong className="text-gray-950 dark:text-white font-bold">100% bisa pake hp doang</strong>.
                </span>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  <strong className="text-gray-950 dark:text-white font-bold">Roadmap harian 30 hari</strong>.
                </span>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  <strong className="text-gray-950 dark:text-white font-bold">Template Hook Konten</strong> (Ebook).
                </span>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Akses materi <strong className="text-gray-950 dark:text-white font-bold">lifetime</strong>, bisa diakses dimana saja.
                </span>
              </div>

              {/* Point 5 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  <strong className="text-emerald-700 dark:text-emerald-400 font-bold">Free update</strong> materi seumur hidup tidak perlu bayar lagi.
                </span>
              </div>

              {/* Point 6 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  <strong className="text-gray-950 dark:text-white font-bold">Konsultasi 1 on 1</strong> langsung via WhatsApp personal.
                </span>
              </div>

              {/* Point 7 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Disiapin <strong className="text-emerald-700 dark:text-emerald-400 font-bold">Tools Ngonten dan Tools Riset</strong>.
                </span>
              </div>
            </div>
          </div>

          {/* FAQ Section (Yang Sering Ditanyain) */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto mt-[20px] mb-0">
            
            {/* Section Heading */}
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center mb-4">
              Yang Sering Ditanyain
            </h2>

            {/* 5 Clean Q&A Cards */}
            <div className="space-y-2.5 text-left">
              {/* Q1 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <h3 className="font-bold text-[13.5px] sm:text-[14.5px] text-gray-950 dark:text-white leading-snug">
                  Gaptek bisa ikut?
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                  Bisa banget, karena saya juga awalnya super gaptek.
                </p>
              </div>

              {/* Q2 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <h3 className="font-bold text-[13.5px] sm:text-[14.5px] text-gray-950 dark:text-white leading-snug">
                  Apakah hanya 1x bayar?
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                  Benar, hanya sekali bayar saja.
                </p>
              </div>

              {/* Q3 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <h3 className="font-bold text-[13.5px] sm:text-[14.5px] text-gray-950 dark:text-white leading-snug">
                  Apakah bisa kalo pake HP doang?
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                  Insyaallah bisa banget.
                </p>
              </div>

              {/* Q4 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <h3 className="font-bold text-[13.5px] sm:text-[14.5px] text-gray-950 dark:text-white leading-snug">
                  Apakah bisa kalo follower IG-nya masih sedikit banget?
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                  Bisa banget dong, btw saya juga start dari <strong className="text-gray-950 dark:text-white font-bold">NOL follower</strong>.
                </p>
              </div>

              {/* Q5 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <h3 className="font-bold text-[13.5px] sm:text-[14.5px] text-gray-950 dark:text-white leading-snug">
                  Apakah ada jaminan berhasil..?
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                  Tidak ada jaminan 100% berhasil, tapi kelas private 1 ON 1 ini materinya terbukti. Kita sebagai hamba hanya bisa berusaha dan berdo&apos;a, sisanya tetap di tangan Allah SWT.
                </p>
              </div>
            </div>
          </div>

          {/* 2 Magic Tools Section (Dilengkapi 2 Tools Ajaib Sekaligus) - Full Width like Hero */}
          <div className="w-full mt-[20px] mb-0 flex flex-col items-center text-center">
            
            {/* Section Heading */}
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center max-w-[460px] mx-auto">
              <span className="block">Dilengkapi 2 Tools</span>
              <span className="block">Ajaib Sekaligus</span>
            </h2>

            {/* Visual Mockup Image (Ruang Riset & Ruang Ngonten - Full Width & Borderless like Hero) */}
            <div className="mt-[20px] w-full flex justify-center">
              <div className="w-full overflow-hidden rounded-2xl">
                <Image
                  src="/cuan-faceless/tools-ajaib-mockup.jpg"
                  alt="Dilengkapi 2 Tools Ajaib Sekaligus - Ruang Riset dan Ruang Ngonten"
                  width={1024}
                  height={576}
                  className="w-full h-auto object-contain block select-none"
                />
              </div>
            </div>
          </div>

          {/* Urgency / Reasons Section (Kenapa kamu harus segera dapet tutorial ini ?) */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto mt-[20px] mb-4">
            
            {/* Section Heading */}
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center max-w-[460px] mx-auto mb-4">
              Kenapa kamu harus segera dapet tutorial ini ?
            </h2>

            {/* 4 Reason Checklist Cards */}
            <div className="space-y-2 text-left">
              {/* Point 1 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Biar bisa <strong className="text-gray-950 dark:text-white font-bold">ngonten faceless</strong>
                </span>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Biar bisa punya <strong className="text-gray-950 dark:text-white font-bold">sistem digital</strong>
                </span>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Biar bisa punya <strong className="text-emerald-700 dark:text-emerald-400 font-bold">INCOME tiap hari</strong>
                </span>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs">
                <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[13px] sm:text-[14px] text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  Biar punya akun sosmed <strong className="text-gray-950 dark:text-white font-bold">produktif</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Pricing & Offer Section (Promo Spesial Hari Ini & Besok!) */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mx-auto mt-[24px] mb-6 flex flex-col items-center">
            
            {/* Section Heading (Locked 2 Lines) */}
            <h2 className="text-[25px] sm:text-[30px] md:text-[34px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.22] text-center mb-2.5">
              <span className="block">Promo Spesial</span>
              <span className="block">Hari Ini &amp; Besok!</span>
            </h2>

            {/* Subheadline */}
            <p className="text-[13px] sm:text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-1">
              Daftar sekarang dan dapatkan BONUS serta diskon spesial. Kamu bisa mendapatkan Paket Ebook Pro mulai dari:
            </p>

            {/* Animated Clawd Mascot Callout mengajak klik/daftar */}
            <ClawdPromoCallout />

            {/* 3 Pricing Packages */}
            <div className="w-full space-y-3.5">
              
              {/* Package 1: Basic */}
              <div className="w-full p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Paket Belajar</span>
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-950 dark:text-white leading-tight">
                    Paket Ebook Pro (Basic)
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 line-through">
                      Rp2.419.000
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      Rp99.000
                    </span>
                  </div>
                </div>
                <Link
                  href="/?pricing=true&cat=ebook"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-center bg-orange-500 hover:bg-orange-600 text-white shadow-xs transition-all active:scale-[0.98] shrink-0"
                >
                  Detail Paket
                </Link>
              </div>

              {/* Package 2: PLR (Paling Populer) */}
              <div className="relative w-full p-4 rounded-2xl bg-orange-50/50 dark:bg-orange-950/20 border-2 border-orange-500/80 dark:border-orange-500/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-orange-500 text-white font-extrabold text-[10px] tracking-wider uppercase shadow-xs">
                  Paling Populer
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">Hak Jual Ulang</span>
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-950 dark:text-white leading-tight">
                    Paket Ebook Pro (PLR)
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 line-through">
                      Rp2.999.000
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      Rp149.000
                    </span>
                  </div>
                </div>
                <Link
                  href="/?pricing=true&cat=ebook"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-center bg-orange-500 hover:bg-orange-600 text-white shadow-xs transition-all active:scale-[0.98] shrink-0"
                >
                  Detail Paket
                </Link>
              </div>

              {/* Package 3: Plus */}
              <div className="relative w-full p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-extrabold text-[10px] tracking-wider uppercase shadow-xs">
                  Paling Lengkap
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Akses Komplit</span>
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-950 dark:text-white leading-tight">
                    Paket Ebook Pro (Plus)
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 line-through">
                      Rp3.100.000
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      Rp199.000
                    </span>
                  </div>
                </div>
                <Link
                  href="/?pricing=true&cat=plus"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-center bg-orange-500 hover:bg-orange-600 text-white shadow-xs transition-all active:scale-[0.98] shrink-0"
                >
                  Detail Paket
                </Link>
              </div>

            </div>

            {/* Urgency Box */}
            <div className="w-full mt-4 p-3 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/20 dark:border-amber-500/30 text-amber-900 dark:text-amber-200 font-bold text-[13px] sm:text-[14px] text-center flex items-center justify-center gap-1.5 shadow-xs">
              <span>⏳</span>
              <span>Promo hanya berlaku hari ini dan besok!</span>
            </div>

            {/* Quote Penutup */}
            <div className="w-full mt-3 px-4 py-3 rounded-xl bg-gray-50/60 dark:bg-white/[0.02] border border-dashed border-gray-300 dark:border-white/15 text-center">
              <p className="text-[13.5px] sm:text-[14.5px] font-medium italic text-gray-800 dark:text-gray-200 leading-relaxed">
                &ldquo;Modal daftar cuma 99 ribu, ilmunya bisa jadi bekal untuk masa depan keluarga.&rdquo;
              </p>
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
