export const printEvents = (container, arrayEventos, allEvenets) => {
  container.innerHTML = "";

  const carouselInner = document.createElement("div");

  carouselInner.classList.add("carousel-inner");

  const groupSize = 4;
  const groupCount = Math.ceil(arrayEventos.length / groupSize);

  for (let i = 0; i < groupCount; i++) {

    const groupStartIndex = i * groupSize;
    const groupEndIndex = groupStartIndex + groupSize;
    const groupEvents = arrayEventos.slice(groupStartIndex, groupEndIndex);
    console.log(groupEvents);

    const div = document.createElement("div");
    div.classList.add("carousel-item");

    if (i === 0) {
      div.classList.add("active");
    }

    const row = document.createElement("div");
    row.classList.add("row");

    groupEvents.forEach((eventos) => {
      const eventDiv = document.createElement("div");
      eventDiv.classList.add("col", "col-lg-3", "col-md-4", "col-sm-12");
      eventDiv.innerHTML = `
        <div class="border px-5">
          <figure class="mt-2">
            <img src=${eventos.image} class="img-fluid" alt="" id=img_card>
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

      row.appendChild(eventDiv);
    });

    div.appendChild(row);
    carouselInner.appendChild(div);
  }
  carouselInner.children[0].classList.add("active");

  const carousel = document.createElement("div");
  carousel.classList.add("carousel", "slide");
  carousel.setAttribute("data-bs-ride", "carousel"); 
  carousel.setAttribute("data-bs-interval", "3000"); 

  carousel.appendChild(carouselInner);
  container.appendChild(carousel);

};


