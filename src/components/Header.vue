<template>
    <header>
        <nav>
            <div>
                <a id="logoArea" href="/"><img src="../assets/dindinIcon.svg" alt="logo" id="logo"><h1>dindin</h1></a>
            </div>

            <div id="linksArea">
                <a href="/"><strong>CURSOS</strong></a>
                <a href="/painelAdministrativo"><strong>PAINEL ADMINISTRATIVO</strong></a>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
    header{
        background-color: var(--color-background-nav);
        height: 60px;
        width: 100%;
    }

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
    }

    a, h1{
        color: var(--color-text-light);
    }

    a h1{
        font-size: 30px;
        margin-left: 10px;
    }

    a{
        text-decoration: none;
        margin-left: 20px;
        font-size: 12px;
    }

    a:hover{
        color: var(--color-text-light);
        opacity: 0.8;
    }

    #logoArea {
        margin-top: 5px;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #linksArea {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
    }

    #logo{
        width: 35px;
        margin-bottom: 5px;
    }
</style>