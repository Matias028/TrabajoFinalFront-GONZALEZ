import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

// Esta es la función que se va a usar en el botón
const showCloseSessionAlert = () => {
  return MySwal.fire({
    title: '¿Cerrar sesión?',
    text: '¿Estás seguro de que querés salir?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, salir',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      
      // El usuario hizo clic en "Salir"
      // Aquí puedes agregar la lógica para cerrar la sesión;
      // Acá podés limpiar el localStorage, redirigir, etc.
    }
  });
};

export default showCloseSessionAlert;