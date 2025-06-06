export const formatNumberPhone = (phone: string) => {

    const ddd = phone?.slice(0, 2);
    const prefixo = phone?.slice(2, 7);
    const sufixo = phone?.slice(7);

    return `(${ddd}) ${prefixo}-${sufixo}`;

}