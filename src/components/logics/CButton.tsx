export default function CButton({ text, onClick }: { text: string; onClick?: () => void }) {
    return (
        <button
        onClick={onClick}
        className="cursor-pointer group flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-500 hover:opacity-90 transition-all text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
        >
        {text}
        </button>
    );
    }
   
            