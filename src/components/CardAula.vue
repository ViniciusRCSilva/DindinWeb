<template>
  <div>
    <b-row>
      <b-card
        v-for="aula in listAulas"
        :key="aula.index"
        :title="aula.aulaTitulo"
      >
        <b-card-text class="card__curso--detail">
          <span>Descrição: {{ aula.aulaDescricao }}</span>
          <span>Link: {{ aula.aulaLink }} </span>
          <span>ID do Curso: {{ aula.cursoId }} </span>
        </b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CardAula",
  computed: {
    ...mapGetters("aula", ["listAulas"]),
  },
  methods: {
    ...mapActions("aula", ["getAulas"]),
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