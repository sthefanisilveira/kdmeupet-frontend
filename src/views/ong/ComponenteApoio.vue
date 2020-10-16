<template>
  <div class="apoio">
    <div class="titulo-apoio">
      <h2>Apoios que a ONG necessita</h2>
    </div>
    <div class="lista-apoio">
      <div class="itens-apoio">
        <ul>
          <li>
            <p>Ração</p>
            <p>Remédios</p>
            <p>Produtos de limpeza</p>
          </li>
        </ul>
      </div>
      <div class="botao-apoio">
      <a href="">Quero ver</a>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ComponenteApoio",
};
</script>

<style>
.apoio {
  margin-left: 50px;
  margin-right: 50px;
  border: solid 1px grey;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  background: #fafafa;
  padding: 30px;
}

.titulo-apoio h2 {
  font-size: 20px;
  text-align: center;
}

.lista-apoio {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>