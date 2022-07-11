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

ProvinciaPath.findByName("imbabura")

