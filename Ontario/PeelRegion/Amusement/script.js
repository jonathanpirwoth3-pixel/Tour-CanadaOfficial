const amusementPlaces = [


        {
            name: "Activate Mississauga",
            image: "ActivateMississauga.webp",
            description: "Activate Mississauga is an interactive gaming centre where players use electronic wristbands to activate illuminated rooms and complete physical challenges. Teams compete through games testing agility, coordination, memory, speed, and problem-solving skills.",
            website: "https://playactivate.com/mississauga",
            location: "Activate Mississauga, 5980 McLaughlin Rd, Mississauga, ON L5R 3X9",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Activate+Mississauga+5980+McLaughlin+Road"
        },
        {
            name: "BRKFREE",
            image: "BRKFREE.webp",
            description: "BRKFREE is an indoor entertainment centre featuring dozens of interactive challenge rooms. Groups compete through short physical, mental, and teamwork-based games, earning points on leaderboards. The venue also offers food and social spaces.",
            website: "https://brkfree.com/",
            location: "BRKFREE, 1620 Tech Ave Unit 4, Mississauga, ON L4W 5P4",
            locationLink: "https://www.google.com/maps/search/?api=1&query=BRKFREE+1620+Tech+Avenue+Mississauga"
        },
        {
            name: "Amazing Fun Park",
            image: "AmazingFunPark.webp",
            description: "Amazing Fun Park is a large indoor family amusement centre featuring neon car rides, virtual reality roller coasters, interactive games, soft-play structures, and a giant ball pit. Its attractions and birthday packages make it popular with families.",
            website: "https://amazingfunpark.ca/",
            location: "Amazing Fun Park, 1325 Eglinton Ave E #1, Mississauga, ON L4W 4L9",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Amazing+Fun+Park+1325+Eglinton+Mississauga"
        },
        {
            name: "Chinguacousy Park",
            image: "ChinguacousyPark.webp",
            description: "Chinguacousy Park is a large Brampton recreation destination featuring mini-golf, paddle boats, a petting zoo, greenhouse, carousel, playgrounds, and seasonal skiing. Its varied attractions make it a popular destination for families and outdoor activities.",
            website: "https://www.brampton.ca/EN/residents/Recreation/Community-Centres/Chinguacousy-Park",
            location: "Chinguacousy Park, 9050 Bramalea Rd, Brampton, ON L6S 6G7",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Chinguacousy+Park+Brampton"
        },
        {
            name: "Happy Kingdom Brampton",
            image: "HappyKingdomBrampton.webp",
            description: "Happy Kingdom is an indoor playground and arcade featuring multi-level climbing structures, slides, tunnels, and interactive play areas. Children can also enjoy arcade machines, racing games, claw machines, and virtual reality experiences.",
            website: "http://www.happykingdombrampton.ca/",
            location: "Happy Kingdom Brampton, 150 West Dr Unit 105, Brampton, ON L6T 4P9",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Happy+Kingdom+150+West+Drive+Brampton"
        },
        {
            name: "GlowZone 360",
            image: "GlowZone360.webp",
            description: "GlowZone 360 combines glow-in-the-dark mini-golf, a themed laser tag arena, and an arcade under one roof. Its neon-lit courses and competitive games make it a popular option for families, birthday parties, and groups.",
            website: "http://www.glowzone360.com/",
            location: "GlowZone 360, 4800 Dixie Rd, Mississauga, ON L4W 2R1",
            locationLink: "https://www.google.com/maps/search/?api=1&query=GlowZone+360+Mississauga"
        },
        {
            name: "Treewalk Village",
            image: "TreewalkVillage.webp",
            description: "Treewalk Village at Heart Lake Conservation Park features elevated wooden play structures connected by enclosed net walkways, rope bridges, and climbing areas. Children can explore treehouses, cross suspended pathways, and enjoy large slides.",
            website: "https://treetoptrekking.com/activities",
            location: "Treetop Trekking Brampton, 10818 Heart Lake Rd, Brampton, ON L4V 1T8",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Treewalk+Village+Heart+Lake+Brampton"
        },
        {
            name: "Playcious Mississauga",
            image: "PlayciousMississauga.webp",
            description: "Playcious Mississauga is an indoor family playground featuring multi-level climbing structures, slides, trampolines, a ninja course, and a climbing wall. Younger visitors have dedicated play areas, while families can enjoy additional attractions and party facilities.",
            website: "https://playcious.com/mississauga/",
            location: "Playcious Mississauga, 75 Courtneypark Dr W Unit 2b, Mississauga, ON L5W 0E3",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Playcious+Mississauga+75+Courtneypark"
        },
        {
            name: "Another World VR Arena",
            image: "AnotherWorldVRArena.webp",
            description: "Another World VR Arena offers multiplayer virtual reality experiences where participants move freely through immersive digital environments. Groups can play cooperative missions, action games, and adventures together, making it suitable for friends and private events.",
            website: "https://mississauga.another-world.com/",
            location: "Another World VR Arena Mississauga, 3397 American Dr Ste 7, Mississauga, ON L4V 1T8",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Another+World+VR+Arena+Mississauga"
        },
        {
            name: "Wet'n'Wild Toronto",
            image: "WetnWildToronto.webp",
            description: "Wet'n'Wild Toronto is a large seasonal water park featuring high-speed slides, a wave pool, lazy river, and family-friendly splash attractions. Its water playgrounds and thrilling rides make it a major summer destination in Peel Region.",
            website: "https://wetnwildtoronto.com/",
            location: "Wet'n'Wild Toronto, 7855 Finch Ave W, Brampton, ON L6T 0B2",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Wet+Wild+Toronto+Brampton"
        },

        // Additional amusement and entertainment destinations

        {
            name: "Air Riderz Mississauga",
            image: "AirRiderzMississauga.webp",
            description: "Air Riderz is a large indoor trampoline and adventure park featuring wall-to-wall trampolines, dodgeball courts, a ninja warrior course, and interactive jumping attractions. It also offers arcade games, birthday parties, and group activities.",
            website: "https://www.airriderz.com/mississauga/",
            location: "Air Riderz Mississauga, 3600 Ridgeway Dr Unit 4 & 5, Mississauga, ON L5L 0B4",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Air+Riderz+3600+Ridgeway+Drive+Mississauga"
        },
        {
            name: "Aerosports Brampton",
            image: "AerosportsBrampton.webp",
            description: "Aerosports Brampton is an indoor adventure park featuring trampolines, giant slides, climbing walls, dodgeball, and a multi-level jungle gym. Dedicated toddler areas and arcade attractions provide activities for different ages.",
            website: "https://aerosportsbrampton.ca/",
            location: "Aerosports Brampton, 100 Westcreek Blvd, Brampton, ON L6T 5V7",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Aerosports+Brampton+100+Westcreek"
        },
        {
            name: "Playdium Brampton",
            image: "PlaydiumBrampton.webp",
            description: "Playdium Brampton is an indoor entertainment centre featuring more than 90 arcade games, virtual reality experiences, bowling, and an elevated ropes course. Visitors can collect points through games and redeem them for prizes.",
            website: "https://www.playdium.com/brampton",
            location: "Playdium Brampton, 20 Biscayne Crescent, Brampton, ON L6W 4S1",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Playdium+20+Biscayne+Crescent+Brampton"
        },
        {
            name: "The Rec Room Square One",
            image: "TheRecRoomSquareOne.webp",
            description: "The Rec Room at Square One combines a large arcade with recreational activities, dining, and live entertainment. Visitors can enjoy video games, bowling, axe throwing, and social events in a lively indoor entertainment environment.",
            website: "https://www.therecroom.com/mississauga-squareone",
            location: "The Rec Room, 100 City Centre Dr #1-705, Mississauga, ON L5B 2C9",
            locationLink: "https://www.google.com/maps/search/?api=1&query=The+Rec+Room+Square+One+Mississauga"
        },
        {
            name: "GameTime Social Mississauga",
            image: "GameTimeSocialMississauga.webp",
            description: "GameTime Social is a large entertainment and dining venue featuring arcade games, duckpin bowling, billiards, and other recreational activities. Its restaurant, sports-bar atmosphere, and event spaces make it suitable for families and groups.",
            website: "https://www.gametimesocial.ca/mississauga",
            location: "GameTime Social, 1248 Dundas St E, Mississauga, ON L4Y 2C1",
            locationLink: "https://www.google.com/maps/search/?api=1&query=GameTime+Social+1248+Dundas+Street+Mississauga"
        },
        {
            name: "Sky Zone Mississauga",
            image: "SkyZoneMississauga.webp",
            description: "Sky Zone Mississauga is an indoor trampoline park offering freestyle jumping, dodgeball, foam-pit activities, and obstacle challenges. Its dedicated play areas and group packages make it a popular destination for energetic family outings.",
            website: "https://www.skyzone.com/",
            location: "Sky Zone Mississauga, 3636 Hawkestone Rd, Mississauga, ON L5C 2V2",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Sky+Zone+3636+Hawkestone+Road+Mississauga"
        },
        {
            name: "Perplexity Escape Games",
            image: "PerplexityEscapeGames.webp",
            description: "Perplexity Escape Games offers themed escape-room adventures where teams solve puzzles, uncover clues, and complete missions against the clock. Its different room scenarios provide collaborative challenges for friends, families, and corporate groups.",
            website: "https://perplexity.ca/",
            location: "Perplexity Escape Games, 56 Bramsteele Rd Unit 2, Brampton, ON L6W 3M7",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Perplexity+Escape+Games+Brampton"
        },
        {
            name: "Ready Set Go Adventures",
            image: "ReadySetGoAdventures.webp",
            description: "Ready Set Go Adventures is an immersive escape-room venue featuring interactive, multi-room experiences with detailed environments, puzzles, and timed challenges. Its themed adventures are designed for groups, birthday celebrations, and team-building activities.",
            website: "https://readysetgoadventures.com/mississauga/",
            location: "Ready Set Go Adventures, 975 Mid-Way Blvd Unit 2, Mississauga, ON L5T 2C6",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Ready+Set+Go+Adventures+975+Mid+Way+Boulevard+Mississauga"
        },
        {
            name: "Omventure Mississauga",
            image: "OmventureMississauga.webp",
            description: "Omventure Mississauga offers immersive escape-room adventures with themed environments, interactive puzzles, and cooperative missions. Experiences range from mystery and adventure scenarios to horror-themed challenges, giving groups several styles of games to choose from.",
            website: "https://www.omventure.ca/mississauga",
            location: "Omventure Mississauga, 1224 Dundas St E Unit 1C, Mississauga, ON L4Y 2C5",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Omventure+1224+Dundas+Street+East+Mississauga"
        },
        {
            name: "HintHunt Escape Rooms Mississauga",
            image: "HintHuntMississauga.webp",
            description: "HintHunt offers story-driven escape-room experiences where teams investigate themed environments, solve interactive puzzles, and work together to complete missions. Its rooms provide timed challenges suited to friends, families, celebrations, and corporate groups.",
            website: "https://hinthunt.com/",
            location: "HintHunt Mississauga, 790 Burnhamthorpe Rd W #4, Mississauga, ON L5C 4G3",
            locationLink: "https://www.google.com/maps/search/?api=1&query=HintHunt+790+Burnhamthorpe+Road+Mississauga"
        },
        {
            name: "Toprock Climbing",
            image: "ToprockClimbing.webp",
            description: "Toprock Climbing is an indoor rock-climbing facility offering climbing routes, lessons, and programs for beginners and experienced climbers. Visitors can develop their climbing skills, tackle different challenges, and participate in recreational activities.",
            website: "https://toprockclimbing.ca/",
            location: "Toprock Climbing, 284 Orenda Rd Unit 8, Brampton, ON L6T 5S3",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Toprock+Climbing+Brampton"
        }


];

