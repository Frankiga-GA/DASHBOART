document.addEventListener('DOMContentLoaded', () => {
  const inputNombre = document.querySelector('.input[type="text"]');
  const filtroDepartamento = document.getElementById('filtro-departamento');
  const filtroPuntuacion = document.getElementById('filtro-puntuacion');
  const profesores = document.querySelectorAll('.lista-profesores li');

  function filtrarProfesores() {
    const texto = inputNombre.value.toLowerCase();
    const departamento = filtroDepartamento.value;
    const puntuacion = filtroPuntuacion.value;

    profesores.forEach(profesor => {
      const nombre = profesor.querySelector('.nombre').textContent.toLowerCase();
      const area = profesor.getAttribute('data-area');
      const score = parseFloat(profesor.getAttribute('data-score'));

      const coincideNombre = nombre.includes(texto);
      const coincideDepartamento = (departamento === "Todos" || area === departamento);

      let coincidePuntuacion = true;
      if (puntuacion === "mayor-igual-4.5") {
        coincidePuntuacion = score >= 4.5;
      } else if (puntuacion === "entre-4.0-4.4") {
        coincidePuntuacion = score >= 4.0 && score <= 4.4;
      } else if (puntuacion === "menor-4.0") {
        coincidePuntuacion = score < 4.0;
      }

      const mostrar = coincideNombre && coincideDepartamento && coincidePuntuacion;
      profesor.classList.toggle('oculto', !mostrar);
    });
  }

  inputNombre.addEventListener('input', filtrarProfesores);
  filtroDepartamento.addEventListener('change', filtrarProfesores);
  filtroPuntuacion.addEventListener('change', filtrarProfesores);
});
