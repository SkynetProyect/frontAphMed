// src/components/AboutSection/AboutSection.tsx
import SectionBadge from "../section2/SectionBadge";
import HistoryCard from "./HistoryCard";
import MissionVisionCard from "./MissionVissionCard";

import { Target, BadgeCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f5fcfd] px-8 lg:px-20 py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <HistoryCard />

        {/* RIGHT */}
        <div>
          <SectionBadge text="Nuestra Historia" />

          <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-[#0d1230]">
            Transformando la gestión clínica desde 2018
          </h2>

          <div className="mt-8 space-y-8 text-[#55627d] text-[22px] leading-[42px]">
            <p>
              MediCare nació de la necesidad de modernizar y digitalizar la
              gestión de información médica en hospitales y clínicas.
              Comenzamos como un pequeño equipo de desarrolladores y
              profesionales de la salud que compartían una visión: hacer que la
              información clínica sea accesible, segura y útil.
            </p>

            <p>
              Desde nuestros inicios, hemos trabajado incansablemente para crear
              una plataforma que no solo cumpla con los más altos estándares de
              seguridad y privacidad, sino que también sea intuitiva y eficiente
              para los profesionales de la salud.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <MissionVisionCard
              icon={Target}
              title="Nuestra Misión"
              description="Proporcionar herramientas tecnológicas de vanguardia que empoderen a los profesionales de la salud para brindar mejor atención a sus pacientes."
              iconBg="#e8eeff"
              iconColor="#4f1fff"
            />

            <MissionVisionCard
              icon={BadgeCheck}
              title="Nuestra Visión"
              description="Ser la plataforma líder global en gestión clínica digital, revolucionando la forma en que se maneja la información médica en todo el mundo."
              iconBg="#dff9f1"
              iconColor="#009c84"
            />
          </div>
        </div>
      </div>
    </section>
  );
}