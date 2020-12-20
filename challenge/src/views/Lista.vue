<template>
  <div id="table">
      <h3>
        Alunos cadastrados
      </h3>
      <hr>
    <v-row class="title">  
        <v-text-field
        color="black"
        rounded
        background-color="white"
        v-model="search"
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
    :items="items"
    :search="search"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title class="headline">Realmente deseja deletar este item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="cancel">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="confirm">Confirmar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
        </v-dialog>
    </template>
   <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="edit(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
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
  data () {
      return {
        dialog:false,

        search:'',
        itemIndex:0,
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
        items: [ ],
      }
    },

    

    created:function(){
      axios.get('http://localhost:45678/cadastro').then(res=>{
            var list = res.data;
            list.forEach(item => {
                this.items.push(item);
            });
          }).catch(err=>{
            console.log(err);
          })
    },

    methods:{
        edit:function(item){
          router.push('/edicao/'+item.ra)
        },
        deleteItem:function(item){
          this.dialog=true;
          
          this.itemIndex= item.ra;
        },
        cancel:function(){
          this.dialog=false
        },
        confirm:function(){
          var id = this.itemIndex;

          axios.delete('http://localhost:45678/cadastro/'+id).then(()=>{
            this.items=this.items.filter(i => i.ra != id);
          }).catch(err=>{
            console.log(err);
          })
          this.itemIndex=0;
          this.dialog=false;
        }
    }

}
</script>

<style scoped>
#table{
  padding: 5px;
  padding-bottom: 10px;
  background-color:lightgray;
  border-radius: 2%;
}
.title{
  align-items: center;
  justify-content: center;
  margin: 5px;
}
.bcad{
  margin-left: 10%;
}
</style>