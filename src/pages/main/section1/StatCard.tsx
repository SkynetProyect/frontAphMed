// src/components/StatCard.jsx
interface StatCardProps {
  value: string;
  label: string;
  bgColor: string;
  valueColor: string;
}

export default function StatCard({
  value,
  label,
  bgColor,
  valueColor,
}: StatCardProps) {
  return (
    <div
      className="rounded-2xl p-6 min-h-[130px] flex flex-col justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <h3
        className="text-4xl font-bold"
        style={{ color: valueColor }}
      >
        {value}
      </h3>

      <p className="mt-2 text-[#667085] text-lg">{label}</p>
    </div>
  );
}