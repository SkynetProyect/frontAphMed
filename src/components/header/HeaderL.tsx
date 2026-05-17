import { ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderL() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-md">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>

          <div className="leading-tight">
            <h1 className="text-3xl font-bold text-slate-900">
              UHC
            </h1>
            <p className="text-base text-gray-500">
              Gestión Clínica
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">


        </nav>

        {/* CTA */}
        <button className="group flex items-center gap-3 bg-gradient-to-r from-red-600 to-emerald-500 hover:opacity-90 transition-all text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
          Cerrar Sesión

          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </header>
  );
};
