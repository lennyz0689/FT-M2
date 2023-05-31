$('#boton').click(function() {
    $.get("http://localhost:5000/amigos", function(data){
        $('#lista').empty()
        for (let i = 0; i < data.length; i++) {
            const nombres = data[i].name;
            let lista = document.createElement("li")
            lista.textContent = `${nombres}`
            $('#lista').append(lista)
            
        }   
    }) 
})


$('#search').click(function(){
    $.get("http://localhost:5000/amigos", function(data){
        let encontrar = document.getElementById("input")
        let valor = parseInt(encontrar.value)
        let nombre = "No se encontró un amigo con ese ID."

        for (let i = 0; i < data.length; i++) {
            if (valor === data[i].id) {        
                nombre = data[i].name
                break
            }
        }

        let buscar = document.getElementById("amigo")
            buscar.textContent = nombre
    })
})

$('#delete').click(function(){

    let encontrar = document.getElementById("inputDelete")
    let valor = parseInt(encontrar.value)
    let nombre = "No se encontró un amigo con ese ID."


    $.ajax({
        url: `http://localhost:5000/amigos/${valor}`,
        method: "DELETE",
        success: function(data) {
            
            for (let i = 0; i < data.length; i++) {
                if (valor === data[i].id) {        
                    nombre = data[i].name
                    break
                }
            }

            let buscar = document.getElementById("success")
            buscar.innerText = `se eliminó correctamente`
        },
})
})