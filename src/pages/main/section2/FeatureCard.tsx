// src/components/FeatureCard.jsx
import { ChevronRight, type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBg,
  iconColor,
}: FeatureCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[28px] p-8 min-h-[360px] flex flex-col transition duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* ICON */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={28} style={{ color: iconColor }} />
      </div>

      {/* CONTENT */}
      <div className="mt-10 flex flex-col flex-1">
        <h3 className="text-[34px] leading-[42px] font-bold text-[#0d1230]">
          {title}
        </h3>

        <p className="mt-6 text-[#58657f] text-[20px] leading-[36px] flex-1">
          {description}
        </p>

        {/* LINK */}
        <button className="mt-10 inline-flex items-center gap-2 text-[#5b34ff] font-semibold text-lg hover:gap-3 transition-all">
          Saber más
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}