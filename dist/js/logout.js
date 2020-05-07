
//Jala el token para futuras acciones
var token = localStorage.getItem('token');
if (token) {
  token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
}

//Logout
$('#btn_logout').on('click', function(){
    console.log("Logout");

  $.ajax({
    url: 'https://ligascortas.herokuapp.com/logout',
    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'POST',
    success: function(){
      alert("Cerrando Sesion");
      console.log('success: ');
      window.location = 'login.html'
    },
    error: function(error_msg) {
        alert((error_msg['responseText']));
    }
  });

})
