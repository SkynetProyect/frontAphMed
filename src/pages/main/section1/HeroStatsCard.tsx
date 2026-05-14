// src/components/HeroStatsCard.jsx
import { Users } from "lucide-react";
import StatCard from "./StatCard";

export default function HeroStatsCard() {
  return (
    <div className="w-full max-w-[620px] bg-white rounded-[32px] shadow-2xl p-8 border border-[#edf1f5]">
      
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full bg-[#dff6ff] flex items-center justify-center">
          <Users className="text-[#5b34ff]" size={28} />
        </div>

        <div>
          <p className="text-[#667085] text-lg">Panel de Control</p>
          <h3 className="text-3xl font-bold text-[#111827]">
            Pacientes Activos
          </h3>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-5">
        <StatCard
          value="1,247"
          label="Pacientes"
          bgColor="#eef2ff"
          valueColor="#5b34ff"
        />

        <StatCard
          value="8,432"
          label="Documentos"
          bgColor="#ebfbf6"
          valueColor="#00a48a"
        />

        <StatCard
          value="324"
          label="Consultas Hoy"
          bgColor="#f7efff"
          valueColor="#b34dff"
        />

        <StatCard
          value="98.5%"
          label="Satisfacción"
          bgColor="#fff5e8"
          valueColor="#ff5a1f"
        />
      </div>
    </div>
  );
}