const places = [
    {
        title: "Toronto",
        image: "Toronto (2).jpg"
    },
    {
        title: "Ottawa",
        image: "Ottawa.jpg"
    },
    {
        title: "Niagara Falls",
        image: "NigaraFalls.jpg"
    },
    {
        title: "Kingston",
        image: "Kingston.jpg"
    },
    {
        title: "London",
        image: "londonOntario.jpg"
    },
    {
        title: "Hamilton",
        image: "Hamilton.jpg"
    },
    {
        title: "Vaughn",
        image: "Vaughn.jpg",
    },
    {
        title: "Windsor",
        image: "Windsor.jpg"
    },
    {
        title: "Waterloo",
        image: "Waterloo.jpg",
    },
    {
    title: "Mississauga",
        image: "Mississauga.jpg"
    },
    {
        title: "Markham",
        image: "Markham.jpg"
    },
    {
        title: "Kitchener",
        image: "Kitchener.jpg"
    },
    {
        title: "Brampton",
        image: "Brampton.jpg"
    },
    {
        title: "Barrie",
        image: "Barrie.jpg"
    },
    {
        title: "Brantford",
        image: "Brantford.jpg"
    },
    {
        title: "Burlington",
        image: "Burlington.jpg"
    },
    {
        title: "Chathman-Kent",
        image: "Chatham-Kent.jpg"
    },
    {
        title: "Collingwood",
        image: "Collinwood.jpg"
    },
    {
        title: "Geulph",
        image: "Geulph.jpg"
    },
    {
        title: "Oshawa",
        image: "Oshawa.jpg"
    },
    {
        title: "Peterborough",
        image: "Peterborough.jpg"
    },
    {
        title: "St.Catherine",
        image: "st.Catherines.jpg"
    },
    {
        title: "Oakville",
        image: "Oakville.png"
    },
    {
        title: "Thunder Bay",
        image: "Thunderbay.jpg"
    },
];

const container = document.getElementById("places");

places.forEach(place => {
    container.innerHTML += `
        <div class="place">
            <img src="${place.image}" alt="${place.title}">
            <h2>${place.title}</h2>
        </div>
    `;
});