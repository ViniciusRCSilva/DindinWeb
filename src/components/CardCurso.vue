<template>
  <div>
    <div v-for="curso in listCursos" :key="curso.cursoId">

        <div id="curso">
            <img :src="curso.imagemCapa" alt="img" id="img">
            <div>
                <h1 id="cursoTitle">{{ curso.titulo }}</h1>
                <p id="cursoDesc">{{ curso.cursoDescricao }}</p>
                <button @click="openDetailCurso(curso.cursoId)">começar agora</button>
            </div>
        </div>

        <div id="line"></div>
    </div>
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
h1 {
  color: var(--color-text-pink);
}

button {
  cursor: pointer;
  border: none;
  color: var(--color-text-light);
  background-color: var(--color-background-nav);
  border-radius: 50px;
  padding: 5px 20px 5px;
  margin-top: 20px;
}

#curso {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
}

#line {
  background-color: var(--color-line);
  height: 2px;
  border-radius: 5px;
}

#cursoTitle {
  font-size: 20px;
}

#cursoDesc {
  font-size: 16px;
  margin-top: 20px;
}

#introduction {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 10%;
}

#img {
  width: 250px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
}
</style>