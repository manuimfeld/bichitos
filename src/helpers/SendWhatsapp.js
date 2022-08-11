const SendWhatsapp = (cart) => {
  let message = cart.map((item) => [
    item.cantidad,
    item.item.attributes.Nombre,
    " ",
  ]);

  message = message.join("");
  message = message.replaceAll(",", " ");

  return message;
};

export default SendWhatsapp;
