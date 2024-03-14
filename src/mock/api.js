const productos =[
    //postimage pagina para imagenes
    {
        id:"1",
        name:"Guitarra",
        stock:13,
        price:1000,
        description:"Esta guitarra eléctrica combina un diseño elegante con un sonido potente y versátil. Construida con materiales de alta calidad y una artesanía excepcional",
        image:"../images/guitarra.png",
        category:"cuerda"
    },
    {
        id:"2",
        name:"Bajo",
        stock:17,
        price:1500,
        description:"Sumérgete en el ritmo profundo y envolvente con este impresionante bajo eléctrico. Diseñado para ofrecer un sonido sólido y potente, este bajo combina una estética elegante con un rendimiento excepcional.",
        image:"../images/bajo.png",
        category:"cuerda"
    },
    {
        id:"3",
        name:"Trompeta",
        stock:10,
        price:1500,
        description:"Sumérgete en el mundo del jazz y la música clásica con esta hermosa trompeta. Con un diseño elegante y una construcción de alta calidad, este instrumento ofrece tonos brillantes y claros que se destacan en cualquier arreglo musical",
        image:"../images/trompeta.png",
        category:"viento"
    },
    {
        id:"4",
        name:"Bateria",
        stock:5,
        price:1500,
        description:"Experimenta la energía y la potencia de la percusión con esta impresionante batería. Diseñada para dominar el ritmo en cualquier escenario, esta batería combina calidad de sonido excepcional con durabilidad y estilo",
        image:"../images/bateria.png",
        category:"percusion"
    },
    {
        id:"5",
        name:"Tambores",
        stock:14,
        price:1500,
        description:"Sumérgete en el ritmo apasionante de la música latina con estos vibrantes tambores. Con su diseño compacto y su sonido distintivo, son la elección perfecta para añadir un toque de sabor y ritmo a cualquier interpretación",
        image:"../images/tambores.png",
        category:"percusion"
    },
    {
        id:"6",
        name:"Saxofón",
        stock:7,
        price:1500,
        description:"Desde los dulces susurros del jazz hasta las vibraciones ardientes del funk. Tanto si eres un saxofonista aficionado como un profesional consumado, este saxofón será tu herramienta para expresarte con pasión y estilo único",
        image:"../images/saxofón.png",
        category:"viento"
    },
]

export const getProducts =() => {
    let error= false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject("Algo salio mal")
            }else{
                resolve(productos)
            }
        },1000)
    })
}

export const getOneProduct=(id)=>{
    let error =false
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(error){
                reject("Hubo un problema")
            }else{
                let product= productos.find((item)=>item.id=== id)
                resolve(product)
            }
        },1000)
    })
}