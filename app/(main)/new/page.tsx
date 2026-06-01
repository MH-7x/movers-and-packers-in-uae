import React from "react";
import {
  ShieldCheck,
  ListTodoIcon,
  MessageCircleCheck,
  Clock,
  TrendingUp,
  CheckCircle2,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className=" bg-white text-foreground overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#c10007]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <section className="relative pt-20 pb-24  flex items-center ">
        <div className=" mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            {/* Content Column (Takes up 7 columns on large screens) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Main Heading */}
              <h1 className="text-3xl md:text-left text-center md:text-5xl font-bold leading-[1.1] mb-6 text-foreground md:tracking-tight">
                Movers and Packers in UAE,{" "}
                <span className="md:block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#c10007] mt-2">
                  Trusted Moving Company
                </span>
              </h1>

              {/* Lead Text */}
              <p className="md:text-lg md:text-left text-center  text-muted-foreground mb-10 leading-relaxed max-w-2xl font-light">
                Professional moving company in UAE, we are licensed,
                experienced, and operating since 1998. Our services include
                House moving, villa relocations, office shifting, furniture
                moving, and storage services. All emirates covered.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row md:gap-5 gap-3 items-center">
                <Button
                  link="/get-quote"
                  size={"lg"}
                  className="md:w-max w-full"
                >
                  <ListTodoIcon /> Get a Free Moving Quote
                </Button>
                <Button
                  whatsappBtn
                  size={"lg"}
                  variant={"secondary"}
                  className="md:w-max w-full"
                >
                  <MessageCircleCheck /> WhatsApp Us Now
                </Button>
              </div>
            </div>

            {/* Image Column (Takes up 5 columns on large screens) */}
            <div className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:max-w-none">
              {/* Decorative background framing */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c10007] to-red-400 rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-lg"></div>
              <div className="absolute inset-0 bg-red-300 rounded-[2rem] transform -rotate-3 md:scale-105 scale-102"></div>

              {/* Main Image Container */}
              <div className="relative z-10 rounded-[2rem] overflow-hidden  border border-white/10 shadow-2xl aspect-square group">
                {/* Inner Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-white"></div>
              </div>

              {/* Floating Experience Card */}
              <div className="absolute -bottom-6 md:-left-6 left-0 lg:-left-10 z-20 bg-[#222a35]/80 backdrop-blur-md p-5 rounded-2xl shadow-2xl flex items-center gap-4 animate-[bounce_5s_infinite]">
                <div className="bg-[#c10007]/20 text-red-400 p-3 rounded-xl flex-shrink-0">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white leading-none mb-1">
                    25+
                  </p>
                  <p className="text-sm text-slate-300 font-medium">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Key Features / Stats Section */}
      <section className="relative md:py-16 py-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0 group">
              <div className="h-14 w-14 rounded-2xl bg-[#c10007]/10 flex items-center justify-center text-[#c10007] mb-4">
                <Clock size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-foreground font-bold text-lg mb-1">
                5-10 Minutes
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                Response Time
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0 group">
              <div className="h-14 w-14 rounded-2xl bg-[#c10007]/10 flex items-center justify-center text-[#c10007] mb-4">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-foreground font-bold text-lg mb-1">
                25+ Years
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                Moving Experience
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0 group">
              <div className="h-14 w-14 rounded-2xl bg-[#c10007]/10 flex items-center justify-center text-[#c10007] mb-4">
                <TrendingUp size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-foreground font-bold text-lg mb-1">
                Thousands
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                Moves Completed in UAE
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0 group">
              <div className="h-14 w-14 rounded-2xl bg-[#c10007]/10 flex items-center justify-center text-[#c10007] mb-4">
                <CheckCircle2 size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-foreground font-bold text-lg mb-1">
                100% Insurance
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                Coverage Included
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0 group">
              <div className="h-14 w-14 rounded-2xl bg-[#c10007]/10 flex items-center justify-center text-[#c10007] mb-4">
                <Truck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-foreground font-bold text-lg mb-1">
                RTA-Approved
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                Enclosed Box Trucks
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
