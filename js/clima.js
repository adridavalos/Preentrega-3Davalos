const apiKey = "2eed8a072e384f4ea63181724242401";
const apiUrl =
  "https://api.weatherapi.com/v1/current.json?key=" +
  apiKey +
  "&q=argentina&lang=es";

const pedirDatos = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();

    let div = document.createElement("div");
    div.innerHTML = `
        <div class="container mt-4">
            <div class="row">
                <div class="card">
                    <div class="card-header"> 
                        Información del Clima
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Ciudad:  ${data.location.name} - ${data.location.country}</h5>
                        <p class="card-text">Temperatura: ${data.current.temp_c}°C</p>
                        <p class="card-text">Descripción: ${data.current.condition.text}<img src=${data.current.condition.icon}></img></p>
                        
                    </div>
                </div>
            </div>
        </div>`;
    const clima = document.getElementById("infoClima");
    clima.append(div);
};
pedirDatos();