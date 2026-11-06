// Tela inicial do painel: marcas no topo, rascunhos embaixo.
import { useCallback, useEffect, useState } from 'react';
import { api, type BrandResumo, type Post } from './lib/api';
import { StatusServidor } from './components/StatusServidor';
import { BrandCard } from './components/BrandCard';
import { NovoRascunhoForm } from './components/NovoRascunhoForm';
import { ListaPosts } from './components/ListaPosts';

export function App() {
  const [online, setOnline] = useState<boolean | null>(null);
  const [brands, setBrands] = useState<BrandResumo[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  const carregarPosts = useCallback(() => {
    api.posts().then(setPosts).catch(() => setPosts([]));
  }, []);

  useEffect(() => {
    api
      .health()
      .then(() => setOnline(true))
      .catch(() => setOnline(false));
    api.brands().then(setBrands).catch(() => setBrands([]));
    carregarPosts();
  }, [carregarPosts]);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold">Sistema de posts</h1>
          <p className="text-sm text-painel-suave">Carrosséis e stories das marcas VB</p>
        </div>
        <StatusServidor online={online} />
      </header>

      {online === false && (
        <p className="rounded-lg border border-erro/40 bg-erro/10 p-4 text-sm">
          Não consegui falar com o servidor. Ele está rodando? Use <code>npm run dev</code> na raiz do projeto.
        </p>
      )}

      <section className="grid items-start gap-6 md:grid-cols-2">
        {brands.map((b) => (
          <BrandCard key={b.id} brand={b} />
        ))}
      </section>

      <section className="flex flex-col gap-4 rounded-2xl border border-painel-borda bg-painel-card p-6">
        <h2 className="font-semibold">Rascunhos</h2>
        {brands.length > 0 && <NovoRascunhoForm brands={brands} onCriado={carregarPosts} />}
        <ListaPosts posts={posts} brands={brands} />
      </section>
    </div>
  );
}
