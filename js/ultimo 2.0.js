let batchContainer;
let eficienciaContainer;


//creo las variables que capturan la cantidad de litros

const batch = document.querySelector(".batch");
batch.addEventListener("change", (e)=> {
    
    batchContainer = parseInt(e.target.value);
    if(isNaN(batchContainer)){
        batchContainer = 0;
    }
})


//creo las variables que capturan la eficiencia

const eficiencia = document.querySelector(".eficiencia");
eficiencia.addEventListener("change", (e)=>{
    eficienciaContainer = parseInt(e.target.value);
    if(isNaN(eficienciaContainer)){
        eficienciaContainer = 0;
    }
})

class Granos{
    constructor(nombre, extracto, color){
        this.nombre = nombre;
        this.extracto = extracto;
        this.color = color;
    }  
}

const fermentables = []; 

fermentables.push(new Granos ("pilsen", 37, 2));
fermentables.push(new Granos ("cara30", 35, 30));
fermentables.push(new Granos ("cara60", 34, 60));
fermentables.push(new Granos ("cara120", 33, 120));
fermentables.push(new Granos ("chocolate", 29, 400));


const select = document.querySelector(".select-container");
const extractoFermentables = document.querySelector(".extracto-container");
const srmFermentables = document.querySelector(".srm-container");
const kilosFermentables = document.querySelector(".kilos-container");
const selectFermentables = document.createElement("select");
selectFermentables.classList.add("listado-ferm", "mb-2");


//genero la opcion por default que aparece al cargar el browser

let optionDefault = document.createElement("option");
let optionTextoDefault = document.createTextNode("Seleccione un grano");
optionDefault.appendChild(optionTextoDefault);
selectFermentables.appendChild(optionDefault);


//introduzco las opciones que están en los objetos dentro del array fermentables

for(const fermentable of fermentables){
    const option = document.createElement("option");
    option.textContent = fermentable.nombre;
    selectFermentables.appendChild(option);  
}

select.appendChild(selectFermentables);


selectFermentables.addEventListener("change", (e) => {
    let idElementoSeleccionado = e.target.value;
    // console.log(idElementoSeleccionado);
    let elementoSeleccionado = fermentables.find(fermentable => fermentable.nombre == idElementoSeleccionado);
    if(elementoSeleccionado == undefined){
        extractoFermentables.value = "";
    } else {
        extractoFermentables.value = elementoSeleccionado.extracto;
    }
})

selectFermentables.addEventListener("change", (e) => {
    let idElementoSeleccionado = e.target.value;
    let elementoSeleccionado = fermentables.find(fermentable => fermentable.nombre == idElementoSeleccionado);
    if(elementoSeleccionado == undefined){
        srmFermentables.value = "";
    } else {
        srmFermentables.value = elementoSeleccionado.color;
    }
})


//creo las variables para contener los kilos que usaré de malta de la primera fila

// let kilosContainer;
// kilosFermentables.addEventListener("change", (e)=>{
//     kilosContainer = parseInt(e.target.value);
//     if(isNaN(kilosContainer)){
//         kilosContainer = 0;
//         console.log(kilosContainer);
//         // console.log(typeof kilosContainer);
//     }
// })

let lengthKilos = 1;

