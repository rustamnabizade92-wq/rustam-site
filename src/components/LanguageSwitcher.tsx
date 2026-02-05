export default function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-2 py-1 text-xs">
      <span className="rounded-full bg-black px-2 py-1 text-white">EN</span>

      <span
        title="Coming soon"
        className="rounded-full px-2 py-1 text-zinc-600"
      >
        AZ
      </span>

      <span
        title="Coming soon"
        className="rounded-full px-2 py-1 text-zinc-600"
      >
        RU
      </span>
    </div>
  );
}
