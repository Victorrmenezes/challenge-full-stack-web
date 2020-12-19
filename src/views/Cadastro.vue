<template>
<div class="cadastro">
<div id="titulo">
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
                    <v-btn color="blue darken-1" text @click="cancelarDialog">Ok</v-btn>
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
               Cadastro
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
      dialog:false,
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
        // AQUI VAI A FUNÇÃO PARA SALVAR OS DADOS NA BASE DE DADOS
        this.dialog=true;
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
    },
    cancelarDialog: function(){
      this.dialog=false;
    }
  }


}
  
</script>

<style scoped>

/*Estilos tipo ID */
#titulo{
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