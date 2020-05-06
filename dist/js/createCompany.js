$('#create_button').on('click', function(){
    // cargar datos del form    
    let name = $('#inputName').val()
    let social = $('#inputRazon').val()
    let address = $('#inputDomicilio').val()
    let contact = $('#inputCont').val()
    let country = $('#inputPais').val()
  
    json_to_send = {
      "nombre": name,
      "razon_social" : social,
      "domicilio" : address,
      "numero" : contact,
      "pais" : country,
      "fechaCreacion" : new Date(),
      "fechaModificacion" : new Date()
    };
  
    json_to_send = JSON.stringify(json_to_send)
    console.log(json_to_send)
    $.ajax({
      url: 'https://ligascortas.herokuapp.com/createCompany',      
      headers: {
          'Content-Type':'application/json'
      },
      method: 'POST',
      dataType: 'json',
      data: json_to_send,
      success: function(data){
        // guardar token en localstorage o cookie        
        window.location = 'consultComp.html'
      },
      error: function(error_msg) {
        alert((error_msg["responseText"]))
      }
    })
  })