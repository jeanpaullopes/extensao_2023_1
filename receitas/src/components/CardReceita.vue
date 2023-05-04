
<template>
  <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">{{receita.nome}}</div>
        <div class="text-subtitle2">tempo de preparo: {{ receita.tempoPreparo }}
          <q-icon
            v-for="i in receita.dificuldade"
            :key="i"
            size="xs"
            color="red"
            name="local_dining"
          />
        </div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        <q-scroll-area style="height: 200px; max-width: 300px;">
          Ingredientes:
          <ul>
            <li v-for="ing in receita.ingredientes" v-bind:key="ing.id">{{ing.nome}}</li>
          </ul>
          Modo Preparo:
          <ol>
            <li v-for="md in receita.modo" v-bind:key="md">{{md}}</li>
          </ol>
        </q-scroll-area>
      </q-card-section>
    </q-card>

</template>

<script>
export default {
  name: 'CardReceita',
  props:{
    receita: Object
  }
  }

</script>

<style>
 .my-card {
  max-height: 30vh;;
 }
</style>
