<template>
  <div>
    <div class="contentTitle">
        <div>
            <p class="curso"><strong>Curso</strong></p>
        </div>

        <div>
            <p class="acoes"><strong>Ações</strong></p>
        </div>
    </div>
    <div v-for="curso in listCursos" :key="curso.cursoId">
        <div class="content">
            <div>
                <p class="tituloCursos">{{ curso.titulo }}</p>
            </div>

            <div>
                <button @click="openEditCurso(curso.cursoId)" class="editarBtn">editar</button>
                <button @click="deleteCursoById(curso.cursoId)" class="excluirBtn">excluir</button>
            </div>
        </div>
    </div>

    <a href="/adicionarCurso"><button class="adicionarBtn">adicionar curso</button></a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CardCurso",
  mounted(){
    this.deleteCursoById(this.$route.params.cursoId)
    this.getCursoById(this.$route.params.cursoId)
  },
  computed: {
    ...mapGetters("curso", ["listCursos"]),
  },
  methods: {
    ...mapActions("curso", ["getCursos"]),
    ...mapActions("curso", ["deleteCursoById"]),
    openEditCurso(cursoId) {
      this.$router.push(`Cursos/Editar/${cursoId}`);
    },
  }
};
</script>

<style scoped>
.contentTitle{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-div-painel);
    border: 1px solid var(--color-border-painel);
}

.curso{
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

.tituloCursos{
    margin-left: 15px;
}

button{
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

.adicionarBtn{
    margin-top: 20px;
    color: var(--color-text-light);
    background-color: var(--color-background-nav);
    border-radius: 30px;
}
</style>