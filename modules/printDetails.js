export const printDetails = (container, arrayEventos) => {
    container.innerHTML = "";

    arrayEventos.forEach((eventos) => {
        const div = document.createElement("div");
        div.classList.add("row", "g-0", "bg-body-secondary", "position-relative");
        // row g-0 bg-body-secondary position-relative
        div.innerHTML = `
        <div class="col-md-6 mb-md-0 p-md-4">
          <img src=${eventos.image} class="w-100" alt="...">
        </div>
        <div class="col-md-6 p-4 ps-md-0">
          <h5 class="mt-0 background-color">Datos</h5>
          <a href="#" class="stretched-link details">Name: ${eventos.name}</a><br>
          <a href="#" class="stretched-link details">Fecha: ${eventos.date}</a><br>
          <a href="#" class="stretched-link details"> Description: ${eventos.description}</a><br>
          <a href="#" class="stretched-link details">Category: ${eventos.category}</a><br>
          <a href="#" class="stretched-link details">Place: ${eventos.place}</a><br>
          <a href="#" class="stretched-link details">Capacity: ${eventos.capacity}</a><br>
          <a href="#" class="stretched-link details">Assistance: ${eventos.assistance}</a><br>
          <a href="#" class="stretched-link details">price: ${eventos.price} $</a>
        </div>
        `;
        container.appendChild(div);
    });
};