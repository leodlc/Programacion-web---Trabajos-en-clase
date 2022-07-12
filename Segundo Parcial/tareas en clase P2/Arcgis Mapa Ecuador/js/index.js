class ProvinciaCollection{
    constructor(items){
        this.items=items
    }
    first(){
        return new ProvinciaPath(this.items[0])
    }
    find(index){
        return new ProvinciaPath(this.items[index])
    }
    last(){

    }
    static get(){
        return new ProvinciaCollection(document.querySelectorAll("path"))
    }
}
class ProvinciaPath{
    constructor(element){
        this.element=element
    }

    fill(color){
        this.element.setAttribute("fill",color)

    }
    setPoblacion(population){
        this.element.setAttribute("population",population)
    }
    static findByName(name){
        return new ProvinciaPath(document.getElementById(name))
    }
    
}
/* console.log(ProvinciaCollection.get().find(2).fill("red")) */
