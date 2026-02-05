import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 transition hover:border-zinc-600 hover:-translate-y-0.5"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100">
        <div className="h-full w-full bg-gradient-to-r from-indigo-500/20 via-cyan-400/10 to-white/5" />
      </div>

      <div className="relative">
        <div className="text-xs text-zinc-400">{p.year}</div>
        <div className="mt-2 text-xl font-medium tracking-tight">{p.title}</div>
        <div className="mt-2 text-sm text-zinc-400">{p.tag}</div>
        <div className="mt-3 text-sm text-zinc-300">{p.excerpt}</div>

        <div className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-300 group-hover:text-white transition">
          View case <span className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </Link>
  );
}
