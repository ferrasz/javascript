fetch("https://potterapi-fedeperin.vercel.app/pt/characters")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })