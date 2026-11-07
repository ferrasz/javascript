// const title = document.getElementById("title")

// title.innerText = "Troquei"
// const paragrafo = document.getElementById("paragrafo")
// paragrafo.style.color = "aqua"
// paragrafo.style.fontSize = "90px"
// paragrafo.style.backgroundColor = "blue"

// const timao = document.getElementById("timao")
// timao.style.color = "red"
// timao.style.backgroundColor = "black"
// timao.style.fontSize = "60px"

// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//     paragrafo.innerText = "VAAAI CURINTIAA"
//     paragrafo.style.color = "blue"
//     alert("Deu certo!!")
// })

// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")
// const img = document.getElementById("img")

// btn.addEventListener("mouseover", function(){
//     paragrafo.innerText = "Texto alterado com sucesso!"
//     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROo7RCy5pFsyr5c7aSMNSkMpFg_o2QJ0bE0jmt0la0BHk8Q1uKHEjbHg8w&s=10"
// })

document.addEventListener("keydown", function(e){
    if(e.key === "r"){
        document.body.style.backgroundColor = "red"
    }else if(e.key === "g"){
        document.body.style.backgroundColor = "green"
    }else if(e.key === "b"){
        document.body.style.backgroundColor = "blue"
    }else{
        document.body.style.backgroundColor = "aqua"
    }
})