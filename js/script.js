var PAGOS = {
    "Bancomer": {
        "Ventanilla": {
            "prefijo": "MOV",
            "mensaje": "Ingrese el Número de movimiento que aparece en su voucher"
        },
        "Transferencia": {
            "prefijo": "T",
            "mensaje": "Ingrese el Número De Folio de Internet ó la Referencia de cliente que ingresó cuando realizó la transferencia"
        },
        "Pago Móvil": {
            "prefijo": "T",
            "mensaje": "Ingrese los 10 dígitos del número de celular"
        },
        "Practicaja Efectivo": {
            "prefijo": "Folio",
            "mensaje": "Ingrese los 4 dígitos del número de Folio que aparece en su Voucher"
        },
        "Practicaja Transferencia": {
            "prefijo": "FolioT",
            "mensaje": "Ingrese los 4 dígitos del número de Folio que aparece en su Voucher"
        }
    },
    "Santander": {
        "Ventanilla con número de Sucursal": {
            "prefijo": "SUC",
            "mensaje": "Ingrese el número de Sucursal que aparece en su voucher"
        },
        "Ventanilla con número de Folio": {
            "prefijo": "FOLIO",
            "mensaje": "Ingrese los 4 dígitos del número de Folio que aparece en su Voucher"
        },
        "Transferencia": {
            "prefijo": "T",
            "mensaje": "Ingrese la referencia del cliente que ingresó cuando realizó la transferencia"
        },
        "Telecom": {
            "prefijo": "TECOM",
            "mensaje": "Ingrese la hora exacta del depósito sin puntos en formato 12 horas. Ejemplo: 0845"
        },
        "Practicaja con número de Sucursal": {
            "prefijo": "SUC",
            "mensaje": "Ingrese el número de Sucursal que aparece en su voucher"
        },
        "Practicaja con número de Referencia": {
            "prefijo": "ATM",
            "mensaje": "Ingrese el número de Referencia que aparece en su voucher"
        }
    },
    "Banamex": {
        "Ventanilla con número de Autorización": {
            "prefijo": "AUT",
            "mensaje": "Ingrese el número de Autorización que aparece en su voucher"
        },
        "Ventanilla con número de Sucursal": {
            "prefijo": "SUC",
            "mensaje": "Ingrese el número de Sucursal que aparece en su voucher"
        },
        "Transferencia": {
            "prefijo": "T",
            "mensaje": "Ingrese el Folio de Autorización"
        },
        "Telecom": {
            "prefijo": "TECOM",
            "mensaje": "Ingrese el número de Autorización que aparecen en su voucher"
        },
        "Practicaja": {
            "prefijo": "AUT",
            "mensaje": "Ingrese el número de Autorización que aparecen en su voucher"
        }
    },
    "Banco Azteca": {
        "Ventanilla": {
            "prefijo": "BA",
            "mensaje": "Ingrese nuevamente el monto con cifras de centavos y sin puntos"
        },
        "Transferencia": {
            "prefijo": "TBA",
            "mensaje": "Ingrese nuevamente el monto con cifras de centavos y sin puntos"
        }
    },
    "OXXO": {
        "Caja": {
            "prefijo": "CAJA",
            "mensaje": "Ingrese su Site ID"
        },
        "Transferencia desde Numero Celular": {
            "prefijo": "T",
            "mensaje": "Ingrese su Site ID"
        }
    },
};

var bancoSeleccionado;

$(document).ready(function() {
    cargarSelectBancos();
    $("#select-banco").change(selectModo);
    $("#select-tipo-deposito").change(selectTipoDeposito);
});

function cargarSelectBancos() {
    for (banco in PAGOS)
        $("#select-banco").append("<option value='" + banco + "'>" + banco + "</option>");
}

function selectModo(event) {
    bancoSeleccionado = event.target.value;

    $("#select-tipo-deposito").html("");
    for (modo in PAGOS[bancoSeleccionado])
        $("#select-tipo-deposito").append("<option value='" + modo + "'>" + modo + "</option>");
}

function selectTipoDeposito(event) {
    var modoSeleccionado = event.target.value;
    var modo = PAGOS[bancoSeleccionado][modoSeleccionado];
    $("#label-mode-input").html(modo.mensaje);
}