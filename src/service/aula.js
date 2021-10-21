import api from "./api";

export default {
    getAulas() {
        return api.get('Aulas').then(res => {
            return res
        }).catch(error => {
            return error
        })
    },
    getAulasByCursoId(cursoId) {
        return api.get(`AulasPorCurso/${cursoId}`).then(res => {
            return res
        }).catch(error => {
            return error
        })
    },
    postAula(conteudo){
        return api.post('Aulas', conteudo)
    }
}