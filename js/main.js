const btn = document.getElementById("menuBtn");
const menu = document.getElementById('mobileMenu')

const mensaje =document.getElementById("btn")

btn.addEventListener('click', navToggle);

function navToggle () {
    btn.classList.toggle('open');
    menu.classList.toggle('showMenu');
}

mensaje.addEventListener("click", ()=> {
    swal({
      title: ":)",
      text: "Gracias por escribir",
    });
  })
