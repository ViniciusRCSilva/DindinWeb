import serviceApi from "../../service/curso";

export default {
    namespaced: true,
    state: {
        cursos: [],
        curso: []
    },
    mutations: {
        SET_CURSOS(state, payload) {
            state.cursos = payload;
        },
        SET_CURSO(state, payload) {
            state.curso = payload;
        }

    },
    actions: {
        getCursos(context) {
            return serviceApi.getCursos().then(res => {
                context.commit("SET_CURSOS", res.data);
            })
        },
        getCursoById(context, cursoId) {
            return serviceApi.getCursoById(cursoId).then(res => {
                context.commit('SET_CURSO', res.data)
            })
        },
    },
    getters: {
        listCursos(state) {
            return state.cursos;
        },
        listCurso(state) {
            return state.curso;
        }
    }
}