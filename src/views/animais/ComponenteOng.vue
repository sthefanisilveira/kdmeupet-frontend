<template>
  <div class="animal">
    <div class="info1">
      <img src="../../assets/ong.jpg" width="344" height="351" />
    </div>
    <div class="info2">
      <ul>
        <li>
          <p>Nome da Ong: Abrigo animal</p>
          <p>Telefone: 34352654</p>
        </li>
      </ul>
    </div>
    <div class="info3">
      <ul>
        <li>
          <p>Endereço: Rua das Palmas nº 246 - Itaum</p>
          <p>abrigo@animal.com</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponenteOng",
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
  width: 400px;
}
.info2 {
  width: 300px;
}

/* .animal img {
  margin-left: 40px;
} */
</style>
