export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="mt-2 font-heading text-5xl leading-none tracking-wide text-white text-balance sm:text-6xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-white/70 text-pretty">{description}</p>
      )}
    </div>
  );
}
