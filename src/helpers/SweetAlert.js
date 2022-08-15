import Swal from "sweetalert2";

const SweetAlert = (texto) => {
  return Swal.fire({
    title: "Agregaste un item al carrito!",
    text: `${texto}`,
    icon: "success",
    confirmButtonText: "Ok",
    timer: 3000,
  });
};

export default SweetAlert;
