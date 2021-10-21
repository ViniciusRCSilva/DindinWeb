import api from "./api";

export default {
    getAulas() {
        return api.get('Aulas').then(res => {
            return res
        }).catch(error => {
            return error
        })
    },
    getAulaById(aulaId) {
        return api.get(`Aulas/${aulaId}`).then(res => {
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
    },
    deleteAulaById(aulaId){
        return api.delete(`Aulas/${aulaId}`).then(res => {
            return res
        }).catch(error => {
            return error
        })
    }
}