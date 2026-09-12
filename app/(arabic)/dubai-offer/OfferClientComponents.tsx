"use client";

import React, { useState, useEffect } from "react";
import { Clock, Users, Timer, CheckCircle } from "lucide-react";

export function OfferCountdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    status: "upcoming" | "active" | "ended";
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: "upcoming",
  });

  useEffect(() => {
    // Dubai Timezone (UTC+4)
    const startDate = new Date("2026-09-14T08:00:00+04:00").getTime();
    const endDate = new Date("2026-09-20T08:00:00+04:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();

      if (now < startDate) {
        const diff = startDate - now;
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          status: "upcoming",
        });
      } else if (now >= startDate && now <= endDate) {
        const diff = endDate - now;
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          status: "active",
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, status: "ended" });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft.status === "ended") {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
        <CheckCircle className="w-3.5 h-3.5 text-slate-500" strokeWidth={1.75} />
        <span>انتهت فترة العرض</span>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs max-w-lg mx-auto">
      <div className="flex items-center justify-between gap-3 mb-3 text-xs font-medium text-slate-600">
        <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
          <Clock className="w-4 h-4 text-primary shrink-0" strokeWidth={1.75} />
          <span>
            {timeLeft.status === "upcoming" ? "يبدأ العرض خلال:" : "ينتهي العرض خلال:"}
          </span>
        </div>
        <span className="text-[11px] text-primary font-semibold bg-primary/5 px-2.5 py-0.5 rounded-full border border-primary/15">
          {timeLeft.status === "upcoming" ? "14 سبتمبر (8:00 ص)" : "20 سبتمبر (8:00 ص)"}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2.5 text-center" dir="ltr">
        <div className="bg-slate-50/80 border border-slate-100 rounded-xl py-2.5 px-2">
          <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <div className="text-[10px] text-slate-500 font-medium mt-0.5">أيام</div>
        </div>

        <div className="bg-slate-50/80 border border-slate-100 rounded-xl py-2.5 px-2">
          <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="text-[10px] text-slate-500 font-medium mt-0.5">ساعات</div>
        </div>

        <div className="bg-slate-50/80 border border-slate-100 rounded-xl py-2.5 px-2">
          <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="text-[10px] text-slate-500 font-medium mt-0.5">دقائق</div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl py-2.5 px-2">
          <div className="text-xl sm:text-2xl font-bold text-primary tabular-nums">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <div className="text-[10px] text-primary font-semibold mt-0.5">ثواني</div>
        </div>
      </div>
    </div>
  );
}

export function SpotsUrgencyBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-xs">
      <Timer className="w-4 h-4 text-amber-400 shrink-0" strokeWidth={2} />
      <span>
        العرض محدود لأول 10 حجوزات فقط — <span className="text-amber-300 font-bold">سارع قبل انتهاء المقاعد!</span>
      </span>
    </div>
  );
}

export function SpotsMeter() {
  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 max-w-lg mx-auto">
      <div className="flex items-center justify-between text-xs mb-2">
        <div className="flex items-center gap-1.5 font-semibold text-slate-800">
          <Users className="w-4 h-4 text-primary shrink-0" strokeWidth={1.75} />
          <span>المقاعد المتبقية:</span>
        </div>
        <span className="font-bold text-primary">
          متبقي 4 مقاعد فقط من أصل 10
        </span>
      </div>

      <div className="w-full bg-slate-200/90 rounded-full h-2 overflow-hidden">
        <div
          className="bg-primary h-full rounded-full transition-all duration-700"
          style={{ width: "60%" }}
        />
      </div>
    </div>
  );
}
