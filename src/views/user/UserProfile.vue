<template>
  <div class="user-profile">
     <div class="columns">
      <div class="column is-12">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><a href="/petlover">Home</a></li>
            <li class="is-active"><a href="#" aria-current="page">Perfil</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns is-vcentered">
      <div class="column is-2">
        <img
          src="https://randomuser.me/api/portraits/women/24.jpg" alt="">
        </div>
        <div class="column is-4">
          <h1>Sarah Castro</h1>
          <p>Rua Agenor da Silva, 98</p>
          <p>Vila Nova</p>
          <p>Joinville - SC</p>
          <p>89182-910</p>
          <button class="button is-link">
            <i class="fas fa-edit"> </i> Editar
          </button>
        </div>
      </div>
      <hr>


    </div>
</template>

<script>

export default {
  name: 'UserProfile',
}
</script>

<style>
.user-profile {
  padding: 10px;
  width: 85vw;
}

.user-profile h1 {
  text-align: left;
  font-size: 2em;
}
</style>
