export default function SectionLoader() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#020c1b]">
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]" />
        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]" />
        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce" />
      </div>
    </div>
  );
}
