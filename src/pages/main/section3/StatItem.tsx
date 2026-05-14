// src/components/AboutSection/StatItem.tsx
interface StatItemProps {
  value: string;
  label: string;
  color: string;
}

export default function StatItem({
  value,
  label,
  color,
}: StatItemProps) {
  return (
    <div>
      <h4
        className="text-5xl font-bold"
        style={{ color }}
      >
        {value}
      </h4>

      <p className="mt-2 text-[#667085] text-xl">
        {label}
      </p>
    </div>
  );
}