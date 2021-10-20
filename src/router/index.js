import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cursos',
    component: () => import('../views/Cursos.vue')
  },
  {
    path: '/aulas',
    name: 'Aulas',
    component: function () {
      return import('../views/Aulas.vue')
    }
  },
  {
    path: '/Cursos/Detalhes/:cursoId',
    name: 'Curso',
    component: () => import('../views/Curso.vue')
  },
  {
    path: '/painelAdministrativo',
    name: 'Painel',
    component: () => import('../views/Painel.vue')
  },
  {
    path: '/adicionarCursos',
    name: 'Adicionar',
    component: () => import('../views/Adicionar.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
