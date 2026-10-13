const attractions = [
    {
        name: "Heart Lake Conservation Park",
        image: "HeartLakeConservationPark.webp",
        description: "Heart Lake Conservation Park offers a beautiful outdoor escape featuring a unique spring-fed kettle lake, extensive forest trails, and diverse recreational activities. Visitors can experience high-adrenaline treetop trekking and zip-lining, cool off at the splash pad and pool facility, or go fishing for stocked rainbow trout. The park is also home to the peaceful Medicine Wheel Garden, a cultural site built in collaboration with the Anishnawbe Nation.",
        website: "https://trca.ca",
        location: "Heart Lake Conservation Park, 10818 Heart Lake Rd, Brampton, ON L6Z 0B3",
        locationLink: "https://google.com",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Cheltenham Badlands",
        image: "CheltenhamBadlands.webp",
        description: "The Cheltenham Badlands is one of Ontario's most recognizable natural heritage landmarks, famous for its striking, rolling hills of eroded red clay formed over 450 million years ago. Visitors can safely observe the unique geological formation via a dedicated wooden boardwalk and walking trails designed to protect the fragile environment. The site connects directly to the famous Bruce Trail network and is highly popular for photography.",
        website: "https://heritagetrust.on.ca",
        location: "Cheltenham Badlands, 1739 Olde Base Line Rd, Caledon, ON L7C 0K6",
        locationLink: "https://google.com",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Chinguacousy Park",
        image: "ChinguacousyPark.webp",
        description: "Chinguacousy Park is a massive 100-acre flagship multi-functional park offering an exhaustive range of year-round recreational activities. The park features family favorites like a petting zoo, miniature train rides, a tropical greenhouse, mini-golf, and a splash pad. It also hosts a skate park, a large canal-style outdoor skating trail, beach volleyball courts, and a small winter ski and tube hill.",
        website: "https://brampton.ca",
        location: "Chinguacousy Park, 9050 Bramalea Rd, Brampton, ON L6S 6G7",
        locationLink: "https://google.com",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Port Credit Lighthouse",
        image: "PortCreditLighthouse.webp",
        description: "The Port Credit Lighthouse is an iconic red-and-white working landmark overlooking the Credit River mouth, Port Credit Harbour, and Lake Ontario. Built in 1991 to replicate the historic original structure, its beacon is visible from 15 miles out on the lake. The grounds serve as a vibrant cultural hub, acting as the gateway to scenic lakefront promenade trails, parks, and a bustling village restaurant district.",
        website: "https://www.visitmississauga.ca/listing/the-port-credit-lighthouse/",
        location: "Port Credit Lighthouse, 105 Lakeshore Rd W, Mississauga, ON L5H 1E9",
        locationLink: "https://google.com",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Peel Art Gallery, Museum and Archives (PAMA)",
        image: "PAMA.webp",
        description: "PAMA is a unique cultural institution that collects and shares the diverse stories and heritage of the Peel Region. The facility itself is an architectural treasure, housed inside historically preserved 19th-century buildings including the original Peel County Courthouse and the historic Brampton Jail. It features rotating modern art galleries, local history museums, and immersive historical archive collections.",
        website: "https://peelregion.ca",
        location: "Peel Art Gallery, Museum and Archives, 9 Wellington St E, Brampton, ON L6W 1Y1",
        locationLink: "https://google.com",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Forks of the Credit Provincial Park",
        image: "ForksoftheCreditProvincialPark.webp",
        description: "Situated along the picturesque Bruce Trail on the dynamic Niagara Escarpment, this provincial park offers some of the most dramatic valley views in southern Ontario. Popular for hiking, snowshoeing, and river fly-fishing, the park features rolling grassy hills, a rare kettle lake, and the fast-flowing Credit River running toward the historic ruins of an 1820s mill near Cataract Falls.",
        website: "http://www.ontarioparks.com/park/forksofthecredit",
        location: "Forks of the Credit Provincial Park, 17760 McLaren Rd, Caledon, ON L7K 2H8",
        locationLink: "https://google.com",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Rattray Marsh Conservation Area",
        image: "RattrayMarshConservationArea.webp",
        description: "Rattray Marsh is an environmental gem protecting the very last remaining natural shingle-bar lakefront marsh of its kind on western Lake Ontario. Nature enthusiasts and birdwatchers visit this pristine wetland to stroll along elevated pedestrian boardwalks and a shale beach. The area is a quiet haven for viewing diverse local wildlife, including herons, beavers, rabbits, and deer.",
        website: "https://cvc.ca/discover-our-parks/rattray-marsh/",
        location: "Rattray Marsh Conservation Area, 1180 Lakeshore Rd W, Mississauga, ON L5J 4T2",
        locationLink: "https://google.com",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Downey's Farm Market",
        image: "DowneysFarmMarket.webp",
        description: "Downey's Farm Market is a beloved family-run agritourism destination operating in Caledon for generations. The farm offers hands-on fruit picking, a bustling estate winery, and a farmyard play area complete with farm animals, tractor wagon rides, and jumping pillows. It is highly famous across the Greater Toronto Area for its massive seasonal corn mazes and annual autumn Pumpkinfest.",
        website: "http://www.downeysfarm.com/",
        location: "Downey's Farm Market, 13682 Heart Lake Rd, Caledon, ON L7C 2J5",
        locationLink: "https://google.com",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Gage Park",
        image: "GagePark.webp",
        description: "Gage Park is Brampton's oldest municipal park, originally opened to the public in 1903. This iconic urban green space in the heart of downtown features elegant floral gardens, a historic central gazebo, winding paved pathways, and mature trees. During the summer, it offers active spaces like a children's wading pool, which transforms into a beautifully lit outdoor skating loop in the winter.",
        website: "https://www.brampton.ca/EN/residents/parks/pages/gage-park.aspx",
        location: "Gage Park, 45 Main Street S, Brampton, ON L6W 2C4",
        locationLink: "https://google.com",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Albion Hills Conservation Park",
        image: "AlbionHillsConservationPark.webp",
        description: "Spanning across 538 hectares of striking deciduous forest along the banks of the Humber River, Albion Hills is an outdoor adventure playground. It is universally recognized for its premiere mountain biking infrastructure, offering over 50 kilometers of technical single-track trails. The park also supports a large campground, outdoor disc golf courses, splash pools, and winter fat-biking routes.",
        website: "https://trca.ca/parks/albion-hills-conservation-area/",
        location: "Albion Hills Conservation Park, 16500 Regional Rd 50, Caledon, ON L7E 3E7",
        locationLink: "https://google.com",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
];

const attractionsContainer = document.getElementById("attractions-container");



attractions.forEach(place => {


    const card = document.createElement("div");


    card.classList.add("attractions-card");



    card.innerHTML = `


        <img src="${place.image}" alt="${place.name}" loading="lazy">


        <div class="attractions-info">


            <h2>${place.name}</h2>


            <p>${place.description}</p>


            <p>${place.location}</p>


            <a class="attractions-button" href="${place.website}" target="_blank">
                Learn More
            </a>


            <a class="attractions-location" href="${place.locationLink}" target="_blank">
                View Directions
            </a>


        </div>



        <div class="image-credit">
        <p>Title: ${place.title}</p>


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



    attractionsContainer.appendChild(card);


});