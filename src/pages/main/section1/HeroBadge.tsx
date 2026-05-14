// src/components/HeroBadge.jsx
import { Star } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-[#e8eeff] px-4 py-2 rounded-full">
      <Star size={14} className="text-[#5b34ff]" />
      <span className="text-sm font-medium text-[#5b34ff]">
        Plataforma Médica Certificada
      </span>
    </div>
  );
}