<template>
  <div class="ong-profile">
    <div class="columns">
      <div class="column is-12">
         <h1> Cadastro da Ong</h1>
      </div>
    </div>

    <div class="columns">
      <div class="column is-2">
        <div class="img-animal">
          <img src="@/assets/dog1.jpg" width="200" height="100" />
        </div>
      </div>
      <div class="column is-10">
        <b-field label="Nome do animal">
          <b-input v-model="nomeAnimal"></b-input>
        </b-field>
        <div class="columns">
          <div class="column is-6">
            <b-field label="Raça">
              <b-input v-model="nomeAnimal"></b-input>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Raça">
              <b-input v-model="nomeAnimal"></b-input>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <b-field label="Raça">
            <b-input v-model="nomeAnimal"></b-input>
          </b-field>
      </div>
      <div class="column is-6">
        <b-field label="Raça">
            <b-input v-model="nomeAnimal"></b-input>
          </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
      <b-field label="Raça">
          <b-input v-model="nomeAnimal"></b-input>
        </b-field>
      </div>

     <div class="column is-6">
      <b-field label="Gênero">
        <b-radio v-model="radio" name="name" native-value="macho">
          Macho
        </b-radio>
        <b-radio v-model="radio" name="name" native-value="femea">
          Fêmea
        </b-radio>
      </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: 'OngForm',
}
</script>

<style>
.ong-profile {
  padding: 10px;
  padding: 10px;
  width: 85vw;
  border: 2px solid purple;
}
h1 {
  color: black;
  font-size:2em;
}
</style>
