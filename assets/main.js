
function loading() {
    let timerInterval;
    Swal.fire({
        title: "Cargando....",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100200000);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}




const loadData = () => {
    fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(response => printData(response))
}


const printData = (data) => {
    const arrays = data.results;
    const zone = document.getElementById('zonePrint');
    arrays.forEach(element => {
        const user = document.createElement('div'); // Crear un nuevo div
        user.innerHTML = `
             <div class="card m-4">
                <div class="card-header">
                    <img src="${element.image}" class="img-fluid" alt="">
                </div>
                <div class="card-body">
                    <p><strong>Name:</strong> ${element.name}</p>
                    <p><strong>Status:</strong>true</p>
                    <p><strong>Species:</strong>  ${element.Species}</p>
                    <p><strong>Type:</strong> ${element.Type}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary col-12" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="getUserById(${element.id})" >Ver más...</button>
                </div>
            </div>
        `;
        zone.appendChild(user); // Agregar el nuevo div al contenedor
    });
};


const getUserById = (id) => {
    loading();
    axios.get('https://rickandmortyapi.com/api/character/' + id)
        .then(results => printUserById(results))
}

const printUserById = (user) => {
    let name = document.getElementById('nombreUser');
    let lastname = document.getElementById('especie');

    name.innerText = user.data.name
    lastname.innerText = user.data.species
}
loadData()