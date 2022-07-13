require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer"],
function(Map,MapView,FeatureLayer){
    var visor= new Map({
        basemap:"satellite"
    });
    let vistaVisor = new MapView({
        container:"miMapa",
        map:visor,
        center:[-78.183406,-1.831239], //longitud, latitud
        zoom:7
    });
    var provincia = new FeatureLayer({
        url:"",
        /* title:"Provincias" */
    });
    visor.add(provincia);
});