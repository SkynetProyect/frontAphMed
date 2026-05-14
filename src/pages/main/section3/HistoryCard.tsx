// src/components/AboutSection/HistoryCard.tsx
import { Heart } from "lucide-react";
import StatItem from "./StatItem";

export default function HistoryCard() {
  return (
    <div className="bg-white rounded-[32px] shadow-xl border border-[#e7edf3] p-10">
      
      {/* TOP */}
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-[#4f1fff] to-[#00b7a5] flex items-center justify-center">
          <Heart size={38} className="text-white" />
        </div>

        <div>
          <h3 className="text-5xl font-bold text-[#0d1230]">2018</h3>
          <p className="mt-2 text-[#667085] text-xl">
            Año de Fundación
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-[1px] bg-[#e6ebf2] my-10" />

      {/* STATS */}
      <div className="grid grid-cols-2 gap-y-10">
        <StatItem
          value="50K+"
          label="Pacientes Atendidos"
          color="#4f1fff"
        />

        <StatItem
          value="1,200+"
          label="Profesionales"
          color="#00a38c"
        />

        <StatItem
          value="350+"
          label="Clínicas"
          color="#b400ff"
        />

        <StatItem
          value="15+"
          label="Países"
          color="#ff4d00"
        />
      </div>
    </div>
  );
}