<template>
  <div class="home">
    <div class="content">

      <div class="intro">
        <div class="innerIntro">
          <h1>{{ listCurso.titulo }}:</h1>
          <p>{{ listCurso.cursoDescricao }}</p>
        </div>
        <img class="image" :src="listCurso.imagemCapa" alt="img">
      </div>

      <CardAula class="aulasArea"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardAula from "../components/CardAula.vue";
export default {
  components: { CardAula },
  name: "Curso",

  mounted() {
    this.getCursoById(this.$route.params.cursoId);
    this.getAulasByCursoId(this.$route.params.cursoId);
  },
  methods: {
    ...mapActions("curso", ["getCursoById"]),
    ...mapActions("aula", ["getAulasByCursoId"]),
  },
  computed: {
    ...mapGetters("curso", ["listCurso"]),
    ...mapGetters("aula", ["listAulasCurso"]),
  },
};
</script>

<style scoped>
h1{
  color: var(--color-text-pink);
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
  width: 80%;
}

.intro{
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.innerIntro{
  display: flex;
  flex-direction: column;
}

.image{
  width: 380px;
}

.aulasArea{
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-background-videos);
}
</style>