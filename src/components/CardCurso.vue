<template>
  <div>
    <b-row>
      <b-card
        v-for="curso in listCursos"
        :key="curso.index"
        :title="curso.titulo"
      >
        <b-card-text class="card__curso--detail">
          <span>Professor: {{ curso.professor }}</span>
          <span>Imagem: {{ curso.imagemCapa }} </span>
          <span>ID Curso: {{ curso.cursoId }} </span>
          <span>Descrição: {{ curso.cursoDescricao }}</span>
        </b-card-text>
        <b-button
          variant="outline-primary"
          @click="openDetailCurso(curso.cursoId)"
          >Detalhes</b-button
        >
      </b-card>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CardCurso",
  computed: {
    ...mapGetters("curso", ["listCursos"]),
  },
  methods: {
    ...mapActions("curso", ["getCursos"]),
    openDetailCurso(cursoId) {
      this.$router.push(`Cursos/Detalhes/${cursoId}`);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card__curso--detail {
  display: flex;
  flex-direction: column;
}
.card--style {
  margin: 16px;
}
</style>