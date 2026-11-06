// Cartão de uma marca, pintado com as cores do próprio design system dela.
import type { BrandResumo } from '../lib/api';
import { Pendencias } from './Pendencias';

export function BrandCard({ brand }: { brand: BrandResumo }) {
  const { preview } = brand;
  const cores = [
    { nome: 'Fundo', hex: preview.fundo },
    { nome: 'Superfície', hex: preview.superficie },
    { nome: 'Destaque', hex: preview.destaque },
    { nome: 'Texto', hex: preview.texto },
  ];

  return (
    <article
      className="flex flex-col gap-5 rounded-2xl p-6"
      style={{ background: preview.fundo, color: preview.texto }}
    >
      <header>
        <p className="text-sm" style={{ color: preview.destaque }}>
          {brand.instagram}
        </p>
        <h2 className="text-2xl font-bold">{brand.nome}</h2>
        <p className="text-sm" style={{ color: preview.textoSecundario }}>
          {brand.regiao} · fonte {preview.fonteTitulo}
        </p>
      </header>

      <ul className="grid grid-cols-4 gap-2">
        {cores.map((c) => (
          <li key={c.nome} className="text-xs">
            <span
              className="mb-1 block h-10 rounded-md border border-white/15"
              style={{ background: c.hex }}
            />
            <span className="block opacity-80">{c.nome}</span>
            <span className="block font-mono opacity-60">{c.hex}</span>
          </li>
        ))}
      </ul>

      <Pendencias itens={brand.pendencias} />
    </article>
  );
}
