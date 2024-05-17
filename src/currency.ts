export function currency(valor: string | number) {
  // Converter o valor para número, caso seja uma string
  const numero = Number(valor);
  
  // Verificar se o valor é um número válido
  if (isNaN(numero)) {
      return 'Valor inválido';
  }

  // Formatar o número como moeda (Real Brasileiro)
  const formatador = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  });
  
  // Retornar o valor formatado
  return formatador.format(numero);
}