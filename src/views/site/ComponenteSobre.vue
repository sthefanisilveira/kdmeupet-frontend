<template>
  <div class="sobre">
    <div class="sobre-container">
      <h1>Veja como podemos ajudar:</h1>
    </div>

    <div class="sobre-container-itens">

      <div class="Pesquise">
        <img src="../../assets/lupa.png">
        <h2><strong>Pesquise</strong></h2>
        <p>Utilizando-se de filtros, para encontrar um pet, é possível selecionar o tipo do animal (cachorro ou gato), porte, gênero e até mesmo filtrar por animais sociáveis com outros animais ou com crianças.</p>
      </div>

      <div class="Compartilhe">
        <img src="../../assets/coracao.png">
        <h2><strong>Adote</strong></h2>
        <p>Após identificar o animal desejado dentre as características que acredita ser a ideal, o adotante enviará suas informações através da plataforma, preenchendo um formulário.</p>
      </div>

      <div class="Encontre">
        <img src="../../assets/doacao.png">
        <h2><strong>Ajude</strong></h2>
        <p>Caso o usuário deseja ajudar uma Ong de forma voluntária ou com recursos financeiros próprios, este poderá utilizar da mesma ferramenta de contato, informando o que deseja  ajudar seja de forma recorrente ou única.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponenteSobre',
}
</script>

<style>
.sobre {
  width: 100vw;
  height: 100%;
  padding: 30px;
}

.sobre-container {
  text-align: center;
}

.sobre-container-itens {
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.sobre-container-itens p {
  font-size: 14px;
}
</style>