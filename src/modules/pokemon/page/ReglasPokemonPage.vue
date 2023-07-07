<template>
  <img src="https://cdn.dribbble.com/users/985548/screenshots/3419640/gastly.gif" alt="no se puede mostrar la imagen">
  <fieldset>
    <legend>Reglas</legend>
    <div>
      El jugador tiene 3 intentos donde:
      <ul>
        <li>
            Si adivina en el primer intento tiene una puntuacion de 5 ptos
        </li>
        <li>
            Si adivina al segundo intento tiene una puntuacion de 2 ptos
        </li>
        <li>
            Si adivina al tercer intento tiene una puntuacion de 1 ptos
        </li>
        <li>
            Si no adivina despues de los 3 intentos pierde
        </li>
        <li>
           Puedes intentarlo de nuevo
        </li>
      </ul>
    </div>
  </fieldset>
</template>

<script >

export default {

}
</script>

<style scoped >
legend{
    font-weight: bold;
    color: black;
    
}
div{
    color: black;
}
fieldset{
    margin-right: 400px;
    margin-left: 400px;
    border: 2px solid black;
}

</style>