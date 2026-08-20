import type { FieldActivity } from "@/lib/home-data";

type FieldActivitySelectorProps = {
  items: FieldActivity[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function FieldActivitySelector({ items, selectedId, onSelect }: FieldActivitySelectorProps) {
  return (
    <div className="field-selector" aria-label="Faaliyet seçin">
      {items.map((item, index) => {
        const selected = item.id === selectedId;

        return (
          <button
            type="button"
            className={`field-selector__item ${selected ? "is-active" : ""}`}
            aria-current={selected ? "true" : undefined}
            onClick={() => onSelect(item.id)}
            key={item.id}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.title}</strong>
          </button>
        );
      })}
    </div>
  );
}
