const amusementPlaces = [
    {
        name: "NEB's Fun World",

        image: "NEBsFunWorld.webp",

        description: "NEB’s Fun World is a large indoor family entertainment centre in Oshawa featuring arcade games, bowling, mini golf, bumper cars, an indoor roller coaster, rides, virtual reality, and a children’s play centre. With more than 120 arcade games and numerous attractions under one roof, it offers entertainment for families and groups throughout the year.",

        website: "https://www.nebsfunworld.com/",

        location: "1300 Wilson Rd N, Oshawa, ON L1K 2B8",

        locationLink: "https://www.google.com/maps/search/?api=1&query=NEBs+Fun+World+Oshawa+Ontario",

        Title: "NEB's Fun World",

        photoBy: "",

        license: "",
        licenseLink: "",

        source: "",

        imageLink: "",
    },

    {
        name: "Playdium Whitby",

        image: "PlaydiumWhitby.webp",

        description: "Playdium Whitby is a large indoor entertainment centre featuring more than 90 arcade games, virtual reality experiences, bowling, an elevated ropes course, and Gel Blaster Nexus. Located in Whitby, it provides a variety of activities for families, teens, and groups in an indoor setting.",

        website: "https://www.playdium.com/whitby",

        location: "75 Consumers Drive, Whitby, ON L1N 2C4",

        locationLink: "https://www.google.com/maps/search/?api=1&query=Playdium+Whitby+Ontario",

        Title: "Playdium Whitby",

        photoBy: "",

        license: "",
        licenseLink: "",

        source: "",

        imageLink: "",
    },

    {
        name: "Volt Raceway",

        image: "VoltRaceway.webp",

        description: "Volt Raceway is an indoor entertainment complex in Bowmanville featuring electric go-kart racing, arcade games, billiards, axe throwing, and the Volt Blaster experience. The facility includes separate racing tracks designed for different age groups and experience levels.",

        website: "https://voltraceway.com/",

        location: "1040 S Service Rd, Bowmanville, ON L1C 3K2",

        locationLink: "https://www.google.com/maps/search/?api=1&query=Volt+Raceway+Bowmanville+Ontario",

        Title: "Volt Raceway",

        photoBy: "",

        license: "",
        licenseLink: "",

        source: "",

        imageLink: "",
    },

    {
        name: "Treetop Eco-Adventure Park",

        image: "TreetopEcoAdventurePark.webp",

        description: "Treetop Eco-Adventure Park in Oshawa is an outdoor adventure park featuring elevated aerial courses, zip lines, climbing challenges, and other treetop activities. The park provides an active outdoor experience surrounded by nature in Durham Region.",

        website: "https://treetop.eco/",

        location: "53 Snow Ridge Court, Oshawa, ON L1H 7K4",

        locationLink: "https://www.google.com/maps/search/?api=1&query=Treetop+Eco+Adventure+Park+Oshawa+Ontario",

        Title: "Treetop Eco-Adventure Park",

        photoBy: "",

        license: "",
        licenseLink: "",

        source: "",

        imageLink: "",
    },

    {
        name: "Sky Zone Whitby",

        image: "SkyZoneWhitby.webp",

        description: "Sky Zone Whitby is an indoor trampoline and adventure park featuring freestyle jumping, SkySlam basketball, Ultimate Dodgeball, a foam zone, Battle Beam, a warped wall, a Ninja Warrior course, and parkour activities.",

        website: "https://www.skyzone.com/ca-whitby/",

        location: "Whitby, ON",

        locationLink: "https://www.google.com/maps/search/?api=1&query=Sky+Zone+Whitby+Ontario",

        Title: "Sky Zone Whitby",

        photoBy: "",

        license: "",
        licenseLink: "",

        source: "",

        imageLink: "",
    },

    {
        name: "Flying Squirrel Whitby",

        image: "FlyingSquirrelWhitby.webp",

        description: "Flying Squirrel Whitby is a large indoor trampoline park offering trampoline activities and attractions for children, teens, and adults. The facility also features a café and special event experiences, making it a year-round indoor entertainment destination.",

        website: "https://flyingsquirrelsports.ca/whitby-ontario/",

        location: "1400 Victoria St E, Whitby, ON L1N 0M2",

        locationLink: "https://www.google.com/maps/search/?api=1&query=Flying+Squirrel+Whitby+Ontario",

        Title: "Flying Squirrel Whitby",

        photoBy: "",

        license: "",
        licenseLink: "",

        source: "",

        imageLink: "",
    },

    {
        name: "Cedar Park Resort",

        image: "CedarParkResort.webp",

        description: "Cedar Park Resort in Bowmanville is a family recreation destination featuring a waterpark, swimming areas, mini golf, camping facilities, and other outdoor activities. It offers a summer-focused destination for families looking for water-based entertainment and outdoor recreation in Durham Region.",

        website: "https://www.cedarparkresort.com/",

        location: "6296 Cedar Park Rd, Bowmanville, ON L1C 3K2",

        locationLink: "https://www.google.com/maps/search/?api=1&query=Cedar+Park+Resort+Bowmanville+Ontario",

        Title: "Cedar Park Resort",

        photoBy: "",

        license: "",
        licenseLink: "",

        source: "",

        imageLink: "",
    },

    {
        name: "Reptilia Whitby",

        image: "ReptiliaWhitby.webp",

        description: "Reptilia Whitby is a large indoor reptile zoo featuring thousands of square feet of exhibits, reptiles, amphibians, aquatic species, live shows, animal feedings, guided tours, and an indoor playground. The facility provides a year-round family attraction and educational experience.",

        website: "https://reptilia.org/",

        location: "1400 Victoria St E, Whitby, ON L1N 0M2",

        locationLink: "https://www.google.com/maps/search/?api=1&query=Reptilia+Whitby+Ontario",

        Title: "Reptilia Whitby",

        photoBy: "",

        license: "",
        licenseLink: "",

        source: "",

        imageLink: "",
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
