// Número de WhatsApp que recebe as sugestões de tema (DDI 55 + DDD 64 + número).
const NUMERO_WHATSAPP = "5564992997324";

export function linkSugerirTema(tema: string): string {
  const mensagem =
    `Oi! Busquei "${tema}" no Repertório Certo e não encontrei repertório para esse tema. ` +
    "Será que dá pra adicionar?";
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}
