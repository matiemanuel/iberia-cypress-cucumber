# iberia-cypress-cucumber
Iberia's webapp automation POC using Cypress and BDD (Cucumber)

Simular un usuario que realiza los siguientes pasos:
✓ Ir a https://www.iberia.com/
✓ Selecciona un billete de ida y vuelta de Barcelona a Madrid, con 2 adultos
y 1 niño.
✓ La fecha de salida debe de ser 4 días desde la fecha de ejecución de la
prueba, y la fecha de regreso es 3 días después de la fecha de salida.
✓ El usuario hace click en “Buscar vuelos”.
✓ El usuario selecciona un vuelo de ida al azar de la lista de resultados.
✓ La tarifa seleccionada (Basic, Optima o Excelente) debe ser configurable.
✓ El usuario selecciona un vuelo de vuelta al azar de la lista de resultados.
✓ La tarifa seleccionada (Basic, Optima o Excelente) debe ser configurable.
✓ El usuario hace click en “Continuar”.

Requerimientos:
✓ La automatización debe de ser realizada en Cypress.
✓ Gherkin, BDD y Cucumber.
✓ Reporting.
✓ Patrones de diseño Page Object Model.
✓ IDE Visual Studio Code.