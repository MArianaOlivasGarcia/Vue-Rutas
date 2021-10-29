<template>
    <h1>Pokemon: <span># {{ pokemonid }}</span></h1>

    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>

</template>

<script>

    export default {
        props: {
            pokemonid: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                // pokemonid: null
                // pokemonid: this.$route.params.pokemonid
                pokemon: null
            }
        },

        created() {
            // const { pokemonid } = this.$route.params
            // this.pokemonid = pokemonid;
            // console.log(this.pokemonid)

            this.getPokemon()
        },
        methods: {
            async getPokemon(){

                try {
                    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.pokemonid }`)
                        .then( r => r.json())
                    this.pokemon = pokemon;
                } catch ( err ) {
                    this.$router.push('/')
                    console.log('No hay nada que hacer aqui')
                }
                
            }
        },
        watch: {
            pokemonid(){
                this.getPokemon()
            }
        }

    }

</script>

<style scoped>

</style>