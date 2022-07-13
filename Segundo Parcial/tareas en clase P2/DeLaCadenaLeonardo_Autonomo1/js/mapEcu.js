require(["esri/Map", "esri/views/MapView","esri/layers/FeatureLayer"], (Map, MapView,FeatureLayer) => {
    const map = new Map({
      basemap: "topo-vector"
    });
    const view = new MapView({
      container: "viewDiv", // Reference to the view div created in step 5
      map: map, // Reference to the map object created before the view
      zoom: 6, // Sets zoom level based on level of detail (LOD)
      center: [-78.183406, -1.831239] // Sets center point of view using longitude,latitude
    });
    //Datos de la ruta de vuelo de los pajaros Albatroses de Galapagos //link del mapa en arcgis:
    /* https://www.arcgis.com/home/webmap/viewer.html?url=https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Galapagos_Albatrosses/FeatureServer/0&source=sd */
    var ruta = new FeatureLayer({
        url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Galapagos_Albatrosses/FeatureServer/1",
        /* url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Galapagos_Albatrosses/FeatureServer/0", */
        title:"lines",
        /* title:"points" */
    });
    visor.add(ruta);
  });