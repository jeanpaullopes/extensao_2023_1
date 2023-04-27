<template>
  <q-layout view="hHr lpR fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" behavior="desktop" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <button @click="add">+</button>
      <input v-model="arrContatos[0].nome" />
      <div v-for="c in arrContatos" v-bind:key="c.fone">
        <card-contato :contato="c"/>
      </div>
          <!--
      <card-contato :contato="{nome: 'Jean',fone: '9999999',email: 'jean@aol.com'}"/>
      <card-contato :contato="{nome: 'Jeanwerwer',fone: '99wrw99999',email: 'jeawerwrn@aol.com'}"/>



        <router-view />
      -->
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import CardContato from '../components/CardContato.vue'

export default {
  components: { CardContato },
  methods:{
    add: function(){this.arrContatos.push({nome:"Recruta", sobrenome:"Madagasgar", fone:"00000", email:"recruta@penguins.com"})}
  },
  data() {
    return {
      arrContatos: [
{
    nome: "Andrinel Rodriguez",
    sobrenome: "Rodrigez",
    fone: "11 123155",
    email: "andrinel@gmail.com"
}]
    }
  },
  setup () {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
