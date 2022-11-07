class Empleado {
    private _nombre: String;
    private _sueldo: number;

    constructor(nombre: String, sueldo: number) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    
    public set nombre(nombre : String) {
        this.nombre = nombre;
    }

    public set sueldo(sueldo : number) {
        if (sueldo < 0) {
            console.log("El sueldo tiene que ser mayor que 0");
            sueldo = 0;
        }
        this._sueldo = sueldo;
    }

    public get sueldo(){
        return this._sueldo;
    }

    public get nombre(){
        return this._nombre;
    }
}

export {}