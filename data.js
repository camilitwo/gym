var rutina = {
    "rutina": [
      {
        "dia": "Lunes",
        "ejercicios": [
          "Sentadillas: 4 series de 8-10 repeticiones.",
          "Peso muerto: 4 series de 8-10 repeticiones.",
          "Zancadas: 3 series de 10 repeticiones por pierna.",
          "Extensión de piernas: 3 series de 12 repeticiones.",
          "Curl de piernas: 3 series de 12 repeticiones.",
          "Elevación de talones: 3 series de 15 repeticiones."
        ]
      },
      {
        "dia": "Martes",
        "ejercicios": [
          "Dominadas: 4 series de 8-10 repeticiones.",
          "Remo con barra: 4 series de 8-10 repeticiones.",
          "Remo con mancuernas: 3 series de 10 repeticiones.",
          "Curl de bíceps con barra: 3 series de 10-12 repeticiones.",
          "Curl de bíceps martillo: 3 series de 10-12 repeticiones."
        ]
      },
      {
        "dia": "Miércoles",
        "ejercicios": [
          "Descanso o actividad de baja intensidad"
        ]
      },
      {
        "dia": "Jueves",
        "ejercicios": [
          "Fondos en paralelas: 3 series de 10-12 repeticiones.",
          "Press de banca: 4 series de 8-10 repeticiones.",
          "Press inclinado con mancuernas: 4 series de 8-10 repeticiones.",
          "Aperturas con mancuernas: 3 series de 10 repeticiones.",
          "Extensiones de tríceps con polea: 3 series de 10-12 repeticiones."
        ]
      },
      {
        "dia": "Viernes",
        "ejercicios": [
          "Plancha: 3 series de 30-60 segundos.",
          "Crunch abdominal: 3 series de 15-20 repeticiones.",
          "Press militar con barra: 4 series de 8-10 repeticiones.",
          "Elevaciones laterales con mancuernas: 3 series de 10 repeticiones.",
          "Pájaros: 3 series de 10 repeticiones.",
          "Encogimientos de hombros: 3 series de 12 repeticiones."
        ]
      }
    ]
  };
    
    
function createExerciseElement(exerciseName) {
    var exercise = document.createElement("li");
    exercise.className = "list-group-item";
    
    var label = document.createElement("label");
    label.className = "exercise-label";
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "exercise-checkbox";
    
    label.appendChild(checkbox);
    label.innerHTML += exerciseName;
    
    exercise.appendChild(label);
    
    checkbox.addEventListener("change", function() {
    exercise.classList.toggle("completed", checkbox.checked);
    });
    
    return exercise;
}

function generateRoutine(selectedDay) {
    var rutinaContainer = document.getElementById("rutina-container");
    
    var today = new Date().toLocaleDateString('es-ES', { weekday: 'long' });
    selectedDay = selectedDay || today;
    
    for (var i = 0; i < rutina.rutina.length; i++) {
    var dia = rutina.rutina[i].dia;
    var ejercicios = rutina.rutina[i].ejercicios;
    
    if (dia.toLowerCase() === selectedDay.toLowerCase()) {
        var dayElement = document.createElement("div");
        dayElement.className = "card";
        
        var dayTitle = document.createElement("div");
        dayTitle.className = "card-header";
        dayTitle.textContent = dia;
        
        var exerciseList = document.createElement("ul");
        exerciseList.className = "list-group list-group-flush";
        for (var j = 0; j < ejercicios.length; j++) {
        var exercise = createExerciseElement(ejercicios[j]);
        exerciseList.appendChild(exercise);
        }
        
        dayElement.appendChild(dayTitle);
        dayElement.appendChild(exerciseList);
        rutinaContainer.appendChild(dayElement);
        
        break;
    }
    }
    
    var diaSelector = document.getElementById("dia-selector");
    diaSelector.value = selectedDay;
    
    diaSelector.addEventListener("change", function() {
    rutinaContainer.innerHTML = "";
    generateRoutine(diaSelector.value);
    });
}

generateRoutine();

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}