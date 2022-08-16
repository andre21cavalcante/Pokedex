export const pokeId = (url) =>{
    let idString = url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")

if(idString.length === 1){
    idString = "00" + idString
}else if(idString.length === 2){
    idString = "0" + idString
}

return idString
}

export const idGet = (url)=>{
    return url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
}