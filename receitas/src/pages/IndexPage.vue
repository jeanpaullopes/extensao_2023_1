<template>
  <q-page class="flex ">
    Ingredientes:
    <ul>
      <li v-for="ing in ingredientes" v-bind:key="ing.nome">{{ing.nome}}</li>
    </ul>
    <div>
      <input v-model="ingredienteInput"/><button @click="incluirIngrediente">incluir</button>
    </div>
    Receitas:
    <card-receita v-for="rec in receitas" v-bind:key="rec.id" :receita="rec"/>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import servicos from 'src/services/servicos'

import CardReceita from '../components/CardReceita.vue'

export default defineComponent({
  components: { CardReceita },
  name: 'IndexPage',
  data(){
    return {
      ingredienteInput: '',
      ingredientes: Array,
      receitas: Array
    }
  },
  created() {
    /*
    apiReceitas.get("ingredientes").then((response)=>{
      console.debug("depois do retorno da API")
      this.ingredientes = response.data
    })
    */
    servicos.getAllIngredientes((dados) => {this.ingredientes = dados})
    servicos.getAllReceitas((dados) => {this.receitas = dados})
  },
  methods:{
    incluirIngrediente() {
      servicos.postIngrediente( { nome: this.ingredienteInput},
                                (dado) => {this.ingredientes.push(dado)} )
      //servicos.getAllIngredientes((dados) => {this.ingredientes = dados})
      this.ingredienteInput = ''
    }
  }
})


</script>
<style>

</style>
