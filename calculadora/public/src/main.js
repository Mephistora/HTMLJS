import { sumar } from "/src/casosDeUso/suma.js";
import { resta } from "./casosDeUso/resta";
import { multiplicar } from "./casosDeUso/multiplicacion";
import { dividir } from "./casosDeUso/division";
import { valor } from "./casosDeUso/valor";

let valor1 = 0;
let valor2 = 0;

const teclado = document.getElementById("tResult");

const boton1 = document.getElementById("btn_1");

boton1.addEventListener("click",(evento)=>{
    valor(1);
    teclado.value = `${teclado.value} ${valor}`;
})

const boton2 = document.getElementById("btn_2");

boton2.addEventListener("click",(evento)=>{
    valor(2);
    teclado.value = `${teclado.value} ${valor}`;
})

const boton3 = document.getElementById("btn_3");

boton3.addEventListener("click",(evento)=>{
     valor(3);
    teclado.value = `${teclado.value} ${valor}`;
})

const boton4 = document.getElementById("btn_4")

boton4.addEventListener("click",(evento)=>{
     valor(4);
    teclado.value = `${teclado.value} ${valor}`;
})

const boton5 = document.getElementById("btn_5");

boton5.addEventListener("click",(evento)=>{
     valor(5);
    teclado.value = `${teclado.value} ${valor}`;
})

const boton6 = document.getElementById("btn_6");

boton6.addEventListener(("click"),(evento)=>{
     valor(6);
    teclado.value = `${teclado.value} ${valor}`;
})

const boton7 = document.getElementById("btn_7");

boton7.addEventListener(("click"),(evento)=>{
     valor(7);
    teclado.value = `${teclado.value} ${valor}`;
})

const boton8 = document.getElementById("btn_8");

boton8.addEventListener(("click"),(evento)=>{
     valor(8);
    teclado.value = `${teclado.value} ${valor}`;
})

const boton9 = document.getElementById("btn_9");

boton9.addEventListener(("click"),(evento)=>{
     valor(9);
    teclado.value = `${teclado.value} ${valor}`;
})

const boton0 = document.getElementById("btn_0")

boton0.addEventListener(("click"),(evento)=>{
    valor(0);
    teclado.value = `${teclado.value} ${valor}`;
})

const botonMas = document.getElementById("btn_sum");

botonMas.addEventListener(("click"),(evento)=>{
    const resultado = sumar(valor1,valor2);
})

const botonMenos = document.getElementById("btn_rest");

botonMenos.addEventListener(("click"),(evento)=>{
    const resultado = resta(valor1,valor2);
})

const botonMultiplicacion = document.getElementById("btn_pun");

botonMultiplicacion.addEventListener(("click"),(evento)=>{
    const resultado = multiplicar(valor1,valor2);
})

const botonDivision = document.getElementById("btn_div");

botonDivision.addEventListener(("click"),(evento)=>{
    const resultado = dividir(valor1, valor2);
    
})

const botonIgual = document.getElementById("btn_ig")

botonIgual.addEventListener(("click"),(evento)=>{
    const resultado = '';
    return resultado;
})

const botonClean = document.getElementById("btn_c")

botonClean.addEventListener(("click"),(evento)=>{

})