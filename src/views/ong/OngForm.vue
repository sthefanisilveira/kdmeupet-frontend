<template>
  <div class="ong-profile">
    <div class="columns">
      <div class="column is-12">
        <h1>Cadastrar um animal:</h1>
      </div>
    </div>

    <div class="columns">
      <div class="column is-2">
        <div class="img-animal">
          <img src="@/assets/dog1.jpg" width="200" height="100" />
          <b-field class="file is-primary" :class="{ 'has-name': !!file }">
            <b-upload v-model="file" class="file-label">
              <span class="file-cta">
                <b-icon class="file-icon" icon="upload"></b-icon>
                <span class="file-label">Adicionar</span>
              </span>
              <span class="file-name" v-if="file">
                {{ file.name }}
              </span>
            </b-upload>
          </b-field>
        </div>
      </div>
      <div class="column is-10">
        <b-field label="Nome">
          <b-input v-model="animalNome"></b-input>
        </b-field>
        <div class="columns">
          <div class="column is-6">
            <b-field label="Raça">
              <b-input v-model="animalRaca"></b-input>
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
    </div>

    <div class="columns">
      <div class="column is-4">
        <b-field label="Cor">
          <b-input v-model="animalCor"></b-input>
        </b-field>
      </div>
      <div class="column is-4">
        <b-field label="Porte">
          <b-input v-model="animalPorte"></b-input>
        </b-field>
      </div>
      <div class="column is-4">
        <b-field label="Comportamento">
          <b-input v-model="animalComportamento"></b-input>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <b-field label="Necessidades especiais">
          <b-input v-model="animalNecessidades"></b-input>
        </b-field>
      </div>

      <div class="column is-6">
        <b-field label="Descrição">
          <b-input v-model="animalDescricao"></b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OngForm",
  data() {
            return {
                file: null
            }
        }
};
</script>

<style>
.ong-profile {
  padding: 10px;
  width: 85vw;
  /* border: 2px solid purple; */
}
h1 {
  color: black;
  font-size: 1.5em;
}
</style>
