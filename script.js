// Mostrar el año actual
document.getElementById("year").textContent = new Date().getFullYear();

// Función para mostrar el catálogo
function mostrarCatalogo() {
    const catalogoHTML = `
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Catálogo de Computación</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                header {
                    background-color: #333;
                    color: white;
                    padding: 20px;
                    text-align: center;
                }
                h1 {
                    margin: 0;
                }
                h2 {
                    margin-top: 20px;
                }
                section {
                    margin: 20px;
                }
                article {
                    background-color: #f4f4f4;
                    padding: 20px;
                    margin: 10px 0;
                    border-radius: 5px;
                }
                footer {
                    background-color: #333;
                    color: white;
                    text-align: center;
                    padding: 10px;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Proveedor de Computación XYZ</h1>
                <img src="https://via.placeholder.com/150" alt="Logo" />
            </header>

            <h2 style="text-align: center;">Alumno: Victor Quintero</h2>

            <section>
                <h3>Catálogo de Productos</h3>
                <article>
                    <h4>Producto 1: Laptop Gaming</h4>
                    <p>Descripción: Laptop de alto rendimiento para juegos intensivos.</p>
                    <p>Precio: $1,200</p>
                </article>
                <article>
                    <h4>Producto 2: Monitor Curvo</h4>
                    <p>Descripción: Monitor ultra ancho con curvatura para mayor inmersión.</p>
                    <p>Precio: $500</p>
                </article>
                <article>
                    <h4>Producto 3: Teclado Mecánico</h4>
                    <p>Descripción: Teclado con retroiluminación RGB y teclas mecánicas.</p>
                    <p>Precio: $120</p>
                </article>
                <article>
                    <h4>Producto 4: Ratón Gaming</h4>
                    <p>Descripción: Ratón con sensores de alta precisión y múltiples botones programables.</p>
                    <p>Precio: $60</p>
                </article>
            </section>

            <footer>
                <p>&copy; <span id="year"></span> Computación y más, noches de locura los jueves</p>
            </footer>

            <script>
                // Mostrar el año actual
                document.getElementById("year").textContent = new Date().getFullYear();
            </script>
        </body>
        </html>
    `;
    
    const nuevaVentana = window.open();
    nuevaVentana.document.write(catalogoHTML);
    nuevaVentana.document.close();
}
