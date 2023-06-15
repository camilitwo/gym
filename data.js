
    // JSON de la rutina
    var rutinaJSON = {
  "dias": [
    {
      "nombre": "Día 1: Pecho y Tríceps",
      "ejercicios": [
        {
          "nombre": "Press de banca plano",
          "series": 3,
          "repeticiones": "8-10"
        },
        {
          "nombre": "Press de banca inclinado con mancuernas",
          "series": 3,
          "repeticiones": "10-12"
        },
        {
          "nombre": "Extensiones de tríceps con polea alta",
          "series": 3,
          "repeticiones": "10-12"
        },
        {
          "nombre": "Dips en máquina asistida o dips en banco",
          "series": 3,
          "repeticiones": "8-10"
        },
        {
          "nombre": "Press cerrado con mancuernas",
          "series": 3,
          "repeticiones": "10-12"
        }
      ]
    },
    {
      "nombre": "Día 2: Piernas",
      "ejercicios": [
        {
          "nombre": "Sentadillas",
          "series": 3,
          "repeticiones": "8-10"
        },
        {
          "nombre": "Prensa de piernas",
          "series": 3,
          "repeticiones": "10-12"
        },
        {
          "nombre": "Extensiones de piernas",
          "series": 3,
          "repeticiones": "12-15"
        },
        {
          "nombre": "Zancadas con mancuernas",
          "series": 3,
          "repeticiones": "10-12"
        },
        {
          "nombre": "Elevaciones de talones de pie",
          "series": 3,
          "repeticiones": "12-15"
        }
      ]
    },
    {
      "nombre": "Día 3: Espalda y Bíceps",
      "ejercicios": [
        {
          "nombre": "Dominadas o jalones al pecho",
          "series": 3,
          "repeticiones": "8-10"
        },
        {
          "nombre": "Remo con barra",
          "series": 3,
          "repeticiones": "10-12"
        },
        {
          "nombre": "Remo con mancuerna a una mano",
          "series": 3,
          "repeticiones": "10-12"
        },
        {
          "nombre": "Curl de bíceps con barra",
          "series": 3,
          "repeticiones": "8-10"
        },
        {
          "nombre": "Curl de martillo con mancuernas",
          "series": 3,
          "repeticiones": "10-12"
        }
      ]
    },
    {
      "nombre": "Día 4: Hombros y Trapecios",
      "ejercicios": [
        {
          "nombre": "Press militar con barra",
          "series": 3,
          "repeticiones": "8-10"
        },
        {
          "nombre": "Elevaciones laterales con mancuernas",
          "series": 3,
          "repeticiones": "10-12"
        },
        {
          "nombre": "Elevaciones frontales con mancuernas",
          "series": 3,
          "repeticiones": "10-12"
        },
        {
          "nombre": "Pájaros o elevaciones posteriores con mancuernas",
          "series": 3,
          "repeticiones": "10-12"
        },
        {
          "nombre": "Encogimientos de trapecio con barra",
          "series": 3,
          "repeticiones": "10-12"
        }
      ]
    },
    {
      "nombre": "Día 5: Piernas y Glúteos",
      "ejercicios": [
        {
          "nombre": "Peso muerto con barra",
          "series": 3,
          "repeticiones": "8-10"
        },
        {
          "nombre": "Sentadillas sumo con mancuerna",
          "series": 3,
          "repeticiones": "10-12"
        },
        {
          "nombre": "Prensa de piernas inclinada",
          "series": 3,
          "repeticiones": "10-12"
        },
        {
          "nombre": "Elevaciones de talones sentado",
          "series": 3,
          "repeticiones": "12-15"
        },
        {
          "nombre": "Hip thrust con barra o elevaciones de cadera con banda elástica",
          "series": 3,
          "repeticiones": "10-12"
        }
      ]
    }
  ]
};

var dietaJSON = {
  "dias": [
    {
      "nombre": "Día 1",
      "comidas": [
        {
          "nombre": "Desayuno",
          "alimentos": [
            "Huevos",
            "Avena",
            "Frutas"
          ]
        },
        // ... Resto de las comidas del Día 1
      ]
    },
    {
      "nombre": "Día 2",
      "comidas": [
        // ... Comidas del Día 2
      ]
    },
    // ... Resto de los días
  ]
};

    // Obtener el día actual
    function mostrarRutina() {
      var diaSeleccionado = document.getElementById("dia").value;
      var rutinaHTML = '';
      if (diaSeleccionado >= 1 && diaSeleccionado <= rutinaJSON.dias.length) {
        var dia = rutinaJSON.dias[diaSeleccionado - 1];
        rutinaHTML += '<h2>' + dia.nombre + '</h2>';
        rutinaHTML += '<ul>';
        dia.ejercicios.forEach(function(ejercicio) {
          rutinaHTML += '<li><strong>' + ejercicio.nombre + '</strong>: ' + ejercicio.series + ' series de ' + ejercicio.repeticiones + ' repeticiones</li>';
        });
        rutinaHTML += '</ul>';
      } else {
        rutinaHTML = '<p>No se encontró una rutina para el día seleccionado.</p>';
      }
      document.getElementById("rutina").innerHTML = rutinaHTML;
    }

    // Función para mostrar la dieta según el día seleccionado
    function mostrarDieta() {
      var diaSeleccionado = document.getElementById("dia").value;
      var dietaHTML = '';
      if (diaSeleccionado >= 1 && diaSeleccionado <= dietaJSON.dias.length) {
        var dia = dietaJSON.dias[diaSeleccionado - 1];
        dietaHTML += '<h2>' + dia.nombre + '</h2>';
        dietaHTML += '<ul>';
        dia.comidas.forEach(function(comida) {
          dietaHTML += '<li><strong>' + comida.nombre + '</strong>: ' + comida.alimentos.join(', ') + '</li>';
        });
        dietaHTML += '</ul>';
      } else {
        dietaHTML = '<p>No se encontró una dieta para el día seleccionado.</p>';
      }
      document.getElementById("dieta").innerHTML = dietaHTML;
    }

    // Mostrar las opciones del combobox
    var combobox = document.getElementById("dia");
    rutinaJSON.dias.forEach(function(dia, index) {
      var option = document.createElement("option");
      option.value = index + 1;
      option.text = dia.nombre;
      combobox.appendChild(option);
    });

    // Obtener el día actual y seleccionarlo en el combobox
    var diaActual = new Date().getDay(); // 0: Domingo, 1: Lunes, ..., 6: Sábado
    if (diaActual >= 1 && diaActual <= rutinaJSON.dias.length) {
      combobox.value = diaActual;
    }

    // Mostrar la rutina y la dieta inicial al cargar la página
    mostrarRutina();
    mostrarDieta();