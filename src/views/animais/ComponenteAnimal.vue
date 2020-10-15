<template>
  <div class="animal">
    <div class="info1">
      <p>Data de cadastro: 12/12/2012</p>
      <img src="../../assets/dog.jpg" width="344" height="351" />
      <p>
        Descrição: Eu sou um cachorro muito dócil e adoraria viver em um novo
        lar definitivo. Gosto de crianças e amo brincar.
      </p>
    </div>
    <div class="info2">
      <ul>
        <li>
          <p>Nome: Boris</p>
          <p>Gênero: Macho</p>
          <p>Raça: Boxer</p>
          <p>Comportamento: Ideal para apartamento</p>
        </li>
      </ul>
    </div>
    <div class="info3">
      <ul>
        <li>
          <p>Cor: Marrom</p>
          <p>Peso: 9kg</p>
          <p>Porte: Grande</p>
          <p>Deficiência/Necessidades especiais: Nenhuma</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponenteAnimal",
};
</script>

<style>
.animal {
  margin-left: 50px;
  margin-right: 50px;
  border: solid 1px grey;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 40px;
  background: #fafafa;
  padding: 30px;
}

.animal p {
  text-align: left;
}

.info1 {
  width: 500px;
}

/* .animal img {
  margin-left: 40px;
} */
</style>
