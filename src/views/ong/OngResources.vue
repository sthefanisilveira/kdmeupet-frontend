<template>
  <div class="ong-recursos">
    <div class="columns">
      <div class="column is-12">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><a href="/ong">Home</a></li>
            <li class="is-active">
              <a href="#" aria-current="page">Recursos cadastrados</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns">
      <div class="column is-9">
        <h1>Recursos cadastrados</h1>
      </div>
      <div class="column is-3">
        <div class="button-resources">
          <button class="button is-primary" @click="unlikePet">
            <i class="fas fa-plus"> </i>
          </button>
          <button class="button is-primary" @click="unlikePet">
            <i class="fas fa-trash"> </i>
          </button>
          <button class="button is-primary" @click="unlikePet">
            <i class="fas fa-edit"> </i>
          </button>
        </div>
      </div>
    </div>

    <b-table :data="data" :columns="columns"></b-table>
  </div>
</template>

<script>
export default {
  name: "OngResources",
  data() {
    return {
      data: [
        {
          quantidade: 25,
          produto: "Anti inflamatório Flamavet",
          tipo: "Remédio",
          data: "2020-10-15 13:43:27",
        },
        {
          quantidade: 40,
          produto: "Ração",
          tipo: "Alimento",
          data: "2020-12-15 06:00:53",
        },
        {
          quantidade: 20,
          produto: "Sachê para gatos castrados",
          tipo: "Alimento",
          data: "2020-04-26 06:26:28",
        },
        {
          quantidade: 5,
          produto: "Tapete absorvente para cachorro adulto ",
          tipo: "Higiene",
          data: "2020-04-10 10:28:46",
        },
        {
          quantidade: 10,
          produto: "Desinfetante",
          tipo: "Limpeza",
          data: "2020-12-06 14:38:38",
        },
      ],
      columns: [
        {
          field: "quantidade",
          label: "Quantidade",
          width: "40",
          numeric: true,
        },
        {
          field: "produto",
          label: "Produto",
        },
        {
          field: "tipo",
          label: "Tipo",
        },
        {
          field: "data",
          label: "Adicionado em",
          centered: true,
        },
      ],
    };
  },
};
</script>

<style>
.ong-recursos {
  padding: 10px;
  width: 85vw;
}

.button-resources button {
  margin-left: 10px;
}
</style>