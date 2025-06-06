
// Codificar (sem "=" no final)
export const encryptRoute = (route: string): string => {
  const mixed = route + '-' + route.split('').reverse().join('');
  return btoa(mixed).replace(/=+$/, '');
};

export const decryptRoute = (encrypted: string): string => {
  let base64 = encrypted;
  while (base64.length % 4 !== 0) base64 += '=';
  const decoded = atob(base64);
  return decoded.split('-')[0]; // pega só o valor original
};
