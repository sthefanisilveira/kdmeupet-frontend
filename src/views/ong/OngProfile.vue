<template>
  <div class="ong-profile">
     <div class="columns">
      <div class="column is-12">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><a href="/ong">Home</a></li>
            <li class="is-active"><a href="#" aria-current="page">Meu perfil</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns is-vcentered">
      <div class="column is-2">
        <img
          src="https://randomuser.me/api/portraits/lego/6.jpg" alt="">
        </div>
        <div class="column is-4">
          <h1>{{users.name}}</h1>
          <p>Rua Agenor da Silva, 98</p>
          <p>Vila Nova</p>
          <p>Joinville - SC</p>
          <p>89182-910</p>
          <button class="button is-warning"
            @click="setEditForm">
            <i class="fas fa-edit"> </i> Editar  ajhsiuajsasjaijsasajajiisijaisjasiaijsa {{statusEdit}}
          </button>
        </div>
      </div>
       <div class="columns" v-if="statusEdit">
        <div class="column is-12">
           <h1>Editar</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo enim ipsum, fugiat minima totam illo nihil veritatis deleniti qui corporis, sunt praesentium sit ipsa? Cupiditate ullam eligendi expedita tenetur!</p>
        </div>
      </div>
      <hr>
    </div>
</template>
<script>

export default {
  name: 'OngProfile',
  data() {
   return {
      users: {
        name: '',
      },
      statusEdit: false,
    };
  },
  // computed: {
  //   showFormEdit() {
  //     return this.statusEdit = true;
  //   },
  // },
  created() {
    console.log(this.users);
    this.users.name = this.$store.state.user.name;
  },
  methods: {
    setEditForm() {
      console.log(this.statusEdit);
      this.statusEdit = true;
    },
  },
}
</script>

<style>
.breadcrumb a {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #292f36;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 0.75em;
}

.button.is-link {
    background-color: #ff6b6b;
    border-color: transparent;
    color: #fff;
}

.button.is-link:hover {
    background-color: #E63946;
    border-color: transparent;
    color: #fff;
}

.ong-profile {
  padding: 10px;
  width: 85vw;
}

.ong-profile h1 {
  text-align: left;
  font-size: 2em;
}
</style>
