function calcularCalor() {
    var t0_valor = document.getElementById("t0").value;
    var ts_valor = document.getElementById("ts").value;
    var k_valor = document.getElementById("k").value;
    var t_valor = document.getElementById("tiempo").value;
    
    var contenedor = document.getElementById("resultado-calor");

    var t0 = parseFloat(t0_valor);
    var ts = parseFloat(ts_valor);
    var k = parseFloat(k_valor);
    var tiempo = parseFloat(t_valor);

    if (isNaN(t0) || isNaN(ts) || isNaN(k) || isNaN(tiempo)) {
        contenedor.className = "result-box error-box";
        contenedor.innerHTML = "Error: Todos los campos son obligatorios y deben ser numéricos.";
        return;
    }

    if (tiempo < 0) {
        contenedor.className = "result-box error-box";
        contenedor.innerHTML = "Error: El tiempo (t) no puede ser un valor negativo.";
        return;
    }

    var exponente = -k * tiempo;
    var parteExponencial = Math.exp(exponente);
    var temperaturaFinal = ts + (t0 - ts) * parteExponencial;
    var resultadoRedondeado = Math.round(temperaturaFinal);

    contenedor.className = "result-box";
    contenedor.innerHTML = "Temperatura Final: <span>" + resultadoRedondeado + " °F</span>";
}

function calcularCombinacionesSorteo() {
    var n1_valor = document.getElementById("n1").value;
    var r1_valor = document.getElementById("r1").value;
    var n2_valor = document.getElementById("n2").value;
    var r2_valor = document.getElementById("r2").value;
    
    var contenedor = document.getElementById("resultado-combinaciones");

    var n1 = parseInt(n1_valor);
    var r1 = parseInt(r1_valor);
    var n2 = parseInt(n2_valor);
    var r2 = parseInt(r2_valor);

    if (isNaN(n1) || isNaN(r1) || isNaN(n2) || isNaN(r2)) {
        contenedor.className = "result-box error-box";
        contenedor.innerHTML = "Error: Todos los campos del sorteo son obligatorios.";
        return;
    }

    if (r1 > n1 || r2 > n2) {
        contenedor.className = "result-box error-box";
        contenedor.innerHTML = "Error de validación: El valor de 'r' no puede ser mayor que 'n'.";
        return;
    }

    if (n1 < 0 || r1 < 0 || n2 < 0 || r2 < 0) {
        contenedor.className = "result-box error-box";
        contenedor.innerHTML = "Error: No se permiten valores numéricos negativos.";
        return;
    }

    var factN1 = 1;
    for (var i = 2; i <= n1; i++) {
        factN1 = factN1 * i;
    }

    var factR1 = 1;
    for (var i = 2; i <= r1; i++) {
        factR1 = factR1 * i;
    }

    var resta1 = n1 - r1;
    var factResta1 = 1;
    for (var i = 2; i <= resta1; i++) {
        factResta1 = factResta1 * i;
    }

    var combinaciones1 = factN1 / (factR1 * factResta1);

    var factN2 = 1;
    for (var i = 2; i <= n2; i++) {
        factN2 = factN2 * i;
    }

    var factR2 = 1;
    for (var i = 2; i <= r2; i++) {
        factR2 = factR2 * i;
    }

    var resta2 = n2 - r2;
    var factResta2 = 1;
    for (var i = 2; i <= resta2; i++) {
        factResta2 = factResta2 * i;
    }

    var combinaciones2 = factN2 / (factR2 * factResta2);

    var totalSorteo = combinaciones1 * combinaciones2;

    contenedor.className = "result-box";
    contenedor.innerHTML = "Total de Combinaciones: <span>" + totalSorteo + "</span>";
}