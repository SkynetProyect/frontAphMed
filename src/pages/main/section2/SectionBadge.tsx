// src/components/SectionBadge.jsx
export default function SectionBadge({ text }: Readonly<{ text: string }>) {
  return (
    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#e8eeff]">
      <span className="text-sm font-semibold text-[#5b34ff]">
        {text}
      </span>
    </div>
  );
}