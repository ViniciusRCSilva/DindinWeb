<template>
<form @submit.prevent="salvar">
    <div id="cursoArea">
        <input type="text" placeholder="Título da aula" required v-model="aula.aulaTitulo">
        <input type="text" placeholder="Link da aula" required v-model="aula.aulaLink">
        <input id="descricao" type="text" placeholder="Descrição da aula" required v-model="aula.aulaDescricao">
        <input type="number" v-model="aula.cursoId" placeholder="Id do Curso" required>
    </div>

    <button>salvar</button>
</form>
</template>

<script>
import Aula from '@/service/aula.js'

export default {
    name: 'CardAddAula',
    data(){
        return{
            aula:{
                aulaTitulo: '',
                aulaLink: '',
                aulaDescricao: '',
                cursoId: parseInt('')
            }
        }
    },
    methods: {
        salvar(){
            Aula.postAula(this.aula).then(() =>{
                alert('Aula salva com sucesso')
           }).catch(error =>{
                alert(error)
           }) 
        } 
    }
}
</script>

<style scoped>
#cursoArea{
    display: flex;
    flex-direction: column;
}

input{
    border: 1px solid #555;
    border-radius: 0px;
    margin-bottom: 15px;
    padding: 5px;
}
#descricao{
    padding-bottom: 50px;
}
button{
    width: 25%;
    background-color: var(--color-background-nav);
    color: var(--color-text-light);
    border: none;
    border-radius: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
}
</style>