<template>
<div class="cadastro">
<div id="title">
  <h3>Tela de Cadastro</h3>
</div>
<hr>
  <v-form v-model="valid">
      <v-container>
          <v-dialog v-model="dialog" max-width="500px">
                <v-card>
                  <v-card-title class="headline">Aluno Cadastrado com sucesso</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="cancelDialog">Ok</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
            </v-dialog>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="nameField"
              :rules="nameRules"
              label="Nome completo"
              required
            ></v-text-field> 
        
            <v-text-field
              v-model="emailField"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="cpfField"
              :rules="cpfRules"
              label="CPF (somente números)"
              required
            ></v-text-field>
          
            <v-text-field
              v-model="raField"
              :rules="raRules"
              label="Registro Acadêmico"
              required
            ></v-text-field>

          </v-col>

           <v-row class="rightcontainer">
             <v-btn class="button" router to='/lista'>
               Cancelar
             </v-btn>
             
             <v-btn class="button" @click="save">
               Cadastrar
             </v-btn>
           </v-row>

        </v-row>
      </v-container>
  </v-form>

</div>
</template>

<script>
import axios from 'axios';

export default {

  data: () => ({
      //Booleans
      valid: false,
      dialog:false,

      //Variables
      nameField: '',
      cpfField: '',
      emailField: '',
      raField:'',
      
      //Rules
      nameRules: [
        v => !!v || 'O campo nome deve ser preenchido',
      ],
      cpfRules: [
        v => !!v || 'O campo CPF deve ser preenchido',
        v => v.length == 11 || 'O CPF deve ser válido',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      raRules:[
        v => !!v || 'O campo Registro acadêmico deve ser preenchido',
      ]
    }),
    

    methods:{
      //Creates a new item on the database
      save: function(){
        if(this.nameField=="" || this.cpfField.length!=11 || this.email=="" ||this.raField==""){
          console.log("Campos não preenchidos corretamente")
        }else{
          axios.post('http://localhost:45678/cadastro',{
            name: this.nameField,
            ra: this.raField,
            email: this.emailField,
            cpf: this.cpfField,
            });
          this.dialog=true;
          this.nameField="";
          this.cpfField="";
          this.raField="";
          this.emailField="";
        }
      },
      //Closes the dialog of confirmation of saving
      cancelDialog: function(){
        this.dialog=false;
      }
  }


}
  
</script>

<style scoped>

/*Styles type ID */
#title{
  text-align: center;
  width: 100%;
}
/*Styles type class */
.cadastro{
  text-align: start;
  background-color: lightgray;
  border-radius: 2%;
  padding: 5px;
}
.button{
  margin: 2%;
}
.rightcontainer{
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 5%;
}

</style>