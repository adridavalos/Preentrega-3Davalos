export const calcularPromedio = (total, cantidad) => total / cantidad;

export function encontrarEstudianteConCalificacionMasAlta(estudiantes) {
    if (estudiantes.length === 0) {
        return "No hay estudiantes en el array";
    }
    let nombreMasAlto = estudiantes[0].nombre;
    let calificacionMasAlta = estudiantes[0].calificacion;
    for (let i = 1; i < estudiantes.length; i++) {
        let calificacionActual = estudiantes[i].calificacion;
        if (calificacionActual > calificacionMasAlta) {
        nombreMasAlto = estudiantes[i].nombre;
        calificacionMasAlta = calificacionActual;
        }
    }
    return {
        nombre: nombreMasAlto,
        calificacion: calificacionMasAlta,
    };
};
export function encontrarEstudianteConCalificacionMasBaja(estudiantes) {
    if (estudiantes.length === 0) {
        return "No hay estudiantes en el array";
    }
    let nombreMasBajo = estudiantes[0].nombre;
    let calificacionMasBaja = estudiantes[0].calificacion;
    for (let i = 1; i < estudiantes.length; i++) {
        let calificacionActual = estudiantes[i].calificacion;
        if (calificacionActual < calificacionMasBaja) {
        nombreMasBajo = estudiantes[i].nombre;
        calificacionMasBaja = calificacionActual;
        }
    }
    return {
        nombre: nombreMasBajo,
        calificacion: calificacionMasBaja,
    };
};
export function sumarCalificaciones(estudiantes) {
    if (estudiantes.length === 0) {
        return "No hay calificaciones en el array";
    }
    let acumulador = 0;
    for (const item of estudiantes) {
        acumulador = acumulador + item.calificacion;
    }
    return acumulador;
};
