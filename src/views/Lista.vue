<template>
  <div id="tabela">
      <h3>
        Alunos cadastrados
      </h3>
      <hr>
    <v-row class="titulo">  
        <v-text-field
        color="black"
        rounded
        background-color="white"
        v-model="pesquisado"
        append-icon="mdi-magnify"
        label="Pesquise aqui"
        single-line
        hide-details
      ></v-text-field>
      
      <div class="bcad">
        <v-btn router to='/cadastro'>
          Cadastrar novo aluno
        </v-btn>  
      </div>
    </v-row>
    <v-data-table
    :headers="headers"
    :items="alunos"
    :search="pesquisado"
    class="elevation-1"
  >
  </v-data-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
      return {
        pesquisado:'',
        headers: [
          {
            text: 'Nome',
            align: 'start',
            value: 'name',
          },
          { text: 'Registro Acadêmico', value: 'ra' },
          { text: 'CPF', value: 'cpf' },
        ],
        alunos: [
          {
            name: 'João Victor Rodrigues Menezes',
            ra: "04105055",
            cpf: "03205806360",
          },
          {
            name: 'Carolina Rodrigues Menezes',
            ra: "07102934",
            cpf: "0205304350",
          },
          {
            name: 'Milena Guimarães de Oliveira Cartaxo',
            ra: "08303950",
            cpf: "12348912391",
          },
        ],
      }
    },


    methods:{
      initialize: function(){
        this.alunos=[
          
        ]
      }
    }

}
</script>

<style scoped>
#tabela{
  padding: 5px;
  padding-bottom: 10px;
  background-color:lightgray;
  border-radius: 2%;
}
.titulo{
  align-items: center;
  justify-content: center;
  margin: 5px;
}
.bcad{
  margin-left: 10%;
}
</style>