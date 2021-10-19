<template>
  <div class="home">
    <h1>Lista de Cursos crua</h1>
    <CardCurso />
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
