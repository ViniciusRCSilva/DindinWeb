<template>
 <div class="home">
    <div class="content">
        <h1>Novo Curso</h1>
        <CardAddCurso />
        <h3>Aula 1</h3>
        <CardAddAula />
        <div class="areaAdicionarAula">
            <button @click="adicionar()">+</button>
        </div>
    </div>
  </div>    
</template>

<script>
import CardAddCurso from '@/components/CardAddCurso.vue'
import CardAddAula from '@/components/CardAddAula.vue'

export default {
    name: 'Adicionar',
    components:{
        CardAddCurso,
        CardAddAula
    }
}
</script>

<style scoped>
h1{
    color: var(--color-text-pink);
    margin-bottom: 50px;
}

h3{
    color: var(--color-background-nav);
    margin-bottom: 20px;
    margin-top: 20px;
}

.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.content{
  display: flex;
  flex-direction: column;
  width: 60%;
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
</style>