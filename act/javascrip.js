let imagenes = "";

fetch('http://127.0.0.1:5500/act/datos.json')
.then(response => {
return response.json();
})
.then(data => {
    for (let i = 0; i < data.length; i++) {
            
        imagenes += `
            <div class="card col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-3">
            <img data-bs-toggle="modal" data-bs-target="#exampleModal${i}" src="${data[i].ThumbnailImage}" class="card-img-top" alt="...">
            <form>
            <h5 class="card-title"><strong>Nombre:</strong>${data[i].name}</h5>
            </form>
            <p class="card-text"><strong>Tipo:</strong> ${data[i].type}</p>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">${data[i].name}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Habilidad: ${data[i].abilities}<br>
                Numero: ${data[i].number}<br>
                Alto: ${data[i].height}<br>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
        
    }
    document.getElementById('contenedor').innerHTML = imagenes;
});







