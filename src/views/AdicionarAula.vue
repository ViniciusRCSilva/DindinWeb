<template>
 <div class="home">
    <div class="content">
        <h1>Novo Aula</h1>
        <CardAddAula class="CardAddAula"/>    
    </div>
  </div>    
</template>

<script>
import CardAddAula from '@/components/CardAddAula.vue'

export default {
    name: 'Adicionar',
    components:{
        CardAddAula
    }
}
</script>

<style scoped>
h1{
    color: var(--color-text-pink);
    margin-bottom: 50px;
}

.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 91.4vh;
}

.content{
  display: flex;
  flex-direction: column;
  width: 80%;
  overflow-y: scroll;
  height: 80%;
}

.content::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

.content::-webkit-scrollbar-track {
  background: var(--color-background);        /* color of the tracking area */
}

.content::-webkit-scrollbar-thumb {
  background-color: var(--color-background-nav);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 1px solid var(--color-background-nav);  /* creates padding around scroll thumb */
}

.areaAdicionarAula{
    display: flex;
    justify-content: right;
}

button{
    border: none;
    border-radius: 30px;
    color: var(--color-text-light);
    background-color: var(--color-background-nav);
    width: 30px;
}

.CardAddAula{
    margin-right: 20px;
}
</style>