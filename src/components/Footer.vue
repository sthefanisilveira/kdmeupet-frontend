<template>
    <div>
        <footer>
            
            <ul class="footer-menu">
                <li><a href="/animais">Adote</a></li>
                <li><a href="/ongs">ONGs</a></li>
                <li><a href="/">Entrar | Registrar agora</a></li>
            </ul>

        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
    };
</script>

<style>

:root {
    --color-text: #292F36;
    --color-light: #E5E9EC;
    --color-strong:#AFB2B5;
}

footer {
    background: var(--color-strong);
    padding: 30px calc((100% - 1200px) /2 );
    display: flex;
    flex-wrap: wrap;    
    color: var(--color-text);
}

.footer-menu li {
    list-style: none;
    padding: 10px;
}

.footer-menu li a {
    color: var(--color-text);
    text-decoration: none;
}

</style>