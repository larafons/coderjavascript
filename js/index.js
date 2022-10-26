const peliculas= [
    {
        id: 1,
        nombre: 'Iron Man 1',
        imagen: "../img/Iron_Man_1.webp",
        link: 'https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu'
    },
    {
        id: 2,
        nombre: 'Thor: Love and Thunder',
        imagen: '../img/Thor_Love_and_Thunder.jpg',
        link: 'https://www.disneyplus.com/es-419/movies/thor-amor-y-trueno/3htR8mRAZMoT'
    },
    {
        id: 3,
        nombre: 'Avengers: Endgame',
        imagen: '../img/Avengers_Endgame.jpeg',
        link: 'https://www.disneyplus.com/es-419/movies/avengers-endgame-de-marvel-studios/aRbVJUb2h2Rf'
    },
    {
        id: 4,
        nombre: 'Doctor Strange on the Multiverse of Madness',
        imagen: '../img/Doctor_Strange_2.webp',
        link: 'https://www.disneyplus.com/es-419/movies/doctor-strange-en-el-multiverso-de-la-locura/27EiqSW4jIyH'
    },
    {
        id: 8,
        nombre: 'Eternals',
        imagen: '../img/ethernals.jpg',
        link: 'https://www.disneyplus.com/es-419/movies/eternals/5cmhJAtkt6Jk'
    },
    {
        id: 9,
        nombre: 'Captain America: Civil War',
        imagen: '../img/capitan_america.webp',
        link: 'https://www.disneyplus.com/es-419/movies/capitan-america-civil-war-de-marvel-studios/4ovfyKnnIBCg'
    },
    {
        id: 10,
        nombre: 'Black Panther 1',
        imagen: '../img/black_panther.jpg',
        link: 'https://www.disneyplus.com/es-419/movies/pantera-negra-de-marvel-studios/1GuXuYPj99Ke'
    }
]

const series = [
    {
        id: 5,
        nombre: 'Euphoria',
        imagen: '../img/euphoria.jpg',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GXKN_xQX5csPDwwEAAABj:type:series'
    },
    {
        id: 6,
        nombre: 'House of The Dragon',
        imagen: '../img/La_Casa_del_Dragon.jpg',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GYsYeoAxKH8LCwgEAAAOR:type:series'
    },
    {
        id: 7,
        nombre: 'Game Of Thrones',
        imagen: "../img/GOT.jpg",
        link: 'https://play.hbomax.com/page/urn:hbo:page:GVU2cggagzYNJjhsJATwo:type:series'
    },
    {
        id: 8,
        nombre: 'Pretty Little Liars',
        imagen: "../img/pll.jpeg",
        link: 'https://play.hbomax.com/page/urn:hbo:page:GXdMTbQrnTaXCPQEAAA9W:type:series'
    },
    {
        id:9,
        nombre: 'Anne with an E',
        imagen: '../img/annewithane.jpg',
        link: 'https://www.netflix.com/search?q=anne&jbv=80136311'
    },
    {
        id:10,
        nombre: 'Fate: The Winx Saga',
        imagen: '../img/fate.jpg',
        link: 'https://www.netflix.com/browse?jbv=80220679'
    },
    {
        id:11,
        nombre: 'Bridgerton',
        imagen: '../img/bridgerton.jpeg',
        link: 'https://www.netflix.com/browse?jbv=80232398'
    }
]

const buscarSwal = document.getElementById("buscarswal")

let pelilistada= false //para que no se dupliquen las peliculas
let serielistada= false
let favslistada= false
let i=localStorage.length //contador para favoritos

function comprobarContenido(contenido, lista){
    return lista.some( item => item.nombre.toLowerCase().includes(contenido.toLowerCase()))
}

function buscar() {
    Swal.fire({
        title: 'Que pelicula o serie que estas buscando?',
        input: 'text',
        icon: 'question',
        inputPlaceholder: "Ingresa el nombre del contenido",
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        cancelButtonText: 'Cancelar',
        inputValidator: input => {
            let estaEnCartelera = false
            estaEnCartelera= comprobarContenido(input, peliculas)
            if (!estaEnCartelera){
                estaEnCartelera= comprobarContenido(input, series)
            }

            if (estaEnCartelera){
                Swal.fire({
                    title: 'El contenido se encuentra en nuestra cartelera!',
                    icon: 'success',
                })
            }
            else {
                Swal.fire({
                    title: 'El contenido desgraciadamente no se encuentra en nuestra cartelera :(',
                    icon: 'error',
                })
            }
                    
                }
        })
}

function listar(lista1, lista2){
    for (const elemento of lista2){
        let li = document.createElement("li")
        let img = document.createElement("img")
        let a= document.createElement("a")
        let addfav= document.createElement("a")
        let br= document.createElement("br")
        li.innerHTML = elemento.nombre
        img.setAttribute('src', elemento.imagen)
        a.innerHTML= "Quiero verla!"
        a.setAttribute('href', elemento.link)
        addfav.innerHTML="Agregar a favoritas"
        addfav.setAttribute("type", "button")
        addfav.setAttribute("href", "#")
        addfav.onclick = () =>{
            localStorage.setItem(i, elemento.nombre)
            i++} //el unico operador avanzado que se me ocurrio usar 
        lista1.appendChild(li)
        lista1.appendChild(img)
        lista1.appendChild(br)
        lista1.appendChild(a)
        lista1.appendChild(addfav)
    }
}

function listarpelis(){
    let listapelis= document.getElementById("listapelis")
    document.getElementById("titulopelis").innerHTML= "Peliculas disponibles: "
    if (!pelilistada) {
        listar(listapelis, peliculas)
        pelilistada= true
    }
}

function listarseries(){
    let listaseries= document.getElementById("listaseries")
    document.getElementById("tituloseries").innerHTML= "Series disponibles: "
    if (!serielistada) {
        listar(listaseries, series)
        serielistada= true
    }
}

function verFavs(){
    let listafavs= document.getElementById("listafavs")
    listafavs.innerHTML= ""
    document.getElementById("titulofavs").innerHTML= "Contenido favorito: "
    if (!favslistada){
        for (let i = 0; i < localStorage.length; i++){
            let clave = localStorage.key(i)
            let elemento = localStorage.getItem(clave)
            let li = document.createElement("li")
            li.innerHTML= elemento
            listafavs.appendChild(li)
        }
    }
}