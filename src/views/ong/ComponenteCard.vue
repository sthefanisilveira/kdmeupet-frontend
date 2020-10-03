<template>
  <div class="card">
    <div class="container">
      <img src="../../assets/dog.jpg" width="244" height="151" />
      <div class="card-body">
        <h1>Boris</h1>
        <p>
          Eu sou um cachorro muito dócil e adoraria viver em um novo lar
          definitivo. <br />
          Gosto de crianças e amo brincar.
        </p>
      </div>
      <div class="card-date">
        <h3>Estou te esperando há:</h3>
        <p>2 anos</p>
        <div class="about-action">
          <button>Me adote</button>
        </div>
      </div>
    </div>

    <img src="../../assets/dog.jpg" width="244" height="151" />
      <div class="card-body">
        <h1>Boris</h1>
        <p>
          Eu sou um cachorro muito dócil e adoraria viver em um novo lar
          definitivo. <br />
          Gosto de crianças e amo brincar.
        </p>
      </div>
      <div class="card-date">
        <h3>Estou te esperando há:</h3>
        <p>2 anos</p>
        <div class="about-action">
          <button>Me adote</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style>
.card {
  margin-top: 40px;
  margin-bottom: 40px;
  background: #fafafa;
  display: flex;
}

.container {
  display: flex;
  border: solid 1px grey;
  width: 70vw;
}

.card-body {
  padding: 20px;
}

.container h1 {
  text-align: left;
}

.container p {
  text-align: left;
}

.card-date {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>