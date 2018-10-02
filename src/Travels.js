import React from "react";

import Travel from "./Travel";


const travels = [
    {
        destination:"Beijing Jiaotong University",
        country:"China",
        photo:"https://d1gns46gm3ntni.cloudfront.net/institutes/institute9637/bjtu.jpg",
        distance:"8400km"

    },
    {
        destination:"Cancun",
        country:"Mexico",
        photo:"https://media-cdn.tripadvisor.com/media/photo-s/11/c7/d1/39/club-med-cancun-yucatan.jpg",
        distance:"8254km"

    },

    {
        destination:"Tokyo",
        country:"Japan",
        photo:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg?w968",
        distance:"9844 km"

    },
    {
        destination:"Amsterdam",
        country:"Pays-Bas",
        photo:"https://media-cdn.tripadvisor.com/media/photo-s/11/8e/b6/68/private-tour-amsterdam.jpg",
        distance:"1560km"

    },
    {
        destination:"Lyon",
        country:"France",
        photo:"https://media-cdn.tripadvisor.com/media/photo-s/10/74/6e/bd/lyon.jpg",
        distance:"0 km"

    }
];

const Travels = () => (
    <div>
        {travels.map(travel => (
            <Travel destinationl={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance} />
        ))}
    </div>
)

export default Travels;