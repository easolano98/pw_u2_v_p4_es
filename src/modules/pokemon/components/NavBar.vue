<template>
  <div>
    <router-link to="/">Bienvenido</router-link>|
    <router-link to="/reglas">Reglas</router-link>|
    <router-link to="/pokemon">Juguemos</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div{
    background-color: rgb(233, 160, 4);
    font-size: 25px;
    margin-left: 350px;
    margin-right: 350px;
}

a{  
    color: white;
    text-decoration: none;
    padding-right: 35px;
    padding-left: 35px;
    margin-left: 0;
    
}

a:visited{
    color: white;
}

a:hover{
    background-color: rgb(161, 15, 15);
    color: white;
}
</style>