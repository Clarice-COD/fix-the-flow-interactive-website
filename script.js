//////////////// FORMULIER
// QuerySelectorAll zorgt dat alle elementen die de input tag hebben worden geselecteerd
let alleInputsOpDePagina = document.querySelectorAll('input')

// forEach zorgt ervoor dat elke input een functie krijgt
alleInputsOpDePagina.forEach(function(huidigeInput) {
    huidigeInput.addEventListener('invalid', function() {
        huidigeInput.setCustomValidity('Dit veld is nog niet ingevuld')
    });
    
    huidigeInput.addEventListener('input', function() {
        huidigeInput.setCustomValidity('')
    })
});

//// BUTTON ACTIE STAPPENPLAN

// STAP 1: selecteer een element
let formBtn = document.querySelector('.form-btn')
let myForm = document.querySelector('form')
console.log(myForm)
console.log(formBtn)

// STAP 2 voeg een event toe
formBtn.addEventListener('click', function(event) {
    console.log(myForm.checkValidity())

    // STAP 3 ga naar een link zodra het formulier is ingevuld
    if(myForm.checkValidity())  {
        console.log("het is goed ingevuld")

        //toon feedback dat het is gelukt, met de classList kan je dan een claas aanroepen.
        //en na een paar seconde ga je naar een andere pagina?
        // window.location.href = "https://fdnd.nl" //redirect naar een andere pagina, als het form goed is ingevuld

        event.preventDefault() //zorg dat het formulier niet verstuurd wordt ...
    }

});

