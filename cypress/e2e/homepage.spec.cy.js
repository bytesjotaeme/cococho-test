describe('Test de navegación y compra en CocochoWeb', () => {
  it('Visitar la página, navegar y hacer una compra simulada', () => {
    // Visitar la página principal
    cy.visit('https://front-cocochoweb.vercel.app/')
    
    // Esperar a que la página esté completamente cargada
    cy.document().its('readyState').should('eq', 'complete')

    // Desplazar hasta el footer
    cy.scrollTo('bottom')
    cy.wait(2000) // Esperar 2 segundos para cargar todo el contenido

    // Volver a la parte superior
    cy.scrollTo('top')
    cy.wait(1000)

    // Hacer clic en todas las pestañas
    cy.contains('BEBÉ').click()
    cy.wait(2000)

    cy.contains('BEBA').click()
    cy.wait(2000)

    cy.contains('NIÑAS').click()
    cy.wait(2000)

    cy.contains('NIÑOS').click()
    cy.wait(2000)

    cy.contains('ACCESORIOS').click()
    cy.wait(2000)

    cy.contains('JUGUETES').click()
    cy.wait(2000)

    cy.contains('RODADOS').click()
    cy.wait(2000)

    // Volver a la categoría "Bebé"
    cy.contains('BEBÉ').click()
    cy.wait(2000)

   // Seleccionar el primer producto en la categoría "Bebé"
   cy.get('div._productCard_prysl_32').first().within(() => {
    // Hacer clic en "Detalle de Producto"
    cy.contains('Detalle de Producto').click()
  })
  cy.wait(2000)
    // Hacer clic en "Agregar al carrito"
    cy.contains('Agregar al carrito').click()
    cy.wait(2000)

    // Hacer clic en el carrito (icono en la barra superior)
    cy.get('path[d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"]').click()

    // Esperar a que el carrito se cargue
    cy.wait(2000)

    // Hacer clic en "Iniciar compra por WhatsApp"
    cy.contains('Iniciar Compra por Whatsapp').click()
    cy.end()
  })
})
