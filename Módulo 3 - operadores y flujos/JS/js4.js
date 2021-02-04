// 4. Aplicar descuento del 20% si el precio supera los 500€

const booking = {
    count: 5,
    price: 127.95,
};

var total = booking.count * booking.price;

var dto = 0.2;

let preciototal = total > 500 ? 
    console.log("4. Precio de reserva:", total, "€" + "  Precio con 20%dto aplicado:", total - (dto * total), "€") 
    : console.log("4. Precio de la reserva:", total, "€" + " No se aplica el descuento");