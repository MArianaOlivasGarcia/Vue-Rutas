<template>
    <div>
        <!--
            <router-link :to="{ name: 'home' }">Pokemon List</router-link>
            <router-link :to="{ name: 'pokemon', params: { pokemonid: 80 } }">Pokemon</router-link>
            <router-link :to="{ name: 'about' }">About</router-link>
        -->
        <CustomLink 
            v-for="link in links"
            :key="link.to"
            :link="link"/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    data() {
        return {
            links: [
                { to: 'pokemon-home', name: 'Home' },
                { to: 'pokemon-id', name: 'Pokemon', id: 60 },
                { to: 'pokemon-about', name: 'Pokemon About' },

                { to: 'dbz-about', name: 'DBZ About' },
                { to: 'dbz-characters', name: 'DBZ Characters' },

                { to: 'https://google.com', name: 'Google' },
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent( () => import('./CustomLink'))
    }
}
</script>

<style scoped>

    div{
        padding: 0 30px;
    }

    div a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }

    a.router-link-exact-active {
        color: #42b983;
    }

</style>