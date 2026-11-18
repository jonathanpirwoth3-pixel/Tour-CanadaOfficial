const hotels = [




// ================================================================
// YORK REGION HOTELS DATA
// Areas covered: Vaughan, Markham, Richmond Hill, Newmarket,
// Aurora, Georgina, Whitchurch-Stouffville, King Township
// Prices: typical nightly rate for a standard/regular room, single
// figure in CAD, based on rates checked November 13, 2026 via
// Kayak (kayak.com), momondo (momondo.ca), Expedia (expedia.com),
// Hotels.com, Tripadvisor, and official hotel booking sites
// (marriott.com, hilton.com, ihg.com, wyndhamhotels.com,
// choicehotels.com, sonesta.com, montecarloinns.com, briars.ca, etc.)
// ================================================================

// ==================================================
// VAUGHAN
// ==================================================

    { place: "Vaughan" },

    {
        name: "Aloft Vaughan Mills",
        image: "AloftVaughanMills.webp",
        description: "Aloft Vaughan Mills sits directly across from the Vaughan Mills shopping complex and its Bass Pro Shops flagship, one of the most recognizable retail destinations in the GTA. The hotel brings the brand's design-forward, social style to the Highway 400 corridor, with a W XYZ bar, indoor pool, and splash-friendly family facilities. Its location is a short drive from Canada's Wonderland, making it one of the most convenient themed-brand stays for park visitors. Rooms feature the brand's signature bold styling and platform beds.",
        website: "https://www.marriott.com/en-us/hotels/yyzal-aloft-vaughan-mills/overview/",
        address: "151 Bass Pro Mills Drive, Vaughan, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Aloft+Vaughan+Mills",
        startingPrice: "$140 CAD",
        nearbyAttractions: ["Vaughan Mills", "Canada's Wonderland", "Legoland Discovery Centre"],
        nearbyAmusement: ["Legoland Discovery Centre"],
        nearbyFeatures: ["Vaughan Mills shopping", "Highway 400 access", "Family travel"]
    },
    {
        name: "Element by Westin Vaughan Southwest",
        image: "ElementVaughanSouthwest.webp",
        description: "Element by Westin Vaughan Southwest is Marriott's eco-conscious extended-stay brand, planted on the Highway 7 West corridor. Every studio and suite includes a full kitchen, and the rate covers a free Rise breakfast — the practical formula that makes Element a favourite for relocations and long work assignments. The building follows the brand's green design standards, from filtered water stations to recycling programs in every room. Its position in Vaughan's southwest keeps both Highway 7 and the 400 within quick reach.",
        website: "https://www.marriott.com/en-us/hotels/yyzel-element-vaughan-southwest/overview/",
        address: "6170 Highway 7, Vaughan, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Element+by+Westin+Vaughan+Southwest",
        startingPrice: "$130 CAD",
        nearbyAttractions: ["Canada's Wonderland", "Vaughan Mills", "Kortright Centre for Conservation"],
        nearbyAmusement: ["Legoland Discovery Centre"],
        nearbyFeatures: ["Extended stay", "In-room kitchens", "Free breakfast"]
    },
    {
        name: "SpringHill Suites by Marriott Toronto Vaughan",
        image: "SpringHillSuitesVaughan.webp",
        description: "SpringHill Suites Toronto Vaughan offers all-suite accommodation in the Applewood Crescent cluster near Highway 7 and the 400, with rooms that separate a living area from the sleeping space by design rather than by promise. The included breakfast, small pool, and modern lobby make it a dependable mid-range choice for families visiting Canada's Wonderland or crews working in Vaughan's business parks. Reviews consistently rate it among the better-value Marriott properties in the region. Suites come with mini-fridges, coffee makers, and work desks as standard.",
        website: "https://www.marriott.com/en-us/hotels/yyzsv-springhill-suites-toronto-vaughan/overview/",
        address: "612 Applewood Crescent, Vaughan, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=SpringHill+Suites+Toronto+Vaughan",
        startingPrice: "$140 CAD",
        nearbyAttractions: ["Canada's Wonderland", "Vaughan Mills", "Kortright Centre for Conservation"],
        nearbyAmusement: ["Legoland Discovery Centre"],
        nearbyFeatures: ["All-suite hotel", "Free breakfast", "Highway 400 access"]
    },
    {
        name: "Residence Inn by Marriott Toronto Vaughan",
        image: "ResidenceInnVaughan.webp",
        description: "Residence Inn Toronto Vaughan is the extended-stay anchor of the Interchange Way hotel cluster, where every suite includes a full kitchen and separate living area. The rate covers both the morning breakfast and the weekday evening social — a genuine cost saving on longer trips. An indoor pool, sports court, and barbecue terrace give the property a residential feel uncommon in business hotels. It sits minutes from Canada's Wonderland and the Vaughan corporate parks along Highway 7.",
        website: "https://www.marriott.com/en-us/hotels/yyztv-residence-inn-toronto-vaughan/overview/",
        address: "11 Interchange Way, Vaughan, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Residence+Inn+Toronto+Vaughan",
        startingPrice: "$190 CAD",
        nearbyAttractions: ["Canada's Wonderland", "Vaughan Mills", "Kortright Centre for Conservation"],
        nearbyAmusement: ["Legoland Discovery Centre"],
        nearbyFeatures: ["Extended stay", "In-room kitchens", "Free breakfast"]
    },
    {
        name: "Courtyard by Marriott Toronto Vaughan",
        image: "CourtyardVaughan.webp",
        description: "Courtyard by Marriott Toronto Vaughan serves the Interchange Way business corridor with the brand's familiar formula — Bistro-style dining open morning and evening, a well-used indoor pool, and rooms organized around work desks and fast Wi-Fi. The location puts guests within walking distance of several Vaughan hotels and restaurants, and a short drive from Canada's Wonderland. It is a common pick for training sessions and project teams working in the Highway 400 employment zone. Parking is free, a genuine perk for drivers.",
        website: "https://www.marriott.com/en-us/hotels/yyzvn-courtyard-toronto-vaughan/overview/",
        address: "150 Interchange Way, Vaughan, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Courtyard+by+Marriott+Toronto+Vaughan",
        startingPrice: "$185 CAD",
        nearbyAttractions: ["Canada's Wonderland", "Vaughan Mills", "Kortright Centre for Conservation"],
        nearbyAmusement: ["Legoland Discovery Centre"],
        nearbyFeatures: ["Business travel", "Highway 400 access", "Free parking"]
    },
    {
        name: "TownePlace Suites by Marriott Vaughan",
        image: "TownePlaceSuitesVaughan.webp",
        description: "TownePlace Suites Vaughan is one of the newest extended-stay builds in the region, opened on Cityview Boulevard to serve long-term construction, healthcare, and corporate assignments in Vaughan's west end. Every suite has a full kitchen, and the property is pet-friendly with outdoor space for dogs. Guest reviews since opening have been exceptional, praising the modern finishes and complimentary breakfast. Rates are higher than older extended-stay stock, reflecting the new-build condition.",
        website: "https://www.marriott.com/en-us/hotels/yyzvt-towneplace-suites-vaughan/overview/",
        address: "231 Cityview Boulevard, Vaughan, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=TownePlace+Suites+Vaughan",
        startingPrice: "$250 CAD",
        nearbyAttractions: ["Canada's Wonderland", "Vaughan Mills", "Kortright Centre for Conservation"],
        nearbyAmusement: ["Legoland Discovery Centre"],
        nearbyFeatures: ["Extended stay", "Pet friendly", "New build"]
    },
    {
        name: "Four Points by Sheraton Vaughan",
        image: "FourPointsVaughan.webp",
        description: "Four Points by Sheraton Vaughan sits on Steeles Avenue West near the Highway 400 interchange, positioning it between Vaughan's attractions and Toronto's north end. The hotel is a practical, mid-priced Sheraton product with an indoor pool, on-site restaurant, and free parking — a combination that suits both Wonderland-bound families and budget-conscious business travellers. Its Steeles location also makes York University and Vaughan Mills equally convenient. Rooms are contemporary and generously sized for the rate.",
        website: "https://www.marriott.com/en-us/hotels/yyzfv-four-points-vaughan/overview/",
        address: "3400 Steeles Avenue West, Vaughan, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Four+Points+by+Sheraton+Vaughan",
        startingPrice: "$150 CAD",
        nearbyAttractions: ["Canada's Wonderland", "Vaughan Mills", "York University"],
        nearbyAmusement: ["Legoland Discovery Centre"],
        nearbyFeatures: ["Highway 400 access", "Free parking", "Family travel"]
    },
    {
        name: "Homewood Suites by Hilton Toronto Vaughan",
        image: "HomewoodSuitesVaughan.webp",
        description: "Homewood Suites Toronto Vaughan is Hilton's extended-stay offering on Applewood Crescent, where the rate bundles a cooked breakfast and a Monday-to-Thursday evening meal — effectively covering dinner on work weeks. Suites have full kitchens, and the property includes an indoor pool and fitness room. Its location near Highway 7 and the 400 serves both Canada's Wonderland visitors on weekends and project crews through the week. It is one of the better all-inclusive-value formulas in the Vaughan cluster.",
        website: "https://www.hilton.com/en/hotels/yyzvghw-homewood-suites-toronto-vaughan/",
        address: "618 Applewood Crescent, Vaughan, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Homewood+Suites+Toronto+Vaughan",
        startingPrice: "$150 CAD",
        nearbyAttractions: ["Canada's Wonderland", "Vaughan Mills", "Kortright Centre for Conservation"],
        nearbyAmusement: ["Legoland Discovery Centre"],
        nearbyFeatures: ["Extended stay", "Free breakfast", "Evening meals included"]
    },
    {
        name: "Holiday Inn Express & Suites Vaughan Southwest",
        image: "HolidayInnExpressVaughan.webp",
        description: "Holiday Inn Express & Suites Vaughan Southwest anchors the Highway 7 West node alongside its Element neighbour, offering the brand's reliable formula of free hot breakfast, modern rooms, and an indoor pool at accessible rates. The property markets itself toward Wonderland and Vaughan Mills visitors as much as business travellers. Suites with sofa beds suit families, and the 24-hour front desk handles the early departures common in this airport-adjacent corridor. Rates are consistently among the most competitive for a new-build product in Vaughan.",
        website: "https://www.ihg.com/holidayinnexpress/hotels/us/en/vaughan/yyzwb/hoteldetail",
        address: "6100 Highway 7, Vaughan, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Express+Vaughan+Southwest",
        startingPrice: "$130 CAD",
        nearbyAttractions: ["Canada's Wonderland", "Vaughan Mills", "Kortright Centre for Conservation"],
        nearbyAmusement: ["Legoland Discovery Centre"],
        nearbyFeatures: ["Free breakfast", "Highway 7 corridor", "Family travel"]
    },
    {
        name: "avid hotel Toronto - Vaughan Southwest",
        image: "AvidHotelVaughan.webp",
        description: "avid hotel Toronto - Vaughan Southwest is IHG's budget-flagship experiment in the region, a purpose-built new property on Highway 7 West that strips hotel rooms down to what matters — good beds, strong showers, and a free breakfast — without conference centres or restaurants. Guest ratings have been strong since opening, praising the cleanliness and the included breakfast quality relative to the price. There is no pool or full-service dining, which is how the rate stays low. It suits road-trippers and short business stops more than family vacations.",
        website: "https://www.ihg.com/avidhotels/hotels/us/en/vaughan/yyzav/hoteldetail",
        address: "6800 Highway 7, Vaughan, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=avid+hotel+Toronto+Vaughan+Southwest",
        startingPrice: "$115 CAD",
        nearbyAttractions: ["Canada's Wonderland", "Vaughan Mills", "Kortright Centre for Conservation"],
        nearbyAmusement: ["Legoland Discovery Centre"],
        nearbyFeatures: ["Budget rates", "New build", "Free breakfast"]
    },
    {
        name: "Monte Carlo Inn Vaughan Suites",
        image: "MonteCarloInnVaughan.webp",
        description: "Monte Carlo Inn Vaughan Suites is a family-run Canadian independent on Applewood Crescent, competing with the chains on price while offering suite-style rooms and a full on-site restaurant and banquet operation. The property has served Vaughan's business community for years and is a regular host for local weddings and community events. Rooms are functional and spacious rather than designer-led, and the restaurant is genuinely used by locals. It is the closest thing to a neighbourhood hotel in the Highway 7 and 400 cluster.",
        website: "https://www.montecarloinns.com/vaughan-suites",
        address: "705 Applewood Crescent, Vaughan, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Monte+Carlo+Inn+Vaughan+Suites",
        startingPrice: "$115 CAD",
        nearbyAttractions: ["Canada's Wonderland", "Vaughan Mills", "Kortright Centre for Conservation"],
        nearbyAmusement: ["Legoland Discovery Centre"],
        nearbyFeatures: ["Independent hotel", "On-site restaurant", "Banquet facilities"]
    },

// ==================================================
// MARKHAM
// ==================================================

    { place: "Markham" },

    {
        name: "Toronto Marriott Markham",
        image: "TorontoMarriottMarkham.webp",
        description: "The Toronto Marriott Markham anchors the Downtown Markham development on Enterprise Boulevard, the planned urban core that has grown up around the Flato Markham Theatre and a growing residential and retail scene. As the city's flagship full-service hotel, it offers a restaurant, indoor pool, fitness floor, and meeting space within walking distance of dining and the theatre. Rooms follow Marriott's contemporary line with city views from higher floors. Its position also puts historic Unionville's Main Street a short drive away.",
        website: "https://www.marriott.com/en-us/hotels/yyzmr-toronto-marriott-markham/overview/",
        address: "170 Enterprise Boulevard, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Toronto+Marriott+Markham",
        startingPrice: "$170 CAD",
        nearbyAttractions: ["Downtown Markham", "Flato Markham Theatre", "Unionville Main Street"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Downtown Markham", "Business travel", "Transit access"]
    },
    {
        name: "Hilton Toronto/Markham Suites Conference Centre & Spa",
        image: "HiltonTorontoMarkham.webp",
        description: "The Hilton Toronto/Markham Suites is Markham's long-standing full-service heavyweight on Warden Avenue, an all-suite property where every room includes a separate living area — a layout that has made it popular with extended corporate stays and the city's conference traffic. The hotel's conference centre and spa facilities give it event capabilities that most Markham properties lack. A restaurant and lounge program serves both guests and local business diners. Its Warden Avenue position is central to Markham's tech and finance employers.",
        website: "https://www.hilton.com/en/hotels/yyzaphf-hilton-toronto-markham-suites-conference-centre-and-spa/",
        address: "8500 Warden Avenue, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hilton+Toronto+Markham+Suites",
        startingPrice: "$140 CAD",
        nearbyAttractions: ["Markham Museum", "Milne Dam Conservation Park", "Unionville Main Street"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["All-suite hotel", "Conference centre", "Spa"]
    },
    {
        name: "Delta Hotels Toronto Markham",
        image: "DeltaHotelsMarkham.webp",
        description: "Delta Hotels Toronto Markham operates in the Highway 7 business corridor at East Valhalla Drive, delivering Marriott's streamlined full-service product — a proper restaurant, well-equipped fitness centre, and meeting rooms — without luxury pricing. The property is a dependable choice for the tech-industry travel that defines Markham weekdays. Rooms are contemporary with strong work setups. Rates typically sit below the Marriott flagship while sharing the same loyalty program.",
        website: "https://www.marriott.com/en-us/hotels/yyzdh-delta-hotels-toronto-markham/overview/",
        address: "50 East Valhalla Drive, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Delta+Hotels+Toronto+Markham",
        startingPrice: "$150 CAD",
        nearbyAttractions: ["CF Markville Mall", "Milne Dam Conservation Park", "Markham Museum"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Highway 7 corridor", "Business travel", "Free parking"]
    },
    {
        name: "Courtyard by Marriott Toronto Markham",
        image: "CourtyardMarkham.webp",
        description: "Courtyard by Marriott Toronto Markham serves the Minthorn Boulevard area near Highway 7 and Leslie, one of Markham's densest office zones. The hotel follows the brand's modern Bistro format — a café-style restaurant doubling as an evening bar — with an indoor pool and a business-oriented lobby. It is a workhorse property for the area's tech and finance sector travellers. Unionville's Main Street and CF Markville are both within a short drive.",
        website: "https://www.marriott.com/en-us/hotels/yyzmk-courtyard-toronto-markham/overview/",
        address: "65 Minthorn Boulevard, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Courtyard+by+Marriott+Toronto+Markham",
        startingPrice: "$130 CAD",
        nearbyAttractions: ["CF Markville Mall", "Markham Museum", "Unionville Main Street"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Highway 7 corridor", "Business travel", "Free parking"]
    },
    {
        name: "Courtyard by Marriott Toronto Northeast/Markham",
        image: "CourtyardMarkhamNortheast.webp",
        description: "The Courtyard Toronto Northeast/Markham sits on Woodbine Avenue in the corridor that connects Markham to Highway 404, a location that has made it a fixture for corporate training sessions and project teams. The property pairs the standard Bistro dining room with meeting space that local businesses actually book. Rooms were refreshed in the brand's current design, with proper work desks and reliable Wi-Fi. It shares its node with its TownePlace sister property, giving mixed-travel groups a convenient pairing.",
        website: "https://www.marriott.com/en-us/hotels/yyzmt-courtyard-toronto-northeast-markham/overview/",
        address: "7095 Woodbine Avenue, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Courtyard+by+Marriott+Toronto+Northeast+Markham",
        startingPrice: "$130 CAD",
        nearbyAttractions: ["CF Markville Mall", "Milne Dam Conservation Park", "Markham Museum"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Woodbine Avenue corridor", "Business travel", "Meeting facilities"]
    },
    {
        name: "TownePlace Suites by Marriott Toronto Northeast/Markham",
        image: "TownePlaceSuitesMarkhamNortheast.webp",
        description: "TownePlace Suites Toronto Northeast/Markham shares the Woodbine Avenue corporate node with its Courtyard neighbour, offering the extended-stay half of the pairing — suites with full kitchens, gas barbecues for guest use, and a pet-friendly policy. The complimentary breakfast and on-site laundry make week-long assignments genuinely practical. Rates are competitive for kitchen-suite accommodation in the 404 corridor. Its location splits the difference between Markham's office parks and Highway 404 access southbound.",
        website: "https://www.marriott.com/en-us/hotels/yyzxm-towneplace-suites-toronto-northeast-markham/overview/",
        address: "7095 Woodbine Avenue, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=TownePlace+Suites+Toronto+Northeast+Markham",
        startingPrice: "$150 CAD",
        nearbyAttractions: ["CF Markville Mall", "Markham Museum", "Milne Dam Conservation Park"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Extended stay", "In-room kitchens", "Pet friendly"]
    },
    {
        name: "Residence Inn by Marriott Toronto Markham",
        image: "ResidenceInnMarkham.webp",
        description: "Residence Inn Toronto Markham brings the brand's full extended-stay package to Minthorn Boulevard — studio and one-bedroom suites with full kitchens, free breakfast, and weekday evening socials with light dinner included. The indoor pool and sport court give it a family-friendly dimension on weekends. It competes directly with the Homewood Suites on Bodrington Court, one street over, and the two split much of Markham's long-stay corporate demand. Rates reflect the bundled meals and suite format.",
        website: "https://www.marriott.com/en-us/hotels/yyzmh-residence-inn-toronto-markham/overview/",
        address: "55 Minthorn Boulevard, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Residence+Inn+by+Marriott+Toronto+Markham",
        startingPrice: "$180 CAD",
        nearbyAttractions: ["CF Markville Mall", "Unionville Main Street", "Markham Museum"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Extended stay", "In-room kitchens", "Free breakfast"]
    },
    {
        name: "Homewood Suites by Hilton Toronto-Markham",
        image: "HomewoodSuitesMarkham.webp",
        description: "Homewood Suites Toronto-Markham is the Hilton side of the extended-stay pair on Bodrington Court, with the brand's signature deal: cooked breakfast daily and dinner served Monday through Thursday, both included. Suites have full kitchens and separate living areas, and the property adds an indoor pool and barbecue pavilion. It is a favourite for relocation and project housing in Markham's tech corridor. The bundled-meal formula often makes it the cheapest true cost per day in the area once food is counted.",
        website: "https://www.hilton.com/en/hotels/yyzhwhw-homewood-suites-toronto-markham/",
        address: "50 Bodrington Court, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Homewood+Suites+Toronto+Markham",
        startingPrice: "$120 CAD",
        nearbyAttractions: ["CF Markville Mall", "Unionville Main Street", "Markham Museum"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Extended stay", "Free breakfast", "Evening meals included"]
    },
    {
        name: "Hampton Inn & Suites by Hilton Toronto Markham",
        image: "HamptonInnMarkham.webp",
        description: "Hampton Inn & Suites Toronto Markham shares the Bodrington Court block with its Homewood sister property, offering the short-stay counterpart — free hot breakfast, clean modern rooms, and a small indoor pool. The Hampton formula is among the most consistent in North American hospitality, and this property holds strong guest ratings. Its location serves both Markham's business parks and families visiting the area. Suites with sofa beds are available for extra space at modest premiums.",
        website: "https://www.hilton.com/en/hotels/yyzmkhx-hampton-suites-toronto-markham/",
        address: "52 Bodrington Court, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hampton+Inn+and+Suites+Toronto+Markham",
        startingPrice: "$130 CAD",
        nearbyAttractions: ["CF Markville Mall", "Markham Museum", "Unionville Main Street"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Free breakfast", "Highway 7 corridor", "Family travel"]
    },
    {
        name: "Hilton Garden Inn Toronto/Markham",
        image: "HiltonGardenInnMarkham.webp",
        description: "Hilton Garden Inn Toronto/Markham sits on Commerce Valley Drive East in Thornhill's edge-of-Markham business district, offering the brand's middle-tier formula of a proper on-site restaurant, garden-style breakfast room, and indoor pool. The property serves the corridor of offices between Highway 7 and the 404. Rooms follow the current Hilton design with ergonomic work areas. Its Thornhill position gives quick access to both Markham and Richmond Hill employment zones.",
        website: "https://www.hilton.com/en/hotels/yyzmagi-hilton-garden-inn-toronto-markham/",
        address: "300 Commerce Valley Drive East, Thornhill, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hilton+Garden+Inn+Toronto+Markham",
        startingPrice: "$130 CAD",
        nearbyAttractions: ["CF Markville Mall", "Unionville Main Street", "Markham Museum"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Thornhill", "Business travel", "On-site restaurant"]
    },
    {
        name: "Spark by Hilton Toronto Markham",
        image: "SparkMarkham.webp",
        description: "Spark by Hilton Toronto Markham is one of the first examples of Hilton's new budget brand in the GTA, built on Woodbine Avenue to compete with the express-tier chains on price alone. The formula is deliberately lean — small modern rooms, no pool or restaurant, and a grab-and-go breakfast — but with Hilton's standards for bedding and cleanliness. Guest ratings since opening have been strong for the category. It suits short business stops and budget-conscious travellers who don't need facilities.",
        website: "https://www.hilton.com/en/hotels/yyztcpe-spark-toronto-markham/",
        address: "8330 Woodbine Avenue, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Spark+by+Hilton+Toronto+Markham",
        startingPrice: "$100 CAD",
        nearbyAttractions: ["CF Markville Mall", "Markham Museum", "Milne Dam Conservation Park"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Budget rates", "New build", "Business travel"]
    },
    {
        name: "Monte Carlo Inn & Suites Toronto Markham",
        image: "MonteCarloInnMarkham.webp",
        description: "Monte Carlo Inn Toronto Markham is the Markham branch of the family-run Monte Carlo group, on Woodbine Avenue in the city's northeast. Like its Vaughan sibling, it pairs suite-style accommodation with a restaurant and banquet business that local organizations actually use. Rooms are spacious and practical rather than fashionable, and rates undercut the chain properties meaningfully. It is a sensible pick for budget-led business travel or family visits in the area.",
        website: "https://www.montecarloinns.com/markham-suites",
        address: "8900 Woodbine Avenue, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Monte+Carlo+Inn+Toronto+Markham",
        startingPrice: "$110 CAD",
        nearbyAttractions: ["Markham Museum", "Milne Dam Conservation Park", "Unionville Main Street"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Independent hotel", "On-site restaurant", "Value rates"]
    },
    {
        name: "Park Inn by Radisson Toronto-Markham",
        image: "ParkInnMarkham.webp",
        description: "Park Inn by Radisson Toronto-Markham is a budget-to-mid property on Cochrane Drive in the Warden Avenue business zone, one of the more affordable name-brand options in Markham. The property is older than the surrounding new builds, which is reflected in both the rates and the honest-but-mixed guest reviews — the trade-off is space and price rather than polish. It includes an on-site restaurant and meeting rooms. Renovations have kept it functional for cost-conscious corporate travel.",
        website: "https://www.choicehotels.com/ontario/markham/park-inn-hotels/cnc39",
        address: "555 Cochrane Drive, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Park+Inn+by+Radisson+Toronto+Markham",
        startingPrice: "$120 CAD",
        nearbyAttractions: ["CF Markville Mall", "Markham Museum", "Milne Dam Conservation Park"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Budget rates", "Warden Avenue corridor", "Business travel"]
    },
    {
        name: "Sonesta ES Suites Toronto Markham",
        image: "SonestaESSuitesMarkham.webp",
        description: "Sonesta ES Suites Toronto Markham is an extended-stay property on South Park Road in Thornhill, offering suite accommodation with full kitchens, a free breakfast, and an evening social program. The building's townhouse-style layout gives many suites separate bedrooms and exterior entrances, a layout families and long-stay guests tend to prefer. An outdoor pool and barbecue area serve the warmer months. It competes with the Marriott and Hilton extended-stay products at typically lower rates.",
        website: "https://www.sonesta.com/sonesta-es-suites/on/thornhill/sonesta-es-suites-toronto-markham",
        address: "355 South Park Road, Thornhill, Markham, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Sonesta+ES+Suites+Toronto+Markham",
        startingPrice: "$120 CAD",
        nearbyAttractions: ["CF Markville Mall", "Unionville Main Street", "Markham Museum"],
        nearbyAmusement: ["Cineplex Cinemas Markham"],
        nearbyFeatures: ["Extended stay", "In-room kitchens", "Free breakfast"]
    },

// ==================================================
// RICHMOND HILL
// ==================================================

    { place: "Richmond Hill" },

    {
        name: "Sheraton Parkway Toronto North Hotel & Suites",
        image: "SheratonParkway.webp",
        description: "The Sheraton Parkway is one of the largest hotels in York Region, a Highway 7 East landmark with extensive recreation facilities that include indoor and outdoor pools and generous event space. Its scale has made it a default for regional conferences, South Asian wedding celebrations, and tour groups for decades. The property has been progressively renovated to keep pace with newer competitors. Its location at Highway 7 and Leslie puts Richmond Hill's business corridor and Lake Wilcox within easy reach.",
        website: "https://www.marriott.com/en-us/hotels/yyzsi-sheraton-parkway-toronto-north-hotel-and-suites/overview/",
        address: "600 Highway 7 East, Richmond Hill, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Sheraton+Parkway+Toronto+North",
        startingPrice: "$140 CAD",
        nearbyAttractions: ["Lake Wilcox Park", "Richmond Hill Centre for the Performing Arts", "Mill Pond Park"],
        nearbyAmusement: ["Cineplex Cinemas Richmond Hill"],
        nearbyFeatures: ["Highway 7 East corridor", "Indoor and outdoor pools", "Event facilities"]
    },
    {
        name: "Best Western Parkway Hotel Toronto North",
        image: "BestWesternParkway.webp",
        description: "The Best Western Parkway Hotel Toronto North operates on the same Highway 7 East campus as the Sheraton Parkway, offering a budget-friendly alternative with its own rooms and access to the area's amenities. The property serves cost-conscious travellers who want the Highway 7 location without full-service pricing. Rooms are straightforward and recently refreshed in parts. Its Yonge-and-Highway 7 proximity covers Richmond Hill's commercial core well.",
        website: "https://www.bestwestern.com/en_US/book/hotel-rooms.66054.html",
        address: "600 Highway 7 East, Richmond Hill, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Best+Western+Parkway+Hotel+Toronto+North",
        startingPrice: "$100 CAD",
        nearbyAttractions: ["Lake Wilcox Park", "Mill Pond Park", "Richmond Hill Centre for the Performing Arts"],
        nearbyAmusement: ["Cineplex Cinemas Richmond Hill"],
        nearbyFeatures: ["Value rates", "Highway 7 corridor", "Free breakfast"]
    },
    {
        name: "Travelodge by Wyndham Richmond Hill",
        image: "TravelodgeRichmondHill.webp",
        description: "Travelodge by Wyndham Richmond Hill sits on Yonge Street near Hillcrest Mall, putting it in the middle of Richmond Hill's main commercial strip. The property is a straightforward budget option with an indoor pool, free breakfast, and rates that make it popular with families and contractors alike. Its Yonge Street address means restaurants, Korean and Chinese dining, and transit are all at the doorstep. Rooms are simple but the location is the genuine selling point.",
        website: "https://www.wyndhamhotels.com/en-ca/travelodge/richmond-hill-ontario/travelodge-richmond-hill/overview",
        address: "10711 Yonge Street, Richmond Hill, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Travelodge+Richmond+Hill",
        startingPrice: "$105 CAD",
        nearbyAttractions: ["Hillcrest Mall", "Mill Pond Park", "Richmond Hill Centre for the Performing Arts"],
        nearbyAmusement: ["Cineplex Cinemas Richmond Hill"],
        nearbyFeatures: ["Yonge Street", "Value rates", "Transit access"]
    },
    {
        name: "Holiday Inn Express & Suites Toronto - Markham",
        image: "HolidayInnExpressMarkham.webp",
        description: "Holiday Inn Express & Suites Toronto - Markham sits on East Pearce Street at the Markham-Richmond Hill boundary, in the middle of the tech-company corridor the name references. The property delivers the express formula — free hot breakfast, modern rooms, small suites — with guest ratings that rank among the best in the immediate area. An indoor pool handles family stays on weekends. Its position works equally well for Markham and Richmond Hill offices.",
        website: "https://www.ihg.com/holidayinnexpress/hotels/us/en/richmond-hill/yyzep/hoteldetail",
        address: "10 East Pearce Street, Richmond Hill, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Express+Toronto+Markham",
        startingPrice: "$120 CAD",
        nearbyAttractions: ["Hillcrest Mall", "Lake Wilcox Park", "Richmond Hill Centre for the Performing Arts"],
        nearbyAmusement: ["Cineplex Cinemas Richmond Hill"],
        nearbyFeatures: ["Free breakfast", "Tech business corridor", "Family travel"]
    },
    {
        name: "Canada's Best Value Inn Richmond Hill",
        image: "CanadasBestValueInnRichmondHill.webp",
        description: "Canada's Best Value Inn Richmond Hill is a budget motor-inn on Yonge Street's northern stretch, offering simple rooms and free parking at some of the lowest rates in the municipality. The property is unpretentious — exterior corridors, basic amenities — but it is genuinely cheap and well-placed on the Yonge Street spine. Reviews are mixed in the way budget motels usually are, with location and price the consistent positives. It suits travellers for whom the room is a place to sleep, not a destination.",
        website: "http://www.cbvi.ca/",
        address: "13100 Yonge Street, Richmond Hill, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Canadas+Best+Value+Inn+Richmond+Hill",
        startingPrice: "$100 CAD",
        nearbyAttractions: ["Lake Wilcox Park", "Hillcrest Mall", "Mill Pond Park"],
        nearbyAmusement: ["Cineplex Cinemas Richmond Hill"],
        nearbyFeatures: ["Budget rates", "Yonge Street", "Free parking"]
    },

// ==================================================
// NEWMARKET
// ==================================================

    { place: "Newmarket" },

    {
        name: "The Postmark Hotel",
        image: "ThePostmarkHotel.webp",
        description: "The Postmark Hotel is downtown Newmarket's boutique property on Main Street South, a small design-led hotel that stands out in a market otherwise served by highway chains. Its restaurant and bar program is a genuine Main Street destination in its own right, and the hotel organizes the stay around walkability to the shops and dining of the historic core. Rooms are individually styled rather than corporate. It is the closest thing York Region's north has to an urban boutique hotel.",
        website: "https://www.thepostmarkhotel.ca/",
        address: "180 Main Street South, Newmarket, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=The+Postmark+Hotel+Newmarket",
        startingPrice: "$175 CAD",
        nearbyAttractions: ["Main Street Newmarket", "Tom Taylor Trail", "Elman W. Campbell Museum"],
        nearbyAmusement: ["Fairy Lake Park"],
        nearbyFeatures: ["Historic downtown", "Boutique hotel", "Restaurants"]
    },
    {
        name: "Fairfield Inn & Suites by Marriott Newmarket",
        image: "FairfieldInnNewmarket.webp",
        description: "Fairfield Inn & Suites Newmarket is the modern chain offering on Pony Drive, near the town's south end and Upper Canada Mall. The property delivers the brand's current design — bright rooms, free breakfast, a small pool — and competes as the fresher alternative to Newmarket's older hotel stock. Guest ratings are strong for the market. Its position works for both Newmarket's commercial strip and commuters on Yonge Street.",
        website: "https://www.marriott.com/en-us/hotels/yyzfo-fairfield-inn-and-suites-newmarket/overview/",
        address: "100 Pony Drive, Newmarket, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Fairfield+Inn+and+Suites+Newmarket",
        startingPrice: "$180 CAD",
        nearbyAttractions: ["Upper Canada Mall", "Fairy Lake Park", "Tom Taylor Trail"],
        nearbyAmusement: ["Fairy Lake Park"],
        nearbyFeatures: ["Free breakfast", "Yonge Street corridor", "Family travel"]
    },
    {
        name: "Comfort Inn Newmarket - Aurora",
        image: "ComfortInnNewmarket.webp",
        description: "Comfort Inn Newmarket - Aurora sits on Journey's End Circle on Newmarket's west side near the Highway 400 approach, a practical mid-budget stop for travellers using the northern 400 corridor. The property includes free breakfast, an indoor pool, and meeting space sized for local events. Rooms are comfortable rather than new, and the rates reflect that honestly. Its position between Newmarket and Aurora makes it usable for both towns.",
        website: "https://www.choicehotels.com/ontario/newmarket/comfort-inn-hotels/cn281",
        address: "1230 Journey's End Circle, Newmarket, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Comfort+Inn+Newmarket+Aurora",
        startingPrice: "$130 CAD",
        nearbyAttractions: ["Upper Canada Mall", "Fairy Lake Park", "Tom Taylor Trail"],
        nearbyAmusement: ["Fairy Lake Park"],
        nearbyFeatures: ["Free breakfast", "Highway 400 access", "Value rates"]
    },
    {
        name: "Best Western Voyageur Place Hotel",
        image: "BestWesternVoyageurPlace.webp",
        description: "Best Western Voyageur Place is a long-standing Yonge Street hotel at Newmarket's northern edge, renovated with a modern lobby and updated rooms that keep it competitive in the local market. The indoor pool and free breakfast make it a family-friendly stop, and its position near the Green Lane corridor serves both Newmarket and East Gwillimbury travellers. Reviews note the renovation quality positively. Rates are moderate for the area.",
        website: "https://www.bestwestern.com/en_US/book/hotel-rooms.66065.html",
        address: "17565 Yonge Street, Newmarket, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Best+Western+Voyageur+Place+Newmarket",
        startingPrice: "$120 CAD",
        nearbyAttractions: ["Upper Canada Mall", "Fairy Lake Park", "Holland River trails"],
        nearbyAmusement: ["Fairy Lake Park"],
        nearbyFeatures: ["Yonge Street", "Indoor pool", "Free breakfast"]
    },
    {
        name: "Newmarket Inn",
        image: "NewmarketInn.webp",
        description: "The Newmarket Inn occupies a quiet Old Yonge Street setting between Newmarket and Holland Landing, with a rural-feeling address despite being minutes from town. The property offers straightforward rooms, an on-site restaurant and pub, and function space for local events. Its position works for travellers avoiding highway noise while staying close to both Newmarket and East Gwillimbury. Rates are among the more accessible in the area.",
        website: "http://www.newmarketinn.com/",
        address: "18667 Old Yonge Street, Holland Landing, East Gwillimbury, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Newmarket+Inn",
        startingPrice: "$110 CAD",
        nearbyAttractions: ["East Gwillimbury GO Station", "Holland Landing trails", "Upper Canada Mall"],
        nearbyAmusement: ["Fairy Lake Park"],
        nearbyFeatures: ["Holland Landing", "On-site restaurant", "Quiet setting"]
    },

// ==================================================
// AURORA
// ==================================================

    { place: "Aurora" },

    {
        name: "Holiday Inn Express & Suites Aurora",
        image: "HolidayInnExpressAurora.webp",
        description: "Holiday Inn Express & Suites Aurora is the town's main name-brand hotel, on Eric T Smith Way in the business park near Highway 404 and Wellington Street. The property delivers the express formula reliably — free hot breakfast, an indoor pool, modern rooms — and serves Aurora's office population and visiting families equally. Guest ratings are strong, with the breakfast and cleanliness consistently praised. Its position gives quick 404 access both north and south.",
        website: "https://www.ihg.com/holidayinnexpress/hotels/us/en/aurora/ytora/hoteldetail",
        address: "205 Eric T Smith Way, Aurora, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Express+Aurora",
        startingPrice: "$160 CAD",
        nearbyAttractions: ["Hillary House National Historic Site", "Aurora Cultural Centre", "Machell Park"],
        nearbyAmusement: ["Aurora Family Leisure Complex"],
        nearbyFeatures: ["Free breakfast", "Highway 404 access", "Business travel"]
    },
    {
        name: "Microtel Inn & Suites by Wyndham Aurora",
        image: "MicrotelAurora.webp",
        description: "Microtel Inn & Suites Aurora is a budget property on Goulding Avenue, part of Wyndham's economy tier and one of the more affordable name-brand stays in northern York Region. The building follows Microtel's simple modular formula — straightforward rooms, free breakfast, no-frills facilities. Reviews are generally positive for the price point, with the included breakfast and quiet location noted. It serves travellers who need a clean room near the 404 without paying full-service rates.",
        website: "https://www.wyndhamhotels.com/en-ca/microtel/aurora-ontario/microtel-inn-and-suites-aurora/overview",
        address: "180 Goulding Avenue, Aurora, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Microtel+Inn+and+Suites+Aurora",
        startingPrice: "$150 CAD",
        nearbyAttractions: ["Hillary House National Historic Site", "Aurora Cultural Centre", "Machell Park"],
        nearbyAmusement: ["Aurora Family Leisure Complex"],
        nearbyFeatures: ["Budget rates", "Free breakfast", "Highway 404 access"]
    },
    {
        name: "Staybridge Suites Aurora East",
        image: "StaybridgeSuitesAurora.webp",
        description: "Staybridge Suites Aurora East is the newest hotel in Aurora, an IHG extended-stay property beside the Holiday Inn Express on Eric T Smith Way. Suites include full kitchens, and the stay bundles breakfast and evening socials — the formula that makes longer assignments economical. Guest ratings since opening have been exceptional, among the highest in York Region. Its business-park position serves the 404 corridor's growing office and industrial base.",
        website: "https://www.ihg.com/staybridge/hotels/us/en/aurora/ytoau/hoteldetail",
        address: "175 Eric T Smith Way, Aurora, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Staybridge+Suites+Aurora+East",
        startingPrice: "$170 CAD",
        nearbyAttractions: ["Hillary House National Historic Site", "Aurora Cultural Centre", "Machell Park"],
        nearbyAmusement: ["Aurora Family Leisure Complex"],
        nearbyFeatures: ["Extended stay", "In-room kitchens", "Free breakfast"]
    },

// ==================================================
// GEORGINA
// ==================================================

    { place: "Georgina" },

    {
        name: "The Briars Resort & Spa",
        image: "TheBriarsResort.webp",
        description: "The Briars is a historic lakeside resort on the Jackson's Point shore of Lake Simcoe, a family-run estate property whose main lodge, cottages, and gardens date back generations. The resort's roughly 50 rooms spread across the lakeside grounds, with a private beach, lawn bowling, trails, and a spa within the property. It has long functioned as a summer-lake and weekend destination rather than a business hotel, with meal plans and resort programming in season. The surrounding Jackson's Point harbour area adds antique shops and lakeside dining.",
        website: "http://www.briars.ca/",
        address: "55 Hedge Road, Jackson's Point, Georgina, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=The+Briars+Resort+and+Spa",
        startingPrice: "$250 CAD",
        nearbyAttractions: ["Lake Simcoe", "Jackson's Point harbour", "Sibbald Point Provincial Park"],
        nearbyAmusement: ["The Briars Golf Club"],
        nearbyFeatures: ["Lakefront resort", "Spa", "Historic estate"]
    },
    {
        name: "Ramada by Wyndham Jacksons Point",
        image: "RamadaJacksonsPoint.webp",
        description: "The Ramada by Wyndham Jacksons Point is a lakeside budget-mid property on Lorne Street at the Jackson's Point shore of Lake Simcoe. The hotel leans into its lake position with harbour views and packages built around the area's seasonal draws, including New Year's Eve events and motorcycle culture in the riding country nearby. Rooms are simple and the facilities modest, but the waterfront setting is uncommon at this price. It serves lake-country visitors and weekend travellers north of the city.",
        website: "https://www.wyndhamhotels.com/en-ca/ramada/jacksons-point-ontario/ramada-jacksons-point/overview",
        address: "49 Lorne Street, Jackson's Point, Georgina, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Ramada+Jacksons+Point",
        startingPrice: "$130 CAD",
        nearbyAttractions: ["Lake Simcoe", "Jackson's Point harbour", "Sibbald Point Provincial Park"],
        nearbyAmusement: ["Georgina Pioneer Village"],
        nearbyFeatures: ["Lakeside location", "Value rates", "Event packages"]
    },

// ==================================================
// WHITCHURCH-STOUFFVILLE
// ==================================================

    { place: "Whitchurch-Stouffville" },

    {
        name: "Days Inn by Wyndham Stouffville",
        image: "DaysInnStouffville.webp",
        description: "Days Inn by Wyndham Stouffville is the town's main name-brand hotel, on Ringwood Drive just off the Highway 48 corridor near Stouffville's arena and community centre. The property is a straightforward budget-mid stop with free breakfast and simple rooms, serving visitors to the growing town and the surrounding country area. Musselman's Lake and Main Street Stouffville's restaurants are both a short drive. Rates are among the lowest in York Region's east.",
        website: "https://www.wyndhamhotels.com/en-ca/days-inn/stouffville-ontario/days-inn-stouffville/overview",
        address: "38 Ringwood Drive, Whitchurch-Stouffville, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Days+Inn+Stouffville",
        startingPrice: "$120 CAD",
        nearbyAttractions: ["Musselman's Lake", "Main Street Stouffville", "Bruce's Mill Conservation Area"],
        nearbyAmusement: ["Whitchurch-Stouffville Leisure Centre"],
        nearbyFeatures: ["Highway 48 corridor", "Value rates", "Free breakfast"]
    },

// ==================================================
// KING TOWNSHIP
// ==================================================

    { place: "King Township" },

    {
        name: "The Kingbridge Centre",
        image: "KingbridgeCentre.webp",
        description: "The Kingbridge Centre is a conference centre and hotel on over 100 acres along the Humber River in King City, with 124 guest rooms spread across a campus built for retreats, leadership programs, and corporate events. Walking trails wind through the forested property, and the facilities include an indoor pool and dining service oriented to conference groups. Individual travellers can book rooms when group business permits, making it one of the quieter overnight stays in the GTA. Its Jane Street location keeps Highway 400 access easy.",
        website: "http://kingbridgecentre.com/",
        address: "12750 Jane Street, King City, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Kingbridge+Centre+King+City",
        startingPrice: "$150 CAD",
        nearbyAttractions: ["Humber River trails", "Cold Creek Conservation Area", "King City GO Station"],
        nearbyAmusement: ["King Heritage Centre"],
        nearbyFeatures: ["Conference centre", "100-acre grounds", "Trails"]
    },


];









const container = document.getElementById("hotel-container");
const hotelSearchForm = document.getElementById("hotelSearchForm");
const hotelSearchInput = document.getElementById("hotel-search");

// Display hotel cards
function displayHotels(hotelList) {
    container.innerHTML = "";

    hotelList.forEach(hotel => {
        // Just add a heading element if it's a place label
        if (hotel.place) {
            const title = document.createElement("h2");
            title.textContent = hotel.place;
            container.appendChild(title);
            return;
        }

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
                    Visit Website
                </a>

                <div class="image-credit">
                    <p><strong>Rates:</strong> Starting from ${hotel.startingPrice || "Contact hotel"} / night</p>
                    <p><strong>Nearby Attractions:</strong> ${hotel.nearbyAttractions || "Not specified"}</p>
                    <p><strong>Nearby Amusement:</strong> ${hotel.nearbyAmusement || "Not specified"}</p>
                    <p><strong>Nearby Features:</strong> ${hotel.nearbyFeatures || "Not specified"}</p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// Search hotels by name, address, or description
// Search hotels by place heading, name, address, or description

function searchHotels() {
    const query = hotelSearchInput.value.toLowerCase().trim();

    if (!query) {
        displayHotels(hotels);
        return;
    }

    const exactPlaceResults = [];
    const secondaryResults = [];
    let currentPlace = null;
    let currentSectionHotels = [];

    function matches(value) {
        if (!value) return false;
        const searchableText = Array.isArray(value)
            ? value.join(" ")
            : String(value);
        return searchableText.toLowerCase().includes(query);
    }

    function finishSection() {
        if (!currentPlace) return;

        const placeMatches = matches(currentPlace.place);

        if (placeMatches) {
            // Put direct city matches into the priority bucket
            exactPlaceResults.push(currentPlace, ...currentSectionHotels);
        } else {
            const matchingHotels = currentSectionHotels.filter(hotel =>
                matches(hotel.name) ||
                matches(hotel.address) ||
                matches(hotel.description) ||
                matches(hotel.nearbyAttractions) ||
                matches(hotel.nearbyAmusement) ||
                matches(hotel.nearbyFeatures)
            );

            if (matchingHotels.length > 0) {
                secondaryResults.push(currentPlace, ...matchingHotels);
            }
        }
    }

    hotels.forEach(item => {
        if (item.place) {
            finishSection();
            currentPlace = item;
            currentSectionHotels = [];
        } else {
            currentSectionHotels.push(item);
        }
    });

    finishSection();

    // Exact city matches render first, followed by hotels mentioning the term in descriptions/features
    displayHotels([...exactPlaceResults, ...secondaryResults]);
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
