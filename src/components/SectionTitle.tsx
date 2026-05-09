interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={`mb-10 md:mb-12 ${
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"
      }`}
    >
      <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base leading-relaxed text-gray-500 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
