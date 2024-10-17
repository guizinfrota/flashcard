function criacartao(categoria, pergunta, resposta) {
    let container=document.getElementById(container)
    let cartao=document.createElement(article)
    cartao.className='cartao'

    cartao.innerHTML=
    <div class="cartao_conteudo">
    <h3>${categoria}</h3>
    <div class="cartao_conteudo_resposta">
        <p>${pergunta}</p>
    </div>
    <div clas="cartao_conteudo_resposta">
        <p>${resposta}</p>
    </div>
</div>
}
let respostaEstaVisivel=false

function viraCartao(){
    restpostaEstaVisivel=!respostaEstaVisivel
    cartao.classList.toggle('active',respostaEstaVisivel)
}
cartao.addEventListen('click',viraCartao)
container.appendChild(cartao)
