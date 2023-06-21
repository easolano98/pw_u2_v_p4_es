<template>
  <header>
    <h1 style="color: darkgoldenrod"><strong>Calculadora</strong></h1>
  </header>
  <nav></nav>
  <section>
    <div class="container">
      <div id="myAplicacion3" class="calculadora">
        <!-- Resultado -->
        <div class="pantalla">
          <label id="txtResultado">{{ labelResultado }}</label>
          <label id="labelResultado"></label>
        </div>

        <!-- Numeros -->
        <button v-on:click="leerNumero(1)">1</button>
        <button v-on:click="leerNumero(2)">2</button>
        <button v-on:click="leerNumero(3)">3</button>
        <button v-on:click="operar('+')">+</button>

        <button v-on:click="leerNumero(4)">4</button>
        <button v-on:click="leerNumero(5)">5</button>
        <button v-on:click="leerNumero(6)">6</button>
        <button v-on:click="operar('-')">-</button>

        <button v-on:click="leerNumero(7)">7</button>
        <button v-on:click="leerNumero(8)">8</button>
        <button v-on:click="leerNumero(9)">9</button>
        <button v-on:click="operar('/')">/</button>

        <button v-on:click="leerNumero(0)" class="zero">0</button>
        <button v-on:click="operar('=')">=</button>
        <button v-on:click="operar('*')">x</button>
      </div>
    </div>
  </section>
  <footer></footer>
</template>

<script>
export default {
  name: "Calculadora",
  data() {
    return {
      labelResultado: "",
      numero1: 0,
      numero2: 0,
      operacion: "",
      bool: false
    };
  },

  methods: {
    leerNumero(valor) {
      console.log(valor);
      if (this.bool) {
        this.labelResultado = "" + valor;
        this.bool = false;
        this.numero1 = 0;
      } else {
        this.labelResultado = this.labelResultado + valor;
      }
    },

    operar(op) {
      if (this.numero1 == 0) {
        this.numero1= parseInt(this.labelResultado);
        this.labelResultado = "";
      } else {
        this.numero2 = parseInt(this.labelResultado);
        this.labelResultado = "";
      }
      if (op == "=") {
        console.log(this.calcular);
        this.labelResultado = "" + this.calcular;
        this.bool = true;
      } else {
        this.operacion = op;
      }
    },
  },
  computed: {
    calcular() {
     
      console.log("alo");

      switch (this.operacion) {
        case "+":
          return this.numero1 + this.numero2;
        case "-":
          return this.numero1 - this.numero2;
        case "*":
          return this.numero1 * this.numero2;
        case "/":
          return this.numero1 / this.numero2;
        default:
          return 0;
      }
    },
  },
};
</script>


<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculadora {
  background-color: rgb(80, 3, 87);
  padding: 20px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(4, 55px);
  /*grid-template-rows: repeat(3, 75px); sirve para movernos respecto a filas*/
  box-shadow: 15px 15px 20px 5px hsla(0, 0%, 0%, 75%);
}

.zero {
  grid-column: span 2;
}

.pantalla {
  height: 55px;
  margin: 5px;
  background: rgb(218, 240, 178);
  border: 5px black inset;
  grid-column: span 4;
  font-size: 25px;
}
.calculadora button {
  background-color: rgb(116, 12, 214);
  border-radius: 20px;
  color: white;
  font-family: "Times New Roman", Times, serif;
  margin: 5px;
  font-size: 25px;
  box-shadow: 2px 2px 20px 2px hsla(0, 96%, 30%, 0.75);
}

.calculadora button:hover {
  background-color: rgb(213, 160, 235);
}
</style>