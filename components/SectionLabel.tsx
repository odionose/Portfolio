interface SectionLabelProps {
  index: string;
  label: string;
}

export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="mb-6 flex items-center gap-3 label-meta">
      <span>{index}</span>
      <span className="h-px w-8 bg-line" />
      <span>{label}</span>
    </div>
  );
}
