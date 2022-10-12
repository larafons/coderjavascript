function getPersonajes(done) {
    const results= fetch("https://thronesapi.com/api/v2/Characters");
    
    results
    .then((response) => response.json())
    .then((data) => {
        done(data)
    });

}

getPersonajes(data=> {

    console.log(data)

    data.forEach(personaje => {
        
        const ar = document.createRange().createContextualFragment(/*html*/`
            <article>
            
                <div class="image-container">
                    <img src="${personaje.imageUrl}" alt="">
                </div>

                <h2>${personaje.fullName}</h2>
                <h4>${personaje.family}</h3>
                <h5>${personaje.title}</h4>

            </article>
        `);

        const main = document.querySelector("main");
        main.append(ar)
    })
})