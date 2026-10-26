const attractions = [
    {
        name: "Royal Botanical Gardens",
        image: "RoyalBotanicalGardens.webp",
        description: "Royal Botanical Gardens spans Burlington and Hamilton, combining beautifully designed gardens with extensive protected natural areas. Its highlights include the world’s largest living lilac collection, Hendrie Park’s themed gardens and rose displays, and the historic Rock Garden, opened in 1932. Visitors can also explore woodland trails, wetlands, and diverse plant collections, making it a distinctive destination for both horticulture enthusiasts and nature lovers.",
        website: "https://www.rbg.ca/",
        location: "Royal Botanical Gardens, 680 Plains Road West, Burlington, ON L7T 4H4",
        locationLink: "https://www.google.com/maps/search/?api=1&query=Royal+Botanical+Gardens+Burlington+Ontario",
        title: "",
        photoBy: "",
        licenseLink: "",
        license: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Crawford Lake Conservation Area",
        image: "CrawfordLake.webp",
        description: "Crawford Lake Conservation Area in Milton features a rare meromictic lake whose water layers remain separate, preserving annual sediment records studied by scientists. An 800-metre elevated boardwalk circles the lake through forest. Nearby, three reconstructed longhouses stand on the original footprint of a 15th-century Wendat village discovered through archaeological research. Visitors can explore Indigenous history, traditional agriculture gardens, exhibits, and hiking trails.",
        website: "https://www.conservationhalton.ca/parks/crawford-lake/",
        location: "Crawford Lake Conservation Area, 3115 Conservation Road, Milton, ON L9T 2X3",
        locationLink: "https://www.google.com/maps/search/?api=1&query=Crawford+Lake+Conservation+Area+3115+Conservation+Road+Milton+Ontario",
        title: "",
        photoBy: "",
        licenseLink: "",
        license: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Kelso Conservation Area",
        image: "KelsoConservationArea.webp",
        description: "Kelso Conservation Area in Milton combines an 85-acre reservoir with a supervised swimming beach, forested hiking trails, and mountain biking routes beneath the Niagara Escarpment. In summer, visitors can explore Kelso Cove, a floating waterpark, rent kayaks or paddleboards, and tackle the outdoor Challenge Course. In winter, the same destination becomes Glen Eden, offering skiing and snowboarding.",
        website: "https://www.conservationhalton.ca/parks/kelso/",
        location: "Kelso Conservation Area, 5234 Kelso Road, Milton, ON L9E 0C6",
        locationLink: "https://www.google.com/maps/search/?api=1&query=Kelso+Conservation+Area+5234+Kelso+Road+Milton+Ontario",
        title: "",
        photoBy: "",
        licenseLink: "",
        license: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Mount Nemo Conservation Area",
        image: "MountNemo.webp",
        description: "Mount Nemo Conservation Area in Burlington protects a distinctive Niagara Escarpment landscape of towering limestone cliffs, ancient cedars, crevice caves, and rare plants. The Brock Harris Lookout offers sweeping views across surrounding countryside and, on clear days, Toronto’s skyline. Visitors can hike forested trails, observe turkey vultures soaring above the cliffs, photograph unusual geological formations, and explore sections of the Bruce Trail.",
        website: "https://www.conservationhalton.ca/parks/mount-nemo/",
        location: "Mount Nemo Conservation Area, 5317 Guelph Line, Burlington, ON L7P 0A5",
        locationLink: "https://www.google.com/maps/search/?api=1&query=Mount+Nemo+Conservation+Area+5317+Guelph+Line+Burlington+Ontario",
        title: "",
        photoBy: "",
        licenseLink: "",
        license: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Bronte Creek Provincial Park",
        image: "BronteCreekProvincialPark.webp",
        description: "Bronte Creek Provincial Park in Oakville features a dramatic ravine, forest trails, and Spruce Lane Farm, a restored 1899 farmhouse interpreting rural life around 1900. Visitors can explore heritage farm buildings, encounter farm animals at the Children's Farm, discover local ecosystems at the Nature Centre, hike through the creek valley, and enjoy seasonal activities including maple syrup celebrations and winter tobogganing.",
        website: "https://www.ontarioparks.ca/park/brontecreek",
        location: "Bronte Creek Provincial Park, 1219 Burloak Drive, Oakville, ON L6M 4J7",
        locationLink: "https://www.google.com/maps/search/?api=1&query=Bronte+Creek+Provincial+Park+1219+Burloak+Drive+Oakville+Ontario",
        title: "",
        photoBy: "",
        licenseLink: "",
        license: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Rattlesnake Point Conservation Area",
        image: "RattlesnakePoint.webp",
        description: "Rattlesnake Point Conservation Area in Milton features towering Niagara Escarpment cliffs, ancient white cedar trees growing from narrow rock crevices, and panoramic lookouts across the surrounding countryside. Visitors can hike sections of the Bruce Trail, explore forested paths, and observe turkey vultures gliding along the cliffs. Its exposed limestone formations and elevated viewpoints create a distinctive destination for hiking, photography, and experiencing Ontario's natural landscape.",
        website: "https://www.conservationhalton.ca/parks/rattlesnake-point/",
        location: "Rattlesnake Point Conservation Area, 7200 Appleby Line, Milton, ON L9E 0M9",
        locationLink: "https://www.google.com/maps/search/?api=1&query=Rattlesnake+Point+Conservation+Area+7200+Appleby+Line+Milton+Ontario",
        title: "",
        photoBy: "",
        licenseLink: "",
        license: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Spencer Smith Park and Brant Street Pier",
        image: "SpencerSmithPark.webp",
        description: "Spencer Smith Park in downtown Burlington features a waterfront promenade leading to the 137-metre Brant Street Pier, which extends into Lake Ontario for sweeping views of the shoreline. Visitors can explore lakeside pathways, relax on open lawns, attend major festivals, and enjoy seasonal activities at Rotary Centennial Pond, which hosts model sailing in warmer months and public skating in winter.",
        website: "https://www.burlington.ca/en/arts-culture-and-events/downtown-waterfront.aspx",
        location: "Spencer Smith Park, 1400 Lakeshore Road, Burlington, ON L7S 1Y2",
        locationLink: "https://www.google.com/maps/search/?api=1&query=Spencer+Smith+Park+1400+Lakeshore+Road+Burlington+Ontario",
        title: "",
        photoBy: "",
        licenseLink: "",
        license: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Halton County Radial Railway",
        image: "HaltonCountyRadialRailway.webp",
        description: "Halton County Radial Railway in Milton is Ontario’s first and largest electric railway museum, featuring restored streetcars, radial cars, and railway work vehicles dating from the late 19th century onward. Visitors can ride historic electric streetcars along two kilometres of scenic track, explore display barns containing vintage transportation equipment, visit the reconstructed Rockwood Station, and discover how electric railways shaped Ontario’s transportation history.",
        website: "https://hcry.org/",
        location: "Halton County Radial Railway, 13629 Guelph Line, Milton, ON L0P 1B0",
        locationLink: "https://www.google.com/maps/search/?api=1&query=Halton+County+Radial+Railway+13629+Guelph+Line+Milton+Ontario",
        title: "",
        photoBy: "",
        licenseLink: "",
        license: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Toronto Premium Outlets",
        image: "TorontoPremiumOutlets.webp",
        description: "Toronto Premium Outlets in Halton Hills is an open-air shopping destination featuring more than 130 stores, including designer labels, fashion retailers, sportswear brands, and factory outlets. Its layout brings international names such as Prada, Burberry, Coach, and Aritzia together in one centre. Visitors can browse multiple shopping courts, explore dining options, compare outlet collections, and make a dedicated shopping trip near Highway 401.",
        website: "https://www.premiumoutlets.com/outlet/toronto",
        location: "Toronto Premium Outlets, 13850 Steeles Avenue West, Halton Hills, ON L7G 0J1",
        locationLink: "https://www.google.com/maps/search/?api=1&query=Toronto+Premium+Outlets+13850+Steeles+Avenue+West+Halton+Hills+Ontario",
        title: "",
        photoBy: "",
        licenseLink: "",
        license: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Springridge Farm",
        image: "SpringridgeFarm.webp",
        description: "Springridge Farm in Milton is a family-run countryside destination known for its barn-style market, freshly baked pies, locally sourced foods, and seasonal produce. Visitors can explore colourful gardens, browse distinctive gifts, enjoy panoramic views across the surrounding countryside, and experience seasonal events featuring pumpkins, sunflowers, and family activities. Its combination of farm shopping, rural scenery, and harvest traditions makes it a memorable Halton attraction.",
        website: "https://www.springridgefarm.com/",
        location: "Springridge Farm, 7256 Bell School Line, Milton, ON L9T 2Y1",
        locationLink: "https://www.google.com/maps/search/?api=1&query=Springridge+Farm+7256+Bell+School+Line+Milton+Ontario",
        title: "",
        photoBy: "",
        licenseLink: "",
        license: "",
        source: "",
        imageLink: ""
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
