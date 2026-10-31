const attractions = [
    {
        name: "Niagara City Cruises",
        image: "NiagaraCityCruises.webp",
        description: "Niagara City Cruises offers Canada's ultimate visitor experience, plunging passengers straight into the tumultuous mist of the Great Gorge. Sailing directly past the American and Bridal Veil Falls, the catamaran ventures into the thundering heart of the Canadian Horseshoe Falls. The raw power, deafening roar, and heavy spray create an overwhelming, sensory-rich encounter unmatched by any dry-land observation point.",
        website: "https://cityexperiences.com",
        location: "Niagara City Cruises, 5920 Niagara River Pkwy, Niagara Falls, ON L2E 6X8",
        locationLink: "https://www.google.com/maps/place/Niagara+City+Cruises/@43.0887891,-79.0763692,17z/data=!3m1!4b1!4m6!3m5!1s0x89d3430f2e61a2d1:0x9590fd012f797068!8m2!3d43.0887891!4d-79.0737943!16s%2Fg%2F1q5bnn3xy?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Lakeside Park Carousel",
        image: "LakesideParkCarousel.webp",
        description: "Located in historic Port Dalhousie, this world-renowned antique carousel is a rare Charles I.D. Looff masterpiece carved between 1898 and 1905. It features 68 hand-carved wooden animals and still costs only five cents to ride. Its incredible historic integrity, operating traditional organ music, and nostalgic beachside setting make it a completely unique treasure unmatched by modern, commercial amusement parks.",
        website: "https://stcatharines.ca",
        location: "Lakeside Park, 9 Lakeport Rd, St. Catharines, ON L2N 5B3",
        locationLink: "https://www.google.com/maps/search/Lakeside+Park,+9+Lakeport+Rd,+St.+Catharines,+ON+L2N+5B3/@43.2040718,-79.2678116,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Ball's Falls & Historic Village",
        image: "BallsFalls.webp",
        description: "Set within Jordan Station, Ball's Falls offers an immersive jump back into a fully operational 19th-century industrial hamlet. Visitors can explore preserved operational structures, including an authentic heritage grist mill, a lime kiln, and a historic church. The geographic location stands out because two dramatic waterfalls cascade over the Niagara Escarpment right next to scenic, universally accessible Carolinian forest trails.",
        website: "https://npca.ca/conservation-areas/balls-falls",
        location: "Ball's Falls, 3292 Sixth Ave, Jordan Station, ON L0R 1S0",
        locationLink: "https://www.google.com/maps/place/Ball's+Falls+%26+Historic+Village/@43.1337617,-79.3849996,17z/data=!3m1!4b1!4m6!3m5!1s0x882cb2ad9d38b7ed:0x78332929477ef3ab!8m2!3d43.1337617!4d-79.3824247!16s%2Fg%2F11gh473rj6?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Fort George National Historic Site",
        image: "FortGeorge.webp",
        description: "Fort George transports visitors back to the War of 1812, serving as a powerful historical cornerstone of the Niagara region. Situated in picturesque Niagara-on-the-Lake, this beautifully reconstructed military fort outstandingly features live tactical musket demonstrations, open-hearth cooking, and authentic period reenactments. It offers a deep, interactive dive into early Canadian history that contrasts beautifully with nearby nature sites.",
        website: "https://canada.ca",
        location: "Fort George, 51 Queen's Parade, Niagara-on-the-Lake, ON L0S 1J0",
        locationLink: "https://www.google.com/maps/search/Fort+George+National+Historic+Site/@43.2563874,-79.0834772,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Whirlpool Aero Car",
        image: "WhirlpoolAeroCar.webp",
        description: "Suspended safely 200 feet above the Niagara Gorge, the antique Whirlpool Aero Car has carried riders across the river since 1916. Designed by Spanish engineer Leonardo Torres Quevedo, this unique cable car gives passengers an unrivaled aerial viewpoint directly over the spinning vortex of the Class 6 Niagara Whirlpool, crossing the international U.S.-Canada border line four separate times per trip.",
        website: "https://www.niagaraparks.com/visit/attractions/whirlpool-aero-car/",
        location: "Whirlpool Aero Car, 3850 Niagara River Pkwy, Niagara Falls, ON L2E 7M8",
        locationLink: "https://www.google.com/maps/place/Whirlpool+Aero+Car/@43.1180306,-79.0713638,17z/data=!3m1!4b1!4m6!3m5!1s0x89d35cd41852f6c1:0xea6787ce240c67ab!8m2!3d43.1180306!4d-79.0687889!16zL20vMDJtcjlt?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Heartland Forest Nature Experience",
        image: "HeartlandForest.webp",
        description: "Tucked inside Niagara Falls, Heartland Forest is a universally accessible sanctuary protecting a critical Carolinian woodland habitat. The entire facility features perfectly flat, boardwalk-style paths tailored for strollers, dogs, and wheelchairs. It stands out by injecting pure entertainment into nature, presenting a giant custom treehouse, a playground, turtle viewing decks, and active educational animal carving trails.",
        website: "https://heartlandforest.org/",
        location: "Heartland Forest, 8215 Heartland Forest Rd, Niagara Falls, ON L2H 0L5",
        locationLink: "https://www.google.com/maps/place/Heartland+Forest+Nature+Experience/@43.055826,-79.1354394,17z/data=!3m1!4b1!4m6!3m5!1s0x89d34417d5d6fbd3:0xc851943c4c2194e4!8m2!3d43.055826!4d-79.1328645!16s%2Fg%2F1ptxgfjvt?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Queen's Royal Park",
        image: "QueensRoyalPark.webp",
        description: "Nestled at the mouth of the Niagara River in Niagara-on-the-Lake, Queen's Royal Park offers a manicured escape directly overlooking the sparkling waters of Lake Ontario. Its iconic waterfront gazebo provides a scenic, postcard-perfect view of historic Fort Niagara across the US border. It provides a quiet alternative where travelers can stroll the shore steps from the town's retail boutique core.",
        website: "https://www.notl.com/recreation-events/facilities/queens-royal-park",
        location: "Queen's Royal Park, 45 Front St N, Niagara-on-the-Lake, ON L0S 1J0",
        locationLink: "https://www.google.com/maps/place/Queen's+Royal+Park/@43.257829,-79.0722635,17z/data=!3m1!4b1!4m6!3m5!1s0x89d35f79fa20a66f:0xebc5451d2c931d85!8m2!3d43.257829!4d-79.0696886!16s%2Fg%2F1thxx61l?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Niagara Parks Power Station + The Tunnel",
        image: "NiagaraPowerStation.webp",
        description: "This historic, century-old architectural marvel blends industrial heritage with natural wonder. After exploring the heavy engineering exhibits on the generator floor, a glass elevator lowers you 180 feet into a massive tailrace tunnel. Walking the 2,200-foot underground passage brings you out onto a spectacular, river-level viewing platform positioned right at the base of the falls for an entirely new perspective.",
        website: "https://niagaraparks.com",
        location: "Niagara Parks Power Station, 7005 Niagara River Pkwy, Niagara Falls, ON L0S 1A0",
        locationLink: "https://www.google.com/maps/place/Niagara+Parks+Power+Station+%2B+The+Tunnel/@43.075022,-79.0818627,17z/data=!3m1!4b1!4m6!3m5!1s0x89d34348609aa81d:0xf9ea4f5e3a804e8b!8m2!3d43.075022!4d-79.0792878!16s%2Fg%2F11f79x6ddy?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "White Water Walk",
        image: "WhiteWaterWalk.webp",
        description: "White Water Walk offers an eye-level, unobstructed look at nature’s raw energy along a 400-metre cliffside boardwalk. After riding an elevator 70 meters down into the deep Niagara Gorge, you stand just steps away from the deafening roar of trillions of gallons of water. It showcases North America's most intense, fast-moving Class 6 whitewater rapids traveling at 48 km/h.",
        website: "https://www.niagaraparks.com/visit/attractions/white-water-walk/",
        location: "White Water Walk, 4330 River Rd, Niagara Falls, ON L2G 6T2",
        locationLink: "https://www.google.com/maps/place/White+Water+Walk/@43.1109554,-79.0630302,17z/data=!3m1!4b1!4m6!3m5!1s0x89d342d4f4364fc1:0x98986aa71e09d257!8m2!3d43.1109554!4d-79.0604553!16s%2Fg%2F1wz53pk_?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Welland Canal Centre at Lock 3",
        image: "WellandCanalLock3.webp",
        description: "The Welland Canal Centre provides a front-row seat to one of the world's greatest engineering feats, where massive international cargo ships scale the Niagara Escarpment. Elevated observation decks give visitors an up-close look at the intricate locking process as thousands of tons of water shift to lift ocean vessels. It is highly outstanding for presenting industrial transport operations in real-time.",
        website: "https://stcatharines.ca",
        location: "Welland Canal Centre, 1932 Welland Canals Pkwy, St. Catharines, ON L2R 6P7",
        locationLink: "https://www.google.com/maps/search/Welland+Canal+Centre+at+Lock+3/@43.1554833,-79.1966443,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: "",
    },
];
const attractionsContainer = document.getElementById("attractions-container");
const attractionsSearchForm = document.getElementById("hotelSearchForm");
const attractionsSearchInput = document.getElementById("hotel-search");

