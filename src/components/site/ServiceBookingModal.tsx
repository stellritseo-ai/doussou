import React, { useState, useEffect, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  User,
  Sparkles,
  CheckCircle2,
  X,
  Sparkle,
  ShieldCheck,
  Scissors,
  Loader2,
} from "lucide-react";
import { CONTACT, BOOKING_SERVICES_BY_CATEGORY } from "./data";
import { cn } from "@/lib/utils";
import { submitFormToEmail } from "@/lib/send-form";

export interface SelectedServiceData {
  name: string;
  price: string;
  category?: string;
  image?: string;
  blurb?: string;
  tag?: string;
}

interface ServiceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: SelectedServiceData | null;
}

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

const TIME_SLOTS = [
  "9:00 AM (Morning)",
  "10:00 AM (Morning)",
  "11:00 AM (Morning)",
  "12:00 PM (Midday)",
  "1:00 PM (Afternoon)",
  "2:00 PM (Afternoon)",
  "3:00 PM (Afternoon)",
  "4:00 PM (Late Afternoon)",
  "5:00 PM (Evening)",
  "6:00 PM (Evening)",
];

const inputCls =
  "w-full rounded-xl border border-[#E8DFC8] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#2B231D] outline-none transition-all placeholder:text-[#8C7A6B]/60 focus:border-[#BA1296] focus:bg-white focus:ring-2 focus:ring-[#BA1296]/20 font-medium";

