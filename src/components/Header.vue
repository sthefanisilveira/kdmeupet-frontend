<template>
    <div>
        <header>
            <div class="header-brand">
                <a href="/">Meu Projeto</a>
            </div>

            <ul class="header-menu">
                <li><a href="/animais">Adote</a></li>
                <li><a href="/ongs">ONGs</a></li>
                <li><a href="/">Entrar | Registrar agora</a></li>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background: var(--color-light);
    padding: 10px;
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

.header-menu li a {
    color: var(--color-text);
    text-decoration: none;
    padding-left: 10px;
}

</style>