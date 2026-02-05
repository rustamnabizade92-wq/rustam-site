export default function ProjectPage() {
  return (
    <main className="bg-black text-white">
      <section className="h-screen relative">
        <img
          src="/covers/azerbaijan.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-end px-6 pb-20">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/70">
              Azerbaijan • 2025
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold">
              Beyond the Frame
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-32 text-white/80">
        <p>
          A documentary-style travel film focused on people, landscape
          and cultural rhythm. Shot across multiple regions with minimal crew.
        </p>
      </section>
    </main>
  );
}
