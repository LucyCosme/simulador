Markdown
# Simuladores Interactivos

> **Resumen:** Implementación de una página web para resolver la Ley de Enfriamiento de Newton y el cálculo de combinaciones para sorteos mediante lógica secuencial nativa.

Este repositorio fue creado con fines didácticos para la materia. El objetivo es mostrar de forma simple cómo funcionan estos dos simuladores matemáticos, explicando su lógica interna y cómo se estructuran sus archivos.

---

## Fundamento Teórico y Lógica

Antes de revisar el código, es importante entender qué problemas estamos resolviendo y cómo se pensó la solución.

- **El Problema:** Calcular a mano modelos físicos continuos (como la pérdida de calor) o espacios muestrales de probabilidad suele ser moroso y se presta a errores humanos al meter los datos a la calculadora.
- **La Solución:** Se programó un algoritmo lineal que separa las operaciones en bloques de código directos. Esto hace que el programa sea fácil de leer y evita que el navegador se sature al calcular factoriales grandes.

### Conceptos Clave Utilizados:
-  **Variables Primitivas:** Guardamos los datos de los formularios usando variables simples (`var`) para no consumir memoria de manera innecesaria.
-  **Estructura Plana:** El código se dividió por formularios independientes (Calor y Sorteo) para que no se mezclen los datos y sea más fácil defender el proyecto.

---

##  Arquitectura y Flujo del Sistema

Para entender cómo interactúan los archivos, el flujo de la información sigue este orden:

```text
[ Entrada de Datos en Formulario HTML ]
                 │
                 ▼
[ Módulo de Validación en script.js ] (Comprueba campos vacíos, negativos o r > n)
                 │
        ┌────────┴───────────────────┐
        ▼  SI                        ▼ NO
[ Procesamiento Matemático ]   [ Renderizado de Caja de Error ] (Clase CSS .error-box)
        │
        ▼
[ Inyección Dinámica al DOM ] (Muestra el resultado)
