<template>
  <div>
    <h1>Curso:</h1>
    <span>{{ listCurso }}</span>
    <CardAula />
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

<style>
</style>