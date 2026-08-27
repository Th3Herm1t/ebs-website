export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 bg-[#fbfdfd]">
      <div
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] mix-blend-multiply pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle, rgba(43,143,171,0.95) 0%, rgba(43,143,171,0) 65%)" }}
      />

      <div
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] mix-blend-multiply pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle, rgba(244,162,97,0.95) 0%, rgba(244,162,97,0) 65%)" }}
      />

      <div
        className="absolute top-[10%] left-[40%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] mix-blend-multiply pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(233,196,106,0.95) 0%, rgba(233,196,106,0) 65%)" }}
      />

      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full border-[1.5px] border-white/60 opacity-80" />
      <div className="absolute top-[58%] left-[7%] w-[16px] h-[16px] rounded-full border-[2px] border-penn-green/50" />
      <div className="absolute top-[25%] left-[48%] w-[10px] h-[10px] rounded-full bg-[#f4a261]/80" />
      <div className="absolute top-[25%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#f4a261]" />
      <div className="absolute top-[32%] right-[8%] w-[18px] h-[18px] rounded-full border-[2px] border-[#e9c46a]/60" />
    </div>
  );
}
