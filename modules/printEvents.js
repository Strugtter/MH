export const printEvents = (container, arrayEventos) => {
    container.innerHTML = "";

    arrayEventos.forEach((eventos) => {
        const div = document.createElement("div");
        div.classList.add("col-3");
        div.innerHTML = `
            <div class="border px-2">
            <figure class="border mt-2">
              <img src=${eventos.image} class="img-fluid" alt="">
            </figure>
            <h2 class="text-center">Maratón</h2>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</p>
            <div class="d-grid d-md-flex mb-2 justify-content-md-between">
              <h5>Price $4000</h5>
              <a class="btn btn-primary" href="../pages/details.html" role="button">detalles</a>
            </div>
          </div>
        `;
        container.appendChild(div);
    });
};