<template>
  <!-- genero, tipo, porte -->
  <div class="pesquisa">
    <div class="box-pesquisa">
      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-one-quarter">
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
        <div class="column is-one-quarter">
          <b-field label="Tipo:">
            <b-checkbox v-model="checkboxGroup" native-value="cachorro">
              Cachorro
            </b-checkbox>
            <b-checkbox v-model="checkboxGroup" native-value="gato">
              Gato
            </b-checkbox>
          </b-field>
        </div>
        <div class="column is-one-quarter">
          <b-field label="Ambiente">
            <b-checkbox v-model="checkboxGroup" native-value="casa">
              Casa
            </b-checkbox>
            <b-checkbox v-model="checkboxGroup" native-value="apartamento">
              Apartamento
            </b-checkbox>
          </b-field>
        </div>
      </div>
      <br />

      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-one-quarter">
          <b-field label="Gênero:">
            <b-select placeholder="Selecione um gênero">
              <option value="genero">Macho</option>
              <option value="genero">Fêmea</option>
            </b-select>
          </b-field>
        </div>
        <div class="column is-one-quarter">
          <b-field label="Sociável:">
            <b-switch>Sim, aceita outros pets</b-switch>
          </b-field>
        </div>
        <div class="column is-one-quarter">
          <button class="button is-link">
            <i class="fas fa-search"> </i> Pesquisar
          </button>
        </div>
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
  padding-top: 30px;
  display: flex;
  justify-content: center;
}

.box-pesquisa {
  border: solid 1px grey;
  padding: 20px;
  width: 90vw;
}

</style>
