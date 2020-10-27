<template>
    <div>
        <header>
            <div class="header-brand">
                <a href="/"> <img src="../assets/logo.png" alt="logo KdMeuPet"></a>
            </div>

            <ul class="header-menu">
                <li><a href="/animais">Adote</a></li>
                <li><a href="/ongs">ONGs</a></li>
                <li><a href="/cadastro">Entrar</a></li>
            </ul>

        </header>
    </div>
</template>

<script>
    export default {
        name: 'Header',
    };
</script>

<style>

:root {
    --color-text: #292F36;
    --color-light: #E5E9EC;
}

header {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background: var(--color-light);
    padding: 0px 50px 0px 50px;
    /* border-bottom: 1px solid #292F36; */
}

.header-brand {
    display: flex;
    color: var(--color-text);
}

.header-brand a {
    text-decoration: none;
    color: var(--color-text);
}

.header-menu {
    display: flex;
    list-style: none;
}

.header-menu li {
    display: inline;
    color: var(--color-text);
}

.header-menu li:hover {
    background-color: #DADAD9;
    border-radius: 50px 50px 50px 50px;
    -webkit-transition: 0.5s ease-in;
    -moz-transition: 0.5s ease-in;
    -o-transition: 0.5s ease-in;
    transition: 0.5s ease-in;
  }

.header-menu li a {
    color: var(--color-text);
    text-decoration: none;
    padding-left: 10px;
    opacity: 0.8;
}

.header-menu li a:hover {
  opacity: 1;
  width: 30px;  
  color: #FF6B6B;
}

</style>
