const CarrinhoDeCompras = {
	itens: [],
  valorTotal: 0,
};

const adicionarItemAoCarrinho = item => {
	CarrinhoDeCompras.itens.push(item);
  CarrinhoDeCompras.valorTotal += item.preco;
};

const removerItemDoCarrinho = index => {
	const itemRemovido = CarrinhoDeCompras.itens.splice(index, 1)[0];
  CarrinhoDeCompras.valorTotal -= itemRemovido.preco;
}

const listarItensDoCarrinho = () => {
	CarrinhoDeCompras.itens.ForEach(item => {
  	console.log(`${item.nome} - ${item.preco.toFixed(2)}`);
  });
}
