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
          router
          to='/home'
        />
        </div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      
      <div class="leftcont">
        <h3>Módulo Acadêmico</h3>
        <hr>
         <router-link to="/lista" >Alunos</router-link>
      </div>
      
      <div class="rightcont">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .leftcont{
    float: left;
    width: 30%;
    height: 100%;
    background-color:lightgray;
    padding: 1%;
    text-align: center;
  }
  .rightcont{
    float: right;
    width: 70%;
    padding: 1%;
    text-align: center;
  }
  
  hr{
    margin: 5px;
  }
</style>
