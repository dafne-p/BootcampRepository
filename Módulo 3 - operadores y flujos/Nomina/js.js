var empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
};

var retencion = {
    zero: 0,
    eight: 0.08,
    sixteen: 0.16,
    thirty: 0.3,
};

console.log("Datos del empleado", empleado);

var netoempleado = 0;
var reduccionhijos = empleado.hijos > 0 ? 0.02 : 0;

// Retencion segun rango de salario e hijos

if (empleado.bruto < 12000) {
    netoempleado = empleado.bruto - (retencion.zero - reduccionhijos) * empleado.bruto;
    console.log("Retención del 0% por percibir < 12000€. Total:", netoempleado, "€");
};

if (empleado.bruto > 12000 && empleado.bruto < 24000) {
    netoempleado = empleado.bruto - (retencion.eight - reduccionhijos) * empleado.bruto;
    console.log("Retención del 8% por percibir entre 12000€ y 24000€. Total:", netoempleado, "€");
};

if (empleado.bruto > 24000 && empleado.bruto < 34000) {
    netoempleado = empleado.bruto - (retencion.sixteen - reduccionhijos) * empleado.bruto;
    console.log("Retención del 16% por percibir entre 24000€ y 34000€. Total:", netoempleado, "€");
};

if (empleado.bruto > 34000) {
    netoempleado = empleado.bruto - (retencion.thirty - reduccionhijos) * empleado.bruto;
    console.log("Retención del 30% por percibir > 34000€. Total:", netoempleado, "€");
}; 

// Obtener neto mensual (dividir por 14 pagas)

console.log("Neto mensual:", netoempleado / empleado.pagas, "€");