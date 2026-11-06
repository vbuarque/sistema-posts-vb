// Bolinha no topo que mostra se o painel está conseguindo falar com o servidor.
interface Props {
  online: boolean | null; // null = ainda verificando
}

export function StatusServidor({ online }: Props) {
  const cor = online === null ? 'bg-painel-suave' : online ? 'bg-ok' : 'bg-erro';
  const texto = online === null ? 'Verificando servidor…' : online ? 'Servidor online' : 'Servidor offline';

  return (
    <span className="inline-flex items-center gap-2 text-sm text-painel-suave">
      <span className={`size-2 rounded-full ${cor}`} />
      {texto}
    </span>
  );
}
