// ############################################################### //
// ####################  Crear Partida  ########################## //
// ############################################################### //
const seleccioTematica = document.getElementById("seleccioTematica");
seleccioTematica.addEventListener("click", generarPreguntes);

async function generarPreguntes() {
    const tematica = document.getElementById("tematica").value;
    switch (tematica) {
        case "popurri":
            var preguntes = await fetch('/preguntesRandom')
            .then(response => response.json());
            console.log(preguntes);
            
            break;
    
        default:
            var preguntes = await fetch('/preguntes/' + tematica)
            .then(response => response.json());
            console.log(preguntes);
            break;
    }
}