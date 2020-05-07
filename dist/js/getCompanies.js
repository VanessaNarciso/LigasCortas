

function getCompanies() {
    /*if(window.localStorage.tipo>0){
        alert("No permitido entrar");
        window.location = 'index.html';
    }*/
    $.ajax({
        url: 'https://ligascortas.herokuapp.com/getCompanies',      
        headers: {
            'Content-Type':'application/json'
        },
        method: 'GET',
        success: function(data){
          // guardar token en localstorage o cookie        
          console.log(data)
          let list = $("#companies");
          list.html("");
          for (let i = 0; i < data.length; i++) {
            list.append(`<li class="list-group-item">
                <table class='table mt-10'>
                    <thead>
                        <tr>
                        <th scope="col">${i+1}</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Nombre</th>
                            <td>${data[i].nombre}</td>
                        </tr>
                        <tr>
                            <th scope="row">Razón social</th>
                            <td>${data[i].razon_social}</td>
                        </tr>
                        <tr>
                            <th scope="row">Domicilio</th>
                            <td>${data[i].domicilio}</td>
                        </tr>
                        <tr>
                            <th scope="row">Numero Contacto</th>
                            <td>${data[i].numero}</td>
                        </tr>
                        <tr>
                            <th scope="row">Pais</th>
                            <td>${data[i].pais}</td>
                        </tr>
                        <tr>
                            <th scope="row">Fecha Creación</th>
                            <td>${data[i].fechaCreacion}</td>
                        </tr>
                        <tr>
                            <th scope="row">Fecha Modificación</th>
                            <td>${data[i].fechaModificacion}</td>
                        </tr>
                    </tbody>
                </table>
                </li>`);
          }
        },
        error: function(error_msg) {
          alert((error_msg["responseText"]))
        }
      })
}

window.onload = getCompanies;