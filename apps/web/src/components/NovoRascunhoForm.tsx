// Formulário simples para criar um rascunho. Na Parte 3 quem cria será a IA;
// por enquanto ele serve para testar o caminho painel → servidor → banco.
import { useState, type FormEvent } from 'react';
import { api, type BrandResumo, type PostFormato } from '../lib/api';

interface Props {
  brands: BrandResumo[];
  onCriado: () => void;
}

const campo =
  'rounded-lg border border-painel-borda bg-painel-bg px-3 py-2 text-sm outline-none focus:border-painel-suave';

export function NovoRascunhoForm({ brands, onCriado }: Props) {
  const [brandId, setBrandId] = useState(brands[0]?.id);
  const [formato, setFormato] = useState<PostFormato>('carrossel');
  const [titulo, setTitulo] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (!brandId) return;
    setEnviando(true);
    setErro(null);
    try {
      await api.criarPost({ brandId, formato, titulo });
      setTitulo('');
      onCriado();
    } catch (err) {
      setErro(err instanceof Error ? err.message : 'Erro ao criar');
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form onSubmit={enviar} className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-3">
        <select className={campo} value={brandId} onChange={(e) => setBrandId(e.target.value as typeof brandId)}>
          {brands.map((b) => (
            <option key={b.id} value={b.id}>
              {b.nome}
            </option>
          ))}
        </select>
        <select className={campo} value={formato} onChange={(e) => setFormato(e.target.value as PostFormato)}>
          <option value="carrossel">Carrossel</option>
          <option value="story">Story</option>
        </select>
        <input
          className={`${campo} min-w-0 flex-1`}
          placeholder="Título do rascunho"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <button
          type="submit"
          disabled={enviando}
          className="rounded-lg bg-painel-texto px-4 py-2 text-sm font-semibold text-painel-bg disabled:opacity-50"
        >
          {enviando ? 'Criando…' : 'Criar rascunho'}
        </button>
      </div>
      {erro && <p className="whitespace-pre-line text-sm text-erro">{erro}</p>}
    </form>
  );
}
