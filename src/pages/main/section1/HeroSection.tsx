// src/components/HeroSection.jsx
import HeroBadge from "./HeroBadge";
import HeroStatsCard from "./HeroStatsCard";
import HeroFeatures from "./HeroFeatures";
import HeroButtons from "./HeroButtons";
import HeroCertifications from "./HeroCertifications";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-[#f4f7f7] px-8 lg:px-20 py-16 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <HeroBadge />

          <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight text-[#0d1230]">
            Gestión Clínica
            <br />
            <span className="bg-gradient-to-r from-[#5518ff] to-[#0297a8] text-transparent bg-clip-text">
              Segura e Integral
            </span>
          </h1>

          <p className="mt-8 text-[22px] leading-[42px] text-[#4a5672]">
            La plataforma todo-en-uno para almacenar, gestionar y consultar
            información clínica de pacientes con cumplimiento de estándares
            internacionales HIPAA y GDPR.
          </p>

          <HeroFeatures />


          <HeroCertifications />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center lg:justify-end">
          <HeroStatsCard />
        </div>
      </div>
    </section>
  );
}