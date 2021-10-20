<template>
  <div class="home">
    <div class="content">
      <h1>Cursos</h1>
      <p>Educação financeira é tudo de bom</p>
      <CardCurso class="cardCurso"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardCurso from "../components/CardCurso.vue";

export default {
  components: { CardCurso },
  name: "Cursos",
  created() {
    this.getCursos();
  },
  methods: {
    ...mapActions("curso", ["getCursos"]),
  },
  computed: {
    ...mapGetters("curso", ["listCursos"]),
  },
};
</script>

<style scoped>
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

.cardCurso{
  margin-right: 20px;
}

h1{
  color: var(--color-text-pink);
}
</style>