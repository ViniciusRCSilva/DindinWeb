<template>
  <div class="home">
    <div class="content">
      <h1>Painel Administrativo</h1>
      <p>Educação financeira é tudo de bom</p>
      <CardPainel />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardPainel from "../components/CardPainel.vue";

export default {
  components: { CardPainel },
  name: "Painel",
  created() {
    this.getCursos();
  },
  methods: {
    ...mapActions("curso", ["getCursos"])
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
}

h1{
  color: var(--color-text-pink);
}
</style>