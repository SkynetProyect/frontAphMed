// src/components/HeroFeatures.jsx
import { CheckCircle2 } from "lucide-react";

const features = [
  "Documentación médica digital completa",
  "Historial clínico en tiempo real",
  "Seguridad y privacidad garantizadas",
];

export default function HeroFeatures() {
  return (
    <div className="mt-10 flex flex-col gap-5">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="w-7 h-7 rounded-full bg-[#dff7e8] flex items-center justify-center">
            <CheckCircle2 size={16} className="text-[#22c55e]" />
          </div>

          <span className="text-[#36435e] text-lg">{feature}</span>
        </div>
      ))}
    </div>
  );
}