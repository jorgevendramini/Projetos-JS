let cart = [];

const adicionarItemAoCarrinho = () => {
  const produtoInput = document.getElementById('produto');
  const quantidadeInput = document.getElementById('quantidade');
  const precoInput = document.getElementById('preco');

  const produto = produtoInput.value;
  const quantidade = parseInt(quantidadeInput.value);
  const preco = parseFloat(precoInput.value);

  const item = {
    produto: produto,
    quantidade: quantidade,
    preco: preco
  };

  if (!item.produto) {
    alert('Digite o Produto');
  } else if (!item.quantidade) {
    alert('Digite a quantidade');
  } else if (!item.preco) {
    alert('Digite o preço');
  } else {
    cart.push(item);
  }


  listarItensDoCarrinho();
  limparFormulario();
};

const limparFormulario = () => {
  const form = document.querySelector('form');
  form.reset();
}

const listarItensDoCarrinho = () => {
  const carrinho = document.getElementById('carrinho');
  let html = '';

  cart.forEach((item, index) => {
    html += `<li>${item.produto} x ${item.quantidade} - ${item.preco.toFixed(2)} <button type="button" onclick="deletarItem(${index})">Remover</button></li>`;
  });

  carrinho.innerHTML = html;

  mostrarTotal();

}

const mostrarTotal = () => {
  const elementoTotal = document.getElementById('total');
  const total = cart.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  elementoTotal.innerHTML = `R$${total.toFixed(2)}`;
}


const deletarItem = (index) => {
  cart.splice(index, 1);
  listarItensDoCarrinho();
}
