import { random } from "../../../utils/helpers";

const getBadgePhotoPath = (score) => {
    if( 0 <= score <= 19) {
        return "/assets/badges/badge1.png";
    } else if(20 <= score <= 39) {
        return "/assets/badges/badge2.png";
    } else if (40 <= score <= 59) {
        return "/assets/badges/badge3.png";
    } else if(60 <= score <= 79) {
        return "/assets/badges/badge4.png";
    } else if(80 <= score <= 100) {
        return "/assets/badges/badge5.png";  
    } else {
        return "/assets/badges/badge6.png";
    }
};
// TODO : TO BE ADDED IN ASSETS

const usersIcons = [
    "assets/usersicons/icon1.png",
    "assets/usersicons/icon2.png",
    "assets/usersicons/icon3.png",
    "assets/usersicons/icon4.png",
    "assets/usersicons/icon5.png",
    "assets/usersicons/icon6.png",
    "assets/usersicons/icon7.png",
    "assets/usersicons/icon8.png",
    "assets/usersicons/icon9.png",
];
// TODO : TO BE ADDED IN ASSETS

const randomNames = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Sally Ride",
  "Carl Sagan",
  "Galileo Newton",
  "Isaac Kepler",
  "Tycho Copernicus",
  "Juno Vega",
  "Orion Hale",
  "Cassini Drake",
  "Luna Shepard",
  "Nova Hawking",
  "Kepler Fermi",
  "Halley Turing",
  "Apollo Tyson",
  "Vega Maxwell",
  "Curie Pulsar",
  "Newton Halley",
  "Tesla Galilei",
  "Chandra Euler",
  "Lyra Kepler",
  "Quasar Lovelace",
  "Phoenix Darwin",
  "Pioneer Hertz",
  "Europa Chandrasekhar",
  "Astra Planck",
  "Cosmo Dirac",
  "Orion Laplace",
  "Mercury Clarke",
  "Voyager Newton",
  "Hubble Drake",
  "Aurora Franklin",
  "Zenith Pascal",
  "Comet Huygens",
  "Sputnik Bohr",
  "Lagrange Tesla",
  "Orbit Copernicus",
  "Nebula Oppenheimer",
  "Astro Noether",
  "Solstice Kelvin",
  "Eclipse Chandrasekhar",
  "Jupiter Faraday",
  "Andromeda Curie",
  "Celeste Hawking",
  "Pulsar Euler",
  "Nova Lovelace",
  "Cosmos Heisenberg",
  "Stellar Gauss",
  "Galaxy Dirac"
];


export const generateFakeUsers = (n) => {
    const fakeUsers = [];
    for(let i = 1 ; i <= n ; ++i) {
        const fakeUser = {
            userName: randomNames[random(0,randomNames.length-1)],
            userIcon: usersIcons[random(0,usersIcons.length-1)],
            score: random(0,200),
        };

        fakeUser.badge =  getBadgePhotoPath(fakeUser.score);
        fakeUsers.push(fakeUser);
    }

    return fakeUsers;
}