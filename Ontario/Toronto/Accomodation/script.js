const hotels = [

 

    { place: "Downtown Toronto" },

    {
        name: "Chelsea Hotel Toronto",
        image: "ChelseaHotelToronto.webp",
        description: "Chelsea Toronto is one of Canada's largest hotels, welcoming families, tour groups, and business travellers in the heart of downtown. Its standout attraction is The Hive, a family recreation area featuring an indoor waterslide, children's activity spaces, and a pool. Adults can retreat to The Heights, a 27th-floor wellness space with skyline views. Guests can also enjoy The Elm Tavern and convenient access to Toronto's major attractions.",
        website: "https://www.chelseatoronto.com/",
        address: "33 Gerrard Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Chelsea+Hotel+Toronto",
        startingPrice: "$180 CAD",
        nearbyAttractions: ["Yonge-Dundas Square", "Toronto Eaton Centre", "Art Gallery of Ontario"],
        nearbyAmusement: ["Little Canada", "Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Downtown shopping", "Restaurants", "Subway access"]
    },
    {
        name: "Fairmont Royal York",
        image: "FairmontRoyalYork.webp",
        description: "Opened in 1929, Fairmont Royal York is one of Toronto's best-known historic hotels, standing directly across from Union Station. Its grand interiors, traditional afternoon tea, and celebrated Library Bar give it a character distinct from newer downtown properties. The hotel also features several restaurants, an indoor pool, and extensive event facilities, making it a landmark destination for luxury stays, weddings, and business gatherings.",
        website: "https://www.fairmont.com/royal-york-toronto/",
        address: "100 Front Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Fairmont+Royal+York",
        startingPrice: "$280 CAD",
        nearbyAttractions: ["CN Tower", "Union Station", "Scotiabank Arena"],
        nearbyAmusement: ["Ripley's Aquarium of Canada", "Little Canada"],
        nearbyFeatures: ["Union Station", "Waterfront", "Financial District"]
    },
    {
        name: "Hilton Toronto",
        image: "HiltonToronto.webp",
        description: "Hilton Toronto occupies a central position between Toronto's Financial District and Entertainment District, making it convenient for visitors attending conferences, theatre performances, and downtown events. The property features an indoor pool with a retractable roof, allowing seasonal outdoor swimming, alongside a fitness centre and on-site dining. Its location also places guests within walking distance of Nathan Phillips Square and the city's main shopping district.",
        website: "https://www.hilton.com/en/hotels/torhihh-hilton-toronto/",
        address: "145 Richmond Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hilton+Toronto",
        startingPrice: "$210 CAD",
        nearbyAttractions: ["Nathan Phillips Square", "Toronto Eaton Centre", "CN Tower"],
        nearbyAmusement: ["Ripley's Aquarium of Canada", "Little Canada"],
        nearbyFeatures: ["Financial District", "Restaurants", "Subway access"]
    },
    {
        name: "DoubleTree by Hilton Toronto Downtown",
        image: "DoubleTreeHiltonTorontoDowntown.webp",
        description: "DoubleTree by Hilton Toronto Downtown is known for its central location near City Hall, the Eaton Centre, and Toronto's government and business districts. Guests are welcomed with the brand's signature warm chocolate chip cookie. The hotel also features an indoor pool, sauna, fitness facilities, and Hemispheres Restaurant. Its combination of sightseeing access and practical business facilities makes it suitable for both short city breaks and corporate visits.",
        website: "https://www.hilton.com/en/hotels/ytocsdt-doubletree-toronto-downtown/",
        address: "108 Chestnut Street, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=DoubleTree+Toronto+Downtown",
        startingPrice: "$220 CAD",
        nearbyAttractions: ["Toronto Eaton Centre", "Nathan Phillips Square", "Art Gallery of Ontario"],
        nearbyAmusement: ["Little Canada", "Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Downtown shopping", "Restaurants", "Subway access"]
    },
    {
        name: "Toronto Marriott Downtown Eaton Centre",
        image: "TorontoMarriottDowntownEatonCentre.webp",
        description: "Located beside the CF Toronto Eaton Centre, this Marriott gives visitors immediate access to one of Canada's major shopping destinations. Its location near Yonge-Dundas Square and subway connections makes exploring downtown convenient. A distinctive feature is its PAR BAR Topgolf Swing Suite, offering an indoor sports-simulator experience inside the hotel. The property also provides dining, a fitness centre, and extensive meeting facilities.",
        website: "https://www.marriott.com/en-us/hotels/yyzec-marriott-downtown-at-cf-toronto-eaton-centre/overview/",
        address: "525 Bay Street, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Toronto+Marriott+Downtown+Eaton+Centre",
        startingPrice: "$260 CAD",
        nearbyAttractions: ["Toronto Eaton Centre", "Yonge-Dundas Square", "Nathan Phillips Square"],
        nearbyAmusement: ["Little Canada", "Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Shopping", "Restaurants", "Subway access"]
    },
    {
        name: "One King West Hotel & Residence",
        image: "OneKingWest.webp",
        description: "One King West occupies the historic Dominion Bank building, combining preserved architectural character with modern hotel and residential-style suites. Many accommodations include kitchenettes or full kitchen facilities, separate living areas, and additional space suited to longer visits. The property also connects to Toronto's underground PATH network and features Teller's Bistro & Bar. Its distinctive historic banking architecture makes it stand out among downtown accommodation.",
        website: "https://www.onekingwest.com/",
        address: "1 King Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=One+King+West+Hotel",
        startingPrice: "$210 CAD",
        nearbyAttractions: ["Hockey Hall of Fame", "St. Lawrence Market", "CN Tower"],
        nearbyAmusement: ["Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Financial District", "Union Station", "Restaurants"]
    },
    {
        name: "InterContinental Toronto Centre",
        image: "InterContinentalTorontoCentre.webp",
        description: "InterContinental Toronto Centre is particularly well positioned for visitors attending events at the Metro Toronto Convention Centre, which is directly connected to the hotel. Its location also places the CN Tower, Rogers Centre, and waterfront within easy reach. The property offers upscale accommodation, wellness facilities, and substantial conference spaces, making it a convenient choice for convention attendees and downtown visitors.",
        website: "https://www.ihg.com/intercontinental/hotels/us/en/toronto/yyztc/hoteldetail",
        address: "225 Front Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=InterContinental+Toronto+Centre",
        startingPrice: "$280 CAD",
        nearbyAttractions: ["CN Tower", "Rogers Centre", "Harbourfront Centre"],
        nearbyAmusement: ["Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Metro Toronto Convention Centre", "Waterfront", "Union Station"]
    },
    {
        name: "Delta Hotels Toronto",
        image: "DeltaHotelsToronto.webp",
        description: "Delta Hotels Toronto stands in the city's South Core, offering views of the waterfront and surrounding downtown skyline. Its connections to Union Station, the Metro Toronto Convention Centre, and the PATH network make it especially convenient for business travellers and event attendees. The hotel also features contemporary rooms, dining options, an indoor pool, and access to major attractions such as the CN Tower and Rogers Centre.",
        website: "https://www.marriott.com/en-us/hotels/yyzdl-delta-hotels-toronto/overview/",
        address: "75 Lower Simcoe Street, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Delta+Hotels+Toronto",
        startingPrice: "$270 CAD",
        nearbyAttractions: ["CN Tower", "Rogers Centre", "Harbourfront Centre"],
        nearbyAmusement: ["Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Waterfront", "Union Station", "Entertainment District"]
    },
    {
        name: "The Ritz-Carlton, Toronto",
        image: "RitzCarltonToronto.webp",
        description: "The Ritz-Carlton Toronto is a luxury hotel in the Entertainment District, recognized for its upscale accommodation, personalized service, and extensive wellness facilities. Guests can experience its spa, indoor saltwater pool, and several dining and lounge venues. Its location near the CN Tower, Rogers Centre, and TIFF Lightbox makes it a convenient base for luxury city stays and special occasions.",
        website: "https://www.ritzcarlton.com/en/hotels/yyzrz-the-ritz-carlton-toronto/overview/",
        address: "181 Wellington Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Ritz+Carlton+Toronto",
        startingPrice: "$650 CAD",
        nearbyAttractions: ["CN Tower", "Rogers Centre", "TIFF Lightbox"],
        nearbyAmusement: ["Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Entertainment District", "Waterfront", "Fine dining"]
    },
    {
        name: "The Sutton Place Hotel Toronto",
        image: "SuttonPlaceToronto.webp",
        description: "The Sutton Place Hotel Toronto brings a contemporary boutique atmosphere to the Entertainment District, close to King Street's restaurants, theatres, and nightlife. Its Abrielle restaurant is a notable feature, offering Mediterranean-inspired dining in an elegant setting. The property also has an indoor swimming pool and modern guest rooms. Its location near Rogers Centre makes it convenient for sports fans and event visitors.",
        website: "https://www.suttonplace.com/toronto/",
        address: "355 King Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Sutton+Place+Hotel+Toronto",
        startingPrice: "$300 CAD",
        nearbyAttractions: ["CN Tower", "Rogers Centre", "TIFF Lightbox"],
        nearbyAmusement: ["Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Entertainment District", "Restaurants", "Theatres"]
    },
    {
        name: "1 Hotel Toronto",
        image: "1HotelToronto.webp",
        description: "1 Hotel Toronto is a design-focused property built around natural materials, greenery, and a nature-inspired approach to urban hospitality. Its interiors incorporate reclaimed elements and abundant plant life, creating a different atmosphere from conventional downtown hotels. Guests can explore its restaurants, rooftop pool and lounge, and wellness facilities. Located in King West, it offers easy access to Toronto's dining and nightlife scene.",
        website: "https://www.1hotels.com/toronto",
        address: "550 Wellington Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=1+Hotel+Toronto",
        startingPrice: "$400 CAD",
        nearbyAttractions: ["Trinity Bellwoods Park", "CN Tower", "Rogers Centre"],
        nearbyAmusement: ["Ripley's Aquarium of Canada"],
        nearbyFeatures: ["King West", "Restaurants", "Nightlife"]
    },
    {
        name: "Hotel X Toronto",
        image: "HotelXToronto.webp",
        description: "Hotel X Toronto sits beside Exhibition Place and the waterfront, offering a resort-like experience within the city. Its facilities include rooftop swimming, tennis courts, a cinema, fitness and wellness spaces, and several dining venues. The property also offers views of Lake Ontario and the Toronto skyline from selected areas. Its location is convenient for visitors attending Exhibition Place events or exploring nearby waterfront parks.",
        website: "https://www.hotelxtoronto.com/",
        address: "111 Princes' Boulevard, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hotel+X+Toronto",
        startingPrice: "$350 CAD",
        nearbyAttractions: ["Ontario Place", "Exhibition Place", "Trillium Park"],
        nearbyAmusement: ["BMO Field", "CNE grounds"],
        nearbyFeatures: ["Waterfront", "Exhibition Place", "Recreation"]
    },
    {
        name: "Novotel Toronto Centre",
        image: "NovotelTorontoCentre.webp",
        description: "Novotel Toronto Centre is located in the historic St. Lawrence neighbourhood, close to the market, waterfront, and Distillery District. Its location is particularly useful for exploring Toronto's older neighbourhoods on foot, while nearby Union Station provides wider city connections. The hotel offers contemporary accommodation and facilities suited to both leisure and business visitors seeking a central location.",
        website: "https://novoteltorontocentre.com/",
        address: "45 The Esplanade, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Novotel+Toronto+Centre",
        startingPrice: "$230 CAD",
        nearbyAttractions: ["St. Lawrence Market", "Distillery District", "Hockey Hall of Fame"],
        nearbyAmusement: ["Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Waterfront", "Restaurants", "Union Station"]
    },
    {
        name: "Cambridge Suites Toronto",
        image: "CambridgeSuitesToronto.webp",
        description: "Cambridge Suites is an all-suite downtown hotel where accommodations feature separate living and sleeping areas, giving guests more room than a typical standard hotel room. Its location near Yonge Street, the Eaton Centre, and Toronto's theatre district makes it convenient for extended visits and city breaks. The property also offers a rooftop fitness area and convenient access to the PATH network.",
        website: "https://www.cambridgesuitestoronto.com/",
        address: "15 Richmond Street East, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Cambridge+Suites+Toronto",
        startingPrice: "$220 CAD",
        nearbyAttractions: ["Toronto Eaton Centre", "St. Lawrence Market", "Yonge-Dundas Square"],
        nearbyAmusement: ["Little Canada"],
        nearbyFeatures: ["Downtown shopping", "Restaurants", "Subway access"]
    },
    {
        name: "The Omni King Edward Hotel",
        image: "OmniKingEdwardHotel.webp",
        description: "Opened in 1903, The Omni King Edward is one of Toronto's historic luxury hotels, known for its ornate interiors and traditional atmosphere. Its afternoon tea experience is a long-standing attraction, while the Mokara Spa offers a dedicated wellness retreat. Located near King Street and St. Lawrence Market, it provides a distinctive stay in the downtown core.",
        website: "https://www.omnihotels.com/",
        address: "37 King Street East, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Omni+King+Edward+Hotel",
        startingPrice: "$300 CAD",
        nearbyAttractions: ["St. Lawrence Market", "Hockey Hall of Fame", "Distillery District"],
        nearbyAmusement: ["Little Canada"],
        nearbyFeatures: ["Financial District", "Restaurants", "Union Station"]
    },
    {
        name: "Radisson Blu Toronto Downtown",
        image: "RadissonBluToronto.webp",
        description: "Radisson Blu Toronto Downtown occupies a waterfront location along Queens Quay, giving guests convenient access to Harbourfront, the Toronto Islands ferry terminal, and the downtown entertainment district. Selected rooms offer views of Lake Ontario or the city skyline. Its seasonal rooftop pool and Lakeview Pool Lounge are among its most distinctive features, appealing to visitors who enjoy a waterfront setting.",
        website: "https://www.choicehotels.com/ontario/toronto/radisson-blu-hotels/cnc41",
        address: "249 Queens Quay West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Radisson+Blu+Toronto+Downtown",
        startingPrice: "$240 CAD",
        nearbyAttractions: ["Harbourfront Centre", "CN Tower", "Toronto Islands ferry terminal"],
        nearbyAmusement: ["Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Waterfront", "Ferry access", "Restaurants"]
    },
    {
        name: "The Anndore House",
        image: "AnndoreHouse.webp",
        description: "The Anndore House brings a distinctive industrial-inspired boutique style to the Bloor-Yorkville neighbourhood. Its rooms feature carefully selected design details, with vinyl record players adding a memorable touch to the guest experience. The property is also home to Constantine, a Mediterranean-inspired restaurant, and Scarlet Door café. Its location near Bloor-Yonge station provides easy access to Yorkville shopping and museums.",
        website: "https://www.anndorehouse.com/",
        address: "15 Charles Street East, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=The+Anndore+House+Toronto",
        startingPrice: "$260 CAD",
        nearbyAttractions: ["Royal Ontario Museum", "Yorkville", "University of Toronto"],
        nearbyAmusement: ["Little Canada"],
        nearbyFeatures: ["Bloor-Yorkville", "Shopping", "Subway access"]
    },
    {
        name: "The St. Regis Toronto",
        image: "StRegisToronto.webp",
        description: "The St. Regis Toronto is a luxury hotel in the Financial District, offering upscale rooms, personalized service, and extensive wellness facilities. Its signature amenities include a high-floor indoor infinity pool, spa, and several dining and lounge experiences. The hotel's central Bay Street location places guests close to Toronto's financial institutions, luxury shopping, and major downtown attractions.",
        website: "https://www.marriott.com/en-us/hotels/yyzxr-the-st-regis-toronto/overview/",
        address: "325 Bay Street, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=St+Regis+Toronto",
        startingPrice: "$650 CAD",
        nearbyAttractions: ["Toronto Eaton Centre", "Hockey Hall of Fame", "Nathan Phillips Square"],
        nearbyAmusement: ["Little Canada"],
        nearbyFeatures: ["Financial District", "Luxury shopping", "Restaurants"]
    },
    {
        name: "Hotel Riu Plaza Toronto",
        image: "HotelRiuPlazaToronto.webp",
        description: "Hotel Riu Plaza Toronto brings the Riu brand's urban hotel concept to the downtown core, with contemporary accommodation designed for visitors exploring the city or travelling for business. Its location in the Entertainment District provides access to theatres, restaurants, nightlife, and major attractions. The property offers an internationally branded alternative to traditional downtown accommodation.",
        website: "https://www.riu.com/en/hotel/canada/toronto/hotel-riu-plaza-toronto",
        address: "30 Widmer Street, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Riu+Plaza+Toronto",
        startingPrice: "$260 CAD",
        nearbyAttractions: ["TIFF Lightbox", "CN Tower", "Rogers Centre"],
        nearbyAmusement: ["Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Entertainment District", "Restaurants", "Theatres"]
    },
    {
        name: "Holiday Inn Toronto Downtown Centre",
        image: "HolidayInnTorontoDowntownCentre.webp",
        description: "Holiday Inn Toronto Downtown Centre is located near College Street and Yonge Street, providing convenient access to the city's shopping, university, and hospital districts. Its indoor swimming pool and on-site dining make it a practical choice for families and visitors staying several nights. College subway station is nearby, allowing guests to travel across Toronto without relying on a car.",
        website: "https://www.ihg.com/holidayinn/hotels/us/en/toronto/yyzct/hoteldetail",
        address: "30 Carlton Street, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Toronto+Downtown+Centre",
        startingPrice: "$190 CAD",
        nearbyAttractions: ["Yonge-Dundas Square", "Toronto Eaton Centre", "Allan Gardens"],
        nearbyAmusement: ["Little Canada"],
        nearbyFeatures: ["College subway station", "Shopping", "Restaurants"]
    },
    {
        name: "Pantages Hotel Toronto Centre",
        image: "PantagesHotelToronto.webp",
        description: "Pantages Hotel Toronto Centre offers suite-style accommodation close to Yonge-Dundas Square and the Eaton Centre. Its location makes it especially convenient for visitors attending performances, shopping downtown, or exploring Toronto's theatre district. The property has a more residential accommodation feel than a conventional hotel, with larger room layouts available for travellers wanting extra space.",
        website: "https://www.pantageshotel.com/",
        address: "200 Victoria Street, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Pantages+Hotel+Toronto",
        startingPrice: "$210 CAD",
        nearbyAttractions: ["Yonge-Dundas Square", "Toronto Eaton Centre", "Massey Hall"],
        nearbyAmusement: ["Little Canada"],
        nearbyFeatures: ["Theatres", "Shopping", "Subway access"]
    },
    {
        name: "Ivy at Verity",
        image: "IvyAtVerity.webp",
        description: "Ivy at Verity is an intimate boutique hotel housed within a restored historic building in downtown Toronto. Its small collection of individually designed rooms creates a more private atmosphere than the city's larger hotels. The property is connected to Verity, a private women's club, and features access to upscale dining and wellness experiences. Its location near Queen Street East and the Distillery District makes it a distinctive retreat.",
        website: "https://www.verity.ca/",
        address: "111D Queen Street East, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Ivy+at+Verity+Toronto",
        startingPrice: "$400 CAD",
        nearbyAttractions: ["St. Lawrence Market", "Distillery District", "Hockey Hall of Fame"],
        nearbyAmusement: ["Little Canada"],
        nearbyFeatures: ["Historic neighbourhood", "Restaurants", "Downtown shopping"]
    },
    {
        name: "The Broadview Hotel",
        image: "BroadviewHotel.webp",
        description: "The Broadview Hotel occupies a restored Victorian-era building in Toronto's Riverside neighbourhood, preserving its historic character while introducing contemporary interiors. Its rooftop restaurant and bar are major attractions, offering views across the downtown skyline. The property is also known for its distinctive event spaces and neighbourhood atmosphere, making it a memorable option for visitors interested in Toronto's east-end food and culture scene.",
        website: "https://www.thebroadviewhotel.ca/",
        address: "106 Broadview Avenue, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=The+Broadview+Hotel+Toronto",
        startingPrice: "$280 CAD",
        nearbyAttractions: ["Distillery District", "Riverdale Park", "St. Lawrence Market"],
        nearbyAmusement: ["Little Canada"],
        nearbyFeatures: ["Riverside", "Restaurants", "East-end neighbourhoods"]
    },
    {
        name: "Gladstone House",
        image: "GladstoneHouse.webp",
        description: "Gladstone House is a historic boutique hotel on Queen Street West, known for its connection to Toronto's arts and creative communities. Its rooms feature individually designed interiors, while the building hosts exhibitions, cultural programming, and events. The property also includes dining and social spaces that reflect the surrounding neighbourhood's independent character. Its location is ideal for exploring Queen West's galleries, shops, and restaurants.",
        website: "https://www.gladstonehouse.ca/",
        address: "1214 Queen Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Gladstone+House+Toronto",
        startingPrice: "$230 CAD",
        nearbyAttractions: ["Trinity Bellwoods Park", "Art Gallery of Ontario", "Exhibition Place"],
        nearbyAmusement: ["CNE grounds"],
        nearbyFeatures: ["Queen Street West", "Independent shops", "Restaurants"]
    },
    {
        name: "Sheraton Centre Toronto Hotel",
        image: "SheratonCentreToronto.webp",
        description: "The Sheraton Centre has anchored the Queen Street West core since 1972, and its most memorable feature is the indoor garden atrium, where a waterfall, wooden bridges, and mature greenery sit beneath the towers. The outdoor pool, set within this garden landscape, is one of the few downtown hotel pools surrounded by greenery rather than concrete. With more than 1,300 rooms and extensive conference space, it functions as a major convention hotel as well as a base for exploring City Hall and the Eaton Centre across the street. Its scale makes it a fixture for large conferences, weddings, and tour groups.",
        website: "https://www.marriott.com/en-us/hotels/yyztc-sheraton-centre-toronto-hotel/overview/",
        address: "123 Queen Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Sheraton+Centre+Toronto",
        startingPrice: "$230 CAD",
        nearbyAttractions: ["Nathan Phillips Square", "Toronto Eaton Centre", "Toronto City Hall"],
        nearbyAmusement: ["Little Canada", "Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Financial District", "Subway access", "Shopping"]
    },
    {
        name: "Le Germain Hotel Toronto Mercer",
        image: "LeGermainTorontoMercer.webp",
        description: "Le Germain Toronto Mercer comes from Quebec's Groupe Germain, bringing the brand's contemporary boutique sensibility to a brick-and-glass building on Mercer Street in the Entertainment District. Interiors favour warm woods, clean lines, and a residential calm that contrasts with the surrounding club district, with a lounge organized around a central fireplace. Rooms are among the more generous in the boutique category, with spa-inspired bathrooms and floor-to-ceiling windows in many categories. Its position puts TIFF Lightbox, the CN Tower, and King West dining within a short walk.",
        website: "https://www.germainhotels.com/en/le-germain-hotel/toronto-mercer",
        address: "30 Mercer Street, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Le+Germain+Hotel+Toronto",
        startingPrice: "$320 CAD",
        nearbyAttractions: ["CN Tower", "TIFF Lightbox", "Rogers Centre"],
        nearbyAmusement: ["Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Entertainment District", "King West", "Restaurants"]
    },
    {
        name: "The Drake Hotel",
        image: "TheDrakeHotel.webp",
        description: "The Drake Hotel is the cultural heart of Queen Street West, a 19th-century building transformed in 2004 into a boutique hotel that doubles as a music venue, gallery, and neighbourhood living room. Its 19 rooms are individually designed by Canadian artists, and the property's programming includes live shows in the basement Underground, DJ nights, and a rooftop SkyYard terrace. The café, dining room, and general store make it as much a social hub for locals as accommodation for visitors. It sits directly on the Queen West strip of galleries, vintage shops, and restaurants, with Trinity Bellwoods Park a few blocks south.",
        website: "https://thedrake.ca/thedrakehotel/",
        address: "1150 Queen Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=The+Drake+Hotel+Toronto",
        startingPrice: "$220 CAD",
        nearbyAttractions: ["Trinity Bellwoods Park", "Art Gallery of Ontario", "Queen Street West"],
        nearbyAmusement: ["CNE grounds"],
        nearbyFeatures: ["Queen Street West", "Live music", "Independent shops"]
    },
    {
        name: "Toronto Marriott City Centre Hotel",
        image: "TorontoMarriottCityCentre.webp",
        description: "The Toronto Marriott City Centre is built directly into Rogers Centre, with many rooms overlooking the playing field itself — guests can watch Blue Jays games and concerts from their windows. Opened alongside the stadium in 1989 as the SkyDome Hotel, it remains one of the few hotels in the world embedded in a major-league ballpark. The field-view rooms are the clear draw, though the hotel also offers a fitness centre, dining, and meeting space oriented toward event attendees. Its position at 1 Blue Jays Way places the CN Tower, Ripley's Aquarium, and the Entertainment District at the doorstep.",
        website: "https://www.marriott.com/en-us/hotels/yyzcc-toronto-marriott-city-centre-hotel/overview/",
        address: "1 Blue Jays Way, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Toronto+Marriott+City+Centre",
        startingPrice: "$230 CAD",
        nearbyAttractions: ["CN Tower", "Rogers Centre", "Harbourfront Centre"],
        nearbyAmusement: ["Ripley's Aquarium of Canada"],
        nearbyFeatures: ["Entertainment District", "Stadium views", "Union Station"]
    },
    {
        name: "SoHo Metropolitan Hotel",
        image: "SoHoMetropolitan.webp",
        description: "The SoHo Metropolitan is a small luxury boutique tower on Wellington Street West, from the family behind Toronto's Metropolitan Hotels. Its look is minimalist and design-forward — glass, stone, and dark woods — with a calm, residential atmosphere a block off the King West restaurant strip. The hotel is known for attentive, unpretentious service and generously sized rooms, some with private terraces overlooking the city. Its location works equally well for TIFF, the Financial District, and the Entertainment District, all within a few minutes' walk.",
        website: "https://www.sohohoteltoronto.com/",
        address: "318 Wellington Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=SoHo+Metropolitan+Hotel+Toronto",
        startingPrice: "$300 CAD",
        nearbyAttractions: ["CN Tower", "TIFF Lightbox", "Rogers Centre"],
        nearbyAmusement: ["Ripley's Aquarium of Canada"],
        nearbyFeatures: ["King West", "Financial District", "Restaurants"]
    },

// ==================================================
// NORTH YORK
// ==================================================

    { place: "North York" },

    {
        name: "Novotel Toronto North York",
        image: "NovotelTorontoNorthYork.webp",
        description: "Novotel Toronto North York is located in the North York City Centre, with direct indoor access to North York Centre subway station. The hotel is connected to the area's shopping and entertainment complex, placing restaurants, shops, and a cinema close by. Its indoor pool and practical business facilities make it a convenient option for visitors staying outside downtown while still wanting direct subway access.",
        website: "https://all.accor.com/hotel/0910/index.en.shtml",
        address: "3 Park Home Avenue, North York, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Novotel+Toronto+North+York",
        startingPrice: "$190 CAD",
        nearbyAttractions: ["Mel Lastman Square", "North York Civic Centre", "Aga Khan Museum"],
        nearbyAmusement: ["Cineplex Empress Walk"],
        nearbyFeatures: ["North York Centre subway", "Shopping", "Restaurants"]
    },
    {
        name: "Crowne Plaza Toronto North York",
        image: "CrownePlazaTorontoNorthYork.webp",
        description: "Crowne Plaza Toronto North York occupies a landscaped property along York Mills Road, offering a quieter setting than hotels in the downtown core. Its grounds, seasonal pool, and on-site dining give the property a more traditional full-service hotel atmosphere. The hotel also provides conference and event facilities, making it suitable for corporate gatherings and group stays.",
        website: "https://www.ihg.com/crowneplaza/hotels/us/en/toronto/ytoym/hoteldetail",
        address: "900 York Mills Road, North York, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Crowne+Plaza+Toronto+North+York",
        startingPrice: "$180 CAD",
        nearbyAttractions: ["Aga Khan Museum", "Edwards Gardens", "Don Valley trails"],
        nearbyAmusement: ["Cineplex Fairview Mall"],
        nearbyFeatures: ["York Mills", "Shopping", "Highway access"]
    },
    {
        name: "Toronto Don Valley Hotel & Suites",
        image: "TorontoDonValleyHotel.webp",
        description: "Toronto Don Valley Hotel & Suites is situated near the Don Valley Parkway, offering convenient access to North York, the Aga Khan Museum, and the Don Valley's green spaces. The property has historically offered hotel rooms and suite-style accommodation, with recreational and event facilities. Its location is useful for visitors travelling by car who want access to central Toronto without staying downtown.",
        website: "https://www.torontodonvalleyhotel.com/",
        address: "175 Wynford Drive, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Toronto+Don+Valley+Hotel",
        startingPrice: "$170 CAD",
        nearbyAttractions: ["Aga Khan Museum", "Don Valley trails", "Edwards Gardens"],
        nearbyAmusement: ["Cineplex Fairview Mall"],
        nearbyFeatures: ["Don Valley Parkway", "Green spaces", "Shopping"]
    },
    {
        name: "Holiday Inn Express Toronto - North York",
        image: "HolidayInnExpressNorthYork.webp",
        description: "The Holiday Inn Express Toronto - North York sits on Norfinch Drive in the Finch corridor, a practical base for visits to York University, the surrounding corporate parks, and northwest Toronto. Rooms follow the brand's refreshed modern design, and the free hot breakfast is included in the rate. An indoor pool and fitness centre round out the facilities. Highway 400 and Finch Avenue give drivers quick access, while Canada's Wonderland and Vaughan's shopping are a short drive north.",
        website: "https://www.ihg.com/holidayinnexpress/hotels/us/en/north-york/yyzny/hoteldetail",
        address: "30 Norfinch Drive, North York, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Express+Toronto+North+York",
        startingPrice: "$180 CAD",
        nearbyAttractions: ["York University", "Black Creek Pioneer Village", "Downsview Park"],
        nearbyAmusement: ["Canada's Wonderland"],
        nearbyFeatures: ["Finch corridor", "Yorkdale Shopping Centre", "Highway access"]
    },
    {
        name: "Best Western Plus Toronto North York Hotel & Suites",
        image: "BestWesternPlusTorontoNorthYork.webp",
        description: "The Best Western Plus Toronto North York Hotel & Suites offers suite-style accommodation on Norfinch Drive, with many rooms including kitchenettes and separate sitting areas that suit longer stays. The included breakfast is a practical perk, and the property has been kept current through periodic renovations. Its position near Highway 400 and Finch Avenue makes it convenient for York University, Vaughan business parks, and drives into downtown. Rates are typically among the most competitive in the North York area for suite-style lodging.",
        website: "https://www.bestwestern.com/en_US/book/hotel-rooms.66113.html",
        address: "50 Norfinch Drive, North York, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Best+Western+Plus+Toronto+North+York",
        startingPrice: "$140 CAD",
        nearbyAttractions: ["York University", "Black Creek Pioneer Village", "Downsview Park"],
        nearbyAmusement: ["Canada's Wonderland"],
        nearbyFeatures: ["Finch corridor", "Yorkdale Shopping Centre", "Highway access"]
    },
    {
        name: "Willowdale Hotel",
        image: "WillowdaleHotel.webp",
        description: "The Willowdale Hotel is an independently operated boutique property on Willowdale Avenue in the heart of the Willowdale neighbourhood, a short walk from North York Centre subway and the Yonge Street dining strip. Its design-led rooms and self check-in kiosks give it a modern, tech-forward feel closer to an upscale apartment-hotel than a traditional chain. Room rates generally undercut comparable downtown boutiques while keeping direct subway access to central Toronto. The surrounding Yonge Street corridor offers Korean restaurants, cafés, and shops within walking distance.",
        website: "http://www.willowdalehotel.com/",
        address: "170 Willowdale Avenue, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Willowdale+Hotel+Toronto",
        startingPrice: "$150 CAD",
        nearbyAttractions: ["Mel Lastman Square", "Meridian Arts Centre", "Aga Khan Museum"],
        nearbyAmusement: ["Cineplex Empress Walk"],
        nearbyFeatures: ["North York Centre subway", "Yonge Street dining", "Shopping"]
    },

// ==================================================
// YORKVILLE & THE ANNEX
// ==================================================

    { place: "Yorkville & The Annex" },

    {
        name: "Four Seasons Hotel Toronto",
        image: "FourSeasonsToronto.webp",
        description: "The Four Seasons Hotel Toronto at 60 Yorkville Avenue is the flagship of the brand that was founded in the city in 1961, occupying a sleek 2012-built tower at the centre of Yorkville's designer shopping district. Café Boulud, the hotel's signature restaurant by Daniel Boulud, anchors the dining program, while dbar is a neighbourhood institution in its own right. The 30,000-square-foot spa is one of the largest in the city, with a skylit indoor pool and a full wellness floor. Suites on upper floors look over the Yorkville rooftops toward the downtown skyline.",
        website: "https://www.fourseasons.com/toronto/",
        address: "60 Yorkville Avenue, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Four+Seasons+Hotel+Toronto",
        startingPrice: "$750 CAD",
        nearbyAttractions: ["Royal Ontario Museum", "Yorkville boutiques", "Bata Shoe Museum"],
        nearbyAmusement: ["Cineplex Cinemas Varsity"],
        nearbyFeatures: ["Yorkville", "Fine dining", "Museums"]
    },
    {
        name: "Park Hyatt Toronto",
        image: "ParkHyattToronto.webp",
        description: "The Park Hyatt Toronto occupies the 1936 Park Plaza building at Avenue Road and Bloor, a Yorkville landmark that reopened in 2021 after a top-to-bottom restoration. The famed Roof lounge returns with its panoramic view over Queen's Park, the Royal Ontario Museum, and the downtown skyline — one of the classic views in the city. Interiors blend the building's Art Deco bones with contemporary Canadian design, and the hotel's Library and Loulou restaurant serve as refined social spaces. Its position at the hinge of Yorkville, the Annex, and the University of Toronto campus is hard to match.",
        website: "https://www.hyatt.com/park-hyatt/en-US/torph-park-hyatt-toronto",
        address: "4 Avenue Road, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Park+Hyatt+Toronto",
        startingPrice: "$550 CAD",
        nearbyAttractions: ["Royal Ontario Museum", "Queen's Park", "University of Toronto"],
        nearbyAmusement: ["Cineplex Cinemas Varsity"],
        nearbyFeatures: ["Yorkville", "The Annex", "Museums"]
    },
    {
        name: "The Hazelton Hotel",
        image: "TheHazeltonHotel.webp",
        description: "The Hazelton Hotel is Yorkville's definitive luxury boutique property, a low-rise limestone building on Hazelton Avenue with just 62 rooms and suites — a deliberately intimate scale amid the neighbourhood's towers. Its 25-seat private screening room, rare among the city's hotels, reflects the hotel's deep ties to the Toronto International Film Festival, and the spa and pool occupy a quiet lower level. One restaurant, a celebrated fine-dining room, anchors the main floor. The surrounding streets hold Yorkville's galleries, designer boutiques, and terrace culture.",
        website: "https://www.thehazeltonhotel.com/",
        address: "118 Yorkville Avenue, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=The+Hazelton+Hotel+Toronto",
        startingPrice: "$650 CAD",
        nearbyAttractions: ["Royal Ontario Museum", "Yorkville Avenue galleries", "Cumberland Street boutiques"],
        nearbyAmusement: ["Cineplex Cinemas Varsity"],
        nearbyFeatures: ["Yorkville", "Fine dining", "Art galleries"]
    },
    {
        name: "Windsor Arms Hotel",
        image: "WindsorArmsHotel.webp",
        description: "The Windsor Arms is a 1927 English-style boutique hotel on St. Thomas Street, an intimate red-brick landmark that has served as a discreet refuge for film stars during TIFF for decades. With a small number of suites, wood-panelled interiors, and a celebrated afternoon tea, the hotel trades in old-world atmosphere rather than scale. Its courtyard and spa — including a saltwater pool — give it a quiet, club-like feel rare among Toronto hotels. The Annex, the Royal Ontario Museum, and Yorkville's shopping are all within a couple of blocks.",
        website: "https://windsorarmshotel.com/",
        address: "18 Saint Thomas Street, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Windsor+Arms+Hotel+Toronto",
        startingPrice: "$400 CAD",
        nearbyAttractions: ["Royal Ontario Museum", "University of Toronto", "Yorkville"],
        nearbyAmusement: ["Cineplex Cinemas Varsity"],
        nearbyFeatures: ["Historic building", "Fine dining", "Spa"]
    },
    {
        name: "Canopy by Hilton Toronto Yorkville",
        image: "CanopyTorontoYorkville.webp",
        description: "Canopy by Hilton Toronto Yorkville is Hilton's lifestyle brand made Canadian, set in a tower at Bloor and Sherbourne on the edge of Yorkville. The design celebrates its neighbourhood — local photography, warm woods, and a lobby lounge built around a social café-bar. Guest perks include complimentary Canopy bikes and evening tastings, and rooms feature Canopy's signature beds and spa-inspired bathrooms. Sherbourne station on the Bloor line is steps away, linking guests directly to the downtown core.",
        website: "https://www.hilton.com/en/hotels/ytzpypy-canopy-toronto-yorkville/",
        address: "387 Bloor Street East, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Canopy+by+Hilton+Toronto+Yorkville",
        startingPrice: "$180 CAD",
        nearbyAttractions: ["Royal Ontario Museum", "Casa Loma", "Allan Gardens"],
        nearbyAmusement: ["Cineplex Cinemas Varsity"],
        nearbyFeatures: ["Bloor Street", "Subway access", "Rosedale"]
    },
    {
        name: "W Toronto",
        image: "WToronto.webp",
        description: "W Toronto occupies a reimagined tower at 90 Bloor Street East, the brand's first Canadian location, with interiors channelling Toronto's music and arts scene. Its Sound Suite — a professional recording studio available to guests — is unique among the city's hotels, and the programming runs from vinyl listening sessions to late-night dining and a rooftop patio. Rooms are bold and colour-saturated, a deliberate contrast to the neutral palettes of nearby properties. The Bloor-Yonge and Sherbourne subway stations put both downtown and midtown within minutes.",
        website: "https://www.marriott.com/en-us/hotels/yyzwh-w-toronto/overview/",
        address: "90 Bloor Street East, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=W+Toronto+Hotel",
        startingPrice: "$260 CAD",
        nearbyAttractions: ["Royal Ontario Museum", "Casa Loma", "Church-Wellesley Village"],
        nearbyAmusement: ["Cineplex Cinemas Varsity"],
        nearbyFeatures: ["Yorkville", "Subway access", "Nightlife"]
    },
    {
        name: "The Yorkville Royal Sonesta Hotel Toronto",
        image: "YorkvilleRoyalSonesta.webp",
        description: "The Yorkville Royal Sonesta Hotel occupies a high-rise at 220 Bloor Street West, directly across from the Royal Ontario Museum and the University of Toronto's downtown campus. The hotel's contemporary rooms are among the larger standard accommodations in the Yorkville area, and its Signature Club floors add lounge access and upgraded amenities. A restaurant and café program, fitness centre, and event spaces round out the facilities. For museum-goers, university visitors, and Yorkville shoppers, few addresses are more central.",
        website: "https://www.sonesta.com/royal-sonesta/on/toronto/yorkville-royal-sonesta-hotel-toronto",
        address: "220 Bloor Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Yorkville+Royal+Sonesta+Hotel+Toronto",
        startingPrice: "$190 CAD",
        nearbyAttractions: ["Royal Ontario Museum", "Philosopher's Walk", "Bata Shoe Museum"],
        nearbyAmusement: ["Cineplex Cinemas Varsity"],
        nearbyFeatures: ["Yorkville", "The Annex", "Museums"]
    },
    {
        name: "Kimpton Saint George Hotel",
        image: "KimptonSaintGeorge.webp",
        description: "The Kimpton Saint George occupies a converted modernist building at 280 Bloor Street West in the Annex, Kimpton's first Canadian hotel. The design leans into the neighbourhood's academic, bookish character — a two-storey atrium lounge with café bar, and rooms styled with warm, eclectic Canadian touches. Kimpton signatures apply: a hosted evening wine hour, free bikes, and a pet-friendly policy. St. George subway station is around the corner, and the Royal Ontario Museum's entrance is across the street.",
        website: "https://www.kimptonsaintgeorge.com/",
        address: "280 Bloor Street West, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Kimpton+Saint+George+Hotel+Toronto",
        startingPrice: "$200 CAD",
        nearbyAttractions: ["Royal Ontario Museum", "University of Toronto", "Bata Shoe Museum"],
        nearbyAmusement: ["Cineplex Cinemas Varsity"],
        nearbyFeatures: ["The Annex", "Bloor Street shops", "Subway access"]
    },

// ==================================================
// ETOBICOKE
// ==================================================

    { place: "Etobicoke" },

    {
        name: "Delta Hotels Toronto Airport & Conference Centre",
        image: "DeltaHotelsTorontoAirport.webp",
        description: "Delta Hotels Toronto Airport & Conference Centre is one of the largest airport-area hotels in the region, a 400-room property on Dixon Road purpose-built for conferences and events with extensive meeting facilities. Renovations have kept rooms in the brand's crisp contemporary style, and the hotel operates a 24-hour airport shuttle. An indoor pool, fitness centre, and multiple dining options serve both business and leisure travellers. Its Dixon Road position gives quick access to both Pearson terminals and the Highway 401/427 corridors.",
        website: "https://www.marriott.com/en-us/hotels/yyzda-delta-hotels-toronto-airport-and-conference-centre/overview/",
        address: "655 Dixon Road, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Delta+Hotels+Toronto+Airport",
        startingPrice: "$175 CAD",
        nearbyAttractions: ["Toronto Pearson International Airport", "Woodbine Racetrack", "Centennial Park"],
        nearbyAmusement: ["Casino Woodbine"],
        nearbyFeatures: ["Airport shuttle", "Highway 401/427 access", "Conference facilities"]
    },
    {
        name: "Sheraton Gateway Hotel in Toronto International Airport",
        image: "SheratonGatewayToronto.webp",
        description: "The Sheraton Gateway holds the most direct airport position of any Toronto hotel: it is connected to Pearson's Terminal 3 by an indoor walkway, with the other terminals a short link-train ride away. For early departures, international connections, and red-eye arrivals, no other property in the city eliminates the transfer problem as completely. The hotel offers a club lounge, on-site dining, a fitness centre, and meeting space. Highway access to downtown Toronto is straightforward via the 427.",
        website: "https://www.marriott.com/en-us/hotels/yyzds-sheraton-toronto-airport-hotel-and-conference-centre/overview/",
        address: "801 Dixon Road, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Sheraton+Gateway+Toronto+Airport",
        startingPrice: "$270 CAD",
        nearbyAttractions: ["Toronto Pearson Terminal 3", "Woodbine Racetrack", "Centennial Park"],
        nearbyAmusement: ["Casino Woodbine"],
        nearbyFeatures: ["Direct airport link", "Conference facilities", "Highway 427 access"]
    },
    {
        name: "The Westin Toronto Airport",
        image: "WestinTorontoAirport.webp",
        description: "The Westin Toronto Airport is a wellness-oriented airport hotel on Dixon Road, renovated with the brand's Heavenly beds and redesigned public spaces. The focus is on rest and recovery — quiet-room standards, a fitness studio, and healthy dining options — making it a favourite among business travellers flying through Pearson. Meeting and event facilities are extensive. The hotel runs an airport shuttle, and Highway 401 is minutes away.",
        website: "https://www.marriott.com/en-us/hotels/yyzbw-the-westin-toronto-airport/overview/",
        address: "950 Dixon Road, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Westin+Toronto+Airport",
        startingPrice: "$150 CAD",
        nearbyAttractions: ["Toronto Pearson International Airport", "Woodbine Racetrack", "Centennial Park"],
        nearbyAmusement: ["Casino Woodbine"],
        nearbyFeatures: ["Airport shuttle", "Highway 401 access", "Wellness facilities"]
    },
    {
        name: "Holiday Inn Toronto International Airport",
        image: "HolidayInnTorontoAirport.webp",
        description: "The Holiday Inn Toronto International Airport sits directly on airport grounds at 970 Dixon Road, with a complimentary shuttle to both terminals. It is a family-friendly option thanks to its pool, and its refreshed rooms, restaurant, and lounge serve both leisure and corporate travellers. The hotel's long-standing presence at Pearson makes it a dependable, mid-priced airport choice. Casino Woodbine and Woodbine Racetrack are a short drive east.",
        website: "https://www.ihg.com/holidayinn/hotels/us/en/toronto/yyzia/hoteldetail",
        address: "970 Dixon Road, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Toronto+International+Airport",
        startingPrice: "$155 CAD",
        nearbyAttractions: ["Toronto Pearson International Airport", "Woodbine Racetrack", "Centennial Park"],
        nearbyAmusement: ["Casino Woodbine"],
        nearbyFeatures: ["Airport shuttle", "Pool", "Highway access"]
    },
    {
        name: "Holiday Inn Toronto Airport East",
        image: "HolidayInnTorontoAirportEast.webp",
        description: "Holiday Inn Toronto Airport East offers a more budget-friendly airport stay on the same Dixon Road corridor, with a pool, restaurant, and the brand's standard shuttle service to Pearson. Renovated rooms keep the property competitive within the airport cluster. Its position slightly east of the main hotel zone gives straightforward access to Highway 401 and the 427. Rates here are frequently among the lowest of the full-service airport hotels.",
        website: "https://www.ihg.com/holidayinn/hotels/us/en/toronto/yyzae/hoteldetail",
        address: "600 Dixon Road, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Toronto+Airport+East",
        startingPrice: "$130 CAD",
        nearbyAttractions: ["Toronto Pearson International Airport", "Woodbine Racetrack", "Centennial Park"],
        nearbyAmusement: ["Casino Woodbine"],
        nearbyFeatures: ["Airport shuttle", "Highway 401 access", "Budget-friendly"]
    },
    {
        name: "Crowne Plaza Toronto Airport",
        image: "CrownePlazaTorontoAirport.webp",
        description: "Crowne Plaza Toronto Airport is a large conference-oriented property in the Carlson Court business park near the airport, with substantial meeting space and a business-centred service culture. Rooms were refreshed in the brand's contemporary style, and dining options include a restaurant and lounge geared to corporate travellers. The complimentary airport shuttle and proximity to Highways 409 and 401 make it convenient for both flying and driving itineraries. It is a common venue for regional meetings and training events.",
        website: "https://www.ihg.com/crowneplaza/hotels/us/en/toronto/yyzca/hoteldetail",
        address: "33 Carlson Court, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Crowne+Plaza+Toronto+Airport",
        startingPrice: "$155 CAD",
        nearbyAttractions: ["Toronto Pearson International Airport", "Woodbine Racetrack", "International Centre"],
        nearbyAmusement: ["Casino Woodbine"],
        nearbyFeatures: ["Airport shuttle", "Conference facilities", "Highway access"]
    },
    {
        name: "Holiday Inn Express & Suites Toronto Airport South",
        image: "HolidayInnExpressTorontoAirportSouth.webp",
        description: "Holiday Inn Express & Suites Toronto Airport South is one of the newer properties in the airport zone, a high-rise hotel on International Boulevard with modern rooms and suites. The free hot breakfast, included Wi-Fi, and airport shuttle make it a strong value proposition for early flights. There is a fitness centre but no full-service restaurant — the trade-off for its typically lower rates. The International Centre exhibition halls are within walking distance.",
        website: "https://www.ihg.com/holidayinnexpress/hotels/us/en/toronto/yyzhx/hoteldetail",
        address: "25 International Boulevard, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Express+Toronto+Airport+South",
        startingPrice: "$150 CAD",
        nearbyAttractions: ["Toronto Pearson International Airport", "International Centre", "Woodbine Racetrack"],
        nearbyAmusement: ["Casino Woodbine"],
        nearbyFeatures: ["Airport shuttle", "Free breakfast", "Value rates"]
    },
    {
        name: "Courtyard by Marriott Toronto Airport",
        image: "CourtyardTorontoAirport.webp",
        description: "Courtyard by Marriott Toronto Airport on Carlingview Drive offers the brand's Bistro dining concept — a market-style café open for breakfast, dinner, and evening drinks — alongside a pool and fitness area. The hotel operates a free airport shuttle. Rooms follow Marriott's contemporary Courtyard design with dedicated workspaces. Its location near the 427 gives easy access both to Pearson and to downtown Toronto.",
        website: "https://www.marriott.com/en-us/hotels/yyzap-courtyard-toronto-airport/overview/",
        address: "231 Carlingview Drive, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Courtyard+by+Marriott+Toronto+Airport",
        startingPrice: "$145 CAD",
        nearbyAttractions: ["Toronto Pearson International Airport", "Woodbine Racetrack", "Centennial Park"],
        nearbyAmusement: ["Casino Woodbine"],
        nearbyFeatures: ["Airport shuttle", "Highway 427 access", "Business travel"]
    },
    {
        name: "Best Western Premier Toronto Airport Carlingview Hotel",
        image: "BestWesternPremierCarlingview.webp",
        description: "Best Western Premier Toronto Airport Carlingview is the brand's upscale Premier tier property near the airport, renovated with contemporary rooms and an on-site restaurant and lounge. The free airport shuttle, fitness centre, and meeting facilities round out the offering. Rates are typically the most accessible of the airport-area full-service hotels. Carlingview Drive's position near the 427 keeps both the airport and the city within easy reach.",
        website: "https://www.bestwestern.com/en_US/book/hotel-rooms.66121.html",
        address: "135 Carlingview Drive, Toronto, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Best+Western+Premier+Toronto+Airport+Carlingview",
        startingPrice: "$110 CAD",
        nearbyAttractions: ["Toronto Pearson International Airport", "Woodbine Racetrack", "Centennial Park"],
        nearbyAmusement: ["Casino Woodbine"],
        nearbyFeatures: ["Airport shuttle", "Highway 427 access", "Value rates"]
    },

// ==================================================
// SCARBOROUGH
// ==================================================

    { place: "Scarborough" },

    {
        name: "Holiday Inn Express Toronto East - Scarborough",
        image: "HolidayInnExpressScarborough.webp",
        description: "Holiday Inn Express Toronto East - Scarborough sits on Estate Drive near Eglinton Avenue East, a practical base for the east end of the city. The free hot breakfast and straightforward modern rooms make it a dependable budget-to-midrange option. The Toronto Zoo, Scarborough Bluffs, and Rouge National Urban Park are all within a short drive. Highway 401 access is convenient for trips into downtown or east toward Durham Region.",
        website: "https://www.ihg.com/holidayinnexpress/hotels/us/en/scarborough/yyzex/hoteldetail",
        address: "50 Estate Drive, Scarborough, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Express+Toronto+East+Scarborough",
        startingPrice: "$130 CAD",
        nearbyAttractions: ["Toronto Zoo", "Scarborough Bluffs", "Rouge National Urban Park"],
        nearbyAmusement: ["Scarborough Town Centre"],
        nearbyFeatures: ["Highway 401 access", "Eglinton Avenue East", "Free breakfast"]
    },
    {
        name: "Best Western Plus Executive Inn",
        image: "BestWesternPlusExecutiveInn.webp",
        description: "Best Western Plus Executive Inn shares the Estate Drive location with its Holiday Inn Express neighbour, offering updated rooms, a small fitness area, and included breakfast at typically reasonable rates. Its Scarborough position works well for visitors to the Toronto Zoo, the Scarborough Bluffs, or east-end business parks. Highway 401 and Eglinton Avenue East provide the main connections. It is one of the few name-brand hotels in Scarborough proper.",
        website: "https://www.bestwestern.com/en_US/book/hotel-rooms.66088.html",
        address: "38 Estate Drive, Scarborough, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Best+Western+Plus+Executive+Inn+Scarborough",
        startingPrice: "$140 CAD",
        nearbyAttractions: ["Toronto Zoo", "Scarborough Bluffs", "Scarborough Town Centre"],
        nearbyAmusement: ["Scarborough Town Centre"],
        nearbyFeatures: ["Highway 401 access", "Free breakfast", "Value rates"]
    },
    {
        name: "Travelodge by Wyndham Toronto East",
        image: "TravelodgeTorontoEast.webp",
        description: "Travelodge by Wyndham Toronto East is a budget property on Milner Business Court in Scarborough's corporate corridor, offering simple rooms, free breakfast, and free parking at some of the lowest rates in Toronto's east end. The hotel is geared to road-trippers and business travellers using the Highway 401 corridor. Public transit connections to downtown are workable but slower than downtown-located hotels. It suits visitors prioritizing price over polish.",
        website: "https://www.wyndhamhotels.com/en-ca/travelodge/toronto-ontario/travelodge-toronto-east/overview",
        address: "20 Milner Business Court, Scarborough, ON",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Travelodge+Toronto+East",
        startingPrice: "$115 CAD",
        nearbyAttractions: ["Toronto Zoo", "Rouge National Urban Park", "Scarborough Bluffs"],
        nearbyAmusement: ["Scarborough Town Centre"],
        nearbyFeatures: ["Highway 401", "Free parking", "Budget rates"]
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
