const hotels = [

// ================================
// PEEL REGION – EXISTING HOTELS
// ================================

    {
        name: "Hampton Inn by Hilton Brampton Toronto",
        image: "HamptonInnByHiltonBramptonToronto.webp",
        description: "Hampton Inn by Hilton Brampton Toronto offers comfortable accommodation in northeastern Brampton, combining modern guest rooms with convenient facilities for families and business travellers. Guests can enjoy complimentary hot breakfast, an indoor swimming pool, fitness facilities, complimentary Wi-Fi, and comfortable shared spaces. Its rooms provide practical furnishings, workspaces, and convenient amenities for relaxing after a day of travelling or exploring. The hotel's location on The Gore Road provides access to Highway 427, Toronto Pearson International Airport, local shopping destinations, and surrounding business districts, making it a practical base for exploring the eastern GTA.",
        website: "https://www.hilton.com/",
        address: "8710 The Gore Rd, Brampton, ON L6P 0B1",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hampton+Inn+by+Hilton+Brampton+Toronto",
        title: "Hampton Inn by Hilton Brampton Toronto"
    },
    {
        name: "Homewood Suites by Hilton Toronto Mississauga",
        image: "HomewoodSuitesByHiltonTorontoMississauga.webp",
        description: "Homewood Suites by Hilton Toronto Mississauga specializes in extended-stay accommodation, offering spacious suites designed to provide the convenience of a home away from home. Each suite features a fully equipped kitchen, separate living and sleeping areas, comfortable furnishings, and dedicated workspaces. Guests can enjoy complimentary breakfast, complimentary Wi-Fi, fitness facilities, and convenient laundry amenities. The property's suite-oriented design makes it particularly suitable for families, corporate travellers, and visitors staying for several nights or longer. Its Edwards Boulevard location provides access to Highway 401, Toronto Pearson International Airport, and Mississauga's major commercial districts.",
        website: "https://www.hilton.com/",
        address: "6430 Edwards Blvd, Mississauga, ON L5T 2Y3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Homewood+Suites+Toronto+Mississauga",
        title: "Homewood Suites by Hilton Toronto Mississauga"
    },
    {
        name: "Hyatt Place Toronto / Brampton",
        image: "HyattPlaceTorontoBrampton.webp",
        description: "Hyatt Place Toronto / Brampton offers contemporary accommodation with thoughtfully designed guest rooms featuring comfortable beds, separate seating areas, workspaces, and modern furnishings. The property provides amenities suited to both business and leisure visitors, including an indoor swimming pool, fitness facilities, complimentary Wi-Fi, and convenient dining options. Its spacious room layouts make it suitable for families, couples, and corporate travellers seeking additional comfort during their stay. Located along Queen Street East, the hotel provides convenient access to Highway 50, Brampton's eastern commercial district, local shopping destinations, and transportation connections throughout the Greater Toronto Area.",
        website: "https://www.hyatt.com/",
        address: "3455 Queen St E, Brampton, ON L6T 0J5",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hyatt+Place+Toronto+Brampton",
        title: "Hyatt Place Toronto / Brampton"
    },
    {
        name: "Newton Villa",
        image: "NewtonVilla.webp",
        description: "Newton Villa is a distinctive bed-and-breakfast in Brampton offering a more intimate alternative to conventional hotels. The property provides individually arranged guest accommodation in a quiet residential setting, creating a peaceful environment for visitors seeking privacy and a relaxing stay. Its appeal lies in its personalized atmosphere, comfortable interiors, and convenient access to northeastern Brampton. Guests can explore nearby restaurants, shopping destinations, and local attractions while enjoying a quieter place to return to at the end of the day. It is particularly suitable for couples, small groups, and visitors attending family celebrations or special occasions.",
        website: "https://www.google.com/maps/search/?api=1&query=Newton+Villa+Brampton",
        address: "8 Merrydale Ct, Brampton, ON L6P 0H4",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Newton+Villa+Brampton",
        title: "Newton Villa"
    },
    {
        name: "Hilton Mississauga/Meadowvale",
        image: "HiltonMississaugaMeadowvale.webp",
        description: "Hilton Mississauga/Meadowvale is a full-service hotel offering an extensive range of accommodation, recreational, and business facilities. Its guest rooms feature contemporary furnishings, comfortable bedding, workspaces, and practical amenities for both leisure and corporate visitors. One of its standout attractions is its combination of indoor and seasonal outdoor swimming facilities, providing guests with opportunities to relax throughout the year. The property also features on-site dining, fitness facilities, meeting rooms, and event spaces. Its location on Mississauga Road provides convenient access to Meadowvale Business Park, Highway 401, shopping destinations, and surrounding corporate offices.",
        website: "https://www.hilton.com/en/hotels/yyzmohh-hilton-mississauga-meadowvale/",
        address: "6750 Mississauga Rd, Mississauga, ON L5N 2L3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hilton+Mississauga+Meadowvale",
        title: "Hilton Mississauga/Meadowvale"
    },
    {
        name: "Hilton Garden Inn Toronto/Brampton",
        image: "HiltonGardenInnTorontoBrampton.webp",
        description: "Hilton Garden Inn Toronto/Brampton offers full-service accommodation designed for business visitors, families, and travellers exploring the Greater Toronto Area. Its guest rooms feature comfortable bedding, modern furnishings, workspaces, and practical amenities for relaxing or working during a stay. Guests can enjoy an on-site restaurant, indoor swimming pool, fitness facilities, complimentary Wi-Fi, and convenient meeting spaces for corporate gatherings. Its location along Steeles Avenue East provides access to Highway 410, Brampton's commercial districts, nearby shopping destinations, and surrounding business parks. The property combines convenient transportation access with useful recreational and business facilities.",
        website: "https://www.hilton.com/",
        address: "2648 Steeles Ave E, Brampton, ON L6S 6J9",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hilton+Garden+Inn+Toronto+Brampton",
        title: "Hilton Garden Inn Toronto/Brampton"
    },
    {
        name: "Hyatt Place Toronto/Mississauga Centre",
        image: "HyattPlaceTorontoMississaugaCentre.webp",
        description: "Hyatt Place Toronto/Mississauga Centre provides contemporary accommodation in the heart of Mississauga's City Centre, placing guests close to the area's major shopping, dining, and entertainment destinations. Its guest rooms feature comfortable beds, modern furnishings, dedicated workspaces, and separate seating areas designed for additional convenience. Guests can enjoy fitness facilities, an indoor swimming pool, complimentary Wi-Fi, and on-site dining options. Its location near Square One Shopping Centre, Celebration Square, and the Living Arts Centre makes it particularly attractive to visitors attending events, shopping, or exploring downtown Mississauga.",
        website: "https://www.hyatt.com/",
        address: "5787 Hurontario St, Mississauga, ON L4Z 2H7",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hyatt+Place+Toronto+Mississauga+Centre",
        title: "Hyatt Place Toronto/Mississauga Centre"
    },
    {
        name: "Millcroft Inn & Spa",
        image: "MillcroftInnAndSpa.webp",
        description: "Millcroft Inn & Spa is a distinctive countryside retreat situated in the historic village of Alton, Caledon, within a beautifully restored nineteenth-century mill property. The inn combines historic architectural character with comfortable guest accommodation, creating an atmosphere that differs considerably from conventional city hotels. Its standout features include a renowned spa experience, outdoor pools, hot tubs, relaxation areas, scenic gardens, and an on-site restaurant. Guests can enjoy peaceful surroundings, woodland views, and opportunities to explore the nearby countryside. The property is particularly appealing to couples, wellness enthusiasts, and visitors seeking a relaxing weekend escape.",
        website: "https://www.vintage-hotels.com/millcroft-inn/",
        address: "55 John St, Alton, ON L7K 0C4",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Millcroft+Inn+Spa+Alton+Ontario",
        title: "Millcroft Inn & Spa"
    },
    {
        name: "Inn on the Moraine",
        image: "InnOnTheMoraine.webp",
        description: "Inn on the Moraine is a secluded countryside bed-and-breakfast surrounded by the natural landscape of Caledon, offering a peaceful alternative to busy urban accommodation. The property is distinguished by its private setting, mature trees, landscaped outdoor spaces, and tranquil natural surroundings. Its accommodation provides guests with a comfortable environment for relaxing after exploring the surrounding countryside. The location is particularly attractive to nature enthusiasts, with opportunities for birdwatching, outdoor walks, and exploring nearby conservation areas and equestrian destinations. It is an appealing choice for couples and visitors seeking a quiet rural getaway within driving distance of Toronto.",
        website: "https://www.google.com/maps/search/?api=1&query=Inn+on+the+Moraine+Caledon",
        address: "15535 Mt Pleasant Rd, Caledon, ON L7E 3N2",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Inn+on+the+Moraine+Caledon",
        title: "Inn on the Moraine"
    },
    {
        name: "Residence Inn by Marriott Toronto Mississauga West",
        image: "ResidenceInnByMarriottTorontoMississaugaWest.webp",
        description: "Residence Inn by Marriott Toronto Mississauga West specializes in extended-stay accommodation, offering spacious suites designed to combine hotel convenience with residential comfort. Its suites feature fully equipped kitchens, refrigerators, stovetops, separate living areas, and dedicated workspaces, making them especially useful for longer visits. Guests can enjoy complimentary breakfast, complimentary Wi-Fi, fitness facilities, and convenient laundry amenities. The property is particularly suitable for relocating families, business travellers, and visitors requiring additional space during extended assignments. Its Courtneypark Drive location provides convenient access to Highway 401, Mississauga's commercial districts, and Toronto Pearson International Airport.",
        website: "https://www.marriott.com/",
        address: "55 Courtneypark Dr W, Mississauga, ON L5W 0E3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Residence+Inn+Toronto+Mississauga+West",
        title: "Residence Inn by Marriott Toronto Mississauga West"
    },


// ================================
// MISSISSAUGA
// ================================

    {
        name: "Tru by Hilton Toronto Airport West",
        image: "TruByHiltonTorontoAirportWest.webp",
        description: "Tru by Hilton Toronto Airport West offers a contemporary and energetic hotel experience designed around simplicity, convenience, and modern comfort. Guest rooms feature streamlined furnishings, comfortable beds, practical workspaces, and complimentary Wi-Fi. Guests can enjoy complimentary breakfast, a fitness centre, and inviting shared spaces designed for relaxing or socializing. Its location provides convenient access to Toronto Pearson International Airport, major highways, nearby restaurants, and Mississauga's commercial districts. The property is particularly suitable for airport travellers, business visitors, and guests seeking comfortable accommodation with practical everyday amenities.",
        website: "https://www.hilton.com/",
        address: "6905 Dixie Rd, Mississauga, ON L5T 0B8",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Tru+by+Hilton+Toronto+Airport+West",
        title: "Tru by Hilton Toronto Airport West"
    },
    {
        name: "DoubleTree by Hilton Toronto Airport West",
        image: "DoubleTreeByHiltonTorontoAirportWest.webp",
        description: "DoubleTree by Hilton Toronto Airport West is a full-service hotel offering contemporary accommodation and convenient airport-area hospitality. Guest rooms feature comfortable bedding, workspaces, modern furnishings, and practical amenities for both business and leisure travellers. The property offers an indoor swimming pool, fitness facilities, meeting spaces, and on-site dining options. Its location along Dixie Road provides convenient access to Toronto Pearson International Airport, Highway 401, and nearby commercial districts. The hotel is particularly suitable for corporate visitors, families, airport travellers, and guests attending meetings or events in Mississauga.",
        website: "https://www.hilton.com/",
        address: "5444 Dixie Rd, Mississauga, ON L4W 2L2",
        addressLink: "https://www.google.com/maps/search/?api=1&query=DoubleTree+by+Hilton+Toronto+Airport+West",
        title: "DoubleTree by Hilton Toronto Airport West"
    },
    {
        name: "Sandman Signature Mississauga Hotel",
        image: "SandmanSignatureMississaugaHotel.webp",
        description: "Sandman Signature Mississauga Hotel provides an upscale contemporary stay with spacious accommodation and convenient airport-area facilities. Guest rooms feature comfortable furnishings, modern bathrooms, workspaces, and amenities designed for longer and shorter visits. The property stands out for its indoor swimming pool, fitness facilities, on-site dining, and Denny's restaurant, which provides convenient meal options for guests. Its location on Dixie Road offers access to Toronto Pearson International Airport, Highway 401, and nearby shopping and business destinations. It is a practical choice for families, corporate travellers, and airport visitors.",
        website: "https://www.sandmanhotels.com/",
        address: "5400 Dixie Rd, Mississauga, ON L4W 4T4",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Sandman+Signature+Mississauga+Hotel",
        title: "Sandman Signature Mississauga Hotel"
    },
    {
        name: "Four Points by Sheraton Toronto Airport",
        image: "FourPointsBySheratonTorontoAirport.webp",
        description: "Four Points by Sheraton Toronto Airport offers convenient accommodation for travellers visiting the Greater Toronto Area or connecting through Pearson International Airport. Its guest rooms feature comfortable beds, workspaces, modern furnishings, and practical amenities for business and leisure stays. Guests can enjoy an indoor swimming pool, fitness facilities, dining options, and meeting spaces. The property's airport-oriented location makes it useful for travellers requiring convenient transportation connections, while nearby highways provide access to Mississauga, downtown Toronto, and surrounding business districts. It combines recognizable Marriott hospitality with practical travel amenities.",
        website: "https://www.marriott.com/",
        address: "6257 Airport Rd, Mississauga, ON L4V 1E4",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Four+Points+by+Sheraton+Toronto+Airport",
        title: "Four Points by Sheraton Toronto Airport"
    },
    {
        name: "Element Toronto Airport",
        image: "ElementTorontoAirport.webp",
        description: "Element Toronto Airport offers an extended-stay hotel experience with a focus on contemporary design, wellness, and residential-style comfort. Its guest rooms and suites feature practical living spaces, kitchen facilities in selected accommodation configurations, comfortable bedding, and dedicated work areas. Guests can enjoy complimentary breakfast, fitness facilities, and spaces designed for relaxation and productivity. The hotel's location near Toronto Pearson International Airport provides convenient access to major highways, airport terminals, and nearby corporate offices. Its suite-oriented approach makes it particularly attractive to business travellers and visitors planning longer stays.",
        website: "https://www.marriott.com/",
        address: "6257 Airport Rd, Mississauga, ON L4V 1E4",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Element+Toronto+Airport",
        title: "Element Toronto Airport"
    },
    {
        name: "Alt Hotel Toronto Airport",
        image: "AltHotelTorontoAirport.webp",
        description: "Alt Hotel Toronto Airport is a contemporary airport hotel known for its modern architecture, minimalist interiors, and convenient location directly connected to Toronto Pearson International Airport through the LINK train system. Its guest rooms feature streamlined furnishings, comfortable beds, practical workspaces, and large windows. The hotel provides complimentary Wi-Fi, a fitness centre, and dining facilities, making it suitable for both short stopovers and longer business visits. Its direct airport connection is a major advantage for travellers seeking easy terminal access without relying on road transportation or traditional airport shuttles.",
        website: "https://www.germainhotels.com/en/alt-hotel/toronto-airport",
        address: "6080 Viscount Rd, Mississauga, ON L4V 0A1",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Alt+Hotel+Toronto+Airport",
        title: "Alt Hotel Toronto Airport"
    },
    {
        name: "Hilton Toronto Airport Hotel & Suites",
        image: "HiltonTorontoAirportHotelAndSuites.webp",
        description: "Hilton Toronto Airport Hotel & Suites provides full-service accommodation near Toronto Pearson International Airport, combining convenient transportation access with extensive business and leisure facilities. Its rooms and suites feature comfortable furnishings, dedicated workspaces, and practical amenities for different types of travellers. Guests can enjoy indoor and outdoor swimming facilities, fitness amenities, on-site dining, and meeting and event spaces. The hotel also provides airport transportation, making it particularly convenient for connecting passengers and corporate visitors. Its location offers access to Highway 401, Mississauga, and Toronto's surrounding commercial districts.",
        website: "https://www.hilton.com/",
        address: "5875 Airport Rd, Mississauga, ON L4V 1N1",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hilton+Toronto+Airport+Hotel+Suites",
        title: "Hilton Toronto Airport Hotel & Suites"
    },
    {
        name: "Sheraton Gateway Hotel in Toronto International Airport",
        image: "SheratonGatewayHotelTorontoAirport.webp",
        description: "Sheraton Gateway Hotel in Toronto International Airport is a premium full-service hotel uniquely connected directly to Terminal 3 at Pearson International Airport. Its rooms provide comfortable accommodation, modern furnishings, workspaces, and convenient facilities for international and domestic travellers. The property features an indoor heated swimming pool, fitness centre, restaurant, lounge, and extensive meeting facilities. Its direct connection to the airport makes it particularly attractive to passengers with early departures, international connections, and business meetings. Guests can enjoy airport convenience without needing an external shuttle or additional ground transportation.",
        website: "https://www.marriott.com/",
        address: "Terminal 3, Toronto Pearson International Airport, Mississauga, ON L5P 1C4",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Sheraton+Gateway+Hotel+Toronto+Airport",
        title: "Sheraton Gateway Hotel in Toronto International Airport"
    },
    {
        name: "Hilton Garden Inn Toronto Airport",
        image: "HiltonGardenInnTorontoAirport.webp",
        description: "Hilton Garden Inn Toronto Airport offers comfortable full-service accommodation designed for business visitors, airport passengers, and travellers exploring the western Greater Toronto Area. Its guest rooms feature practical workspaces, comfortable bedding, modern furnishings, and convenient in-room amenities. Guests have access to fitness facilities, an indoor swimming pool, dining options, and meeting spaces suitable for corporate gatherings. The hotel is situated close to Toronto Pearson International Airport, with convenient connections to major highways and nearby business districts. Its combination of accommodation and business facilities makes it a practical airport-area choice.",
        website: "https://www.hilton.com/",
        address: "3311 Caroga Dr, Mississauga, ON L4V 1A3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hilton+Garden+Inn+Toronto+Airport",
        title: "Hilton Garden Inn Toronto Airport"
    },
    {
        name: "Fairfield Inn & Suites by Marriott Toronto Airport",
        image: "FairfieldInnAndSuitesTorontoAirport.webp",
        description: "Fairfield Inn & Suites by Marriott Toronto Airport provides practical and comfortable accommodation for airport passengers, families, and business travellers. Guest rooms feature contemporary furnishings, comfortable beds, workspaces, and convenient amenities, while selected suites provide additional living space. Guests can enjoy complimentary breakfast, an indoor swimming pool, fitness facilities, and complimentary Wi-Fi. Its location near Toronto Pearson International Airport makes it convenient for early departures and overnight stopovers. Major highways and nearby commercial areas also provide straightforward connections to Mississauga, Brampton, and the wider Toronto region.",
        website: "https://www.marriott.com/",
        address: "3299 Caroga Dr, Mississauga, ON L4V 1A3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Fairfield+Inn+Suites+Toronto+Airport",
        title: "Fairfield Inn & Suites by Marriott Toronto Airport"
    },
    {
        name: "Residence Inn by Marriott Mississauga - Airport Corporate Centre West",
        image: "ResidenceInnByMarriottMississaugaAirportCorporateCentreWest.webp",
        description: "Residence Inn by Marriott Mississauga Airport Corporate Centre West specializes in extended-stay accommodation, offering spacious suites designed to provide a residential experience. Its suites include fully equipped kitchens, separate living areas, workspaces, and comfortable sleeping arrangements. Guests can enjoy complimentary breakfast, fitness facilities, an indoor swimming pool, and convenient laundry amenities. The property is particularly useful for corporate visitors, relocating families, and travellers requiring accommodation for several nights or longer. Its location provides access to Toronto Pearson International Airport, nearby business parks, major highways, and Mississauga's commercial destinations.",
        website: "https://www.marriott.com/",
        address: "5070 Creekbank Rd, Mississauga, ON L4W 5R2",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Residence+Inn+Mississauga+Airport+Corporate+Centre+West",
        title: "Residence Inn by Marriott Mississauga - Airport Corporate Centre West"
    },
    {
        name: "Country Inn & Suites by Radisson, Toronto Mississauga",
        image: "CountryInnAndSuitesTorontoMississauga.webp",
        description: "Country Inn & Suites by Radisson, Toronto Mississauga offers comfortable accommodation with a welcoming atmosphere and convenient access to the city's western business districts. Guest rooms provide practical furnishings, comfortable bedding, and everyday amenities suited to families and corporate visitors. Guests can benefit from complimentary breakfast, fitness facilities, and convenient parking, depending on current property services. Its location offers access to major highways, shopping destinations, restaurants, and surrounding commercial areas. The property provides a practical accommodation option for visitors seeking straightforward hotel facilities while exploring Mississauga and the western GTA.",
        website: "https://www.radissonhotels.com/",
        address: "7040 Edwards Blvd, Mississauga, ON L5S 1Z1",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Country+Inn+Suites+Toronto+Mississauga",
        title: "Country Inn & Suites by Radisson, Toronto Mississauga"
    },
    {
        name: "The Waterside Inn",
        image: "TheWatersideInn.webp",
        description: "The Waterside Inn is a distinctive boutique-style hotel overlooking the waterfront in Port Credit, offering spacious suite accommodation and scenic views of Lake Ontario. Its suites provide separate living and sleeping areas, kitchen facilities, comfortable furnishings, and balconies in selected configurations. The property's waterfront setting is one of its most attractive features, placing guests close to marina views, walking paths, restaurants, and Port Credit's village atmosphere. Its location offers a quieter alternative to larger airport hotels while maintaining convenient access to Mississauga's urban attractions and transportation connections.",
        website: "https://www.watersideinn.ca/",
        address: "15 Stavebank Rd S, Mississauga, ON L5G 2T2",
        addressLink: "https://www.google.com/maps/search/?api=1&query=The+Waterside+Inn+Mississauga",
        title: "The Waterside Inn"
    },
    {
        name: "The Glenerin Inn & Spa",
        image: "TheGlenerinInnAndSpa.webp",
        description: "The Glenerin Inn & Spa is a historic boutique property distinguished by its heritage architecture, elegant interiors, and peaceful landscaped surroundings. The inn offers individually styled guest rooms and suites that combine traditional character with modern accommodation comforts. Its facilities include spa services, dining and event spaces, and picturesque grounds that provide a distinctive setting for weddings and special occasions. Located near the University of Toronto Mississauga campus, the property also offers access to local trails, shopping, and surrounding neighbourhoods. It is particularly appealing to guests seeking a quieter and more character-filled stay.",
        website: "https://www.glenerininn.com/",
        address: "1695 The Collegeway, Mississauga, ON L5L 3S7",
        addressLink: "https://www.google.com/maps/search/?api=1&query=The+Glenerin+Inn+Spa",
        title: "The Glenerin Inn & Spa"
    },
    {
        name: "Delta Hotels by Marriott Toronto Mississauga",
        image: "DeltaHotelsTorontoMississauga.webp",
        description: "Delta Hotels by Marriott Toronto Mississauga is a full-service downtown hotel offering contemporary accommodation in the heart of the city's commercial and entertainment district. Its guest rooms feature modern furnishings, comfortable bedding, workspaces, and convenient amenities for business and leisure visitors. Guests can enjoy on-site dining, a Starbucks location, fitness facilities, meeting rooms, and event spaces. One of its greatest advantages is its proximity to Square One Shopping Centre, Celebration Square, Living Arts Centre, and Mississauga's City Centre. This location makes it particularly convenient for shopping, events, conferences, and urban exploration.",
        website: "https://www.marriott.com/",
        address: "3670 Hurontario St, Mississauga, ON L5B 1P3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Delta+Hotels+Toronto+Mississauga",
        title: "Delta Hotels by Marriott Toronto Mississauga"
    },
    {
        name: "Admiral Inn & Suites",
        image: "AdmiralInnAndSuites.webp",
        description: "Admiral Inn & Suites offers straightforward accommodation in western Mississauga, providing a convenient base for visitors travelling through the Greater Toronto Area. Its guest rooms and suites are designed around practical comfort, with furnishings and everyday amenities suited to both short visits and longer stays. The property's location near North Sheridan Way offers access to Highway 403, Clarkson, local restaurants, and nearby commercial destinations. Guests can explore Port Credit and the Lake Ontario waterfront within a reasonable driving distance. Its appeal lies in its convenient location and practical accommodation rather than resort-style facilities.",
        website: "https://www.admiralinn.com/",
        address: "2161 North Sheridan Way, Mississauga, ON L5K 1A3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Admiral+Inn+Suites+Mississauga",
        title: "Admiral Inn & Suites"
    },
    {
        name: "Holiday Inn Express & Suites Mississauga-Toronto Southwest",
        image: "HolidayInnExpressSuitesMississaugaTorontoSouthwest.webp",
        description: "Holiday Inn Express & Suites Mississauga-Toronto Southwest offers practical accommodation for visitors exploring southwestern Mississauga and the western GTA. Guest rooms feature comfortable beds, workspaces, and convenient amenities, while suites provide additional space for families and longer visits. Guests can enjoy complimentary breakfast, complimentary Wi-Fi, fitness facilities, and an indoor swimming pool. The hotel's location along North Sheridan Way provides access to Highway 403, Clarkson, local shopping, and waterfront destinations. It is particularly suitable for families and business travellers looking for reliable accommodation with useful everyday facilities.",
        website: "https://www.ihg.com/holidayinnexpress/",
        address: "2125 North Sheridan Way, Mississauga, ON L5K 1A3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Express+Suites+Mississauga+Toronto+Southwest",
        title: "Holiday Inn Express & Suites Mississauga-Toronto Southwest"
    },
    {
        name: "Monte Carlo Inn Airport Suites",
        image: "MonteCarloInnAirportSuites.webp",
        description: "Monte Carlo Inn Airport Suites offers spacious accommodation with an emphasis on value, convenience, and business-friendly facilities. Its rooms and suites provide comfortable furnishings, practical workspaces, and amenities designed for both short visits and extended stays. The property features an on-site restaurant, complimentary breakfast, fitness facilities, and meeting spaces for corporate gatherings and private events. Its location on Edwards Boulevard provides access to Highway 401, Toronto Pearson International Airport, and Mississauga's business and shopping districts. The hotel is a practical option for visitors seeking suite-style accommodation and convenient access to the western GTA.",
        website: "https://www.montecarloinns.com/",
        address: "7035 Edwards Blvd, Mississauga, ON L5T 2H8",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Monte+Carlo+Inn+Airport+Suites",
        title: "Monte Carlo Inn Airport Suites"
    },
    {
        name: "Glō Best Western Mississauga",
        image: "GloBestWesternMississauga.webp",
        description: "Glō Best Western Mississauga offers contemporary accommodation with a modern design approach, colourful interiors, and convenient facilities for business and leisure visitors. Guest rooms feature comfortable bedding, functional workspaces, and contemporary furnishings designed to provide a relaxed stay. Guests can enjoy complimentary breakfast, fitness facilities, and complimentary Wi-Fi. Its location in Mississauga's commercial corridor provides access to major highways, nearby restaurants, business parks, and shopping destinations. The hotel's modern atmosphere and practical amenities make it an appealing choice for travellers seeking a straightforward contemporary stay outside downtown Toronto.",
        website: "https://www.bestwestern.com/",
        address: "40 Admiral Blvd, Mississauga, ON L5T 2W1",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Glo+Best+Western+Mississauga",
        title: "Glō Best Western Mississauga"
    },
    {
        name: "Comfort Inn Airport West",
        image: "ComfortInnAirportWest.webp",
        description: "Comfort Inn Airport West provides practical accommodation for visitors travelling through Mississauga and Toronto Pearson International Airport. Its guest rooms feature comfortable furnishings, convenient workspaces, and everyday amenities suited to business and leisure stays. Guests can benefit from complimentary breakfast, complimentary Wi-Fi, and convenient parking, making the property a useful option for travellers looking to manage accommodation costs. Its location provides access to major highways, airport facilities, nearby restaurants, and Mississauga's business districts. The hotel is particularly suited to short stays, airport stopovers, and visitors requiring convenient road connections.",
        website: "https://www.choicehotels.com/",
        address: "50 Britannia Rd E, Mississauga, ON L4Z 2G2",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Comfort+Inn+Airport+West+Mississauga",
        title: "Comfort Inn Airport West"
    },
    {
        name: "Super 5 Inn",
        image: "Super5Inn.webp",
        description: "Super 5 Inn is an independent accommodation property in Mississauga offering a straightforward option for travellers seeking convenient access to the city's eastern neighbourhoods. Its rooms provide practical furnishings and basic amenities suited to short visits and overnight stays. The property's location along Dundas Street East places guests within reach of local restaurants, shopping destinations, and major transportation routes connecting Mississauga with Toronto. Its appeal is primarily its accessible location and budget-oriented accommodation. Visitors looking for simple lodging rather than extensive hotel amenities may find it a practical base for exploring the surrounding area.",
        website: "https://www.google.com/maps/search/?api=1&query=Super+5+Inn+Mississauga",
        address: "2171 Dundas St E, Mississauga, ON L4X 1M3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Super+5+Inn+Mississauga",
        title: "Super 5 Inn"
    },
    {
        name: "Residence Inn by Marriott Toronto Mississauga Southwest",
        image: "ResidenceInnByMarriottTorontoMississaugaSouthwest.webp",
        description: "Residence Inn by Marriott Toronto Mississauga Southwest offers extended-stay accommodation with spacious suites designed to provide the convenience of a home away from home. Its suite layouts include kitchen facilities, separate living areas, workspaces, and comfortable sleeping arrangements. Guests can enjoy complimentary breakfast, fitness facilities, complimentary Wi-Fi, and amenities intended to support longer visits. Its location in southwestern Mississauga provides access to Clarkson, Port Credit, local commercial districts, and major transportation routes. The property is particularly suitable for relocating families, corporate assignments, and travellers requiring additional living space.",
        website: "https://www.marriott.com/",
        address: "2145 North Sheridan Way, Mississauga, ON L5K 1A3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Residence+Inn+Toronto+Mississauga+Southwest",
        title: "Residence Inn by Marriott Toronto Mississauga Southwest"
    },

// ================================
// BRAMPTON
// ================================

    {
        name: "Courtyard by Marriott Toronto Brampton",
        image: "CourtyardByMarriottTorontoBrampton.webp",
        description: "Courtyard by Marriott Toronto Brampton is a full-service hotel offering contemporary accommodation and extensive facilities for families, business visitors, and event attendees. Its guest rooms feature comfortable bedding, workspaces, mini-refrigerators, and microwaves. One of the property's outstanding attractions is its indoor swimming pool with a two-storey waterslide, accompanied by a whirlpool and fitness centre. Guests can also access on-site dining, Starbucks, a bar, and meeting and banquet facilities. Its Biscayne Crescent location provides convenient access to central Brampton, Highway 410, nearby shopping, and surrounding business destinations.",
        website: "https://www.marriott.com/",
        address: "90 Biscayne Cres, Brampton, ON L6W 4S1",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Courtyard+by+Marriott+Toronto+Brampton",
        title: "Courtyard by Marriott Toronto Brampton"
    },
    {
        name: "Fairfield Inn & Suites by Marriott Toronto Brampton",
        image: "FairfieldInnAndSuitesTorontoBrampton.webp",
        description: "Fairfield Inn & Suites by Marriott Toronto Brampton provides comfortable accommodation with amenities suited to families, business travellers, and visitors attending local events. Its rooms feature refrigerators, microwaves, comfortable bedding, and practical workspaces. Guests can enjoy complimentary breakfast, complimentary Wi-Fi, and convenient parking. The property also offers an indoor swimming pool with a waterslide, whirlpool, and fitness facilities. Meeting rooms and business amenities provide additional convenience for corporate visitors. Its Westcreek Boulevard location offers access to Highway 410, Bramalea, nearby commercial districts, and central Brampton.",
        website: "https://www.marriott.com/",
        address: "150 Westcreek Blvd, Brampton, ON L6T 5V7",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Fairfield+Inn+Suites+Toronto+Brampton",
        title: "Fairfield Inn & Suites by Marriott Toronto Brampton"
    },
    {
        name: "Days Inn by Wyndham Brampton",
        image: "DaysInnByWyndhamBrampton.webp",
        description: "Days Inn by Wyndham Brampton offers convenient accommodation in a central location, providing practical facilities for visitors exploring the city or travelling for business. Its guest rooms include refrigerators, microwaves, comfortable bedding, and convenient everyday amenities. Guests can enjoy complimentary hot breakfast, complimentary Wi-Fi, free parking, and access to exercise facilities and laundry services. Its Queen Street East location provides convenient access to downtown Brampton, local restaurants, shopping destinations, and public transportation. The property is particularly suitable for budget-conscious travellers seeking accessible accommodation and essential hotel services.",
        website: "https://www.wyndhamhotels.com/",
        address: "260 Queen St E, Brampton, ON L6V 1B9",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Days+Inn+by+Wyndham+Brampton",
        title: "Days Inn by Wyndham Brampton"
    },
    {
        name: "Quality Inn & Suites Brampton",
        image: "QualityInnAndSuitesBrampton.webp",
        description: "Quality Inn & Suites Brampton offers practical accommodation with a selection of amenities designed for families, business travellers, and visitors seeking value. Its guest rooms provide comfortable bedding, refrigerators, and convenient furnishings, while the property also features complimentary breakfast and Wi-Fi. Guests can enjoy an indoor swimming pool, spa tub, exercise facilities, and convenient parking. Business and laundry facilities provide additional usefulness for longer visits. Located on Clark Boulevard, the hotel offers access to Bramalea, local shopping destinations, and major transportation routes connecting Brampton with Mississauga and Toronto.",
        website: "https://www.choicehotels.com/",
        address: "30 Clark Blvd, Brampton, ON L6W 1X3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Quality+Inn+Suites+Brampton",
        title: "Quality Inn & Suites Brampton"
    },
    {
        name: "Hilton Garden Inn Toronto/Brampton West",
        image: "HiltonGardenInnTorontoBramptonWest.webp",
        description: "Hilton Garden Inn Toronto/Brampton West offers extended-stay accommodation with suite-style rooms designed to provide additional space and everyday convenience. Its suites include kitchenettes, making the property particularly useful for guests staying several nights or travelling with family. Guests can enjoy complimentary Wi-Fi, convenient parking, and access to nearby business and commercial facilities. Its Steelwell Road location provides connections to Highway 410, the CAA Centre, and central Brampton. The property is especially suited to corporate travellers, project teams, and visitors who appreciate having additional living facilities during their stay.",
        website: "https://www.hilton.com/",
        address: "200 Steelwell Rd, Brampton, ON L6T 5T3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hilton+Garden+Inn+Toronto+Brampton+West",
        title: "Hilton Garden Inn Toronto/Brampton West"
    },
    {
        name: "Holiday Inn Express & Suites Brampton",
        image: "HolidayInnExpressAndSuitesBrampton.webp",
        description: "Holiday Inn Express & Suites Brampton provides convenient accommodation for visitors travelling through Brampton and the surrounding Greater Toronto Area. Its guest rooms feature comfortable bedding, practical workspaces, refrigerators, and microwaves, while suites offer additional space for families and longer visits. Guests can enjoy complimentary hot breakfast, complimentary Wi-Fi, parking, and access to an indoor swimming pool, whirlpool, and fitness facilities. Business amenities and laundry facilities add convenience for corporate visitors. Its Nevets Road location provides access to Highway 410, nearby commercial districts, and Toronto Pearson International Airport.",
        website: "https://www.ihg.com/holidayinnexpress/",
        address: "10 Nevets Rd, Brampton, ON L6T 5T2",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Express+Suites+Brampton",
        title: "Holiday Inn Express & Suites Brampton"
    },
    {
        name: "Home2 Suites by Hilton Toronto Brampton",
        image: "Home2SuitesByHiltonTorontoBrampton.webp",
        description: "Home2 Suites by Hilton Toronto Brampton is an extended-stay hotel designed around spacious accommodation and residential-style convenience. Its suites feature fully equipped kitchens, refrigerators, dishwashers, microwaves, comfortable living spaces, and flexible sleeping arrangements. Guests can enjoy complimentary breakfast, complimentary Wi-Fi, an indoor heated swimming pool, and fitness facilities. Laundry facilities and business amenities make the property particularly useful for longer visits and corporate assignments. Located on Steelwell Road, it offers convenient access to Highway 410, Toronto Pearson International Airport, and Brampton's surrounding commercial and industrial districts.",
        website: "https://www.hilton.com/",
        address: "200 Steelwell Rd, Brampton, ON L6T 5T3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Home2+Suites+by+Hilton+Toronto+Brampton",
        title: "Home2 Suites by Hilton Toronto Brampton"
    },
    {
        name: "Monte Carlo Inn - Brampton Suites",
        image: "MonteCarloInnBramptonSuites.webp",
        description: "Monte Carlo Inn - Brampton Suites offers comfortable accommodation with a focus on personalized hospitality, practical amenities, and convenient access to the city's commercial districts. Its guest rooms feature refrigerators, microwaves, comfortable furnishings, and convenient workspaces. Guests can enjoy complimentary continental breakfast, complimentary Wi-Fi, free parking, and access to exercise facilities. The property also features an on-site restaurant and bar, along with business facilities for corporate visitors. Its Coventry Road location offers access to Highway 410, Bramalea, and nearby shopping and business destinations.",
        website: "https://www.montecarloinns.com/",
        address: "45 Coventry Rd, Brampton, ON L6T 4V7",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Monte+Carlo+Inn+Brampton+Suites",
        title: "Monte Carlo Inn - Brampton Suites"
    },
    {
        name: "Park Inn by Radisson Brampton",
        image: "ParkInnByRadissonBrampton.webp",
        description: "Park Inn by Radisson Brampton offers practical accommodation in the city's northeastern commercial corridor, providing convenient access for business visitors and travellers exploring Brampton. Guest rooms feature comfortable furnishings, convenient amenities, and spaces suited to short visits. Guests can enjoy complimentary hot breakfast, complimentary Wi-Fi, and free parking. Its location on Nexus Avenue places it close to major roads, commercial destinations, and event facilities, including the Grand Empire Banquet and Convention Centre. The property is particularly suitable for visitors attending local functions, corporate gatherings, and events in the surrounding area.",
        website: "https://www.radissonhotels.com/",
        address: "150 Nexus Ave, Brampton, ON L6P 3R6",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Park+Inn+by+Radisson+Brampton",
        title: "Park Inn by Radisson Brampton"
    },
    {
        name: "Residence & Conference Centre - Brampton",
        image: "ResidenceAndConferenceCentreBrampton.webp",
        description: "Residence & Conference Centre - Brampton provides affordable suite-style accommodation located at Sheridan College's Davis Campus. Its distinctive offering is its private two-bedroom suite configuration, with individual sleeping spaces, a private bathroom, and a kitchenette equipped with a full-sized refrigerator and microwave. The property also provides complimentary Wi-Fi, parking, air conditioning, and housekeeping services. Its campus setting makes it particularly suitable for visiting families, educational groups, conference attendees, and budget-conscious travellers. The location provides access to Brampton's educational facilities, shopping destinations, and surrounding transportation routes.",
        website: "https://www.stayrcc.com/",
        address: "7897 McLaughlin Rd, Brampton, ON L6Y 5H9",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Residence+Conference+Centre+Brampton",
        title: "Residence & Conference Centre - Brampton"
    },

// ================================
// CALEDON AND BOLTON
// ================================

    {
        name: "Hampton Inn & Suites by Hilton Bolton",
        image: "HamptonInnAndSuitesByHiltonBolton.webp",
        description: "Hampton Inn & Suites by Hilton Bolton provides comfortable accommodation in a quieter setting within the Caledon countryside. Its guest rooms feature practical furnishings, comfortable bedding, and amenities suited to both business and leisure visitors. Guests can enjoy complimentary hot breakfast, free Wi-Fi, an indoor swimming pool, and fitness facilities. The property also offers event and meeting space capable of accommodating gatherings of up to approximately 200 guests. Its Highway 50 location provides convenient access to Bolton's commercial district, Caledon Equestrian Park, conservation areas, and surrounding countryside attractions.",
        website: "https://www.hilton.com/",
        address: "12700 Highway 50, Bolton, ON L7E 1L9",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hampton+Inn+Suites+by+Hilton+Bolton",
        title: "Hampton Inn & Suites by Hilton Bolton"
    },
    {
        name: "Fairfield by Marriott Inn & Suites Bolton",
        image: "FairfieldByMarriottInnAndSuitesBolton.webp",
        description: "Fairfield by Marriott Inn & Suites Bolton offers contemporary accommodation in the Bolton area, providing a convenient base for business visitors, families, and travellers exploring Caledon. Guest rooms feature modern furnishings, comfortable bedding, and practical amenities designed for relaxing stays. Guests can enjoy complimentary breakfast, complimentary Wi-Fi, and access to fitness and other hotel facilities. Its location near Highway 50 provides convenient connections to Bolton's commercial centre, local restaurants, and surrounding countryside attractions. The property is particularly useful for visitors attending local events or travelling between Caledon and the GTA.",
        website: "https://www.marriott.com/",
        address: "12427 Highway 50, Bolton, ON L7E 1M3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Fairfield+by+Marriott+Bolton+Ontario",
        title: "Fairfield by Marriott Inn & Suites Bolton"
    },
    {
        name: "Mount Alverno Luxury Resorts",
        image: "MountAlvernoLuxuryResorts.webp",
        description: "Mount Alverno Luxury Resorts is a countryside boutique destination surrounded by the natural landscapes of Caledon. The property combines accommodation with event facilities, dining experiences, and scenic outdoor surroundings, making it particularly attractive for weddings, celebrations, and relaxing escapes. Its guest accommodation includes contemporary rooms and chalet-style options, offering a distinctive alternative to conventional city hotels. The resort also features dedicated event spaces and wellness-oriented experiences. Its Heart Lake Road setting provides a peaceful countryside atmosphere while remaining within driving distance of Brampton, Mississauga, and other Greater Toronto Area destinations.",
        website: "https://www.mountalverno.com/",
        address: "20706 Heart Lake Rd, Caledon Village, ON L7K 2A2",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Mount+Alverno+Luxury+Resorts",
        title: "Mount Alverno Luxury Resorts"
    },
    {
        name: "The Liberty Inn",
        image: "TheLibertyInn.webp",
        description: "The Liberty Inn is a boutique countryside property housed in a restored historic building in Caledon, combining heritage character with contemporary accommodation. Its five generously sized suites include options with two bedrooms, kitchenettes, and separate living and dining areas. One of its most distinctive attractions is its private Nordic spa experience, available exclusively to inn guests through reservations. Selected suites also offer additional wellness features and thoughtfully designed interiors. Surrounded by the natural landscape of the Headwaters region, the property is particularly appealing for couples, private getaways, and guests seeking a peaceful spa retreat.",
        website: "https://www.thelibertyinn.ca/",
        address: "1498 Cataract Rd, Alton, ON L7K 1N9",
        addressLink: "https://www.google.com/maps/search/?api=1&query=The+Liberty+Inn+Caledon",
        title: "The Liberty Inn"
    },
    {
        name: "Caledon Manor & Country Inn",
        image: "CaledonManorAndCountryInn.webp",
        description: "Caledon Manor & Country Inn is a Georgian-style countryside accommodation property set within a private estate surrounded by the rolling landscapes of Caledon. Its grounds feature open meadows, mature woodland, scenic views, and extensive outdoor space that creates a peaceful retreat from the city. Guests can enjoy recreational facilities including swimming, tennis, and pickleball, alongside opportunities for walking and exploring the surrounding countryside. Its location in Caledon's horse country provides convenient access to equestrian events, cycling routes, golf courses, hiking destinations, and local attractions. The property is particularly suited to quiet getaways and special occasions.",
        website: "https://www.visitcaledon.ca/experience-categories/places-to-stay",
        address: "16698 Centreville Creek Rd, Caledon, ON L7C 3B5",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Caledon+Manor+Country+Inn",
        title: "Caledon Manor & Country Inn"
    },
    {
        name: "Inn on the Moraine",
        image: "InnOnTheMoraine.webp",
        description: "Inn on the Moraine is a secluded countryside bed-and-breakfast surrounded by mature trees and the rolling natural landscape of Caledon. Its setting provides a distinctive accommodation experience for visitors seeking privacy, peaceful surroundings, and opportunities to enjoy nature. The property features indoor and outdoor spaces for relaxing, outdoor seating and dining areas, and a pond surrounded by natural habitat that attracts local wildlife. Its location offers opportunities for birdwatching, countryside walks, and exploring nearby trails. The inn is particularly appealing to couples and nature enthusiasts looking for a quiet retreat within driving distance of Toronto.",
        website: "https://www.google.com/maps/search/?api=1&query=Inn+on+the+Moraine+Caledon",
        address: "15535 Mt Pleasant Rd, Caledon, ON L7E 3N2",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Inn+on+the+Moraine+Caledon",
        title: "Inn on the Moraine"
    },
    {
        name: "Osprey Valley Villas",
        image: "OspreyValleyVillas.webp",
        description: "Osprey Valley Villas offers distinctive countryside accommodation beside the renowned golf facilities at TPC Toronto at Osprey Valley. The villas feature modern farmhouse-inspired architecture and provide a peaceful setting surrounded by woodland, open landscapes, and scenic golf course views. Their location near the Upper Credit River creates an attractive environment for visitors seeking a combination of outdoor recreation and comfortable accommodation. Guests can enjoy access to the surrounding golf destination and nearby countryside attractions, making the property particularly appealing to golf enthusiasts, couples, and visitors planning a relaxing Caledon getaway.",
        website: "https://www.ospreyvalley.com/",
        address: "18821 Main St, Caledon, ON L7K 1R1",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Osprey+Valley+Villas+Caledon",
        title: "Osprey Valley Villas"
    },
    {
        name: "Cheltenham Suites",
        image: "CheltenhamSuites.webp",
        description: "Cheltenham Suites offers boutique accommodation in the historic village of Cheltenham, providing visitors with a quieter countryside alternative to conventional hotels. The property features individually arranged suites designed to provide comfortable private accommodation for guests exploring Caledon and the surrounding Headwaters region. Its village location offers convenient access to local heritage attractions, countryside roads, outdoor recreation, and nearby conservation areas. Visitors can explore the Cheltenham Badlands, local trails, and surrounding rural communities during their stay. The property is particularly suitable for couples and travellers seeking independent accommodation with a distinctive small-village atmosphere.",
        website: "https://www.google.com/maps/search/?api=1&query=Cheltenham+Suites+Ontario",
        address: "14386 Creditview Rd, Cheltenham, ON L7C 1N5",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Cheltenham+Suites+Caledon",
        title: "Cheltenham Suites"
    }

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
