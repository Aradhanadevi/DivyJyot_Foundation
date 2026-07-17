
function init() {
    var mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Centered at Ahmedabad, Gujarat, India
    var map = L.map('map', {
        center: [23.0225, 72.5714],
        zoom: 14,
        scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    var marker = L.marker([23.0225, 72.5714]).addTo(map);
    marker.bindPopup("<div style='font-family: Montserrat, Arial, sans-serif;'><b>Divy Jyot Foundation</b><br>Ahmedabad, Gujarat, India</div>").openPopup();
}

window.addEventListener('load', init);