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
        <v-btn router to="/cadastro" >
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
    <template v-slot:top>
      <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title class="headline">Realmente deseja deletar este item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="cancelar">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="confirmar">Confirmar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
        </v-dialog>
    </template>
   <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editar(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deletar(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
  </div>
</template>

<script>

import router from '../router';
import axios from 'axios';


export default {
  name: 'Home',
  data () {
      return {
        pesquisado:'',
        dialog:false,
        headers: [
          {
            text: 'Nome',
            align: 'start',
            value: 'name',
          },
          { text: 'Registro Acadêmico', value: 'ra' },
          { text: 'Email', value: 'email' },
          { text: 'CPF', value: 'cpf' },
          { text: 'Modificações', value: 'actions',sortable:false },
        ],
        alunos: [ ],
      }
    },

    

    created:function(){
      axios.get('http://localhost:45678/cadastro').then(res=>{
            var lista = res.data;
            lista.forEach(aluno => {
                this.alunos.push(aluno);
            });
          }).catch(err=>{
            console.log(err);
          })
    },

    methods:{
        editar:function(item){
          router.push('/cadastro/'+item.ra)
        },
        deletar:function(){
          this.dialog=true
        },
        cancelar:function(){
          this.dialog=false
        },
        confirmar:function(){
          axios.get('http://localhost:45678/cadastro').then(res=>{
            console.log(res);
          }).catch(err=>{
            console.log(err);
          })
          this.dialog=false;
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