const amusementContainer = document.getElementById("amusement-container");
const amusementSearchForm = document.getElementById("hotelSearchForm");
const amusementSearchInput = document.getElementById("hotel-search");

// Display amusement attractions
function displayAmusementPlaces(places) {
    amusementContainer.innerHTML = "";

    if (places.length === 0) {
        amusementContainer.innerHTML = `
            <p class="no-results">No attractions found. Try another search.</p>
        `;
        return;
    }

    places.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("amusement-card");

        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}" loading="lazy">

            <div class="amusement-info">
                <h2>${place.name}</h2>
                <p>${place.description}</p>
                <p>${place.location}</p>

                <a class="amusement-button"
                   href="${place.website}"
                   target="_blank"
                   rel="noopener noreferrer">
                    Learn More
                </a>

                <a class="amusement-location"
                   href="${place.locationLink}"
                   target="_blank"
                   rel="noopener noreferrer">
                    View Directions
                </a>
            </div>

            <div class="image-credit">
                <p>Title: ${place.Title}</p>
                <p>Photo by: ${place.photoBy}</p>

                <p>
                    License:
                    <a href="${place.licenseLink}"
                       target="_blank"
                       rel="noopener noreferrer">
                        ${place.license}
                    </a>
                </p>

                <p>Source: ${place.source}</p>

                <a href="${place.imageLink}"
                   target="_blank"
                   rel="noopener noreferrer">
                    Tap here to view image source
                </a>
            </div>
        `;

        amusementContainer.appendChild(card);
    });
}

// Search by attraction name, description, or location
function searchAmusementPlaces() {
    const query = amusementSearchInput.value.toLowerCase().trim();

    const filteredPlaces = amusementPlaces.filter(place =>
        place.name.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query) ||
        place.location.toLowerCase().includes(query)
    );

    displayAmusementPlaces(filteredPlaces);
}

// Connect the search bar
amusementSearchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    searchAmusementPlaces();
});

amusementSearchInput.addEventListener("input", searchAmusementPlaces);

// Show all attractions when the page loads
displayAmusementPlaces(amusementPlaces);
