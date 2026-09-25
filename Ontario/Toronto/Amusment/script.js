const amusementPlaces = [

    {
        name: "Canada's Wonderland",

        image: "Canada'sWonderland.jpg",

        description: "Canada’s Wonderland is a large amusement park located in Vaughan, Ontario, just north of Toronto. Opened in 1981, the park covers a large area and features multiple themed sections, roller coasters, and the Splash Works water park. One of its most recognizable features is Wonder Mountain, a large mountain-shaped structure that has become a symbol of the park.",

        website: "https://www.sixflags.com/canadaswonderland",

        location: "1 Canada's Wonderland Drive, Vaughan, ON L6A 1S6",

        locationLink: "https://www.google.com/maps/search/?api=1&query=Canada's+Wonderland+Vaughan+Ontario",

        Title: "Vortex in Canada's Wonderland",

        photoBy: "K2HWY",

        license: "CC By 4.0",
        licenseLink: "https://creativecommons.org/licenses/by/4.0/deed.en",

        source: "Wikimedia common",

        imageLink: "https://commons.wikimedia.org/wiki/File:Vortex_in_Canada%27s_Wonderland.jpg",
    },


    {
        name: "Woodbine Mall.(Fantasy Fair)",

        image: "WoodbineMall.jpg",

        description: "Woodbine Mall is located in the Rexdale area of Etobicoke, Toronto, near Highway 27 and Rexdale Boulevard. Opened in 1985, the mall features a large indoor shopping space and is also home to Fantasy Fair, an indoor amusement park. Its design includes a spacious central atrium, making it a recognizable feature of the shopping centre.",

        website: "https://woodbinemall.com/",

        location: "Woodbine Mall & Fantasy Fair, 500 Rexdale Blvd, Etobicoke",

        locationLink: "https://www.google.com/maps/place/Woodbine+Mall+%26+Fantasy+Fair/@43.7202989,-79.6024529,17z/data=!3m2!4b1!5s0x882b3a4bfb71f4a3:0xc36793e27034c085!4m6!3m5!1s0x882b3a4be0c4a249:0x21d351ad2b025fac!8m2!3d43.7202951!4d-79.599878!16s%2Fm%2F0gx1djt?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D",

        Title: "Woodbine Centre Atrium",

        photoBy: "Canmenwalker",

        licenseLink: "https://creativecommons.org/licenses/by/4.0/deed.en",

        license: "CC By 4.0",

        source: "Wikimedia common",

        imageLink: "https://commons.wikimedia.org/wiki/File:Woodbine_Centre_Atrium_2023.JPG"
    },
    {
        name: "Ripley's Aquarium",
        image: "Ripley'sAquarium.jpg",
        description: "Ripley’s Aquarium of Canada is a public aquarium located in downtown Toronto, Ontario, near the CN Tower. Opened in 2013, it features thousands of aquatic animals from around the world across different themed galleries. The aquarium is known for its large underwater viewing tunnel, which allows visitors to see marine life from below the water.",
        website: "https://www.ripleys.com/attractions/ripleys-aquarium-of-canada",
        location: "Ripley's Aquarium of Canada, 288 Bremner Blvd, Toronto",
        locationLink: "https://www.google.com/maps/place/Ripley's+Aquarium+of+Canada/@43.6421824,-79.3891771,17z/data=!3m1!4b1!4m6!3m5!1s0x882b34d5d5b6045b:0x8daf1a19298c213d!8m2!3d43.6421785!4d-79.3866022!16s%2Fm%2F0vxfm_5?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D",
        Title: "Ripley's Aquarium",
        photoBy: "Guryan",
        license: "",
        source: "Pexels",
        imageLink: "https://www.pexels.com/photo/a-tunnel-in-an-aquarium-13561441/"
    },

    {
        name: "The Rec Room Roundhouse",
        image: "TheRecRoom.jpg",
        description: "The Rec Room Roundhouse is an entertainment complex located in downtown Toronto, Ontario, near the CN Tower and the Rogers Centre. Located inside the historic John Street Roundhouse area, it combines dining, arcade games, virtual reality experiences, live entertainment, and other activities. The venue is part of Toronto’s popular entertainment district and is known for its mix of modern attractions and historic surroundings.",
        website: "https://www.therecroom.com/toronto-roundhouse?utm_source=google-my-business_TorontoRoundhouse&utm_medium=profile&utm_campaign=owned_media",
        location: "The Rec Room Roundhouse, 255   Bremner Blvd, Toronto, ON M5V 3L9",
        locationLink: "https://www.google.com/maps/place/The+Rec+Room+Roundhouse/@43.6413051,-79.3893066,17z/data=!4m6!3m5!1s0x882b369d41c73089:0x25ec259c98dbb599!8m2!3d43.6412417!4d-79.3867806!16s%2Fg%2F11d_78cf18?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D",
        Title: "REC Room in Square One",
        photoBy: "Canmenwalker",
        licenseLink: "https://creativecommons.org/licenses/by/4.0/deed.en",
        license: "CC BY 4.0 ",
        source: "Wikimedia common",
        imageLink: "https://commons.wikimedia.org/wiki/File:REC_Room_in_Square_One_2022.jpg"
    },
];



const amusementContainer = document.getElementById("amusement-container");



amusementPlaces.forEach(place => {


    const card = document.createElement("div");


    card.classList.add("amusement-card");



    card.innerHTML = `


        <img src="${place.image}" alt="${place.name}">


        <div class="amusement-info">


            <h2>${place.name}</h2>


            <p>${place.description}</p>


            <p>${place.location}</p>


            <a class="amusement-button" href="${place.website}" target="_blank">
                Learn More
            </a>


            <a class="amusement-location" href="${place.locationLink}" target="_blank">
            View Directions   
            </a>


        </div>


        <div class="image-credit">
        
        <p>Title: ${place.Title}</p>

            <p>Photo by: ${place.photoBy}</p>

            <p>
    License:
    <a href="${place.licenseLink}" target="_blank">
        ${place.license}
    </a>
    </p>

            <p>Source: ${place.source}</p>


            <a href="${place.imageLink}" target="_blank">
                Tap here to view image source
            </a>


        </div>


    `;



    amusementContainer.appendChild(card);


});