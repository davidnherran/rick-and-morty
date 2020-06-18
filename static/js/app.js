import API from './api.js'
const api = new API()
const $characterContainer = document.querySelector('#character-container')

class Character {
    constructor({ name, image }){
        this.name=name
        this.image=image
        this.render()
    }
    build(){ 
        return `
        <article class="character">
            <div class="character-grid">
               <h2>${this.name}</h2>
               <img src=${this.image} alt="">
            </div>
        </article>
        `
    }
    render(){
        $characterContainer.innerHTML = this.build()
    }
}


async function initApp(initCharacterId){
    const characterData = await api.getCharacter(initCharacterId)
        const rick=new Character(characterData)
}

initApp(2)