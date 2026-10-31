const hotels = [
    {
        name: "The Walper Hotel",
        image: "TheWalperHotel.webp",
        description: "Located in the heart of downtown Kitchener, The Walper Hotel is a historic boutique property blending historic charm with sleek modern design. Originally opened in 1893, this iconic landmark features distinct architectural details, vibrant mid-century modern furnishings, and a contemporary art collection. Guests can enjoy locally sourced dining at the on-site restaurant, relax in the elegant social spaces, or step right outside to explore the city's tech hub, local shops, and public transit. Its premier location makes it a favorite destination for business travelers and cultural explorers alike.",
        website: "",
        address: "20 King St E, Kitchener, ON N2G 2L2",
        addressLink: "",
        title: "The Walper Hotel Historic Facade",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Delta Hotels by Marriott Waterloo",
        image: "DeltaWaterloo.webp",
        description: "Situated in the vibrant UpTown district of Waterloo, Delta Hotels by Marriott Waterloo offers a premium contemporary experience perfectly tailored for business and leisure travelers. The sleek property features spacious, modern guest rooms equipped with ergonomic workspaces, high-speed connectivity, and plush bedding. Guests can savor urban dining at the acclaimed on-site restaurant, swim in the heated indoor pool, or stay active in the state-of-the-art fitness center. Positioned steps away from boutique shopping, diverse dining options, and the city's major universities, this premier hotel ensures an effortless stay.",
        website: "",
        address: "110 Erb St W, Waterloo, ON N2L 1T5",
        addressLink: "",
        title: "Delta Hotels Waterloo Modern Exterior",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "The Inn of Waterloo",
        image: "TheInnOfWaterloo.webp",
        description: "Nestled in a peaceful setting in Waterloo, The Inn of Waterloo combines classic hospitality with extensive modern convention facilities. This expansive independent hotel features spacious, comfortable guest rooms, a large heated indoor pool, a relaxing sauna, and an on-site fitness center. Renowned for its sprawling event spaces, the property regularly hosts major corporate conferences and elegant weddings. Its strategic location provides convenient access to local corporate offices, scenic walking trails, and the technology park, offering an ideal, well-rounded balance of business utility and tranquil relaxation.",
        website: "",
        address: "475 King St N, Waterloo, ON N2J 2Z5",
        addressLink: "",
        title: "The Inn of Waterloo Entrance and Grounds",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Langdon Hall Country House Hotel & Spa",
        image: "LangdonHall.webp",
        description: "Tucked away in the historic federal area of Cambridge, Langdon Hall Country House Hotel & Spa delivers a magnificent estate experience defined by unmatched luxury and natural beauty. Surrounded by Carolinian forest and manicured gardens, the historic mansion offers individually decorated luxury suites featuring wood-burning fireplaces and classic architecture. The property is celebrated nationwide for its award-winning fine dining restaurant, world-class luxury spa, outdoor swimming pool, and pristine tennis courts. It stands as the region's ultimate destination for travelers seeking an elite, deeply restorative countryside retreat.",
        website: "",
        address: "1 Langdon Dr, Cambridge, ON N3H 4R8",
        addressLink: "",
        title: "Langdon Hall Country House Estate",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Crowne Plaza Kitchener-Waterloo",
        image: "CrownePlazaKitchener.webp",
        description: "Perfectly positioned in the central business district of Kitchener, Crowne Plaza Kitchener-Waterloo provides a highly energetic, amenity-rich environment for modern professionals. The high-rise property features completely updated guest rooms, a dynamic lifestyle restaurant and lounge, and versatile corporate meeting spaces. What truly sets it apart is its comprehensive recreation center, featuring a heated indoor pool, bowling lanes, squash courts, and a fully equipped fitness facility. Located moments from downtown tech offices and community venues, it offers travelers an incredibly active and seamlessly productive urban stay.",
        website: "",
        address: "105 King St E, Kitchener, ON N2G 2K8",
        addressLink: "",
        title: "Crowne Plaza Kitchener Skyline View",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Four Points by Sheraton Cambridge Kitchener",
        image: "FourPointsCambridge.webp",
        description: "Conveniently situated right beside Highway 401, Four Points by Sheraton Cambridge Kitchener offers highly reliable and unpretentious accommodations for regional travelers. The hotel boasts completely upgraded, modern guest rooms featuring crisp linens, ergonomic workspaces, and large flat-screen televisions. On-site property amenities include a casual full-service restaurant and bar, a pristine heated indoor swimming pool, a relaxing hot tub, and a fully equipped fitness facility. Located a brief twenty-minute drive from key historic attractions across Cambridge and Kitchener, it provides a perfectly balanced, stress-free lodging experience.",
        website: "",
        address: "210 Preston Pkwy, Cambridge, ON N3H 5N1",
        addressLink: "",
        title: "Four Points Sheraton Cambridge Exterior",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Holiday Inn Express & Suites Kitchener Southeast",
        image: "HolidayInnExpressKitchener.webp",
        description: "Perfectly positioned for business commutes, Holiday Inn Express & Suites Kitchener Southeast by IHG offers a highly comfortable, freshly renovated stay in the region. The modern hotel features beautifully updated, spacious guest rooms outfitted with exceptionally cozy beds, large flatscreen televisions, and highly functional workspaces. Guests can jumpstart their morning with a comprehensive, complimentary hot breakfast buffet before utilizing the state-of-the-art fitness center or booking versatile corporate meeting spaces. Renowned for its friendly, professional customer service staff and immaculate public areas, it ensures an effortless and productive visit.",
        website: "",
        address: "4355 King St E, Kitchener, ON N2P 2E9",
        addressLink: "",
        title: "Holiday Inn Express Kitchener Modern Lobby",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Courtyard by Marriott Kitchener",
        image: "CourtyardKitchener.webp",
        description: "Located just moments from the Kitchener Airport, Courtyard by Marriott Kitchener delivers an exceptionally welcoming, upscale stay for corporate travelers and visiting families. The immaculate property features spacious, contemporary guest rooms with premium bedding, large desks, and complimentary high-speed internet. Guests can dine at the casual on-site bistro restaurant, stay active inside the state-of-the-art fitness center, or unwind in the heated indoor swimming pool and whirlpool. Positioned close to major regional highways and key tourist attractions, this hotel offers seamless navigation and total comfort throughout your stay.",
        website: "",
        address: "2960 King St E, Kitchener, ON N2A 1A9",
        addressLink: "",
        title: "Courtyard Marriott Kitchener Guest Room",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "DoubleTree by Hilton Kitchener",
        image: "DoubleTreeKitchener.webp",
        description: "Positioned a convenient twelve-minute drive from downtown, DoubleTree by Hilton Kitchener provides a sophisticated four-star hotel experience for visitors exploring the Waterloo Region. The expansive property features relaxed, beautifully styled guest rooms complete with generous sitting areas, plush bedding, and contemporary workspace options. Guests enjoy high-end amenities on-site, including a dynamic lifestyle restaurant, a cozy lounge bar, an inviting indoor swimming pool, a soothing hot tub, and a modern gym facility. Its seamless access to major commercial corridors ensures an upscale, productive, and comfortable urban retreat.",
        website: "",
        address: "30 Fairway Rd S, Kitchener, ON N2A 2N2",
        addressLink: "",
        title: "DoubleTree Hilton Kitchener Main Entrance",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Home2 Suites by Hilton Kitchener",
        image: "Home2SuitesKitchener.webp",
        description: "Ideal for extended stays and family vacations, Home2 Suites by Hilton Kitchener offers incredibly massive, recently built suite accommodations with premium hospitality. Every spacious guest suite comes fully equipped with a functional kitchenette, a full-size refrigerator, a microwave, a dishwasher, and modular workspaces. The pet-friendly property features a complimentary daily breakfast buffet, a heated indoor swimming pool, a modern gym facility, and an inviting outdoor social lounge. Centrally located on Fairway Road, it provides travelers with absolute convenience and home-like utility throughout their regional visit.",
        website: "",
        address: "30 Fairway Rd S Bldg B, Kitchener, ON N2A 2N2",
        addressLink: "",
        title: "Home2 Suites Kitchener Modern Suite Kitchenette",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Quality Inn Kitchener",
        image: "QualityInnKitchener.webp",

            description: "Centrally positioned on King Street East, Quality Inn Kitchener offers straightforward and highly unpretentious two-star hotel accommodations perfectly suited for budget-conscious regional travelers. The property features tidy, casual guest rooms equipped with free high-speed wireless internet, complimentary hot breakfast options, and free on-site parking spaces. Guests looking to stay active or unwind can utilize the hotel's fully equipped fitness center, indoor hot tub, and relaxing dry sauna facility. Offering highly convenient access to Highway 401 and nearby local restaurants, it serves as an excellent, completely hassle-free base for overnight stays.",
    website: "",
    address: "2899 King St E, Kitchener, ON N2A 1A6",
    addressLink: "",
    title: "Quality Inn Kitchener Main Entrance",
    photoBy: "",
    license: "",
    licenseLink: "",
    source: "",
    imageLink: ""
},
{
    name: "Residence & Conference Centre - Kitchener Waterloo",
        image: "RCCKitchenerWaterloo.webp",
    description: "Located right on Conestoga College Boulevard, Residence & Conference Centre - Kitchener Waterloo provides highly affordable, campus-style hotel accommodations that are exceptional for tournament groups and long-stay travelers. The hotel layout features spacious, well-kept suites containing large refrigerators, microwaves, and comfortable dedicated sitting areas. Property perks include completely free wireless internet access, free oversized vehicle parking, and daily housekeeping services managed by an incredibly professional staff team. Its strategic location moments away from major regional transit lines and local dining spots ensures a highly efficient, practical, and independent lodging experience.",
    website: "",
    address: "99 Conestoga College Blvd, Kitchener, ON N2P 2N5",
    addressLink: "",
    title: "Residence and Conference Centre Exterior",
    photoBy: "",
    license: "",
    licenseLink: "",
    source: "",
    imageLink: ""
},
{
    name: "Kitchener Motel",
        image: "KitchenerMotel.webp",
    description: "Situated along Victoria Street North, Kitchener Motel is a family-owned and operated independent property delivering highly functional, low-key quarters for regional road travelers. The straightforward layout features clean, simple guest rooms equipped with free high-speed wireless internet access, private modern bathrooms, and flat-screen cable televisions. Select upgraded accommodation units also come outfitted with luxurious whirlpool tubs and convenient kitchenettes for extended stays. Located a brief drive from central community hubs and outdoor parks, it provides travelers with an exceptionally quiet, budget-friendly, and completely secure roadside lodging option.",
    website: "",
    address: "1485 Victoria St N, Kitchener, ON N2B 3E4",
    addressLink: "",
    title: "Kitchener Motel Quiet Courtyard",
    photoBy: "",
    license: "",
    licenseLink: "",
    source: "",
    imageLink: ""
},
{
    name: "Embassy Motel Kitchener",
        image: "EmbassyMotelKitchener.webp",
    description: "Boasting a classic and highly practical single-story design, Embassy Motel Kitchener provides reliable, unpretentious roadside accommodations along the busy King Street East corridor. The property features exceptionally clean, well-maintained guest rooms equipped with robust wireless internet connectivity, cold air conditioning, and premium cable television packages. Known for its old-school vibe and highly attentive front desk service, this motel offers an incredibly handy location for commuters exploring Kitchener and Cambridge. It stands as a secure, home-away-from-home choice that balances great proximity to the highway with affordable overnight rates.",
    website: "",
    address: "4521 King St E, Kitchener, ON N2P 2J9",
    addressLink: "",
    title: "Embassy Motel Kitchener Roadside View",
    photoBy: "",
    license: "",
    licenseLink: "",
    source: "",
    imageLink: ""
},
{
    name: "Fairway Inn & Suites",
        image: "FairwayInnSuites.webp",
    description: "Offering straightforward budget accommodations near central commercial corridors, Fairway Inn & Suites Kitchener provides a highly accessible, low-cost option for regional commuters. The newly renovated guest rooms feature comfortable beds, crisp clean comforters, free high-speed wireless internet access, and premium cable television channels. The property boasts helpful off-street parking facilities right in front of the rooms, allowing for completely seamless arrival and departure transitions. Supported by an outstanding front desk service staff, this inn focuses on delivering a deeply practical, secure, and stress-free stay at an unmatched local price point.",
    website: "",
    address: "2933 King St E, Kitchener, ON N2A 1A8",
    addressLink: "",
    title: "Fairway Inn and Suites Guest Room Layout",
    photoBy: "",
    license: "",
    licenseLink: "",
    source: "",
    imageLink: ""
}
];




