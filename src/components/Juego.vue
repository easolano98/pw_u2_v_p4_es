<template>
  <h1>Juego YES/NO</h1>
  <h1>Puntuación: {{ contador }}</h1>
  <div class="contenedor">
    <p placeholder="respuesta 1" class="respuesta">
      {{ generar1.answer || "R1" }}
    </p>
    <p placeholder="respuesta 2" class="respuesta">
      {{ generar2.answer || "R2" }}
    </p>
  </div>
  <div class="contenedor_dos">
    <img
      :src="
        urlImagen ||
        'https://play-lh.googleusercontent.com/pj-qKgh9XH2Xm2Kr4C4K5tnk3BtwyOEGxZrtvhGxF3XtLLEOFqa5JQ_ahMfsKHR6rSg'
      "
      alt="no se puede "
    /><br />
    <button v-if="contador > 0 && contador < 6" v-on:click="puntaje()">
      Jugar
    </button>
    <button v-if="contador == 0 || contador == 6" v-on:click="reiniciar()">
      Reiniciar
    </button>
  </div>
  <fieldset>
    <legend>COMO SE JUEGA</legend>
    <div>
      El jugador tiene por defecto una puntuacion de 3. Cada vez que salgan en R1 y R2 la misma respuesta Yes/Yes ó No/No la puntuacion del jugador
      aumenta un punto y aparece el gif, si R1 y R2 son distintas la puntuacion se reduce en un punto y aparece una imagen de sigue participando. El 
      juego finaliza cuando el jugador alcance una puntuacion de 6 para ganar o de 0 para perder. BUENA SUERTE 
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      generar1: "",
      generar2: "",
      respuesta: "",
      urlImagen: "",
      contador: 3,
    };
  },
  methods: {
    async consumirApi() {
      const json = await fetch("https://yesno.wtf/api").then((r) => r.json());
      console.log(json.answer);

      return json;
    },

    async puntaje() {
      this.generar1 = await this.consumirApi();
      this.generar2 = await this.consumirApi();

      if (this.generar1.answer == this.generar2.answer) {
        this.contador += 1;
        if (this.contador == 6) {
          this.urlImagen =
            "https://cdn.memegenerator.es/imagenes/memes/full/22/63/22639467.jpg";
        } else {
          this.urlImagen = this.generar1.image;
        }
      } else {
        this.contador -= 1;
        if (this.contador == 0) {
          this.urlImagen =
            "https://www.muylinux.com/wp-content/uploads/2014/01/mljuegos0.png";
        } else {
          this.urlImagen =
            "https://cdn.memegenerator.es/imagenes/memes/full/2/65/2652663.jpg";
        }
      }
    },

    reiniciar() {
      this.contador = 3;
      this.urlImagen =
        "https://play-lh.googleusercontent.com/pj-qKgh9XH2Xm2Kr4C4K5tnk3BtwyOEGxZrtvhGxF3XtLLEOFqa5JQ_ahMfsKHR6rSg";
    },
  },
};
</script>

<style>
* {
  background-color: #fdf0d5;
}

.respuesta {
  background-color: #003049;
  display: inline-block;
  border: 3px solid black;
  color: white;
  padding: 5px;
  box-shadow: 3px 3px 3px 3px black;
  border-radius: 5px;
  margin: 5px;
  margin-right: 10px;
  margin-top: 0px;
  font-size: 50px;
}

img {
  width: 300px;
  height: 300px;
  margin: 15px;
  margin-bottom: 10px;
}

button {
  width: 300px;
  height: 45px;
  font-size: 25px;
  font-weight: bold;
  background-color: #003049;
  color: white;
}

button:hover {
  background-color: #780000;
}
.contenedor {
  display: block;
  padding: 20px;
  margin: 50px 500px 0px 500px;
  background-color: #669bbc;
  border: 1px solid black;
}
.contenedor_dos {
  background-color: #669bbc;
  display: block;
  padding: 20px;
  margin: 15px 500px 10px 500px;

  border: 1px solid black;
}
fieldset{
    margin: 20px 500px 0px 500px;
   
}
legend{
    font-weight: bold; 
}
</style>