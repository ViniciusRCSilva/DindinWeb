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
        },
        DELETE_AULA(state, id){
            index = state.aulas.findIndex(aula =>{
                aula.id == id
                state.aulas.splice(index, 1)
            })
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
        },
        deleteAulaById(context, aulaId) {
            return serviceApi.deleteAulaById(aulaId).then(() =>{
                /* confirm("Certeza que deseja excluir o curso?") */
                context.commit('DELETE_AULA')
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