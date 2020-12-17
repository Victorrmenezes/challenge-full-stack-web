<template>
  <div id="tabela">
      <h3>
        Alunos cadastrados
      </h3>
      <hr>
    <v-row class="titulo">  
        <v-autocomplete
          v-model="pesquisado"
          :items="alunos"
          label="Pesquisa"
          clearable
        ></v-autocomplete>
      
      <div class="bcad">
        <v-btn router to='/cadastro'>
          Cadastrar novo aluno
        </v-btn>  
      </div>
    </v-row>
    <v-data-table
    :headers="headers"
    :items="alunos"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
      return {
        headers: [
          {
            text: 'Nome',
            align: 'start',
            value: 'text',
          },
          { text: 'Registro Acadêmico', value: 'ra' },
          { text: 'CPF', value: 'cpf' },
        ],
        alunos: [
          {
            text: 'João Victor Rodrigues Menezes',
            ra: "04105055",
            cpf: "03205806360",
          },
          {
            text: 'Carolina Rodrigues Menezes',
            ra: "07102934",
            cpf: "0205304350",
          },
          {
            text: 'Milena Guimarães de Oliveira Cartaxo',
            ra: "08303950",
            cpf: "12348912391",
          },
        ],
      }
    },
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