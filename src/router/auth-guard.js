

const isAuthenticaredGuard = async ( to, from, next  ) => {
 
    return new Promise( () => {

        const random = Math.random() * 100

        if ( random > 50 ) {
            console.log('Esta autenticado')
            next()
        } else {
            console.log('Bloqueado por el isAuthenticaredGuard')
            next({name: 'pokemon-home'})
        }

    })


}


export default isAuthenticaredGuard;