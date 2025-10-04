export const maps = [
  {
    category: "moon",
    btitle: "Moon",
    bdescription: "Explore the first human landing site",
    url: "https://test.cu-portal.com/moon/tiles/{z}/{x}/{y}.png",
    bounds: [[-56.000821594000016, -180.0000288],[83.99917840599998, 179.9999712]],
    zoomRange: [2,6],
    tms: false,
    modelUrl: "/moon2.glb",
    size: 0.34,
    stroies: [
      {
        coordinates: [12.34, 56.78],
        markerTitle: "Apollo 13 Successful Failure (1970)",
        sound: "/stories/data/appollo.mp3",
        title: "Apollo 13 — The ‘Successful Failure",
        photo: "/stories/data/appollo.png",
        content: "First human landing site on the moon."
      }
    ]
  },
  {
    category: "earth",
    btitle: "Soil",
    bdescription: "Check fertile agricultural areas",
    url: "https://test.cu-portal.com/soil/tiles/{z}/{x}/{y}.png",
    bounds: [[-56.000821594000016, -180.0000288],[83.99917840599998, 179.9999712]],
    zoomRange: [1,7],
    tms: false,
    modelUrl: "/soil.glb",
    size: 0.35,
    stroies: [
      {
        coordinates: [34.56, -123.45],
        markerTitle: "Soil Sample Area",
        sound: "/stories/data/soil.mp3",
        title: "Fertile Soil",
        photo: "/stories/data/Jezero Crater - The River Delta of Pr.png",
        content: "This area has rich agricultural soil."
      }
    ]
  },
  {
    category: "earth",
    btitle: "GFSAD",
    bdescription: "View dense forest regions",
    url: "https://test.cu-portal.com/gfsad/tiles/{z}/{x}/{y}.png",
    bounds: [[-56.000821594000016, -180.0000288],[83.99917840599998, 179.9999712]],
    zoomRange: [1,6],
    tms: false,
    modelUrl: "/models copy/scene.gltf",
    size:1.8,
    stroies: [
      {
        coordinates: [-12.34, 98.76],
        markerTitle: "Global Forest Site",
        sound: "/stories/data/Valles Marineris — The Grand Canyon.mp3",
        title: "Rainforest Zone",
        photo: "/stories/data/Valles Marineris - The Grand Canyon.png",
        content: "Dense rainforest region with diverse wildlife."
      }
    ]
  },
  {
    category: "mars",
    btitle: "Mars",
    bdescription: "Explore the rover landing site",
    url: "https://test.cu-portal.com/mars/tiles/{z}/{x}/{y}.png",
    bounds: [[-56, -180],[84, 180]],
    zoomRange: [2,6],
    tms: false,
    modelUrl: "/mars2.glb",
    size: 0.55,
    stroies: [
      {
        coordinates: [10, 20],
        markerTitle: "Mars Rover Site",
        sound: "/stories/data/Gale Crater – The Mountain of Time.mp3",
        title: "Gale Crater - The Mountain of Time",
        photo: "/stories/data/Gale Crater - The Mountain of Time.png",
        content: "Site explored by Mars rover."
      }
    ]
  },
  {
    category: "earth",
    btitle: "Earth",
    bdescription: "Observe active sunspot regions",
    url: "https://test.cu-portal.com/earth_new/tiles/{z}/{x}/{y}.png",
    bounds: [[-90, -180],[90, 180]],
    zoomRange: [3,6],
    tms: false,
    modelUrl: "/models/scene.gltf",
    size: 2,
    stroies: [
      {
        coordinates: [80, -80],
        markerTitle: "Birth Of Earth",
        sound: "/stories/data/1. Birth of Earth.mp3",
        title: "Sunspot Area",
        photo: "/stories/data/Birth of the Himalayas.png",
        content: "Active sunspot region observed by telescope."
      }
    ]
  }
];