// Display attraction cards
function displayAttractions(attractionList) {
    attractionsContainer.innerHTML = "";

    if (attractionList.length === 0) {
        attractionsContainer.innerHTML = `
            <p class="no-results">No attractions found. Try another search.</p>
        `;
        return;
    }

    attractionList.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("attractions-card");

        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}" loading="lazy">

            <div class="attractions-info">
                <h2>${place.name}</h2>
                <p>${place.description}</p>
                <p>${place.location}</p>

                <a class="attractions-button"
                   href="${place.website}" target="_blank"
                   rel="noopener noreferrer">
                    Learn More
                </a>

                <a class="attractions-location"
                   href="${place.locationLink}" target="_blank"
                   rel="noopener noreferrer">
                    View Directions
                </a>
            </div>

            <div class="image-credit">
                <p>Title: ${place.title}</p>
                <p>Photo by: ${place.photoBy}</p>

                <p>
                    License:
                    <a href="${place.licenseLink}" target="_blank"
                       rel="noopener noreferrer">
                        ${place.license}
                    </a>
                </p>

                <p>Source: ${place.source}</p>

                <a href="${place.imageLink}" target="_blank"
                   rel="noopener noreferrer">
                    Tap here to view image source
                </a>
            </div>
        `;

        attractionsContainer.appendChild(card);
    });
}

// Search by name, description, or location
function searchAttractions() {
    const query = attractionsSearchInput.value.toLowerCase().trim();

    const filteredAttractions = attractions.filter(place =>
        place.name.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query) ||
        place.location.toLowerCase().includes(query)
    );

    displayAttractions(filteredAttractions);
}

// Search button
attractionsSearchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    searchAttractions();
});

// Search while typing
attractionsSearchInput.addEventListener("input", searchAttractions);

// Display all attractions on page load
displayAttractions(attractions);
