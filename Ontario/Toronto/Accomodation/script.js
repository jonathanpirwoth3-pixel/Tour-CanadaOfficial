const hotels = [

        {
            name: "Fairmont Royal York",
            image: "FairmontRoyalYork.webp",
            description: "Standing directly across from Union Station, the Fairmont Royal York is one of Toronto's most recognizable historic hotels. Originally opened in 1929, this landmark property combines elegant architecture with modern luxury. Guests can enjoy beautifully designed rooms, several restaurants, a health club and convenient access to Toronto's major attractions, making it an excellent choice for visitors seeking a classic luxury experience.",
            website: "https://www.fairmont.com/royal-york-toronto/",
            address: "Fairmont Royal York, 100 Front St W, Toronto, ON M5J 1E3",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Fairmont+Royal+York+Toronto",
            title: "Fairmont Royal York"
        },
        {
            name: "Delta Hotels Toronto",
            image: "DeltaHotelsToronto.webp",
            description: "Located in Toronto's South Core district, Delta Hotels Toronto offers modern accommodation with impressive views of the city and Lake Ontario. The hotel is particularly convenient for visitors exploring the CN Tower, Rogers Centre, Ripley's Aquarium and the waterfront. Its contemporary rooms, indoor pool, restaurants and direct connections to major downtown destinations make it a popular choice for both business and leisure travelers.",
            website: "https://www.marriott.com/en-us/hotels/yyzdl-delta-hotels-toronto/overview/",
            address: "Delta Hotels Toronto, 75 Lower Simcoe St, Toronto, ON M5J 3A6",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Delta+Hotels+Toronto",
            title: "Delta Hotels Toronto"
        },
        {
            name: "InterContinental Toronto Centre",
            image: "InterContinentalTorontoCentre.webp",
            description: "InterContinental Toronto Centre is an upscale downtown hotel located beside the Metro Toronto Convention Centre. Its central location places guests within walking distance of the CN Tower, Union Station, Rogers Centre and Toronto's waterfront. The property features sophisticated accommodation, an indoor saltwater pool, spa facilities, dining options and extensive meeting spaces, making it suitable for both vacationers and business travelers.",
            website: "https://www.ihg.com/intercontinental/hotels/us/en/toronto/yyzha/hoteldetail",
            address: "InterContinental Toronto Centre, 225 Front St W, Toronto, ON M5V 2X3",
            addressLink: "https://www.google.com/maps/search/?api=1&query=InterContinental+Toronto+Centre",
            title: "InterContinental Toronto Centre"
        },
        {
            name: "Toronto Marriott City Centre Hotel",
            image: "TorontoMarriottCityCentre.webp",
            description: "Situated within Rogers Centre, the Toronto Marriott City Centre Hotel offers a distinctive stay for sports fans and visitors looking to experience downtown Toronto. Some rooms provide views directly into the stadium, creating a memorable experience during baseball season and major events. Guests also benefit from easy access to the CN Tower, waterfront, entertainment district and nearby restaurants.",
            website: "https://www.marriott.com/en-us/hotels/yyzcc-toronto-marriott-city-centre-hotel/overview/",
            address: "Toronto Marriott City Centre Hotel, 1 Blue Jays Way, Toronto, ON M5V 1J4",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Toronto+Marriott+City+Centre+Hotel",
            title: "Toronto Marriott City Centre Hotel"
        },
        {
            name: "Hilton Toronto",
            image: "HiltonToronto.webp",
            description: "Hilton Toronto is a full-service downtown hotel positioned close to Toronto's financial district, shopping destinations and entertainment venues. The property offers comfortable guest rooms, an indoor pool, dining facilities and extensive event spaces. Its central location makes it convenient for visitors attending conferences, exploring the city or enjoying Toronto's restaurants, theatres and cultural attractions.",
            website: "https://www.hilton.com/en/hotels/torhitw-hilton-toronto/",
            address: "Hilton Toronto, 145 Richmond St W, Toronto, ON M5H 2L2",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Hilton+Toronto",
            title: "Hilton Toronto"
        },
        {
            name: "The Ritz-Carlton Toronto",
            image: "RitzCarltonToronto.webp",
            description: "The Ritz-Carlton Toronto is a luxury hotel in the heart of the city's Entertainment District. Known for its elegant accommodation, exceptional hospitality and sophisticated atmosphere, the property offers an indoor saltwater pool, a luxury spa, fine dining and impressive city views. Its location provides convenient access to the CN Tower, Rogers Centre, Toronto's theatres and the waterfront.",
            website: "https://www.ritzcarlton.com/en/hotels/yyzrz-the-ritz-carlton-toronto/overview/",
            address: "The Ritz-Carlton Toronto, 181 Wellington St W, Toronto, ON M5V 3G7",
            addressLink: "https://www.google.com/maps/search/?api=1&query=The+Ritz+Carlton+Toronto",
            title: "The Ritz-Carlton Toronto"
        },
        {
            name: "One King West Hotel & Residence",
            image: "OneKingWest.webp",
            description: "One King West Hotel & Residence occupies a historic bank building in the heart of Toronto's financial district. The property combines historic architecture with modern hotel accommodation, offering spacious suites and convenient facilities for both short and extended stays. Its location near King and Yonge Streets provides easy access to the PATH network, Union Station, restaurants and major downtown attractions.",
            website: "https://www.onekingwest.com/",
            address: "One King West Hotel & Residence, 1 King St W, Toronto, ON M5H 1A1",
            addressLink: "https://www.google.com/maps/search/?api=1&query=One+King+West+Hotel+Toronto",
            title: "One King West Hotel & Residence"
        },
        {
            name: "The Omni King Edward Hotel",
            image: "OmniKingEdward.webp",
            description: "The Omni King Edward Hotel is a historic luxury property that has welcomed guests in downtown Toronto since 1903. Famous for its elegant interiors, grand public spaces and traditional hospitality, the hotel offers a refined accommodation experience in the city's Old Town district. Guests can enjoy its restaurants, spa facilities and convenient proximity to St. Lawrence Market, the financial district and other historic attractions.",
            website: "https://www.omnihotels.com/hotels/toronto-king-edward",
            address: "The Omni King Edward Hotel, 37 King St E, Toronto, ON M5C 1E9",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Omni+King+Edward+Hotel+Toronto",
            title: "The Omni King Edward Hotel"
        },
        {
            name: "The St. Regis Toronto",
            image: "StRegisToronto.webp",
            description: "The St. Regis Toronto is a five-star luxury hotel located in the heart of the city's financial district. The property is recognized for its elegant guest rooms, personalized butler service and sophisticated dining experiences. Visitors can also enjoy its wellness facilities, indoor infinity-style pool and spa. Its central location makes it convenient for exploring Toronto's shopping, entertainment and cultural destinations.",
            website: "https://www.marriott.com/en-us/hotels/yyzxr-the-st-regis-toronto/overview/",
            address: "The St. Regis Toronto, 325 Bay St, Toronto, ON M5H 4G3",
            addressLink: "https://www.google.com/maps/search/?api=1&query=The+St+Regis+Toronto",
            title: "The St. Regis Toronto"
        },
        {
            name: "Four Seasons Hotel Toronto",
            image: "FourSeasonsToronto.webp",
            description: "Located in the upscale Yorkville neighbourhood, Four Seasons Hotel Toronto is a world-renowned luxury property surrounded by designer boutiques, restaurants and cultural attractions. The hotel features beautifully appointed rooms, exceptional dining, an extensive spa and an impressive indoor pool. Its location offers guests access to some of Toronto's finest shopping and dining experiences while providing a peaceful retreat in the middle of the city.",
            website: "https://www.fourseasons.com/toronto/",
            address: "Four Seasons Hotel Toronto, 60 Yorkville Ave, Toronto, ON M4W 0A4",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Four+Seasons+Hotel+Toronto",
            title: "Four Seasons Hotel Toronto"
        },
        {
            name: "Hotel X Toronto",
            image: "HotelXToronto.webp",
            description: "Hotel X Toronto is a luxury urban resort located at Exhibition Place along Lake Ontario. The property offers a resort-style experience within the city, featuring an outdoor rooftop pool, spa, fitness facilities, restaurants and panoramic waterfront views. Its location near Exhibition Place, BMO Field and the waterfront makes it an attractive option for visitors attending events or looking for a relaxing city getaway.",
            website: "https://www.hotelxtoronto.com/",
            address: "Hotel X Toronto, 111 Princes' Blvd, Toronto, ON M6K 3C3",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Hotel+X+Toronto",
            title: "Hotel X Toronto"
        },
        {
            name: "Le Germain Hotel Toronto Maple Leaf Square",
            image: "LeGermainMapleLeafSquare.webp",
            description: "Le Germain Hotel Toronto Maple Leaf Square is a stylish boutique hotel situated in one of downtown Toronto's busiest entertainment areas. The property offers contemporary accommodation, thoughtful guest services and a welcoming atmosphere. Located close to Scotiabank Arena, Union Station, the CN Tower and the waterfront, it is particularly convenient for visitors attending sporting events, concerts and other downtown activities.",
            website: "https://www.germainhotels.com/en/le-germain-hotel/maple-leaf-square",
            address: "Le Germain Hotel Toronto Maple Leaf Square, 75 Bremner Blvd, Toronto, ON M5J 0A7",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Le+Germain+Hotel+Maple+Leaf+Square",
            title: "Le Germain Hotel Toronto Maple Leaf Square"
        },
        {
            name: "Marriott Downtown at CF Toronto Eaton Centre",
            image: "MarriottDowntownEatonCentre.webp",
            description: "Marriott Downtown at CF Toronto Eaton Centre is a centrally located hotel offering convenient access to one of Canada's largest shopping centres. Its location near Dundas Square, Nathan Phillips Square and major transit connections makes it an excellent base for exploring Toronto. The hotel features modern rooms, restaurants, an indoor swimming pool and facilities for meetings and special events.",
            website: "https://www.marriott.com/en-us/hotels/yyzec-toronto-marriott-downtown-at-cf-toronto-eaton-centre/overview/",
            address: "Marriott Downtown at CF Toronto Eaton Centre, 525 Bay St, Toronto, ON M5G 2L2",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Marriott+Downtown+CF+Toronto+Eaton+Centre",
            title: "Marriott Downtown at CF Toronto Eaton Centre"
        },
        {
            name: "Sheraton Centre Toronto Hotel",
            image: "SheratonCentreToronto.webp",
            description: "Sheraton Centre Toronto Hotel is a large full-service hotel located in the heart of downtown Toronto, directly across from Nathan Phillips Square. Its central location places visitors within walking distance of City Hall, the Eaton Centre, theatres and the financial district. The hotel offers extensive accommodation, restaurants, a fitness centre and a notable outdoor heated pool surrounded by landscaped terraces.",
            website: "https://www.marriott.com/en-us/hotels/yyzsi-sheraton-centre-toronto-hotel/overview/",
            address: "Sheraton Centre Toronto Hotel, 123 Queen St W, Toronto, ON M5H 2M9",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Sheraton+Centre+Toronto+Hotel",
            title: "Sheraton Centre Toronto Hotel"
        },
        {
            name: "Hyatt Regency Toronto",
            image: "HyattRegencyToronto.webp",
            description: "Hyatt Regency Toronto is a modern downtown hotel located in the city's Entertainment District. The property provides convenient access to theatres, restaurants, nightlife and major attractions including the CN Tower and Rogers Centre. Guests can enjoy comfortable rooms, dining facilities, a fitness centre and seasonal outdoor pool facilities, making it a practical choice for both leisure and business travel.",
            website: "https://www.hyatt.com/hyatt-regency/en-US/torhr-hyatt-regency-toronto",
            address: "Hyatt Regency Toronto, 370 King St W, Toronto, ON M5V 1J9",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Hyatt+Regency+Toronto",
            title: "Hyatt Regency Toronto"
        },
        {
            name: "Novotel Toronto Centre",
            image: "NovotelTorontoCentre.webp",
            description: "Novotel Toronto Centre is a contemporary hotel situated in Toronto's historic St. Lawrence neighbourhood. Its location provides easy access to St. Lawrence Market, the Distillery District, Union Station and the waterfront. The property offers comfortable rooms, a restaurant, indoor swimming pool, fitness facilities and meeting spaces, making it suitable for families, tourists and business travelers.",
            website: "https://all.accor.com/hotel/0931/index.en.shtml",
            address: "Novotel Toronto Centre, 45 The Esplanade, Toronto, ON M5E 1W2",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Novotel+Toronto+Centre",
            title: "Novotel Toronto Centre"
        },
        {
            name: "Radisson Blu Toronto Downtown",
            image: "RadissonBluToronto.webp",
            description: "Radisson Blu Toronto Downtown is a waterfront hotel overlooking Lake Ontario and located close to Toronto's Harbourfront attractions. Guests can enjoy contemporary rooms, a rooftop swimming pool, dining options and convenient access to the CN Tower, Scotiabank Arena and Toronto Islands ferry terminals. Its waterfront location provides a quieter alternative to some of the busier downtown hotel districts.",
            website: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-toronto-downtown",
            address: "Radisson Blu Toronto Downtown, 249 Queen's Quay W, Toronto, ON M5J 2N5",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Radisson+Blu+Toronto+Downtown",
            title: "Radisson Blu Toronto Downtown"
        },
        {
            name: "Pantages Hotel Downtown Toronto",
            image: "PantagesHotelToronto.webp",
            description: "Pantages Hotel Downtown Toronto is a stylish all-suite hotel situated close to Yonge-Dundas Square and the Eaton Centre. Its spacious accommodation makes it particularly suitable for visitors seeking more room than a traditional hotel bedroom. The property is surrounded by shopping, restaurants, theatres and entertainment venues, providing convenient access to some of Toronto's most popular downtown destinations.",
            website: "https://www.pantagestoronto.com/",
            address: "Pantages Hotel Downtown Toronto, 200 Victoria St, Toronto, ON M5B 1V8",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Pantages+Hotel+Toronto",
            title: "Pantages Hotel Downtown Toronto"
        },
        {
            name: "Union Hotel",
            image: "UnionHotelToronto.webp",
            description: "Union Hotel is a contemporary boutique hotel located in downtown Toronto, just steps from Union Station and the city's financial district. The property combines modern design with comfortable accommodation and convenient access to major transportation connections. Guests are within walking distance of the CN Tower, Scotiabank Arena, waterfront and many of Toronto's leading restaurants and entertainment venues.",
            website: "https://www.unionhoteltoronto.com/",
            address: "Union Hotel, 60 York St, Toronto, ON M5J 1S8",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Union+Hotel+Toronto",
            title: "Union Hotel"
        },
        {
            name: "The Anndore House",
            image: "TheAnndoreHouse.webp",
            description: "The Anndore House is a boutique hotel in downtown Toronto that blends contemporary design with a distinctive neighbourhood atmosphere. Located near Bloor and Yonge Streets, the property provides easy access to Yorkville, the Royal Ontario Museum, shopping and public transportation. Its individually styled rooms, restaurant and relaxed atmosphere make it an appealing choice for travelers seeking something different from a conventional large hotel.",
            website: "https://www.theanndorehouse.com/",
            address: "The Anndore House, 15 Charles St E, Toronto, ON M4Y 1S1",
            addressLink: "https://www.google.com/maps/search/?api=1&query=The+Anndore+House+Toronto",
            title: "The Anndore House"
        },
        {
            name: "Ace Hotel Toronto",
            image: "AceHotelToronto.webp",
            description: "Ace Hotel Toronto is a design-focused boutique property located in the city's vibrant Garment District. Known for its distinctive interiors, artistic atmosphere and cultural influence, the hotel attracts visitors looking for a more creative urban experience. Its restaurant, rooftop lounge and proximity to the Entertainment District, Queen Street West and independent shops make it a distinctive destination for travelers.",
            website: "https://toronto.acehotel.com/",
            address: "Ace Hotel Toronto, 51 Camden St, Toronto, ON M5V 1V2",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Ace+Hotel+Toronto",
            title: "Ace Hotel Toronto"
        },
        {
            name: "1 Hotel Toronto",
            image: "OneHotelToronto.webp",
            description: "1 Hotel Toronto is a luxury lifestyle hotel known for its nature-inspired design and emphasis on sustainability. Located in the city's King West neighbourhood, the property features beautifully designed rooms, restaurants, rooftop dining and a seasonal rooftop pool. Its distinctive interiors incorporate natural materials and greenery, creating a relaxed atmosphere while keeping guests close to Toronto's nightlife, restaurants and entertainment.",
            website: "https://www.1hotels.com/toronto",
            address: "1 Hotel Toronto, 550 Wellington St W, Toronto, ON M5V 2V4",
            addressLink: "https://www.google.com/maps/search/?api=1&query=1+Hotel+Toronto",
            title: "1 Hotel Toronto"
        },
        {
            name: "Bisha Hotel Toronto",
            image: "BishaHotelToronto.webp",
            description: "Bisha Hotel Toronto is a luxury boutique property located in the Entertainment District. Recognized for its bold interior design, stylish guest rooms and vibrant social spaces, the hotel offers a distinctive accommodation experience. Visitors can enjoy its restaurants, rooftop pool and lounge while remaining close to the CN Tower, Rogers Centre, theatres and Toronto's lively nightlife.",
            website: "https://www.bishahoteltoronto.com/",
            address: "Bisha Hotel Toronto, 80 Blue Jays Way, Toronto, ON M5V 2G3",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Bisha+Hotel+Toronto",
            title: "Bisha Hotel Toronto"
        },
        {
            name: "The Broadview Hotel",
            image: "BroadviewHotelToronto.webp",
            description: "The Broadview Hotel is a historic boutique hotel located in Toronto's Riverside neighbourhood. Originally built in the nineteenth century, the property has been transformed into a stylish destination featuring restored architectural details and contemporary accommodation. Its popular rooftop bar offers impressive views of the Toronto skyline, while its location provides access to the east end's restaurants, independent shops and cultural attractions.",
            website: "https://www.thebroadviewhotel.ca/",
            address: "The Broadview Hotel, 106 Broadview Ave, Toronto, ON M4M 2G1",
            addressLink: "https://www.google.com/maps/search/?api=1&query=The+Broadview+Hotel+Toronto",
            title: "The Broadview Hotel"
        },
        {
            name: "Park Hyatt Toronto",
            image: "ParkHyattToronto.webp",
            description: "Park Hyatt Toronto is a luxury hotel situated in the prestigious Yorkville neighbourhood. The property combines sophisticated design with elegant accommodation, exceptional dining and wellness facilities. Its location places guests close to high-end shopping, art galleries, the Royal Ontario Museum and some of the city's most celebrated restaurants, making it an excellent choice for visitors seeking an upscale Toronto experience.",
            website: "https://www.hyatt.com/park-hyatt/en-US/torph-park-hyatt-toronto",
            address: "Park Hyatt Toronto, 4 Avenue Rd, Toronto, ON M5R 2E8",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Park+Hyatt+Toronto",
            title: "Park Hyatt Toronto"
        },
        {
            name: "Town Inn Suites Toronto",
            image: "TownInnSuites.webp",
            description: "Town Inn Suites Toronto offers spacious suite-style accommodation in the city's Bloor-Yorkville area. Its larger rooms and residential-style layouts make it a practical option for families, groups and visitors planning longer stays. Located close to Bloor-Yonge subway station, the hotel provides convenient access to shopping, restaurants, museums and other attractions throughout downtown Toronto.",
            website: "https://www.towninn.com/",
            address: "Town Inn Suites Toronto, 620 Church St, Toronto, ON M4Y 2G2",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Town+Inn+Suites+Toronto",
            title: "Town Inn Suites Toronto"
        },
        {
            name: "W Toronto",
            image: "WToronto.webp",
            description: "W Toronto is a contemporary lifestyle hotel located near Yorkville and the city's upscale shopping district. Known for its modern design, energetic atmosphere and social spaces, the property offers stylish rooms, restaurants, bars and entertainment facilities. Its central location provides easy access to the Royal Ontario Museum, fashionable shopping streets and Toronto's restaurants and nightlife.",
            website: "https://www.marriott.com/en-us/hotels/yyzwh-w-toronto/overview/",
            address: "W Toronto, 90 Bloor St E, Toronto, ON M4W 1A7",
            addressLink: "https://www.google.com/maps/search/?api=1&query=W+Toronto+Hotel",
            title: "W Toronto"
        },
        {
            name: "Kimpton Saint George Hotel",
            image: "KimptonSaintGeorge.webp",
            description: "Kimpton Saint George Hotel is a boutique-style property located in Toronto's Annex neighbourhood, close to Yorkville and the University of Toronto. The hotel combines contemporary accommodation with artistic design and a welcoming atmosphere. Its location makes it particularly convenient for visitors exploring the Royal Ontario Museum, the university district, Bloor Street shopping and the city's cultural attractions.",
            website: "https://www.ihg.com/kimptonhotels/hotels/us/en/saint-george-hotel-toronto-on/yyzsg/hoteldetail",
            address: "Kimpton Saint George Hotel, 280 Bloor St W, Toronto, ON M5S 1V8",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Kimpton+Saint+George+Hotel+Toronto",
            title: "Kimpton Saint George Hotel"
        },
        {
            name: "The Westin Harbour Castle, Toronto",
            image: "WestinHarbourCastle.webp",
            description: "The Westin Harbour Castle is a waterfront hotel situated along Toronto's scenic Queen's Quay. The property offers views of Lake Ontario, comfortable accommodation, restaurants and recreational facilities, including indoor and outdoor sporting amenities. Its location provides convenient access to the waterfront, Toronto Islands ferry terminals, Scotiabank Arena and Union Station, making it an attractive option for visitors looking to explore the city and its waterfront.",
            website: "https://www.marriott.com/en-us/hotels/yyzwi-the-westin-harbour-castle-toronto/overview/",
            address: "The Westin Harbour Castle, Toronto, 1 Harbour Square, Toronto, ON M5J 1A6",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Westin+Harbour+Castle+Toronto",
            title: "The Westin Harbour Castle"
        },
        {
            name: "Pan Pacific Toronto",
            image: "PanPacificToronto.webp",
            description: "Pan Pacific Toronto is a full-service hotel located in the Don Valley area, offering a quieter setting away from the busy downtown core. The property features spacious accommodation, dining facilities, outdoor recreational areas, tennis facilities and event spaces. Its location provides convenient access to the Don Valley Parkway, nearby parks and attractions in North York and downtown Toronto.",
            website: "https://www.panpacific.com/en/hotels-and-resorts/pp-toronto.html",
            address: "Pan Pacific Toronto, 900 York Mills Rd, Toronto, ON M3B 3H2",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Pan+Pacific+Toronto",
            title: "Pan Pacific Toronto"
        },
        {
            name: "The Drake Hotel",
            image: "DrakeHotelToronto.webp",
            description: "The Drake Hotel is a popular boutique destination located along Queen Street West, one of Toronto's most vibrant cultural and entertainment districts. Known for its connection to the city's arts and music scene, the hotel combines distinctive accommodation with restaurants, live entertainment and rooftop spaces. It is particularly appealing to visitors interested in independent culture, nightlife, art and Toronto's creative community.",
            website: "https://www.thedrake.ca/",
            address: "The Drake Hotel, 1150 Queen St W, Toronto, ON M6J 1J3",
            addressLink: "https://www.google.com/maps/search/?api=1&query=The+Drake+Hotel+Toronto",
            title: "The Drake Hotel"
        },
        {
            name: "Old Mill Toronto",
            image: "OldMillToronto.webp",
            description: "Old Mill Toronto is a historic hotel and event destination located beside the Humber River in the city's west end. Surrounded by landscaped grounds and natural scenery, the property offers a peaceful alternative to downtown accommodation. Its distinctive architecture, elegant rooms, dining experiences and proximity to the Humber River trails make it a popular choice for romantic getaways, weddings and relaxing stays.",
            website: "https://www.oldmilltoronto.com/",
            address: "Old Mill Toronto, 21 Old Mill Rd, Toronto, ON M8X 1G5",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Old+Mill+Toronto",
            title: "Old Mill Toronto"
        },
        {
            name: "Windsor Arms Hotel",
            image: "WindsorArmsHotel.webp",
            description: "Windsor Arms Hotel is an intimate luxury boutique hotel situated in the heart of Yorkville. Known for its elegant atmosphere, individually designed suites and refined hospitality, the property offers a more private and personalized experience. Guests can enjoy its dining facilities, spa services and convenient access to Yorkville's designer boutiques, restaurants, galleries and cultural attractions.",
            website: "https://www.windsorarmshotel.com/",
            address: "Windsor Arms Hotel, 18 St Thomas St, Toronto, ON M5S 3E7",
            addressLink: "https://www.google.com/maps/search/?api=1&query=Windsor+Arms+Hotel+Toronto",
            title: "Windsor Arms Hotel"
        },
        {
            name: "The Sutton Place Hotel Toronto",
            image: "SuttonPlaceToronto.webp",
            description: "The Sutton Place Hotel Toronto is a modern upscale property situated in the Entertainment District. Its location near King Street West places guests close to Rogers Centre, the CN Tower, theatres and some of the city's most popular restaurants. The hotel offers contemporary rooms, comfortable suites, dining facilities and an indoor swimming pool, providing a convenient base for exploring downtown Toronto.",
            website: "https://www.suttonplace.com/toronto",
            address: "The Sutton Place Hotel Toronto, 355 King St W, Toronto, ON M5V 1J5",
            addressLink: "https://www.google.com/maps/search/?api=1&query=The+Sutton+Place+Hotel+Toronto",
            title: "The Sutton Place Hotel Toronto"
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
