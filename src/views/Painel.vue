<template>
  <div class="home">
    <div class="content">
      <h1>Painel Administrativo</h1>
      <p>Educação financeira é tudo de bom</p>
      <CardPainel class="cardPainel"/>
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
  width: 12px;  /* width of the entire scrollbar */
}

.content::-webkit-scrollbar-track {
  background: var(--color-background); /* color of the tracking area */
  border-left-width: 30px;
}

.content::-webkit-scrollbar-thumb {
  background-color: var(--color-background-nav);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 1px solid var(--color-background-nav);  /* creates padding around scroll thumb */
  
}

h1{
  color: var(--color-text-pink);
}

.cardPainel{
  margin-right: 20px;
}
</style>