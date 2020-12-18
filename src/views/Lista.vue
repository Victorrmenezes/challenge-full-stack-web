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
              <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
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

export default {
  name: 'Home',
  data () {
      return {
        pesquisado:'',
        dialog:false,
        editado:{name: 'João Victor Rodrigues ',ra: "04055",email:"victor@hotmail.com",cpf: "0320360",},
        headers: [
          {
            text: 'Nome',
            align: 'start',
            value: 'name',
          },
          { text: 'Registro Acadêmico', value: 'ra' },
          { text: 'Email', value: 'email' },
          { text: 'CPF', value: 'cpf' },
          { text: 'Modificações', value: 'actions' },
        ],
        alunos: [
          {
            name: 'João Victor Rodrigues Menezes',
            ra: "04105055",
            email:"victorrmenezes@hotmail.com",
            cpf: "03205806360",
          },
          {
            name: 'Carolina Rodrigues Menezes',
            ra: "07102934",
            email:"carolinarodrigues@hotmail.com",
            cpf: "0205304350",
          },
          {
            name: 'Milena Guimarães de Oliveira Cartaxo',
            ra: "08303950",
            email:"milenaguimaraes@hotmail.com",
            cpf: "12348912391",
          },
        ],
      }
    },

    

    created:function(){
      this.alunos.push(this.editado);
    },

    methods:{
        editar:function(item){
          console.log(item.cpf)
        },
        deletar:function(){
          this.dialog=true
          console.log(this.dialog)
        },
        cancelar:function(){
          this.dialog=false
          console.log(this.dialog)
        },
        confirmar:function(){
          this.dialog=false
          console.log(this.dialog)
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