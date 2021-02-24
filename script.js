const pacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H"
    },
    diasIngresado: 3,
    dieta: "Baja en fibra"
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M"
    },
    diasIngresado: 5,
    dieta: "Diabetes"
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M"
    },
    diasIngresado: 1,
    dieta: "Sin sal"
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H"
    },
    diasIngresado: 3,
    dieta: "Diabetes"
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H"
    },
    diasIngresado: 2,
    dieta: "Baja en fibra"
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M"
    },
    diasIngresado: 6,
    dieta: "Sin sal"
  }
];

const datosGlobalesPacientes = pacientes => {
  const resultados = {
    nPacientes: pacientes.length,
    nMayoresEdad: nMayoresEdadHandler(pacientes),
    nHombresDiabeticos: nHombresDiabeticosHandler(pacientes),
    totalDiasIngreso: totalDiasIngresoHandler(pacientes),
    mediaEdadMujeres: mediaEdadMujeresHandler(pacientes).toFixed(2),
  };
  return resultados;
};

const nMayoresEdadHandler = pacientes => pacientes.filter(paciente => paciente.paciente.edad >= 18).length;

const nHombresDiabeticosHandler = pacientes => pacientes.filter(paciente => paciente.paciente.sexo === "H" && paciente.dieta === "Diabetes").length;

const totalDiasIngresoHandler = pacientes => pacientes.reduce((acumulador, paciente) => acumulador + paciente.diasIngresado, 0);

const mediaEdadMujeresHandler = pacientes => {
  const mujeres = pacientes.filter(paciente => paciente.paciente.sexo === "M");
  return mujeres.reduce((acumulador, paciente) => acumulador + paciente.paciente.edad, 0) / mujeres.length;
};
