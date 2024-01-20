/*Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
Una vez lo tengas compruebalo con un console.log. */

const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true }, { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Abel Cabeza', T1: false, T2: true, T3: true }, { name: 'Alfredo Blanco', T1: false, T2: false, T3: false }, { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]


comprobarAprobado = alum => {
    var isAproved;
    //filtro dentro de cada alumno, devolviendo solo los trimestres aprovados.
    const numAprobadas = [alum.T1, alum.T2, alum.T3].filter(Boolean).length;
    //Si he aprovado más de 2 estoy aprovado.
    if (numAprobadas >= 2) {
        isAproved = true;
    }
    else {
        isAproved = false;
    }

    return isAproved;
}

for (al of alumns) {
    if (comprobarAprobado(al)) {
        console.log(`${al.name} está aprovado, enhorabuena.`)
    }
    else {
        console.log(`${al.name} está suspenso, suerte en la próxima.`)
    }
}