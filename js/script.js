var PAGOS = {
    "Bancomer": {
        "Ventanilla": "MOV",
        "Transferencia": "T",
        "Pago Móvil": "T",
        "Practicaja Efectivo": "Folio",
        "Practicaja Transferencia": "FolioT"
    },
    "Santander": {
        "Ventanilla con número de Sucursal": "SUC",
        "Ventanilla con número de Folio": "FOLIO",
        "Transferencia": "T",
        "Telecom": "TECOM",
        "Practicaja con número de Sucursal": "SUC",
        "Practicaja con número de Referencia": "ATM"
    },
    "Banamex": {
        "Ventanilla con número de Autorización": "AUT",
        "Ventanilla con número de Sucursal": "SUC",
        "Transferencia": "T",
        "Telecom": "TECOM",
        "Practicaja": "AUT"
    },
    "Banco Azteca": {
        "Ventanilla": "BA",
        "Transferencia": "TBA",
    },
    "OXXO": {
        "Caja": "CAJA",
        "Transferencia desde Numero Celular": "T",
    },
};
$(document).ready(function() {
    cargarSelectBancos();
    $("#select-banco").change(selectModo);
});

function cargarSelectBancos() {
    for (banco in PAGOS)
        $("#select-banco").append("<option value='" + banco + "'>" + banco + "</option>");
}

function selectModo(event) {
    var bancoSeleccionado = event.target.value;
    
    $("#select-tipo-deposito").html("");
    for (modo in PAGOS[bancoSeleccionado])
        $("#select-tipo-deposito").append("<option value='" + modo + "'>" + modo + "</option>");
}