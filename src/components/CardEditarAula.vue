<template>
<div>
    <form @submit.prevent="editar($route.params.aulaId)">
        <div id="cursoArea">
            <input type="text" placeholder="Título" v-model="aula.aulaTitulo">
            <input type="text" placeholder="upload capa" v-model="aula.aulaLink">
            <input id="descricao" type="text" placeholder="Descrição" v-model="aula.aulaDescricao">
            <input type="number" placeholder="Id do curso" v-model="aula.cursoId">
        </div>

        <button class="salvar">salvar</button>
    </form>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import api from "../service/api"

export default {
    name: 'CardEditarAula',
    data(){
        return{
            aula: {
                aulaTitulo: '',
                aulaLink: '',
                aulaDescricao: '',
                cursoId: parseInt('')
            }
        }
    },
    computed: {
        ...mapGetters("aula", ["listAulas"]),
    },
    methods: {
        ...mapActions("aula", ["getAulas"]),
        openEditAula(aulaId) {
            this.$router.push(`Aulas/Editar/${aulaId}`);
        },
        editar(id) {       
            api.put(`Aulas/${id}`, {           
                aulaId: parseInt(id),           
                aulaTitulo: this.aula.aulaTitulo,           
                aulaLink: this.curso.aulaLink,           
                aulaDescricao: this.curso.aulaDescricao,         
            }).then(() => {           
                alert("Aula atualizada com sucesso!");  
                this.$router.push('/painelAdministrativo');   
            }).catch((error) => {           
                console.log(error);         
            });     
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

.salvar{
    width: 25%;
    background-color: var(--color-background-nav);
    color: var(--color-text-light);
    border: none;
    border-radius: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
}

.contentTitle{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-div-painel);
    border: 1px solid var(--color-border-painel);
}

.aula{
    margin-left: 15px;
}

.acoes{
    margin-right: 150px;
}

.content{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-border-painel);
}

.tituloAulas{
    margin-left: 15px;
}

button {
    margin-right: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 3px;
    padding-bottom: 3px;
    border: none;
    border-radius: 0px;
}

.editarBtn{
    color: var(--color-text-light);
    background-color: var(--color-btn-yellow);
}

.excluirBtn{
    color: var(--color-text-light);
    background-color: var(--color-btn-red);
}

.contentAula{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.linkAddAula{
    color: var(--color-background-nav);
    margin-left: 10px;
    text-decoration: none;
}
</style>