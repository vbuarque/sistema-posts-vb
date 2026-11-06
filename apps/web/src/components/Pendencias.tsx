// Lista recolhível do que ainda falta decidir na marca, e o que o sistema faz até lá.
import type { Pendencia } from '@vb/brands';

export function Pendencias({ itens }: { itens: Pendencia[] }) {
  if (itens.length === 0) return null;

  return (
    <details className="group rounded-lg border border-white/10 bg-black/20">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium">
        <span>
          <span className="text-alerta">●</span> {itens.length} pendências a decidir
        </span>
        <span className="text-xs opacity-60 group-open:rotate-180">▾</span>
      </summary>
      <ul className="space-y-3 px-4 pb-4 text-sm">
        {itens.map((p) => (
          <li key={p.item}>
            <p className="font-medium">{p.item}</p>
            <p className="opacity-70">Enquanto isso: {p.impacto}</p>
          </li>
        ))}
      </ul>
    </details>
  );
}
