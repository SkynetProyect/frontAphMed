// src/components/AboutSection/MissionVisionCard.tsx
import type { LucideIcon } from "lucide-react";

interface MissionVisionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export default function MissionVisionCard({
  icon: Icon,
  title,
  description,
  iconBg,
  iconColor,
}: MissionVisionCardProps) {
  return (
    <div className="flex gap-6">
      
      {/* ICON */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={28} style={{ color: iconColor }} />
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-3xl font-bold text-[#0d1230]">
          {title}
        </h3>

        <p className="mt-3 text-[#55627d] text-[20px] leading-[34px]">
          {description}
        </p>
      </div>
    </div>
  );
}