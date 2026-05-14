// src/components/FeaturesSection.jsx
import SectionBadge from "./SectionBadge";
import FeatureCard from "./FeatureCard";

import {
  FileText,
  Image as ImageIcon,
  Video,
  Clock3,
  Lock,
  Users,
  BarChart3,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Documentos Médicos",
    description:
      "Almacena PDFs, estudios, recetas y resultados de laboratorio de forma segura",
    iconBg: "#e8efff",
    iconColor: "#4f1fff",
  },
  {
    icon: ImageIcon,
    title: "Fotografías Clínicas",
    description:
      "Sube y visualiza imágenes médicas con organización por categorías",
    iconBg: "#f4e7ff",
    iconColor: "#b400ff",
  },
  {
    icon: Video,
    title: "Grabaciones A/V",
    description:
      "Guarda audio y video de consultas y procedimientos médicos",
    iconBg: "#dff9f1",
    iconColor: "#009c84",
  },
  {
    icon: Clock3,
    title: "Historial Clínico",
    description:
      "Timeline completo con diagnósticos, recetas y evolución del paciente",
    iconBg: "#fff1db",
    iconColor: "#ff4d00",
  },
  {
    icon: Lock,
    title: "Seguridad Avanzada",
    description:
      "Encriptación de extremo a extremo y control de acceso granular",
    iconBg: "#dcfce7",
    iconColor: "#00b347",
  },
  {
    icon: Users,
    title: "Multi-usuario",
    description:
      "Colaboración entre médicos, enfermeros y personal administrativo",
    iconBg: "#ffe4e6",
    iconColor: "#ff2d2d",
  },
  {
    icon: BarChart3,
    title: "Análisis y Reportes",
    description:
      "Genera estadísticas y reportes personalizados en tiempo real",
    iconBg: "#ece8ff",
    iconColor: "#6d28ff",
  },
  {
    icon: Zap,
    title: "Acceso Rápido",
    description:
      "Búsqueda inteligente y acceso instantáneo a información del paciente",
    iconBg: "#fef9c3",
    iconColor: "#d97706",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#f7f8fa] px-8 lg:px-20 py-28">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          <SectionBadge text="Funcionalidades" />

          <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-[#0d1230] max-w-5xl leading-tight">
            Todo lo que necesitas en un solo lugar
          </h2>

          <p className="mt-6 text-[24px] leading-[42px] text-[#52607a] max-w-4xl">
            Una plataforma completa diseñada específicamente para las
            necesidades del sector salud
          </p>
        </div>

        {/* GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}