// procurar o botao 
//quando clicar no botao
document.querySelector("#add-time")
.addEventListener('click',cloneField)

//Executar uma ação 
function cloneField() {
    // duplicar os campos. Que campos?
    // colocar na página
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar 
    fields.forEach(function(field){
        // pegar o field do momento 

       field.value = ""
    })

    // colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}