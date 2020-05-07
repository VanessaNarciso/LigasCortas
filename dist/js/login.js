$('#login_button').on('click', function(){
  // cargar email y password de su html
  console.log("Click")
  let email = $('#inputEmailAddress').val()
  let password = $('#inputPassword').val()

  json_to_send = {
    "correo": email,
    "password" : password
  };

  json_to_send = JSON.stringify(json_to_send)
  console.log(json_to_send)
  $.ajax({
    url: 'https://ligascortas.herokuapp.com/login',
    // url: 'https://tuapp.herokuapp.com/users/login',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      // guardar token en localstorage o cookie
      localStorage.setItem('token', data.token)
      localStorage.setItem('empresa', data.company.nombre)
      localStorage.setItem('empresaId', data.company._id)
      window.location = 'index.html'
    },
    error: function(error_msg) {
      alert((error_msg["responseText"]))
    }
  })
})