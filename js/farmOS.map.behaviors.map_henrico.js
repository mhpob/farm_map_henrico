(function () {
  farmOS.map.behaviors.map_va = {
    attach: function (instance) {

      // From https://portal.henrico.us/image/rest/services/Imagery?f=pjson
      var basemaps = [
        { "name": "Imagery/AerialPhotos1998", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2002", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2003", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2007", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2008", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2009", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2011", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2012", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2013", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2015", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2016", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2017", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2018", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2021", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotos2022", "type": "ImageServer" },
        { "name": "Imagery/AerialPhotosCurrent", "type": "ImageServer" }
      ];

      basemaps.forEach(function(basemap) {
        // Add Virginia Basemaps
        var opts = {
          title: "Henrico " + basemap.name.split('/')[1],
          url: 'https://portal.henrico.us/image/rest/services/' + basemap.name + '/' + basemap.type,
          visible: false,
          base: true,
          group: 'Base layers',
        };
        instance.addLayer('arcgis-tile', opts);
      });

    }
  };
}());
