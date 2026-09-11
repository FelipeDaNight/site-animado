// TODO: troque pelo número real de WhatsApp que vai receber as sugestões de
// tema, no formato DDI+DDD+número, só dígitos (ex: 5511999999999 para um
// celular de São Paulo). Sem esse número real, o botão abre o WhatsApp sem
// um contato de destino definido.
const NUMERO_WHATSAPP = "5500000000000";

export function linkSugerirTema(tema: string): string {
  const mensagem =
    `Oi! Busquei "${tema}" no Repertório Certo e não encontrei repertório para esse tema. ` +
    "Será que dá pra adicionar?";
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}
