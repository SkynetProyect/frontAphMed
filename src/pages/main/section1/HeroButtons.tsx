// src/components/HeroButtons.jsx
import { ChevronRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap gap-4">
      <button className="flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-[#4d16ff] to-[#0297a8] shadow-lg hover:scale-[1.02] transition">
        Comenzar Ahora
        <ChevronRight size={18} />
      </button>

      <button className="px-8 py-4 rounded-xl border border-[#d7dce5] bg-white text-[#111827] font-semibold hover:bg-[#f8fafc] transition">
        Ver Demo
      </button>
    </div>
  );
}