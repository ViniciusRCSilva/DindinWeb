<template>
    <form @submit.prevent="editar">
        <div id="cursoArea">
            <input type="text" placeholder="Título" v-model="curso.titulo" required>
            <input type="text" placeholder="upload capa" v-model="curso.imagemCapa" required>
            <input type="text" placeholder="Professor" v-model="curso.professor" required>
            <input id="descricao" type="text" placeholder="Descrição" v-model="curso.cursoDescricao" required>
        </div>

        <h3>Aula</h3>
        <div id="cursoArea">
            <input type="text" placeholder="Título da aula" required v-model="curso.aula.aulaTitulo">
            <input type="text" placeholder="Link da aula" required v-model="curso.aula.aulaLink">
            <input id="descricao" type="text" placeholder="Descrição da aula" required v-model="curso.aula.aulaDescricao">
        </div>

        <button>editar</button>
    </form>
</template>

<script>
import Curso from '../service/curso.js'

export default {
    name: 'CardEditarCurso',
    data(){
        return{
            curso: {
                cursoId: '',
                titulo: '',
                professor: '',
                imagemCapa: '',
                cursoDescricao: '',
                aula: [
                    {
                        aulaDescricao: '',
                        aulaTitulo: '',
                        aulaLink: ''
                    }
                ]
            }
        } 
    },
    methods:{
        editar(){
            Curso.editCurso(this.curso).then(() =>{
            }).catch(error =>{
                alert(error)
            })
        }

    }
}
</script>

<style scoped>
h3{
    color: var(--color-background-nav);
    margin-bottom: 20px;
    margin-top: 20px;
}

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