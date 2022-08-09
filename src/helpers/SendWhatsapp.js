const SendWhatsapp = (cart, whiteSpace) => {
  let message = cart.map((item) => [
    item.cantidad,
    item.item.attributes.Nombre,
    whiteSpace,
  ]);

  message = message.join("");
  message = message.replaceAll(",", " ");
  console.log(message);

  return message;
};

export default SendWhatsapp;
