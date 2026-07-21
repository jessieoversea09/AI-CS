export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-brand-200/40 via-brand-100/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-40 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-300/30 to-transparent blur-3xl pointer-events-none" />
    </>
  );
}
