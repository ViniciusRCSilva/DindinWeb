<template>
  <div class="home">
    <h1>Lista de Aulas crua</h1>
    <CardAula />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardAula from "../components/CardAula.vue";

export default {
  components: { CardAula },
  name: "Aulas",
  created() {
    this.getAulas();
  },
  methods: {
    ...mapActions("aula", ["getAulas"]),
  },
  computed: {
    ...mapGetters("aula", ["listAulas"]),
  },
};
</script>
