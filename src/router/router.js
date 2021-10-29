
import { createRouter, createWebHashHistory } from 'vue-router';
import isAuthenticaredGuard from './auth-guard';

const routes = [

    {
      path: '/',
      redirect: '/pokemon'
    },
    /* POKEMON */

    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import(/* webpackChunkName: "PokemonLayout" */'@/modules/pokemon/layouts/PokemonLayout'),
      children: [
        { path: 'home', 
          name: 'pokemon-home',
          component: () => import(/* webpackChunkName: "ListPage" */'@/modules/pokemon/pages/ListPage')
        },
        { path: 'about', 
          name: 'pokemon-about',
          component: () => import(/* webpackChunkName: "AboutPage" */'@/modules/pokemon/pages/AboutPage')
        },
        { path: 'pokemon/:pokemonid', 
          name: 'pokemon-id',
          component: () => import(/* webpackChunkName: "PokemonPage" */'@/modules/pokemon/pages/PokemonPage'),
          props: ( route ) => {
            /* Lo que retorno seran las props del componente PokemonPage */
            const pokemonid = Number( route.params.pokemonid )
            return isNaN( pokemonid ) ? { pokemonid: 1 } : { pokemonid }
          }
        },
        {
          path: '',
          redirect: { name: 'pokemon-about' }
        },
      ]
    
    },


    /* DBZ */

    {
      path: '/dbz',
      name: 'dbz',
      beforeEnter: [ isAuthenticaredGuard ],
      component: () => import('@/modules/dbz/layouts/DragonBallLayout'),
      children: [
        { path: 'characters', 
          name: 'dbz-characters',
          component: () => import('@/modules/dbz/pages/Characters')
        },
        { path: 'about', 
          name: 'dbz-about',
          component: () => import('@/modules/dbz/pages/About')
        },
        {
          path: '',
          redirect: { name: 'dbz-characters' }
        },
      ]
    
    },



    { path: '/:pathMatch(.*)*', 
      component: () => import(/* webpackChunkName: "NotPageFound" */'@/modules/shared/pages/NotPageFound')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


// GUARD GLOBAL - SÍNCRONO
// router.beforeEach( (to, from, next ) => {

//   /* Si el valor es mayor a 50 dejarlo pasar */
//   const random = Math.random() * 100;

//   if ( random > 50 ) {
//     console.log(random, 'Autenticado')
//     next()
//   } else {
//     console.log(random, 'Bloqueado')
//     next({ name: 'pokemon-home'})
//   }
//  next();
// });


/* const canAccess = () => {
  return new Promise( resolve => {

    const random = Math.random() * 100;

    if ( random > 50 ) {
      console.log(random, 'Autenticado')
      resolve(true);
    } else {
      console.log(random, 'Bloqueado')
      resolve(false);
    }
  })
} */
/* 

router.beforeEach( async (to, from, next) => {

  const authorized = await canAccess();

  authorized 
    ? next()
    : next({ name: 'pokemon-home'})

}) */


export default router;