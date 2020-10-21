<template>
  <div class="content-home">
    <div class="content-box">
      <div class="box-form1">
        <div class="animal-form1">
          <div class="columns">
            <div class="column">
              <div class="img-animal">
                <img src="@/assets/dog1.jpg" width="200" height="100" />
              </div>
            </div>
            <div class="column">
              <b-field label="Nome do animal">
                <b-input v-model="nomeAnimal"></b-input>
              </b-field>
            </div>
          <div class="columns">
            <div class="column">
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
      </div>
      <div class="box-form2">
        <b-field label="Cor">
          <b-input v-model="cor"></b-input>
        </b-field>
        <b-field label="Porte">
          <b-input v-model="porte"></b-input>
        </b-field>
        <b-field label="Comportamento">
          <b-input v-model="comportamento"></b-input>
        </b-field>
      </div>
      <div class="box-form3">
        <b-field label="Deficiências ou necessidades especiais">
          <b-input v-model="deficiencia"></b-input>
        </b-field>
      </div>
      <div class="box-form3">
        <b-field label="Descrição">
          <b-input v-model="descricao"></b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentHome",
};
</script>

<style>
.content-home {
  grid-area: content;
  display: flex;
  justify-content: center;
}
.content-box {
  display: flex;
  flex-direction: column;
  border: solid 1px grey;
  padding: 30px;
  width: 80%;
  margin-top: 30px;
}
.box-form1 {
  display: flex;
  flex-direction: row;
}

.animal-form1 {
  margin-left: 20px;
}

.box-form2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>