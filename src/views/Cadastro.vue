<template>
<div class="cadastro">
<div id="titulo">
  <h3>Tela de Cadastro</h3>
</div>
<hr>
  <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="nomeField"
              :rules="nomeRules"
              label="Nome completo"
              required
            ></v-text-field>
          
            <v-text-field
              v-model="cpfField"
              :rules="cpfRules"
              label="CPF (somente números)"
              required
            ></v-text-field>
        
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
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
             <v-btn class="button" @click="cancelar" router to='/lista'>
               Cancelar
             </v-btn>
             
             <v-btn class="button" @click="cadastrar">
               Cadastrar
             </v-btn>
           </v-row>

        </v-row>
      </v-container>
  </v-form>

</div>
</template>

<script>
export default {

  data: () => ({
      valid: false,

      //Campos de registro e suas regras
      nomeField: '',
      cpfField: '',
      email: '',
      raField:'',
      nomeRules: [
        v => !!v || 'O campo nome deve ser preenchido',
      ],
      cpfRules: [
        v => !!v || 'O campo CPF deve ser preenchido',
        v => v.lenght != 11 || 'CPF invalido'
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
    cadastrar: function(){
      if(this.nomeField=="", this.cpfField=="",this.email=="",this.raField==""){
        console.log("Campos não preenchidos")
      }else{
        this.nomeField="";
        this.cpfField="";
        this.raField="";
        this.email="";
      }
    },
    cancelar: function(){
      this.nomeField="";
      this.cpfField="";
      this.raField="";
    }
  }


}
  
</script>

<style scoped>

/*Estilos tipo ID */
#titulo{
  /*padding: 8px;*/
  text-align: center;
  width: 100%;
}
/*Estilos tipo class */
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