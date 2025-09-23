const propiedades_alquiler = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion: "Ubicado en una exclusiva zona residencial",
    ubicacion: "La Reina, Metro Plaza Egaña",
    habitaciones: 2,
    costo: 222222,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa Alquiler 2",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion: "Ubicada cerca de la municipalidad de Providencia.",
    ubicacion: "Providencia, Elkika",
    habitaciones: 3,
    costo: 321321321,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa Alquiler 3",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Un estudio perfecto para solteros en el centro.",
    ubicacion: "Municipalidad de Santiago, Santiago Historico",
    habitaciones: 1,
    costo: 123123123,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa Alquiler 4",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Cerca de la municipalidad de Las Condes.",
    ubicacion: "Las Condes, Metro el Golf",
    habitaciones: 2,
    costo: 11000,
    smoke: false,
    pets: true,
  },
];

const propiedades_venta = [
  {
    nombre: "Casa venta 1",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Cerca del Aeropuerto Internacional Arturo Merino.",
    ubicacion: "Pudahuel, Aeropuerto",
    habitaciones: 2,
    costo: 99999999999,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa venta 2",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Cerca de la Universidad de Concepción.",
    ubicacion: "Concepción, Barrio Universitario",
    habitaciones: 20,
    costo: 19000000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa venta 3",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "En una zona bendecida por la naturaleza.",
    ubicacion: "Coquimbo, Mezquitas",
    habitaciones: 1,
    costo: 2000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa venta 4",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Cerca del Hospital de Talca.",
    ubicacion: "Talca, Centro",
    habitaciones: 4,
    costo: 3212545884,
    smoke: false,
    pets: true,
  },
];

// === Contenedores ===
const ventasContainer = document.querySelector("#venta");
const alquileresContainer = document.querySelector("#alquiler");

// === Render genérico ===
const renderPropiedades = (lista, titulo, limite = null) => {
  let html = `<h5 class="mb-3">${titulo}</h5><div class="row">`;

  // si hay límite, cortamos el array
  const propiedadesAMostrar = limite ? lista.slice(0, limite) : lista;

  for (const propiedad of propiedadesAMostrar) {
    html += `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${propiedad.src}" class="card-img-top" alt="${
      propiedad.nombre
    }" />
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${
              propiedad.habitaciones
            } Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString(
              "es-CL"
            )}</p>

            ${
              propiedad.smoke
                ? '<p class="text-success"><i class="fas fa-smoking"></i> Se permite fumar</p>'
                : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
            }

            ${
              propiedad.pets
                ? '<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>'
                : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'
            }
          </div>
        </div>
      </div>
    `;
  }

  html += `</div>`;
  return html;
};

// === Cargadores específicos ===
function cargarPropiedadesVenta(limite = null) {
  if (!ventasContainer) return;
  ventasContainer.innerHTML = renderPropiedades(
    propiedades_venta,
    "Propiedades en venta",
    limite
  );
}

function cargarPropiedadesAlquiler(limite = null) {
  if (!alquileresContainer) return;
  alquileresContainer.innerHTML = renderPropiedades(
    propiedades_alquiler,
    "Propiedades en alquiler",
    limite
  );
}

// === Enrutado sencillo por nombre de archivo ===
document.addEventListener("DOMContentLoaded", () => {
  const paginaActual = window.location.pathname.split("/").pop().toLowerCase();

  if (paginaActual === "index.html" || paginaActual === "") {
    // 👇 Solo mostramos 3
    cargarPropiedadesVenta(3);
    cargarPropiedadesAlquiler(3);
  } else if (paginaActual === "propiedades_venta.html") {
    cargarPropiedadesVenta(); // todas
    if (alquileresContainer) alquileresContainer.style.display = "none";
  } else if (paginaActual === "propiedades_alquiler.html") {
    cargarPropiedadesAlquiler(); // todas
    if (ventasContainer) ventasContainer.style.display = "none";
  } else {
    // fallback
    cargarPropiedadesVenta(3);
    cargarPropiedadesAlquiler(3);
  }
});
