"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { X, Send, Mail, MessageSquare, Copy, Check, Loader2, Sparkles } from "lucide-react";
import { recordFollowUpAction, sendFollowUpEmailAction } from "@/app/actions/dashboard";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: any;
  message: string;
  setMessage: (m: string) => void;
  initialMode?: "whatsapp" | "email";
  productTitle?: string;
  productImage?: string;
  onHistoryUpdated?: (orderId: string, updatedHistory: any[]) => void;
}

export default function WhatsAppModal({
  isOpen,
  onClose,
  order,
  message,
  setMessage,
  initialMode = "whatsapp",
  productTitle = "Produk Digital",
  productImage,
  onHistoryUpdated,
}: WhatsAppModalProps) {
  const [isCopiedImg, setIsCopiedImg] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const rawPhone = order?.user?.phone || order?.customerPhone || "";
  const sanitizePhone = (phone: string) => {
    if (!phone) return "";
    let p = phone.replace(/\D/g, "");
    if (p.startsWith("0")) p = "62" + p.substring(1);
    if (!p.startsWith("62") && p.length > 0) p = "62" + p;
    return p;
  };
  const phone = sanitizePhone(rawPhone);
  const hasPhone = Boolean(phone && phone.length >= 9);
  const userEmail = order?.user?.email || "";

  // Active mode state: If no phone, force email
  const [activeMode, setActiveMode] = useState<"whatsapp" | "email">(
    hasPhone ? initialMode : "email"
  );

  const customerName = order?.user?.name || "Kak";

  // Pre-fill subject for email
  const isFree =
    order?.amount === 0 ||
    order?.paymentMethod === "FREE_CLAIM" ||
    order?.product?.accessLevel === "FREE" ||
    order?.product?.price === 0;

  const defaultSubject = isFree
    ? `[Ruang Creative Muslim] Halo ${customerName}, terima kasih sudah download ${productTitle}!`
    : order?.status === "PENDING"
    ? `[Ruang Creative Muslim] Menunggu Pembayaran: ${productTitle}`
    : order?.status === "FAILED" || order?.status === "EXPIRED"
    ? `[Ruang Creative Muslim] Informasi Pesanan: ${productTitle}`
    : `[Ruang Creative Muslim] Update Pesanan: ${productTitle}`;

  const [emailSubject, setEmailSubject] = useState(defaultSubject);
  const [recipientEmail, setRecipientEmail] = useState(userEmail);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setActiveMode(hasPhone ? initialMode : "email");
      setEmailSubject(defaultSubject);
      setRecipientEmail(userEmail);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, hasPhone, initialMode, defaultSubject, userEmail]);

  if (!isOpen || !order) return null;

  const resolvedImageUrl = productImage
    ? productImage.startsWith("http")
      ? productImage
      : typeof window !== "undefined"
      ? `${window.location.origin}${productImage}`
      : `https://ruangcreativemuslim.com${productImage}`
    : "https://ruangcreativemuslim.com/img_paket/paket_ebook.png";

  const handleCopyImageUrl = () => {
    navigator.clipboard.writeText(resolvedImageUrl);
    setIsCopiedImg(true);
    toast.success("Link gambar berhasil disalin!");
    setTimeout(() => setIsCopiedImg(false), 2000);
  };

  const handleSendWhatsApp = async () => {
    if (!phone) {
      toast.error("Nomor WhatsApp pembeli tidak ditemukan!");
      return;
    }

    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");

    try {
      const res = await recordFollowUpAction(order.id, "whatsapp", `+${phone}`);
      if (res.success && res.history && onHistoryUpdated) {
        onHistoryUpdated(order.id, res.history);
      }
      toast.success("Riwayat follow up WhatsApp dicatat!");
    } catch (e) {
      console.error(e);
    }

    onClose();
  };

  const handleSendEmail = async () => {
    if (!recipientEmail || !recipientEmail.includes("@")) {
      toast.error("Alamat email tidak valid!");
      return;
    }
    if (!emailSubject.trim()) {
      toast.error("Subjek email tidak boleh kosong!");
      return;
    }
    if (!message.trim()) {
      toast.error("Pesan email tidak boleh kosong!");
      return;
    }

    setIsSendingEmail(true);
    try {
      const res = await sendFollowUpEmailAction({
        orderId: order.id,
        toEmail: recipientEmail,
        customerName,
        subject: emailSubject,
        message,
        productTitle,
        productImage: resolvedImageUrl,
      });

      if (res.success) {
        toast.success(res.message || "Email follow up berhasil dikirim!");
        if (res.history && onHistoryUpdated) {
          onHistoryUpdated(order.id, res.history);
        }
        onClose();
      } else {
        toast.error(res.message || "Gagal mengirim email.");
      }
    } catch (error: any) {
      console.error("handleSendEmail error:", error);
      toast.error(error?.message || "Terjadi kesalahan saat mengirim email.");
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#141B31] w-full max-w-xl rounded-2xl shadow-2xl relative overflow-hidden flex flex-col border border-gray-100 dark:border-[#2C3246] max-h-[92vh]">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-[#2C3246] bg-gray-50/50 dark:bg-[#0A1128]/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                Follow Up Customer
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Pesan personal untuk {customerName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector (WhatsApp vs Email) */}
        <div className="px-6 pt-3 pb-0 border-b border-gray-100 dark:border-[#2C3246] flex gap-2 shrink-0">
          <button
            type="button"
            disabled={!hasPhone}
            onClick={() => setActiveMode("whatsapp")}
            className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm border-b-2 transition-all ${
              activeMode === "whatsapp"
                ? "border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-500/10 rounded-t-lg"
                : hasPhone
                ? "border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                : "border-transparent text-gray-300 dark:text-gray-600 cursor-not-allowed"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
            {!hasPhone && (
              <span className="text-[10px] font-normal px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-400">
                Tidak ada No. WA
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveMode("email")}
            className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm border-b-2 transition-all ${
              activeMode === "email"
                ? "border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/10 rounded-t-lg"
                : "border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
            {!hasPhone && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                Otomatis
              </span>
            )}
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {/* Product Info Mini Card */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-[#0A1128] border border-gray-200/80 dark:border-[#2C3246]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-14 rounded-lg bg-white dark:bg-[#141B31] border border-gray-200 dark:border-[#2C3246] p-1 flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src={resolvedImageUrl}
                  alt={productTitle}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                  {order.id ? `#${order.id.slice(-6).toUpperCase()}` : "Order"}
                </p>
                <p className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate">
                  {productTitle}
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                  {isFree ? "Klaim Gratis (Rp 0)" : `Rp ${order.amount?.toLocaleString("id-ID")}`}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyImageUrl}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-[#141B31] border border-gray-200 dark:border-[#2C3246] text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors shrink-0 shadow-xs"
              title="Salin Link Gambar untuk dikirim ke customer"
            >
              {isCopiedImg ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Gambar</span>
                </>
              )}
            </button>
          </div>

          {/* Form Controls based on Active Mode */}
          {activeMode === "whatsapp" ? (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                  Nomor WhatsApp Tujuan:
                </label>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-[#0A1128] border border-gray-200 dark:border-[#2C3246] font-mono text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-bold">
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>+{phone}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                  Pesan WhatsApp:
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-56 p-3.5 bg-gray-50 dark:bg-[#0A1128] border border-gray-200 dark:border-[#2C3246] rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm text-gray-900 dark:text-white leading-relaxed resize-none font-sans"
                  placeholder="Ketik pesan WhatsApp..."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                  Email Tujuan:
                </label>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-[#0A1128] border border-gray-200 dark:border-[#2C3246] text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-mono font-bold">
                  <Mail className="w-4 h-4 shrink-0" />
                  <input
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="bg-transparent w-full focus:outline-none text-gray-900 dark:text-white font-mono"
                    placeholder="email@customer.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                  Subjek Email:
                </label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 dark:bg-[#0A1128] border border-gray-200 dark:border-[#2C3246] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm text-gray-900 dark:text-white font-medium"
                  placeholder="Subjek email..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                  Isi Pesan Email:
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-44 p-3.5 bg-gray-50 dark:bg-[#0A1128] border border-gray-200 dark:border-[#2C3246] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm text-gray-900 dark:text-white leading-relaxed resize-none font-sans"
                  placeholder="Ketik pesan email..."
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Submit Button */}
        <div className="p-4 sm:p-5 border-t border-gray-100 dark:border-[#2C3246] bg-gray-50 dark:bg-[#0A1128] shrink-0">
          {activeMode === "whatsapp" ? (
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              <span>Kirim via WhatsApp</span>
            </button>
          ) : (
            <button
              type="button"
              disabled={isSendingEmail}
              onClick={handleSendEmail}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-[0.99]"
            >
              {isSendingEmail ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Mengirim Email...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kirim via Email</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
