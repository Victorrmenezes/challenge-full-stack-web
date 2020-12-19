<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <div router to='/home'>
        <v-img
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="100"
          @click="inicio"
        />
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <v-row>

        <div class="leftcont">
          <h3>Módulo Acadêmico</h3>
          <hr>
          <router-link to="/lista" >Alunos</router-link>
        </div>
        
        <div class="rightcont">
          <router-view/>
        </div>

      </v-row>
    </v-main>
  </v-app>
</template>

<script>

import router from './router/index'

export default {
  name: 'App',
  

  data: () => ({

  }),

  methods:{
    inicio:function(){
      router.push('/')
    }
  }
};
</script>

<style scoped>
  .leftcont{
    width: 25%;
    height: 100%;
    background-color:lightgray;
    padding: 1%;
    margin:2%;
    text-align: center;
    border-radius: 2%;
    
  }
  .rightcont{
    width: 70%;
    padding: 1%;
    text-align: center;
  }
  
  hr{
    margin: 5px;
  }
</style>
