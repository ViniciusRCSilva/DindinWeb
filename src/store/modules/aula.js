import serviceApi from "../../service/aula";

export default {
    namespaced: true,
    state: {
        aulas: []
    },
    mutations: {
        SET_AULAS(state, payload) {
            state.aulas = payload;
        },
        SET_AULAS_CURSO(state, payload) {
            state.aulas = payload;
        }

    },
    actions: {
        getAulas(context) {
            return serviceApi.getAulas().then(res => {
                context.commit("SET_AULAS", res.data);
            })
        },
        getAulasByCursoId(context, cursoId) {
            return serviceApi.getAulasByCursoId(cursoId).then(res => {
                context.commit("SET_AULAS_CURSO", res.data);
            })
        }
    },
    getters: {
        listAulas(state) {
            return state.aulas;
        },
        listAulasCurso(state) {
            return state.aulas;
        }
    }
}