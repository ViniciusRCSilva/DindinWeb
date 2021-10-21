<template>
  <div>
    <div v-for="aula in listAulas" :key="aula.index">
        <div id="videoArea">
          <div id="allVideoInf">
            <a target="_blank" :href="aula.aulaLink"><img src="@/assets/video.svg" alt="video" id="video"></a>
            <div id="videoDescription">
                <h1>{{ aula.aulaTitulo }}</h1>
                <p>{{ aula.aulaDescricao }}</p>
            </div>
          </div>

          <div id="line"></div>
        </div>
    </div>
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
  h1{
    font-size: 25px;
    color: var(--color-text-pink);
  }

  #videoArea{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }

  #allVideoInf{
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }

  #video{
    width: 300px;
  }

  #videoDescription{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  #line{
    background-color: var(--color-line);
    height: 2px;
    width: 100%;
    border-radius: 5px;
  }
</style>