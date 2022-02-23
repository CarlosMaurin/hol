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

let sumaKilos = document.querySelector("suma-kilos")
kilosFermentables.addEventListener("change", (e) =>{
    let idElementoSeleccionado = e.target.value;
    console.log(idElementoSeleccionado);
    sumaKilos.value = idElementoSeleccionado;
    
})


































// document.addEventListener("DOMContentLoaded", ()=>{
//   mostrarObjetoGranos();
// }) 

// function mostrarObjetoGranos (){
  
//   const listadoFermCont = document.querySelector(".listado-ferms-container");
//   const selectFerm = document.createElement("select");
//   selectFerm.classList.add("listado-ferm", "mb-2");
  
//   const listadoExtractoCont = document.querySelector(".listado-ext");
//   const divExtracto = document.createElement("div");
//   divExtracto.classList.add("listado-extracto", "mb-2");

//   const listadoSRMCont = document.querySelector(".listado-srm");
//   const divSRM = document.createElement("div");
//   divSRM.classList.add("listado-srm-style", "mb-2");

//   const listadoKilosCont = document.querySelector(".listado-kilos");
//   const inputKilos = document.createElement("input");
//   inputKilos.classList.add("form-control", "rounded", "listado-kilos-style", "mb-2")
  
//   for(const item of fermentables){
//     const optionFermentables = document.createElement("option");
//     optionFermentables.textContent = item.nombre;
//     selectFerm.appendChild(optionFermentables);  
//   }
  
//   listadoFermCont.appendChild(selectFerm);
//   listadoExtractoCont.appendChild(divExtracto);
//   listadoSRMCont.appendChild(divSRM);
//   // listadoKilosCont.appendChild(labelkilos);
//   listadoKilosCont.appendChild(inputKilos);
  
// }    



// const btnGranos = document.querySelector(".main-nueva__btn");
// btnGranos.addEventListener("click", mostrarObjetoGranos);