function mostrar (){
    const select = document.querySelector(".select-container");
    
    
    const extractoFermentablesAdicional = document.querySelector(".extracto-container-adicional");
    const extractoFermentablesAdicionalInput = document.createElement("input");
    extractoFermentablesAdicionalInput.classList.add("extracto-container", "text-center", "mb-2");
    extractoFermentablesAdicional.appendChild(extractoFermentablesAdicionalInput);
    
    
    
    const srmFermentablesAdicional = document.querySelector(".srm-container-adicional");
    const srmFermentablesAdicionalInput = document.createElement("input");
    srmFermentablesAdicionalInput.classList.add("srm-container", "text-center", "mb-2");
    srmFermentablesAdicional.appendChild(srmFermentablesAdicionalInput);



    const kilosFermentablesAdicional = document.querySelector(".kilos-container-adicional");
    const kilosFermentablesAdicionalInput = document.createElement("input");
    kilosFermentablesAdicionalInput.classList.add("kilos-container", "text-center", "mb-2", "kilos");
    kilosFermentablesAdicionalInput.setAttribute("id", `${lengthKilos+=1}`);
    kilosFermentablesAdicional.appendChild(kilosFermentablesAdicionalInput);
    

    const selectFermentables = document.createElement("select");
    selectFermentables.classList.add("listado-ferm");


    //genero la opcion por default que aparece al cargar el browser

    let optionDefault = document.createElement("option");
    let optionTextoDefault = document.createTextNode("Seleccione un grano");
    optionDefault.appendChild(optionTextoDefault);
    selectFermentables.appendChild(optionDefault);



    //introduzco las opciones que están en los objetos dentro del array fermentables

    for(const fermentable of fermentables){
        const option = document.createElement("option");
        option.textContent = fermentable.nombre;
        selectFermentables.appendChild(option);  
    }

    select.appendChild(selectFermentables);

    selectFermentables.addEventListener("change", (e) => {
        let idElementoSeleccionado = e.target.value;
        let elementoSeleccionado = fermentables.find(fermentable => fermentable.nombre == idElementoSeleccionado);
        if(elementoSeleccionado == undefined){
            extractoFermentablesAdicionalInput.value = "";
        } else {
            extractoFermentablesAdicionalInput.value = elementoSeleccionado.extracto;
        }
    })

    selectFermentables.addEventListener("change", (e) => {
        let idElementoSeleccionado = e.target.value;
        let elementoSeleccionado = fermentables.find(fermentable => fermentable.nombre == idElementoSeleccionado);
        if(elementoSeleccionado == undefined){
            srmFermentablesAdicionalInput.value = "";
        } else {
            srmFermentablesAdicionalInput.value = elementoSeleccionado.color;
        }
    })

    //genero las variables que contengan los valores de kilos de los inputs q se agregan al presionar "agregar"

    const arrayInputKilos = document.querySelectorAll(".kilos");
    arrayInputKilos.forEach(input => input.addEventListener("change", (e)=>{
        let existe =  arrayKilosTotal.some(kilos => kilos.idKilos === e.target.id);
        if(existe){
            arrayKilosTotal = arrayKilosTotal.map(kilos =>{
                if(kilos.idKilos === e.target.id){
                    return{
                        idKilos: e.target.id,
                        valor: parseInt(e.target.value),
                    }
                }else{
                    return kilos;
                }
            })
        }else{
            arrayKilosTotal.push({
                idKilos: e.target.id,
                valor: parseInt(e.target.value),
            })
        }
        console.log(arrayKilosTotal);
        calculoKilosTotal(arrayKilosTotal);

    }))

}

const boton = document.querySelector(".main-nueva__btn");
boton.addEventListener("click", mostrar);

let arrayKilosTotal = [];
kilosFermentables.addEventListener("change", (e)=>{
    let existe =  arrayKilosTotal.some(kilos => kilos.idKilos === e.target.id);
    if(existe){
        arrayKilosTotal = arrayKilosTotal.map(kilos =>{
            if(kilos.idKilos === e.target.id){
                return{
                    idKilos: e.target.id,
                    valor: parseInt(e.target.value),
                }
            }else{
                return kilos;
            }
        })
    }else{
        arrayKilosTotal.push({
            idKilos: e.target.id,
            valor: parseInt(e.target.value),
        })
    }
    console.log(arrayKilosTotal)
    calculoKilosTotal(arrayKilosTotal);
})



function calculoKilosTotal (arrayKilosTotal){
    let cantidadTotalKilos = 0;
    arrayKilosTotal.forEach(kilos => {
        cantidadTotalKilos = cantidadTotalKilos + kilos.valor;
    });
    console.log(cantidadTotalKilos);
    document.querySelector(".suma-kilos").value = cantidadTotalKilos;
}





/////---------------SECCION DE LUPULOS-----------------////



class Lupulo{
    constructor (nombre, AA){
        this.nombre = nombre;
        this.AA = AA;
    }    
    
}

let arrLupulo = [];


