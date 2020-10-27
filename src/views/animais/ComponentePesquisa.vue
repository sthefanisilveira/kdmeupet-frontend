<template>
  <!-- genero, tipo, porte -->
  <div class="pesquisa columns">
    <div class="column">
      <div class="genero">
        <b-field label="Gênero:">
          <b-select placeholder="Selecione um gênero">
            <option value="genero">Macho</option>
            <option value="genero">Fêmea</option>
          </b-select>
        </b-field>

        <b-field label="Porte:">
          <b-checkbox v-model="checkboxGroup" native-value="pequeno">
            Pequeno
          </b-checkbox>
          <b-checkbox v-model="checkboxGroup" native-value="medio">
            Médio
          </b-checkbox>
          <b-checkbox v-model="checkboxGroup" native-value="grande">
            Grande
          </b-checkbox>
        </b-field>
      </div>

      <div class="tipo">
        <b-field label="Tipo:">
          <b-checkbox v-model="checkboxGroup" native-value="cachorro">
            Cachorro
          </b-checkbox>
          <b-checkbox v-model="checkboxGroup" native-value="gato">
            Gato
          </b-checkbox>
        </b-field>
      </div>
    </div>

    <div class="column">
      <div class="ambiente:">
        <b-field label="Ambiente">
          <b-checkbox v-model="checkboxGroup" native-value="casa">
            Casa
          </b-checkbox>
          <b-checkbox v-model="checkboxGroup" native-value="apartamento">
            Apartamento
          </b-checkbox>
        </b-field>

        <div class="about-action">
          <button>Encontrar</button>
        </div>
      </div>
      <br />

      <div class="sociavel">
        <b-field label="Sociável:">
          <b-switch>Sim, aceita outros pets</b-switch>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentePesquisa",
};
</script>

<style>
.pesquisa {
  margin-left: 130px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 80vw;
  height: 35vh;
  border: solid 1px grey;
  border-radius: 50px;
}
/* 
.column {
  display: flex;
  flex-direction: row;
  justify-content: center;
} */

.about-action button {
  background: #4ecdc4;
  color: #fff;
  width: 150px;
  height: 40px;
  border-radius: 20px;
}

.about-action button:hover {
  background: #dadad9;
  color: var(--color-text);
  width: 150px;
  height: 40px;
  border-radius: 20px;
}
</style>
