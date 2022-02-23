let eficiencia;

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
    console.log(idElementoSeleccionado);
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
    kilosFermentablesAdicionalInput.classList.add("kilos-container", "text-center", "mb-2");
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




}

const boton = document.querySelector(".main-nueva__btn");
boton.addEventListener("click", mostrar);



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

const tiempoLupulos = document.querySelector(".tiempo-container");


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
    const tiempoLupulosAdicinoal = document.querySelector(".tiempo-container-adicional");
    const tiempoLupulosAdicinoalInput = document.createElement("input");
    tiempoLupulosAdicinoalInput.classList.add("tiempo-container", "mb-2", "text-center");
    tiempoLupulosAdicinoal.appendChild(tiempoLupulosAdicinoalInput);

    //codigo para agregar otra linea de gramos
    const gramosLupulosAdicinoal = document.querySelector(".gramos-container-adicional");
    const gramosLupulosAdicinoalInput = document.createElement("input");
    gramosLupulosAdicinoalInput.classList.add("gramos-container", "mb-2", "text-center");
    gramosLupulosAdicinoal.appendChild(gramosLupulosAdicinoalInput);




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



}


btnAgregarLupulo.addEventListener("click", () =>{
    mostrarLupulo();
})
