arrLupulo.push(new Lupulo("cascade", 0.08));
arrLupulo.push(new Lupulo("Kent goldings", 0.05));
arrLupulo.push(new Lupulo("Bravo", 0.12));
arrLupulo.push(new Lupulo("Ekuanot", 0.11));
arrLupulo.push(new Lupulo("Simcoe", 0.11));



const selectHops = document.querySelector(".select-container-lupulo");
const selectLupulos = document.createElement("select");
selectLupulos.classList.add("listado-lupulo");

const alfaLupulos = document.querySelector(".alfa-container");

const tiempoLupulos = document.querySelector(".tiempo-container-adicional");
const minutosHervor = document.createElement("select");
minutosHervor.classList.add("tiempo-container", "text-center", "mb-2")
tiempoLupulos.appendChild(minutosHervor);

//agrego opcion de default en tiempo de hervor
const tiempoDefault = document.createElement("option");
const tiempoDefaultTexto = document.createTextNode("tiempo de hervor");
tiempoDefault.appendChild(tiempoDefaultTexto);
minutosHervor.appendChild(tiempoDefault);



const gramosLupulos = document.querySelector(".gramos-container");

const opcionDefaultLupulo = document.createElement("option");
const opcionDefaultLupuloTexto = document.createTextNode("Seleccione Lupulo");
opcionDefaultLupulo.appendChild(opcionDefaultLupuloTexto);
selectLupulos.appendChild(opcionDefaultLupulo);

const btnAgregarLupulo = document.querySelector(".btn-agregar-lupulo");

for(const lupulo of arrLupulo){
    const opcionLupulos = document.createElement("option");
    opcionLupulos.textContent = lupulo.nombre;
    selectLupulos.appendChild(opcionLupulos);
}

selectHops.appendChild(selectLupulos);


selectLupulos.addEventListener("change", (e) => {
    let idElementoSeleccionado = e.target.value;
    let elementoSeleccionado = arrLupulo.find(lupulo => lupulo.nombre == idElementoSeleccionado);
    
    if(elementoSeleccionado == undefined){
        alfaLupulos.value = "";
    } else {
        alfaLupulos.value = elementoSeleccionado.AA;
    }
})


let lupuloLenght = 1;

