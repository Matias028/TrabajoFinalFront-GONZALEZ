import Swal from 'sweetalert2';

const showPacienteForm = (onAddPacient) => {
    Swal.fire({
        title: 'Cargar datos del paciente',
        html: `
            <input id="swal-input-name" class="swal2-input" placeholder="Nombre">
            <input id="swal-input-age" class="swal2-input" placeholder="Edad" type="number">
            <input id="swal-input-dni" class="swal2-input" placeholder="DNI">
            <input id="swal-input-phone" class="swal2-input" placeholder="Teléfono">
            <input id="swal-input-email" class="swal2-input" placeholder="Email" type="email">
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const name = document.getElementById('swal-input-name').value;
            const age = document.getElementById('swal-input-age').value;
            const dni = document.getElementById('swal-input-dni').value;
            const phone = document.getElementById('swal-input-phone').value;
            const email = document.getElementById('swal-input-email').value;

            if (!name || !age || !dni || !phone || !email) {
                Swal.showValidationMessage('Todos los campos son obligatorios');
                return false;
            }

            return { name, age: Number(age), dni, phone, email };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            onAddPacient(result.value);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            console.log('Cancelado');
        }
    });
};

export default showPacienteForm;
