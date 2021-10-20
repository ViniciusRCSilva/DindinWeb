<template>
    <footer>
        <div id="dindinFooter">
            <img src="../assets/dindinIcon.svg" alt="logo" id="logo">
            <div id="description">
                <h1>dindin</h1>
                <p>educação financeira</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    footer{
        width: 100%;
        background-color: var(--color-background-nav);
    }

    h1, p{
        color: var(--color-text-light);
        margin-left: 10px;
    }

    h1{
        margin-bottom: -5px;
    }

    p{
        font-size: 10px;
    }

    #dindinFooter{
        padding-top: 10px;
        margin-left: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #description{
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    #logo{
        width: 50px;
    }
</style>