function mostrarLupulo (){

    // codigos para agregar otra linea de fermentables
    const selectHops = document.querySelector(".select-container-lupulo");
    const selectLupulos = document.createElement("select");
    selectLupulos.classList.add("listado-lupulo");
    
    // codigos para agregar otra linea de afa acidos
    const alfaLupulosAdicional = document.querySelector(".alfa-container-adicional");
    const alfaLupulosAdicionalInput = document.createElement("input");
    alfaLupulosAdicionalInput.classList.add("alfa-container", "mb-2", "text-center");
    alfaLupulosAdicional.appendChild(alfaLupulosAdicionalInput);
    
    //codigo para agregar otra linea de tiempo

    const tiempoLupulos = document.querySelector(".tiempo-container-adicional");
    const minutosHervor = document.createElement("select");
    minutosHervor.classList.add("tiempo-container", "text-center", "mb-2")
    tiempoLupulos.appendChild(minutosHervor);
    
    //agrego opcion de default en tiempo de hervor
    const tiempoDefault = document.createElement("option");
    const tiempoDefaultTexto = document.createTextNode("tiempo de hervor");
    tiempoDefault.appendChild(tiempoDefaultTexto);
    minutosHervor.appendChild(tiempoDefault);

    for(const minutos of arrayTiempo){
        const optionTiempo = document.createElement("option");
        optionTiempo.textContent = minutos
    minutosHervor.appendChild(optionTiempo);
    
    }




    
    // const tiempoLupulosAdicinoal = document.querySelector(".tiempo-container-adicional");
    // const tiempoLupulosAdicinoalInput = document.createElement("input");
    // tiempoLupulosAdicinoalInput.classList.add("tiempo-container", "mb-2", "text-center");
    // tiempoLupulosAdicinoal.appendChild(tiempoLupulosAdicinoalInput);

    //codigo para agregar otra linea de gramos
    const gramosLupulosAdicinoal = document.querySelector(".gramos-container-adicional");
    const gramosLupulosAdicinoalInput = document.createElement("input");
    gramosLupulosAdicinoalInput.classList.add("gramos-container", "mb-2", "text-center", "gramos");
    gramosLupulosAdicinoal.appendChild(gramosLupulosAdicinoalInput);
    gramosLupulosAdicinoalInput.setAttribute("id", `hop${lupuloLenght+=1}`);
    const arrayLupuloInput = document.querySelectorAll(".gramos");
    




    //codigo para el texto default
    const opcionDefaultLupulo = document.createElement("option");
    const opcionDefaultLupuloTexto = document.createTextNode("Seleccione Lupulo");
    opcionDefaultLupulo.appendChild(opcionDefaultLupuloTexto);
    selectLupulos.appendChild(opcionDefaultLupulo);


    //codigo para llenar la etiqueta select
    for(const lupulo of arrLupulo){
        const opcionLupulos = document.createElement("option");
        opcionLupulos.textContent = lupulo.nombre;
        selectLupulos.appendChild(opcionLupulos);
    }

    selectHops.appendChild(selectLupulos);

    //evento para autocompletar el input alfa acido
    selectLupulos.addEventListener("change", (e)=>{
        let idElementoSeleccionado = e.target.value;
        let elementoSeleccionado = arrLupulo.find(lupulo =>lupulo.nombre == idElementoSeleccionado);
        

        if(elementoSeleccionado == undefined){
            alfaLupulosAdicionalInput.value = "";
        }else{
            alfaLupulosAdicionalInput.value = elementoSeleccionado.AA;
        }
    })


    arrayLupuloInput.forEach(input => input.addEventListener("change", (e)=>{
        let existe = arrayCantidadLupulo.some(gramos => gramos.gramosId === e.target.id);
        if(existe){
            arrayCantidadLupulo = arrayCantidadLupulo.map(gramos =>{
                if(gramos.gramosId === e.target.id){
                    if(isNaN(e.target.value)){
                        return{
                            gramosId: e.target.id,
                            valor: 0,
                        }
                    }else{
                        return{
                            gramosId: e.target.id,
                            valor: parseInt(e.target.value),
                        }
                    }
                }else{
                    return gramos;
                }
            })
        }else{
            arrayCantidadLupulo.push({
                gramosId: e.target.id,
                valor: parseInt(e.target.value),
            })
        }
        sumarGramosLupulo(arrayCantidadLupulo);

    }))



}


btnAgregarLupulo.addEventListener("click", () =>{
    mostrarLupulo();
})


arrayCantidadLupulo = [];
gramosLupulos.addEventListener("change", (e)=>{
    let existe = arrayCantidadLupulo.some(gramos => gramos.gramosId === e.target.id);
    if(existe){
        arrayCantidadLupulo = arrayCantidadLupulo.map(gramos => {
            if(gramos.gramosId === e.target.id){
                if(isNaN(e.target.value)){
                    return{
                        gramosId: e.target.id,
                        valor: 0,
                    }
                }else{
                    return{
                        gramosId: e.target.id,
                        valor: parseInt(e.target.value),
                    }
                }
            }else{
                return gramos;
            }
        })    
    }else{
        arrayCantidadLupulo.push({
            gramosId: e.target.id,
            valor: parseInt(e.target.value),
        })
        console.log(arrayCantidadLupulo);
    }
    sumarGramosLupulo(arrayCantidadLupulo);
})


function sumarGramosLupulo(arrayCantidadLupulo){
    let cantidadGramosTotal = 0;
    arrayCantidadLupulo.forEach(sumar =>{
        cantidadGramosTotal = cantidadGramosTotal + sumar.valor;
    })
    console.log(cantidadGramosTotal);
    document.querySelector(".suma-gramos").value = cantidadGramosTotal;
}

let arrayTiempo = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90];


for(const minutos of arrayTiempo){
    const optionTiempo = document.createElement("option");
    optionTiempo.textContent = minutos
minutosHervor.appendChild(optionTiempo);

}

selecTiempo.appendChild(minutosHervor);














