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
                  <v-card-title class="headline">Dados editados com sucesso</v-card-title>
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

            <h3>CPF: {{cpf}} </h3>
          
            <h3>Registro Acadêmico: {{ra}} </h3>
            

          </v-col>

           <v-row class="rightcontainer">
             <v-btn class="button" router to='/lista'>
               Cancelar
             </v-btn>
             
             <v-btn class="button" @click="edit">
               Editar
             </v-btn>
           </v-row>

        </v-row>
      </v-container>
  </v-form>

</div>
</template>

<script>
//View that can update the editable data
import axios from 'axios';

export default {

  data: () => ({
      //Booleans
      valid: false,
      dialog:false,

      //Variables
      nameField: '',
      emailField: '',
      cpf:'',
      ra:'',
      
      //Rules
      nameRules: [
        v => !!v || 'O campo nome deve ser preenchido',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ]
    }),
    
    //Calls the data from the specific item
    created:function(){
      var id = this.$route.params.ra;
      
      axios.get('http://localhost:45678/cadastro').then(res=>{
            var list = res.data;
            list.forEach(item => {
              if(item.ra==id){
                this.cpf=item.cpf;
                this.ra=item.ra;
                this.nameField=item.name;
                this.emailField=item.email;
              }
            });
          }).catch(err=>{
            console.log(err);
          })
    },

    methods:{
    //Update the data of the item
    edit: function(){
      if(this.nameField=="", this.cpfField=="",this.email=="",this.raField==""){
        console.log("Campos não preenchidos")
      }else{
        axios.put('http://localhost:45678/cadastro/'+this.ra,{
          name: this.nameField,
          ra: this.raField,
          email: this.emailField,
          cpf: this.cpfField,
          });
        this.dialog=true;
      }
    },
    //Goes to the List View without update data
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
/*Style type components*/
h3{
  padding: 5px;
}

</style>