const container = document.getElementById("hotel-container");
const hotelSearchForm = document.getElementById("hotelSearchForm");
const hotelSearchInput = document.getElementById("hotel-search");

// Display hotel cards
function displayHotels(hotelList) {
    container.innerHTML = "";

    hotelList.forEach(hotel => {
        const card = document.createElement("div");
        card.className = "hotel-card";

        card.innerHTML = `
            <img
                src="${hotel.image}"
                alt="${hotel.name}"
                class="hotel-image"
                loading="lazy"
            >

            <div class="hotel-info">
                <h2>${hotel.name}</h2>

                <p>${hotel.description}</p>

                <p>
                    <strong>Address:</strong>
                    <a href="${hotel.addressLink}"
                       target="_blank"
                       class="hotel-button"
                       rel="noopener noreferrer">
                        ${hotel.address}
                    </a>
                </p>

                <a
                    href="${hotel.website}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hotel-button"
                >
                    Click Here To Visit Hotel Website And Book Now
                </a>

               
<div class="image-credit">
    <p>Title: ${hotel.title || "Not specified"}</p>

    <p>Photo by: ${hotel.photoBy || "Not specified"}</p>

    <p>
        License:
        ${
            hotel.license && hotel.licenseLink
                ? `<a href="${hotel.licenseLink}" target="_blank" rel="noopener noreferrer">
                    ${hotel.license}
                   </a>`
                : "Not specified"
        }
    </p>

    <p>Source: ${hotel.source || "Not specified"}</p>

    <p>
        Link:
        <a href="${hotel.imageLink}" target="_blank" rel="noopener noreferrer">
            Click here to view image source
        </a>
    </p>
</div>


        `;

        container.appendChild(card);
    });
}

// Search hotels by name, address, or description
function searchHotels() {
    const query = hotelSearchInput.value.toLowerCase().trim();

    const filteredHotels = hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(query) ||
        hotel.address.toLowerCase().includes(query) ||
        hotel.description.toLowerCase().includes(query)
    );

    displayHotels(filteredHotels);
}

// Search when the visitor submits the form
hotelSearchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    searchHotels();
});

// Update results as the visitor types
hotelSearchInput.addEventListener("input", searchHotels);

// Show every hotel when the page first loads
displayHotels(hotels);
