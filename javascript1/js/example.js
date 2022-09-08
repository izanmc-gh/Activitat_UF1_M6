function calcularAltura() {
    /*Declaro les variables de la funció per ferla servir després*/
    function isBetween(value, min, max) {
        return value >= min && value < max;
    }

    function avaluarAltura(altura) {
        let response = "";

        switch (true) {
            /*Faig les diferents variables per les altures*/
            case isBetween(altura, 1.40, 1.59):
                response = "Ets baix";
                break;
            case isBetween(altura, 1.60, 1.69):
                response = "Ets bastant baix";
                break;
            case isBetween(altura, 1.70, 1.79):
                response = "Ets bastant alt";
                break;
            case isBetween(altura, 1.80, 1.89):
                response = "Ets alt";
                break;
            case isBetween(altura, 1.90, 1.99):
                response = "Ets molt alt";
                break;
                /*Calculo si és un número el què entra*/
            case isNaN(altura):
                response = "No pots posar lletres";
                break;
                /*Si el número no està entre els rangs marcats també avisa*/
            default:
                response = "Has de posar un número entre el 1.40 i 1.99";
                break;
        }
        return response;
    }

    /*Agafo el valor de l'altura que he introduit*/
    let altura = document.getElementById("altura").value;

    /*Mostro els diferents missatges depenent del què hagis escollit*/
    document.getElementById("response").innerText = avaluarAltura(altura);
}

