const game={
    title:"sonic the hedgehog",
    year:1991,
    
}

function info(platform,character){
    console.log(`${this.title} was released in ${this.year} for${platform} it features the character ${character}`);
}

info.call(game,"sega","sonic")
info.apply(game,["sega","sonic"])
const gameInfo = info.bind(game,"sega","sonic")
gameInfo()