const data = [
    {
        id: 1,
        nombre: "Amoladora",
        marca: "DeWalt",
        precio: 2300,
        stock: 30,
        img: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2IXBbvmjtbrMjZSD8_-vtMcGUlrptkdYgw&usqp=CAU"
        },
        categoria: "Electrica"
    },
    {
        id: 2,
        nombre: "Atornillador",
        marca: "Black&Decker",
        precio: 3000,
        stock: 20,
        img: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-TKO8CW9bUp2zhUzio09Kv9VvuArWvqYHs1PHm-idABMHke_UJuyxJhEEALZuP77xm0&usqp=CAU"
        },
        categoria: "Electrica"

    },
    {
        id: 3,
        nombre: "Taladro",
        marca: "Bosch",
        precio: 4500,
        stock: 25,
        img: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS81ObcUkw9lktJMVLLZCbWlGKZbzrE21BJA&usqp=CAU"
        },
        categoria: "Electrica"
    },
    {
        id: 4,
        nombre: "Sierra Circular",
        marca: "Bosch",
        precio: 5600,
        stock: 23,
        img: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZNXhk1UQeGl5pldZOvitNwiGGJJnmslWz-y1h-RppRRz-7d00Rh6hX9dxsSu6DqpeOg&usqp=CAU"
        },
        categoria: "Electrica"
    },
    {
        id: 5,
        nombre: "Pistola de Calor",
        marca: "DeWalt",
        precio: 3500,
        stock: 10,
        img: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBK613v6WtMwXWSeD9PFBGPtQ9LNZCIPl68AvwR87AVIkZzSSLFdGuj-A-65P3sVP6HzU&usqp=CAU"
        },
        categoria: "Electrica"
    },
    {
        id: 6,
        nombre: "Lijadora Orbital",
        marca: "Black&Decker",
        precio: 2750,
        stock: 10,
        img: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKahiQqJ0hIOF6HCoFHhTR0wKKsKRog5ydAo4iMAqwPFrAzuArEgawT6X6xL1Nd6NTSc&usqp=CAU"
        },
        categoria: "Electrica"
    },
    {
        id: 7,
        nombre: "Set Llaves",
        marca: "Bosch",
        precio: 2750,
        stock: 50,
        img:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZk66zQqkW649PzXSITFtYF_usU43Vj6IJcg&usqp=CAU"
        },
        categoria: "Manual"
    },
    {
        id: 8,
        nombre: "Martillo",
        marca: "DeWalt",
        precio: 350,
        stock: 45,
        img: {
            url: "https://indufer.com.ar/wp-content/uploads/2018/07/martillo-carpintero-stanley-51271-D_NQ_NP_607618-MLV26988783339_032018-F-1.jpg"
        },
        categoria: "Manual"
    },
    {
        id: 9,
        nombre: "Set Llaves Allen",
        marca: "Bremen",
        precio: 1250,
        stock: 5,
        img:{
            url: "https://http2.mlstatic.com/D_NQ_NP_742149-MLA31020578768_062019-O.webp"
        },
        categoria: "Manual"
    },
    {
        id: 10,
        nombre: "Destornillador",
        marca: "Bremen",
        precio: 650,
        stock: 17,
        img: {
            url: "https://http2.mlstatic.com/D_NQ_NP_802135-MLA43195892556_082020-O.webp"
        },
        categoria: "Manual"
    },
    {
        id: 11,
        nombre: "Sierra",
        marca: "Black&Decker",
        precio: 275,
        stock: 36,
        img: {
            url: "https://www.demaquinasyherramientas.com/wp-content/uploads/2017/02/Bahco-Arco-de-sierra-junior.jpg"
        },
        categoria: "Manual" 
    },
    {
        id: 12,
        nombre: "Pinza Universal",
        marca: "Bremen",
        precio: 180,
        stock: 15,
        img:{
            url: "https://www.sinergiaindustrial.com.ar/images/AC5391E22E744CF8A474C376EE16A637.jpg"
        },
        categoria: "Manual"
    }
    
]


export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(data);
        }, 2000)
    })
}