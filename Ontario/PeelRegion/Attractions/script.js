const attractions = [


        // MISSISSAUGA

        {
            name: "Celebration Square",
            image: "CelebrationSquare.webp",
            description: "Celebration Square is one of Mississauga's most recognizable public gathering spaces, located beside the Civic Centre in the heart of downtown. Its large outdoor stage hosts concerts, cultural festivals, movie screenings, and community celebrations throughout the year. Visitors can enjoy the surrounding water features, public seating, seasonal skating rink, and impressive city-centre atmosphere.",
            website: "https://www.mississauga.ca/",
            location: "Celebration Square, 300 City Centre Dr, Mississauga, ON L5B 3C1",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Celebration+Square+Mississauga"
        },
        {
            name: "Port Credit Lighthouse",
            image: "PortCreditLighthouse.webp",
            description: "The Port Credit Lighthouse is a distinctive waterfront landmark overlooking the mouth of the Credit River and Lake Ontario. Its red-and-white structure has become one of Mississauga's most recognizable photographic locations. Visitors can explore the surrounding harbour, walk along the waterfront, watch boats, and enjoy nearby restaurants, shops, and scenic sunset views.",
            website: "https://www.visitmississauga.ca/",
            location: "Port Credit Lighthouse, Port Credit, Mississauga, ON",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Port+Credit+Lighthouse+Mississauga"
        },
        {
            name: "Rattray Marsh Conservation Area",
            image: "RattrayMarsh.webp",
            description: "Rattray Marsh is a protected natural area along Mississauga's Lake Ontario shoreline, featuring wetlands, mature forests, boardwalks, and winding walking trails. Visitors can explore its unique marsh ecosystem while observing birds, turtles, and other wildlife. The waterfront setting provides peaceful scenery and excellent opportunities for nature photography, hiking, and outdoor exploration.",
            website: "https://cvc.ca/",
            location: "Rattray Marsh Conservation Area, 1180 Lakeshore Rd W, Mississauga, ON L5H 1A1",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Rattray+Marsh+Mississauga"
        },
        {
            name: "The Riverwood Conservancy",
            image: "RiverwoodConservancy.webp",
            description: "The Riverwood Conservancy is a beautiful natural destination featuring forests, gardens, meadows, and walking trails along the Credit River. Visitors can explore its extensive grounds, observe local wildlife, and discover native plants throughout the seasons. The property also offers environmental education programs, gardening activities, and peaceful outdoor spaces for nature enthusiasts.",
            website: "https://riverwoodconservancy.org/",
            location: "The Riverwood Conservancy, 4300 Riverwood Park Ln, Mississauga, ON L5C 2S7",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Riverwood+Conservancy+Mississauga"
        },
        {
            name: "Kariya Park",
            image: "KariyaPark.webp",
            description: "Kariya Park is a Japanese-inspired garden in central Mississauga, designed to celebrate the city's friendship with Kariya, Japan. Its landscaped grounds feature traditional architectural details, peaceful ponds, bridges, stone arrangements, and carefully maintained plants. Cherry blossoms and Japanese garden features make it particularly attractive during spring, while its quiet atmosphere offers an escape from downtown.",
            website: "https://www.mississauga.ca/",
            location: "Kariya Park, 3620 Kariya Dr, Mississauga, ON L5B 3J2",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Kariya+Park+Mississauga"
        },
        {
            name: "Lakefront Promenade Park",
            image: "LakefrontPromenadePark.webp",
            description: "Lakefront Promenade Park is a major waterfront destination overlooking Lake Ontario in southern Mississauga. Its facilities include walking paths, picnic spaces, marina views, playgrounds, and open green areas. Visitors can watch sailboats, enjoy lakeside scenery, explore the shoreline, and photograph beautiful sunsets. It is especially popular for summer outings and family gatherings.",
            website: "https://www.mississauga.ca/",
            location: "Lakefront Promenade Park, 800 Lakefront Promenade, Mississauga, ON L5E 3G9",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Lakefront+Promenade+Park+Mississauga"
        },
        {
            name: "Erindale Park",
            image: "ErindalePark.webp",
            description: "Erindale Park is one of Mississauga's largest and most scenic parks, situated along the Credit River. Its extensive trails wind through forests, open fields, and riverside landscapes, creating opportunities for hiking, cycling, photography, and wildlife observation. Visitors also enjoy picnic areas, seasonal scenery, and access to beautiful natural surroundings within the city.",
            website: "https://www.mississauga.ca/",
            location: "Erindale Park, 1695 Dundas St W, Mississauga, ON L5C 1E3",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Erindale+Park+Mississauga"
        },
        {
            name: "Bradley Museum",
            image: "BradleyMuseum.webp",
            description: "Bradley Museum is a heritage destination featuring historic buildings that preserve the story of early life in Mississauga. Visitors can explore restored structures, historical collections, period furnishings, and exhibitions about local communities and settlement. Its landscaped grounds and seasonal programming provide an engaging experience for anyone interested in regional history and heritage architecture.",
            website: "https://www.mississauga.ca/arts-and-culture/museums/",
            location: "Bradley Museum, 1620 Orr Rd, Mississauga, ON L5J 4T2",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Bradley+Museum+Mississauga"
        },
        {
            name: "Benares Historic House",
            image: "BenaresHistoricHouse.webp",
            description: "Benares Historic House is a beautifully preserved nineteenth-century Georgian-style residence in Mississauga. The historic property contains period furnishings, family collections, architectural details, and exhibitions exploring the lives of its former residents. Visitors can tour the house, discover local heritage stories, and explore the surrounding landscaped grounds and historic property.",
            website: "https://www.mississauga.ca/arts-and-culture/museums/",
            location: "Benares Historic House, 1507 Clarkson Rd N, Mississauga, ON L5J 2W8",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Benares+Historic+House+Mississauga"
        },
        {
            name: "Adamson Estate",
            image: "AdamsonEstate.webp",
            description: "Adamson Estate is a historic waterfront property in Port Credit featuring an impressive heritage residence, mature trees, landscaped grounds, and beautiful Lake Ontario views. Originally established as a private family estate, the grounds now provide a peaceful public destination for walking, photography, and sightseeing. Its historic architecture and lakeside setting make it particularly picturesque.",
            website: "https://www.mississauga.ca/arts-and-culture/museums/",
            location: "Adamson Estate, 850 Enola Ave, Mississauga, ON L5G 4B2",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Adamson+Estate+Mississauga"
        },
        {
            name: "Brueckner Rhododendron Gardens",
            image: "BruecknerRhododendronGardens.webp",
            description: "Brueckner Rhododendron Gardens is a waterfront botanical garden featuring an extensive collection of rhododendrons, azaleas, and other ornamental plants. Spring brings particularly colourful displays as the flowers bloom across the landscaped grounds. Visitors can follow garden paths, enjoy views of Lake Ontario, and discover a peaceful outdoor destination for photography and relaxation.",
            website: "https://www.mississauga.ca/",
            location: "Brueckner Rhododendron Gardens, 660 Lakeshore Rd W, Mississauga, ON L5H 1G1",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Brueckner+Rhododendron+Gardens+Mississauga"
        },
        {
            name: "J.C. Saddington Park",
            image: "JCSaddingtonPark.webp",
            description: "J.C. Saddington Park is a waterfront green space in Port Credit offering open lawns, walking paths, picnic areas, and attractive views across Lake Ontario. Its location near the Credit River makes it a pleasant place to watch boats and enjoy the harbour atmosphere. Visitors frequently stop here for photography, relaxing walks, and lakeside outings.",
            website: "https://www.mississauga.ca/",
            location: "J.C. Saddington Park, 53 Lake St, Mississauga, ON L5G 4T2",
            locationLink: "https://www.google.com/maps/search/?api=1&query=JC+Saddington+Park+Mississauga"
        },
        {
            name: "Streetsville Village Square",
            image: "StreetsvilleVillageSquare.webp",
            description: "Streetsville Village Square is a community gathering space in the historic heart of Streetsville. Surrounded by independent shops, restaurants, and heritage buildings, the square hosts seasonal celebrations, community events, and outdoor activities. Visitors can explore the village's historic streets, discover local businesses, and enjoy a charming small-town atmosphere within Mississauga.",
            website: "https://www.visitmississauga.ca/",
            location: "Streetsville Village Square, Streetsville, Mississauga, ON",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Streetsville+Village+Square+Mississauga"
        },
        {
            name: "Small Arms Inspection Building",
            image: "SmallArmsInspectionBuilding.webp",
            description: "The Small Arms Inspection Building is a historic industrial structure transformed into a cultural and creative destination in Mississauga's Lakeview neighbourhood. The venue hosts art exhibitions, creative markets, community events, and cultural programming. Its distinctive industrial architecture and changing exhibitions make it an interesting destination for visitors exploring local art and heritage.",
            website: "https://www.mississauga.ca/",
            location: "Small Arms Inspection Building, 1352 Lakeshore Rd E, Mississauga, ON L5E 1E9",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Small+Arms+Inspection+Building+Mississauga"
        },
        {
            name: "Art Gallery of Mississauga",
            image: "ArtGalleryOfMississauga.webp",
            description: "The Art Gallery of Mississauga is a public gallery showcasing contemporary visual art by Canadian, international, and emerging artists. Its rotating exhibitions explore different artistic styles, cultural perspectives, and creative themes. Located in the city's downtown core, the gallery offers visitors an accessible opportunity to experience exhibitions, discover local talent, and participate in cultural programming.",
            website: "https://www.artgalleryofmississauga.com/",
            location: "Art Gallery of Mississauga, 300 City Centre Dr, Mississauga, ON L5B 3C1",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Art+Gallery+of+Mississauga"
        },
        {
            name: "Living Arts Centre",
            image: "LivingArtsCentre.webp",
            description: "The Living Arts Centre is a major cultural and performing arts venue in downtown Mississauga. Its facilities include theatres, exhibition spaces, creative studios, and rooms for cultural programming. Visitors can attend live music, dance performances, comedy shows, theatrical productions, and special events while exploring one of the city's central destinations for arts and entertainment.",
            website: "https://www.mississauga.ca/",
            location: "Living Arts Centre, 4141 Living Arts Dr, Mississauga, ON L5B 4B8",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Living+Arts+Centre+Mississauga"
        },
        {
            name: "Mississauga Music Walk of Fame",
            image: "MississaugaMusicWalkOfFame.webp",
            description: "The Mississauga Music Walk of Fame celebrates musicians and musical contributors connected to the city. Visitors can discover commemorative displays recognizing artists and their achievements while exploring the surrounding downtown cultural district. It offers a small but interesting sightseeing stop for music enthusiasts interested in Mississauga's creative history and entertainment community.",
            website: "https://www.visitmississauga.ca/",
            location: "Mississauga Civic Centre and Celebration Square area, Mississauga, ON",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Mississauga+Music+Walk+of+Fame"
        },

        // BRAMPTON

        {
            name: "Peel Art Gallery, Museum and Archives (PAMA)",
            image: "PAMA.webp",
            description: "PAMA combines an art gallery, museum, and regional archives in a historic downtown Brampton complex. Visitors can explore changing art exhibitions, historical collections, archival displays, and stories about communities throughout Peel Region. The property also incorporates historic courthouse and jail buildings, making the architecture itself an important part of the visitor experience.",
            website: "https://pama.peelregion.ca/",
            location: "PAMA, 9 Wellington St E, Brampton, ON L6W 1Y1",
            locationLink: "https://www.google.com/maps/search/?api=1&query=PAMA+Brampton"
        },
        {
            name: "Gage Park",
            image: "GagePark.webp",
            description: "Gage Park is one of Brampton's best-known historic parks, located in the city's downtown core. Its landscaped gardens, mature trees, walking paths, and central fountain create a popular outdoor gathering space. Seasonal attractions include a decorative winter skating trail, while festivals, community events, and nearby restaurants make the park a lively year-round destination.",
            website: "https://www.brampton.ca/",
            location: "Gage Park, 45 Main St S, Brampton, ON L6Y 1M9",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Gage+Park+Brampton"
        },
        {
            name: "Historic Bovaird House",
            image: "HistoricBovairdHouse.webp",
            description: "Historic Bovaird House is a nineteenth-century farmhouse that offers visitors a glimpse into Brampton's early agricultural and family history. The restored residence features period furnishings, heritage architecture, and historical displays. Guided experiences and special programming help bring the property's past to life, making it an interesting destination for history enthusiasts and families.",
            website: "https://www.brampton.ca/",
            location: "Historic Bovaird House, 563 Bovaird Dr E, Brampton, ON L6Z 3E6",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Historic+Bovaird+House+Brampton"
        },
        {
            name: "Professor's Lake",
            image: "ProfessorsLake.webp",
            description: "Professor's Lake is a popular recreational destination in Brampton centred around a large artificial lake and sandy beach. During warmer months, visitors can enjoy swimming, waterfront relaxation, and seasonal water activities. Walking paths and surrounding green spaces provide additional opportunities for outdoor recreation, while the beach atmosphere makes it a popular summer destination.",
            website: "https://www.brampton.ca/",
            location: "Professor's Lake, 1660 North Park Dr, Brampton, ON L6S 5S8",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Professors+Lake+Brampton"
        },
        {
            name: "Heart Lake Conservation Park",
            image: "HeartLakeConservationPark.webp",
            description: "Heart Lake Conservation Park is a major outdoor destination featuring forest trails, wetlands, lake scenery, and seasonal recreational activities. Visitors can enjoy hiking, fishing, swimming, picnic areas, and nature exploration. Additional experiences include treetop adventures and ziplining, making the park an appealing destination for families and outdoor enthusiasts seeking activities beyond the city.",
            website: "https://trca.ca/parks/heart-lake-conservation-park/",
            location: "Heart Lake Conservation Park, 10818 Heart Lake Rd, Brampton, ON L6Z 0B3",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Heart+Lake+Conservation+Park+Brampton"
        },
        {
            name: "Claireville Conservation Area",
            image: "ClairevilleConservationArea.webp",
            description: "Claireville Conservation Area is a large protected natural landscape featuring forests, wetlands, open meadows, and wildlife habitats. Its trails provide opportunities for hiking, birdwatching, nature photography, and outdoor exploration. The area's relatively undeveloped character offers visitors a chance to experience a quieter natural environment while discovering the ecological diversity surrounding Brampton.",
            website: "https://trca.ca/parks/claireville-conservation-area/",
            location: "Claireville Conservation Area, 8180 Highway 50, Brampton, ON L6T 0A6",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Claireville+Conservation+Area"
        },
        {
            name: "Eldorado Park",
            image: "EldoradoPark.webp",
            description: "Eldorado Park is a scenic Brampton destination located along the Credit River, featuring wooded areas, picnic facilities, walking paths, and open recreational spaces. Visitors can enjoy riverside scenery, explore the natural surroundings, and spend time outdoors with family and friends. Its peaceful setting makes it a popular location for summer picnics and relaxed outdoor visits.",
            website: "https://www.brampton.ca/",
            location: "Eldorado Park, 8520 Creditview Rd, Brampton, ON L6Y 0G4",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Eldorado+Park+Brampton"
        },
        {
            name: "Charles F. Watson and Family Gardens",
            image: "WatsonFamilyGardens.webp",
            description: "Charles F. Watson and Family Gardens is a landscaped outdoor destination near Brampton's Etobicoke Creek corridor. The gardens feature carefully maintained planting areas, seasonal flowers, decorative landscaping, and peaceful walking spaces. Visitors can enjoy the scenery, take photographs, and connect with the nearby creek trail system while exploring this quieter local attraction.",
            website: "https://www.brampton.ca/",
            location: "Charles F. Watson and Family Gardens, 398 Main St S, Brampton, ON L6W 1G6",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Charles+Watson+Family+Gardens+Brampton"
        },

        // CALEDON

        {
            name: "Cheltenham Badlands",
            image: "CheltenhamBadlands.webp",
            description: "Cheltenham Badlands is a remarkable geological landmark in Caledon, recognized for its striking red rolling hills and exposed rock formations. Its unusual landscape was shaped by erosion and geological processes over millions of years. Visitors can view the formations from designated boardwalks and observation areas, creating an unforgettable sightseeing and photography experience.",
            website: "https://cvc.ca/",
            location: "Cheltenham Badlands, 1739 Olde Base Line Rd, Caledon, ON L7C 0K6",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Cheltenham+Badlands+Caledon"
        },
        {
            name: "Belfountain Conservation Area",
            image: "BelfountainConservationArea.webp",
            description: "Belfountain Conservation Area is a scenic natural destination featuring forested trails, a historic millpond, bridges, and picturesque waterfall scenery. Visitors can explore the park's walking routes, enjoy views of the Credit River valley, and discover its distinctive natural and historic features. The surrounding village also offers charming scenery and a relaxing countryside atmosphere.",
            website: "https://cvc.ca/",
            location: "Belfountain Conservation Area, 10 Credit Park St, Belfountain, ON L7K 0E5",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Belfountain+Conservation+Area"
        },
        {
            name: "Forks of the Credit Provincial Park",
            image: "ForksOfTheCreditProvincialPark.webp",
            description: "Forks of the Credit Provincial Park is a beautiful outdoor destination in Caledon, featuring dramatic river valleys, forests, waterfalls, and scenic hiking trails. The park's varied landscapes offer opportunities for nature photography, wildlife observation, and outdoor exploration. Visitors can discover the famous Cataract Falls area and enjoy impressive views of the Niagara Escarpment.",
            website: "https://www.ontarioparks.ca/park/forksofthecredit",
            location: "Forks of the Credit Provincial Park, 17760 McLaren Rd, Caledon, ON L7K 2H8",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Forks+of+the+Credit+Provincial+Park"
        },
        {
            name: "Terra Cotta Conservation Area",
            image: "TerraCottaConservationArea.webp",
            description: "Terra Cotta Conservation Area is a large natural destination featuring forests, wetlands, ponds, meadows, and scenic hiking trails. Visitors can explore its diverse landscapes, enjoy picnic areas, and observe wildlife throughout the seasons. The park also provides opportunities for winter recreation, making it a worthwhile destination for nature lovers and outdoor enthusiasts.",
            website: "https://cvc.ca/your-land/parks/terra-cotta-conservation-area/",
            location: "Terra Cotta Conservation Area, 14452 Winston Churchill Blvd, Halton Hills, ON L7G 0N9",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Terra+Cotta+Conservation+Area"
        },
        {
            name: "Albion Hills Conservation Park",
            image: "AlbionHillsConservationPark.webp",
            description: "Albion Hills Conservation Park is a large outdoor recreation destination surrounded by forests, rolling landscapes, and natural trails. Visitors can enjoy hiking, mountain biking, camping, and seasonal outdoor activities. Its extensive recreational facilities and peaceful countryside environment make it an attractive destination for families, cyclists, campers, and anyone looking to explore Caledon's natural surroundings.",
            website: "https://trca.ca/parks/albion-hills-conservation-park/",
            location: "Albion Hills Conservation Park, 16500 Peel Regional Rd 50, Caledon, ON",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Albion+Hills+Conservation+Park"
        },
        {
            name: "Alton Mill Arts Centre",
            image: "AltonMillArtsCentre.webp",
            description: "Alton Mill Arts Centre is a historic former industrial mill transformed into a creative cultural destination in Caledon. Its heritage buildings house artist studios, galleries, exhibitions, and artisan shops. Visitors can explore the restored property, discover locally created artwork, attend special events, and enjoy the surrounding village scenery and historic architecture.",
            website: "https://www.altonmill.ca/",
            location: "Alton Mill Arts Centre, 1402 Queen St W, Alton, ON L7K 0C3",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Alton+Mill+Arts+Centre"
        },
        {
            name: "Albion Orchards",
            image: "AlbionOrchards.webp",
            description: "Albion Orchards is a family-operated farm in Caledon known for its seasonal apple-picking experiences and countryside atmosphere. Visitors can explore the orchard, select fresh apples during harvest season, and browse its country store for locally produced treats. The property offers a traditional fall outing, with seasonal produce and picturesque agricultural scenery.",
            website: "https://www.albionorchards.com/",
            location: "Albion Orchards, 14800 Innis Lake Rd, Caledon, ON L7C 2Y8",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Albion+Orchards+Caledon"
        },
        {
            name: "Downey's Farm",
            image: "DowneysFarm.webp",
            description: "Downey's Farm is a popular family destination in Caledon offering seasonal agricultural experiences and farm activities. Visitors can enjoy pick-your-own strawberries and apples when available, explore the farm market, and participate in seasonal events. Its fall pumpkin attractions and countryside setting make it a particularly popular destination for families during harvest season.",
            website: "https://downeysfarm.com/",
            location: "Downey's Farm, 13607 Heart Lake Rd, Inglewood, ON L7C 2J5",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Downeys+Farm+Caledon"
        },
        {
            name: "Caledon Trailway",
            image: "CaledonTrailway.webp",
            description: "The Caledon Trailway is a multi-use recreational trail extending approximately 35 kilometres through the town's countryside and historic communities. Following a former railway corridor, the route passes through forests, farmland, villages, and open landscapes. Visitors can enjoy walking, cycling, horseback riding, and wildlife observation while discovering Caledon's rural scenery.",
            website: "https://www.visitcaledon.ca/",
            location: "Caledon Trailway, Caledon, ON",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Caledon+Trailway"
        },
        {
            name: "Palgrave Forest and Wildlife Area",
            image: "PalgraveForestAndWildlifeArea.webp",
            description: "Palgrave Forest and Wildlife Area is a natural destination featuring extensive woodland, wetlands, meadows, and outdoor trails. Visitors can explore the landscape through hiking, horseback riding, and nature observation while discovering local wildlife habitats. Its quiet countryside setting makes it a worthwhile destination for outdoor enthusiasts seeking a peaceful escape in Caledon.",
            website: "https://trca.ca/",
            location: "Palgrave Forest and Wildlife Area, Palgrave, Caledon, ON",
            locationLink: "https://www.google.com/maps/search/?api=1&query=Palgrave+Forest+and+Wildlife+Area"
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
