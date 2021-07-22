const axios = require("axios")
const md5 = require("md5")

let apikey = "6bbad796eed60f89f7fc98e6039f22a1"
let privat = "536356b62186a1b045b8a8f11ff7aa1c5cd24e58"
let ts = Math.floor(Date.now() / 1000);
let hash = md5(ts + privat + apikey)

//public 6bbad796eed60f89f7fc98e6039f22a1  == apikey
//privat 536356b62186a1b045b8a8f11ff7aa1c5cd24e58
//ts = hora
//md5 = md5 (ts + privateKey + publicKey)

async function list() {

    let resultado = await axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`)

    let getImg = []

    resultado.data.data.results.forEach(element => {
        let path = element.thumbnail.path
        let extension = element.thumbnail.extension
        getImg.push( path + "." + extension )
    });
    console.log(getImg);
    return getImg 
}

list()