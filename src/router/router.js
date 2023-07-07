import {createRouter, createWebHashHistory} from "vue-router"

const routes=[{path:"/", component: ()=> import('../modules/pokemon/page/BienvenidoPage.vue')},
{path:"/reglas", component: ()=> import('../modules/pokemon/page/ReglasPokemonPage.vue')},
{path:"/pokemon", component: ()=> import('../modules/pokemon/page/PokemonPage.vue')}];

const router= createRouter({
    history: createWebHashHistory(),
    routes
});

export default router
    
