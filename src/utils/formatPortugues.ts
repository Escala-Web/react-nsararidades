export const formatPortugues = (index: string) => {
    const arrayPortugues = [
      {
        index: 'PENDING',
        value: 'Pendente',
        color: '#FFA500' // laranja
      },
      {
        index: 'PROCESSING',
        value: 'Processando',
        color: '#007bff' // azul
      },
      {
        index: 'SHIPPED',
        value: 'Em transporte',
        color: '#17a2b8' // azul claro
      },
      {
        index: 'DELIVERED',
        value: 'Concluido',
        color: '#28a745' // verde
      },
      {
        index: 'CANCELLED',
        value: 'Cancelado',
        color: '#dc3545' // vermelho
      },
      {
        index: 'REFUNDED',
        value: 'Reembolsado',
        color: '#6c757d' // cinza
      },
      {
        index: 'RETURNED',
        value: 'Devolvido',
        color: '#ffc107' // amarelo
      }
    ];
  
    const status = arrayPortugues.find((item) => item.index === index.toUpperCase());
  
    if (status) {
      return {
        value: status.value,
        color: status.color
      };
    }
  
    return {
      value: 'Desconhecido',
      color: '#000'
    };
  };
  

  export const arrayOfOrders = [
    {
        index: 'PENDING',
        value: 'Pendente',
        color: '#FFA500' // laranja
      },
      {
        index: 'PROCESSING',
        value: 'Processando',
        color: '#007bff' // azul
      },
      {
        index: 'SHIPPED',
        value: 'Em transporte',
        color: '#17a2b8' // azul claro
      },
      {
        index: 'DELIVERED',
        value: 'Concluido',
        color: '#28a745' // verde
      },
      {
        index: 'CANCELLED',
        value: 'Cancelado',
        color: '#dc3545' // vermelho
      },
      {
        index: 'REFUNDED',
        value: 'Reembolsado',
        color: '#6c757d' // cinza
      },
      {
        index: 'RETURNED',
        value: 'Devolvido',
        color: '#ffc107' // amarelo
      }
  ]