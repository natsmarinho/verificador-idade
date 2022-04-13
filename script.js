function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById("txtano")
    let result = document.getElementById("res")

    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        alert("Verifique os dados e tente novamente")
    } else{
        let genero = document.getElementsByName("gen")
        let idade = ano - Number(formAno.value)
        let gen = ``
        let pic = document.createElement('img')
        pic.setAttribute('id', 'imagem')
        if(genero[0].checked){
            result.style.textAlign = 'center'
            gen = "masculino"
            if(idade >= 0 && idade < 12){
                //criança
                pic.setAttribute('src', './imagens/bebe-menino.png')
                pic.width = "500"
            } else if(idade < 21){
                //jovem
                pic.setAttribute('src', './imagens/homem-jovem.png')
                pic.width = "500"
            } else if(idade < 55){
                //adulto
                pic.setAttribute('src', './imagens/homem.png')
                pic.width = "500"
            } else{
                //idoso
                pic.setAttribute('src', './imagens/idoso-homem.png')
                pic.width = "500"
            }
        } else if(genero[1].checked){
            result.style.textAlign = 'center'
            gen = "feminino"
            if(idade >= 0 &&  idade < 12){
                //criança
                pic.setAttribute('src', './imagens/bebe-menina.png')
                pic.width = "500"
            } else if(idade < 21){
                //jovem
                pic.setAttribute('src', './imagens/mulher-jovem.png')
                pic.width = "500"
            } else if(idade < 55){
                //adulto
                pic.setAttribute('src', './imagens/mulher.png')
                pic.width = "500"
            } else{
                //idoso
                pic.setAttribute('src', './imagens/idosa-mulher.png')
                pic.width = "500"
            }
        } else if(genero[2].checked){
            result.style.textAlign = 'center'
            gen = "não-binárie"
            if(idade >= 0 &&  idade < 12){
                //criança
            } else if(idade < 21){
                //jovem
            } else if(idade < 55){
                //adulto
            } else{
                //jovem
            }
        } else{
            result.style.textAlign = 'center'
            gen = "não especificado"
            if(idade >= 0 &&  idade < 12){
                //criança
            } else if(idade < 21){
                //jovem
            } else if(idade < 55){
                //adulto
            } else{
                //jovem
            }
        }
        result.innerHTML = `Detectamos o genêro ${gen} com idade de ${idade} anos.`
        result.appendChild(pic)
    }
}