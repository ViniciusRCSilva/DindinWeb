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
  height: 91.4vh;
}

.content{
  display: flex;
  flex-direction: column;
  width: 80%;
  overflow-y: scroll;
  height: 85%;
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
  margin-right: 20px;
}

.aulasArea{
  background-color: var(--color-background-videos);
  margin-right: 20px;
}
</style>