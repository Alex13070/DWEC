
var Empleado = /** @class */ (function () {
    function Empleado(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    Object.defineProperty(Empleado.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "sueldo", {
        get: function () {
            return this._sueldo;
        },
        set: function (sueldo) {
            if (sueldo < 0) {
                console.log("El sueldo tiene que ser mayor que 0");
                sueldo = 0;
            }
            this._sueldo = sueldo;
        },
        enumerable: false,
        configurable: true
    });
    return Empleado;
}());
