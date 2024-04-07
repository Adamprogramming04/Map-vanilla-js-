const places = [
    {
        name: "Statue of Liberty",
        description: "A symbol of freedom and democracy, located in New York City, USA.",
        coordinates: {lat: 40.6892, lng: -74.0445}
    },
    {
        name: "Eiffel Tower",
        description: "An iconic landmark in Paris, France, known for its wrought iron lattice structure.",
        coordinates: {lat: 48.8584, lng: 2.2945}
    },
    {
        name: "Great Wall of China",
        description: "One of the most impressive architectural feats in history, stretching across northern China.",
        coordinates: {lat: 40.4319, lng: 116.5704}
    }
];

const mapElement = document.getElementById('map');
const infoElement = document.getElementById('info');
const placeNameElement = document.getElementById('place-name');
const placeDescriptionElement = document.getElementById('place-description');

function initMap() {
    const map = new google.maps.Map(mapElement, {
        zoom: 3,
        center: {lat: 0, lng: 0}
    });

    places.forEach(place => {
        const marker = new google.maps.Marker({
            position: place.coordinates,
            map: map
        });

        marker.addListener('mouseover', () => {
            showInfo(place);
        });

        marker.addListener('mouseout', () => {
            hideInfo();
        });
    });
}

function showInfo(place) {
    placeNameElement.textContent = place.name;
    placeDescriptionElement.textContent = place.description;
    infoElement.style.display = 'block';
}

function hideInfo() {
    infoElement.style.display = 'none';
}
