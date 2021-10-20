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
        },
        DELETE_CURSO(state, id){
            index = state.cursos.findIndex(curso =>{
                curso.id == id
                state.cursos.splice(index, 1)
            })
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
        deleteCursoById(context, cursoId) {
            return serviceApi.deleteCursoById(cursoId).then(() =>{
                /* confirm("Certeza que deseja excluir o curso?") */
                context.commit('DELETE_CURSO')
            })
        }
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