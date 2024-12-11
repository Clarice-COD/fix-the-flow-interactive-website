// Doe bovenstaande voor elke input op de pagina..


// QuerySelectorAll zorgt dat alle elementen die de input hebben worden geselecteerd
let alleInputsOpDePagina = document.querySelectorAll('input')

// forEach zorgt ervoor dat elke input een functie krijgt
alleInputsOpDePagina.forEach(function(huidigeInput) {
    huidigeInput.addEventListener('invalid', function (){
        huidigeInput.setCustomValidity('Dit veld is nog niet ingevuld')
    });
    
    huidigeInput.addEventListener('input', function() {
        huidigeInput.setCustomValidity('')
    })
})