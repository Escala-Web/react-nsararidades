export const formatUrl = (url: string) => {
  return url
    .toLowerCase()
    .normalize('NFD') // separa letras de acentos
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // remove caracteres especiais
    .replace(/\s+/g, '-') // substitui espaços por hífen
    .replace(/-+/g, '-') // evita hífens duplicados
    .replace(/^-+|-+$/g, ''); // remove hífen no começo/fim
};
