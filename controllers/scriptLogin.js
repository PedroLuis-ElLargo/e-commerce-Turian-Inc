// form switch
$('a.switch').click(function (e) {
    $(this).toggleClass('active');
    e.preventDefault();

    if ($('a.switch').hasClass('active')) {
        $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
    } else {
        $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
    }
});

// Obtiene el formulario por su atributo "data-form"
const form = document.querySelector("[data-form]");

// Agrega un evento de escucha al formulario cuando se envía
form.addEventListener("submit", (evento) => {
  // Evita que el formulario se envíe de forma predeterminada
  evento.preventDefault();

  // Obtiene los valores de correo electrónico y contraseña del formulario
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;

  // Verifica si tanto el correo electrónico como la contraseña tienen más de 5 caracteres
  if (email.length > 5 && password.length > 5) {
    // Redirige al usuario a la página "producto.html"
    window.location.href = "../pages/productos.html";
  } else {
    // Muestra una alerta si los campos no cumplen con los requisitos
    alert("El correo electrónico y la contraseña deben tener más de 5 caracteres.");
  }
});

