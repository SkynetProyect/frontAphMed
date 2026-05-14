// src/components/HeroCertifications.jsx
import { Shield, Lock } from "lucide-react";

export default function HeroCertifications() {
  return (
    <div className="mt-14 border-t border-[#dfe5eb] pt-10">
      <p className="text-[#6b7280] mb-6 text-sm">
        Certificaciones y Cumplimiento
      </p>

      <div className="flex flex-wrap gap-10">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-[#5b34ff]" />
          <span className="text-[#1f2937] font-medium">HIPAA Certified</span>
        </div>

        <div className="flex items-center gap-2">
          <Shield size={18} className="text-[#5b34ff]" />
          <span className="text-[#1f2937] font-medium">GDPR Compliant</span>
        </div>

        <div className="flex items-center gap-2">
          <Lock size={18} className="text-[#5b34ff]" />
          <span className="text-[#1f2937] font-medium">ISO 27001</span>
        </div>
      </div>
    </div>
  );
}