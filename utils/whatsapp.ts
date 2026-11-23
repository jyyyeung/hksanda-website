export const DEFAULT_WHATSAPP_NUMBER = "85297322082";

// The 聯絡資料 WhatsApp row stores the number the way a human types it
// ("97322082"), but wa.me needs the country code, so an 8-digit local number gets
// 852 prepended.
export function normalizeWhatsappNumber(raw?: string | null): string {
  const digits = String(raw ?? "").replace(/\D/g, "");
  if (!digits) return DEFAULT_WHATSAPP_NUMBER;
  if (digits.length === 8) return `852${digits}`;
  return digits;
}

export function isWhatsappContact(
  contact?: { field?: string; to?: string } | null
): boolean {
  return (
    /whatsapp/i.test(contact?.field ?? "") ||
    /wa\.me|whatsapp\.com/i.test(contact?.to ?? "")
  );
}

// Editing the WhatsApp row's 內容 is enough: the link is derived from it, so the
// list row and the floating button can never point at different numbers.
export function contactHref(contact: {
  to?: string;
  content?: string;
}): string {
  if (isWhatsappContact(contact)) {
    return `https://api.whatsapp.com/send?phone=${normalizeWhatsappNumber(
      contact.content || contact.to
    )}`;
  }
  return contact.to ?? "";
}
