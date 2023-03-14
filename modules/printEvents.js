export const printEvents = (container, arrayEventos, allEvenets) => {
    container.innerHTML = "";

    arrayEventos.forEach((eventos) => {
        const div = document.createElement("div");
        div.classList.add("col-lg-3", "col-md-4", "col-sm-12", "d-flex", "flex-row-reverse");
        div.innerHTML = `
            <div class="border px-2">
            <figure class="mt-2">
              <img src=${eventos.image} class="img-fluid" alt="">
            </figure>
            <h2 class="text-center">${eventos.name}</h2>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</p>
            <div class="d-grid d-md-flex mb-2 justify-content-md-between">
              <h5>$ ${eventos.price}</h5>
              <a id=${allEvenets.indexOf(eventos)} class="btn btn-primary"  role="button">detalles</a>
            </div>
        </div>
        `;
        container.appendChild(div);
    });
};