export function ServiceBookingModal({
  isOpen,
  onClose,
  service,
}: ServiceBookingModalProps) {
  // Compute initial service display string
  const getInitialServiceValue = (s: SelectedServiceData | null) => {
    if (!s) return "";
    return `${s.name} (${s.price})`;
  };

  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: getInitialServiceValue(service),
    date: "",
    time: "10:00 AM (Morning)",
    notes: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeService, setActiveService] = useState<SelectedServiceData | null>(service);

  // Synchronize when service prop changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveService(service);
      setValues((prev) => ({
        ...prev,
        service: getInitialServiceValue(service),
      }));
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isOpen, service]);

  // Today in YYYY-MM-DD for min date picker
  const todayString = new Date().toISOString().split("T")[0];

  const handleInputChange = (field: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const val = e.target.value;
    setValues((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    // If user changes service dropdown, update activeService display if found
    if (field === "service") {
      const match = BOOKING_SERVICES_BY_CATEGORY.flatMap((c) => c.services).find(
        (item) => `${item.name} (${item.price})` === val
      );
      if (match) {
        setActiveService({
          name: match.name,
          price: match.price,
        });
      }
    }
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormValues, string>> = {};
    if (!values.firstName.trim()) errs.firstName = "First name is required";
    if (!values.lastName.trim()) errs.lastName = "Last name is required";
    if (!values.phone.trim() || values.phone.trim().length < 7) {
      errs.phone = "Valid phone number required";
    }
    if (!values.service) errs.service = "Please select a service";
    if (!values.date) errs.date = "Please select a preferred date";
    if (!values.time) errs.time = "Please select a preferred time";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      await submitFormToEmail({
        formType: "Service Pop-up Booking",
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        service: values.service || activeService?.name,
        date: values.date,
        time: values.time,
        notes: values.notes,
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setValues({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      service: getInitialServiceValue(service),
      date: "",
      time: "10:00 AM (Morning)",
      notes: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto p-0 sm:rounded-[28px] border-[#E8DFC8] bg-white shadow-2xl">
        {/* Modal Header Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#2F0631] via-[#5C105E] to-[#2F0631] p-6 text-white text-left">
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#F7D272] border border-white/20 mb-2">
                <Sparkles size={12} className="text-[#F7D272]" />
                <span>Instant Salon Booking</span>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-['Inter',sans-serif]">
                Book Your Appointment
              </DialogTitle>
              <DialogDescription className="mt-1 text-xs sm:text-sm text-purple-100 font-normal">
                Reserve your spot at Doussou Quality Braiding in Glen Burnie, MD.
              </DialogDescription>
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-[#BA1296]/40 blur-2xl pointer-events-none" />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            /* ========================================================================= */
            /* SUCCESS CONFIRMATION STATE */
            /* ========================================================================= */
            <div className="text-center py-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-md animate-in zoom-in-75 duration-300">
                <CheckCircle2 size={36} />
              </div>

              <h3 className="mt-5 text-2xl sm:text-3xl font-bold text-[#2B231D] tracking-tight">
                Appointment Request Received!
              </h3>

              <p className="mt-2 text-sm text-[#5C5046] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#2B231D]">{values.firstName}</strong>! Your
                appointment request has been sent to our master stylists.
              </p>

              {/* Booking Ticket Summary */}
              <div className="mt-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFC8] p-5 text-left max-w-lg mx-auto shadow-xs space-y-3 font-['Inter',sans-serif]">
                <div className="flex items-center justify-between border-b border-[#E8DFC8]/60 pb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B]">
                    Selected Service
                  </span>
                  <span className="text-sm font-bold text-[#8E1077]">
                    {values.service || activeService?.name}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#E8DFC8]/60 pb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B]">
                    Date &amp; Time
                  </span>
                  <span className="text-sm font-semibold text-[#2B231D]">
                    {values.date} at {values.time}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#E8DFC8]/60 pb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B]">
                    Client Name
                  </span>
                  <span className="text-sm font-semibold text-[#2B231D]">
                    {values.firstName} {values.lastName}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B]">
                    Phone Contact
                  </span>
                  <span className="text-sm font-semibold text-[#2B231D]">{values.phone}</span>
                </div>
              </div>

              {/* Confirmation Notice */}
              <div className="mt-6 p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-900 leading-relaxed max-w-lg mx-auto">
                <p className="font-semibold">
                  📞 We will confirm your date &amp; exact chair time via call or SMS within 24
                  hours.
                </p>
                <p className="mt-1 text-purple-700">
                  Walk-ins and same-day requests are welcome! If you need service today, please call
                  us directly.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto rounded-full bg-[#8E1077] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#720a5e] transition-all"
                >
                  Done / Close
                </button>
                <a
                  href={CONTACT.phoneHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#E8DFC8] bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#2B231D] hover:bg-[#FAF8F5] transition-all"
                >
                  <Phone size={14} className="text-[#8E1077]" />
                  <span>Call Studio: {CONTACT.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto text-xs font-semibold text-[#8C7A6B] hover:text-[#2B231D] underline py-2 sm:py-0"
                >
                  Book Another Service
                </button>
              </div>
            </div>
          ) : (
            /* ========================================================================= */
            /* BOOKING FORM STATE */
            /* ========================================================================= */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Highlight Card for Auto-Selected Service */}
              {activeService && (
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-50 via-[#FAF6F8] to-purple-50 p-4 border border-purple-200/70 shadow-xs flex items-center gap-4">
                  {activeService.image && (
                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl border-2 border-purple-300 shadow-sm">
                      <img
                        src={activeService.image}
                        alt={activeService.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#8E1077] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                        <Sparkle size={10} className="text-[#F7D272]" />
                        Auto-Selected Style
                      </span>
                      {activeService.category && (
                        <span className="text-[11px] font-semibold text-neutral-500">
                          {activeService.category}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1 text-base sm:text-lg font-bold text-neutral-900 truncate font-['Inter',sans-serif]">
                      {activeService.name}
                    </h3>
                    <div className="mt-0.5 flex items-center gap-3">
                      <span className="text-xs sm:text-sm font-extrabold text-[#8E1077]">
                        {activeService.price}
                      </span>
                      <span className="text-[11px] text-neutral-500 font-medium hidden sm:inline">
                        • Tension-Free Scalp Care Guaranteed
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Input Grid: Name */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="modal-firstName"
                    className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#2B231D] uppercase tracking-wider"
                  >
                    <User size={13} className="text-[#8E1077]" />
                    <span>First Name *</span>
                  </label>
                  <input
                    id="modal-firstName"
                    type="text"
                    required
                    maxLength={60}
                    placeholder="e.g. Amara"
                    value={values.firstName}
                    onChange={handleInputChange("firstName")}
                    className={cn(
                      inputCls,
                      errors.firstName && "border-rose-500 focus:border-rose-500"
                    )}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-[11px] font-semibold text-rose-600">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="modal-lastName"
                    className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#2B231D] uppercase tracking-wider"
                  >
                    <User size={13} className="text-[#8E1077]" />
                    <span>Last Name *</span>
                  </label>
                  <input
                    id="modal-lastName"
                    type="text"
                    required
                    maxLength={60}
                    placeholder="e.g. Johnson"
                    value={values.lastName}
                    onChange={handleInputChange("lastName")}
                    className={cn(
                      inputCls,
                      errors.lastName && "border-rose-500 focus:border-rose-500"
                    )}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-[11px] font-semibold text-rose-600">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Input Grid: Phone & Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="modal-phone"
                    className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#2B231D] uppercase tracking-wider"
                  >
                    <Phone size={13} className="text-[#8E1077]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="(301) 555-0192"
                    value={values.phone}
                    onChange={handleInputChange("phone")}
                    className={cn(inputCls, errors.phone && "border-rose-500 focus:border-rose-500")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[11px] font-semibold text-rose-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="modal-email"
                    className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#2B231D] uppercase tracking-wider"
                  >
                    <Mail size={13} className="text-[#8E1077]" />
                    <span>Email Address</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={handleInputChange("email")}
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Service Dropdown Selection */}
              <div>
                <label
                  htmlFor="modal-service"
                  className="mb-1.5 flex items-center justify-between text-xs font-bold text-[#2B231D] uppercase tracking-wider"
                >
                  <span className="flex items-center gap-1.5">
                    <Scissors size={13} className="text-[#8E1077]" />
                    <span>Service / Style *</span>
                  </span>
                  <span className="text-[10px] text-neutral-400 font-normal">
                    Change if needed
                  </span>
                </label>
                <select
                  id="modal-service"
                  value={values.service}
                  onChange={handleInputChange("service")}
                  className={cn(
                    inputCls,
                    "appearance-none bg-white cursor-pointer",
                    errors.service && "border-rose-500 focus:border-rose-500"
                  )}
                >
                  <option value="">Select a hairstyle...</option>
                  {/* If custom activeService was clicked and not in the main list, display it first */}
                  {activeService && (
                    <option value={`${activeService.name} (${activeService.price})`}>
                      ⭐ {activeService.name} – {activeService.price} (Selected)
                    </option>
                  )}
                  {BOOKING_SERVICES_BY_CATEGORY.map((group) => (
                    <optgroup key={group.category} label={`— ${group.category} —`}>
                      {group.services.map((s) => (
                        <option key={s.name} value={`${s.name} (${s.price})`}>
                          {s.name} – {s.price}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-[11px] font-semibold text-rose-600">{errors.service}</p>
                )}
              </div>

              {/* Input Grid: Date & Time */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="modal-date"
                    className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#2B231D] uppercase tracking-wider"
                  >
                    <Calendar size={13} className="text-[#8E1077]" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    id="modal-date"
                    type="date"
                    required
                    min={todayString}
                    value={values.date}
                    onChange={handleInputChange("date")}
                    className={cn(inputCls, errors.date && "border-rose-500 focus:border-rose-500")}
                  />
                  {errors.date && (
                    <p className="mt-1 text-[11px] font-semibold text-rose-600">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="modal-time"
                    className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-[#2B231D] uppercase tracking-wider"
                  >
                    <Clock size={13} className="text-[#8E1077]" />
                    <span>Preferred Time Slot *</span>
                  </label>
                  <select
                    id="modal-time"
                    required
                    value={values.time}
                    onChange={handleInputChange("time")}
                    className={cn(
                      inputCls,
                      "appearance-none bg-white cursor-pointer",
                      errors.time && "border-rose-500 focus:border-rose-500"
                    )}
                  >
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="mt-1 text-[11px] font-semibold text-rose-600">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label
                  htmlFor="modal-notes"
                  className="mb-1.5 flex items-center justify-between text-xs font-bold text-[#2B231D] uppercase tracking-wider"
                >
                  <span>Special Requests or Notes (Optional)</span>
                  <span className="text-[10px] text-neutral-400 font-normal">Max 500 chars</span>
                </label>
                <textarea
                  id="modal-notes"
                  rows={2}
                  maxLength={500}
                  placeholder="e.g. Hair length, color preferences, or scalp sensitivities..."
                  value={values.notes}
                  onChange={handleInputChange("notes")}
                  className={cn(inputCls, "resize-none")}
                />
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-neutral-500 border-t border-neutral-100 pt-3">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-[#8E1077]" />
                  100% Tension-Free Scalp Care
                </span>
                <span className="flex items-center gap-1">
                  <Sparkle size={14} className="text-[#F7D272]" />
                  No Hidden Fees • Upfront Pricing
                </span>
              </div>

              {/* Submit Button & Direct Call CTA */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#8E1077] via-[#A81286] to-[#8E1077] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-200 hover:from-[#7c0b68] hover:to-[#910d73] hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none cursor-pointer font-['Inter',sans-serif]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Submitting Appointment...</span>
                    </>
                  ) : (
                    <>
                      <Calendar size={18} />
                      <span>Book Appointment Now</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-neutral-500">
                  Prefer to speak with a braider right now?{" "}
                  <a
                    href={CONTACT.phoneHref}
                    className="font-bold text-[#8E1077] hover:underline"
                  >
                    Call {CONTACT.phone}
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

