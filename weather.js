var capitals = {"BD": "Dhaka", "BE": "Brussels", "BF": "Ouagadougou", "BG": "Sofia", "BA": "Sarajevo", "BB": "Bridgetown", "WF": "Mata Utu", "BL": "Gustavia", "BM": "Hamilton", "BN": "Bandar Seri Begawan", "BO": "Sucre", "BH": "Manama", "BI": "Bujumbura", "BJ": "Porto-Novo", "BT": "Thimphu", "JM": "Kingston", "BV": "", "BW": "Gaborone", "WS": "Apia", "BQ": "", "BR": "Brasilia", "BS": "Nassau", "JE": "Saint Helier", "BY": "Minsk", "BZ": "Belmopan", "RU": "Moscow", "RW": "Kigali", "RS": "Belgrade", "TL": "Dili", "RE": "Saint-Denis", "TM": "Ashgabat", "TJ": "Dushanbe", "RO": "Bucharest", "TK": "", "GW": "Bissau", "GU": "Hagatna", "GT": "Guatemala City", "GS": "Grytviken", "GR": "Athens", "GQ": "Malabo", "GP": "Basse-Terre", "JP": "Tokyo", "GY": "Georgetown", "GG": "St Peter Port", "GF": "Cayenne", "GE": "Tbilisi", "GD": "St. George's", "GB": "London", "GA": "Libreville", "SV": "San Salvador", "GN": "Conakry", "GM": "Banjul", "GL": "Nuuk", "GI": "Gibraltar", "GH": "Accra", "OM": "Muscat", "TN": "Tunis", "JO": "Amman", "HR": "Zagreb", "HT": "Port-au-Prince", "HU": "Budapest", "HK": "Hong Kong", "HN": "Tegucigalpa", "HM": "", "VE": "Caracas", "PR": "San Juan", "PS": "East Jerusalem", "PW": "Melekeok", "PT": "Lisbon", "SJ": "Longyearbyen", "PY": "Asuncion", "IQ": "Baghdad", "PA": "Panama City", "PF": "Papeete", "PG": "Port Moresby", "PE": "Lima", "PK": "Islamabad", "PH": "Manila", "PN": "Adamstown", "PL": "Warsaw", "PM": "Saint-Pierre", "ZM": "Lusaka", "EH": "El-Aaiun", "EE": "Tallinn", "EG": "Cairo", "ZA": "Pretoria", "EC": "Quito", "IT": "Rome", "VN": "Hanoi", "SB": "Honiara", "ET": "Addis Ababa", "SO": "Mogadishu", "ZW": "Harare", "SA": "Riyadh", "ES": "Madrid", "ER": "Asmara", "ME": "Podgorica", "MD": "Chisinau", "MG": "Antananarivo", "MF": "Marigot", "MA": "Rabat", "MC": "Monaco", "UZ": "Tashkent", "MM": "Nay Pyi Taw", "ML": "Bamako", "MO": "Macao", "MN": "Ulan Bator", "MH": "Majuro", "MK": "Skopje", "MU": "Port Louis", "MT": "Valletta", "MW": "Lilongwe", "MV": "Male", "MQ": "Fort-de-France", "MP": "Saipan", "MS": "Plymouth", "MR": "Nouakchott", "IM": "Douglas, Isle of Man", "UG": "Kampala", "TZ": "Dodoma", "MY": "Kuala Lumpur", "MX": "Mexico City", "IL": "Jerusalem", "FR": "Paris", "IO": "Diego Garcia", "SH": "Jamestown", "FI": "Helsinki", "FJ": "Suva", "FK": "Stanley", "FM": "Palikir", "FO": "Torshavn", "NI": "Managua", "NL": "Amsterdam", "NO": "Oslo", "NA": "Windhoek", "VU": "Port Vila", "NC": "Noumea", "NE": "Niamey", "NF": "Kingston", "NG": "Abuja", "NZ": "Wellington", "NP": "Kathmandu", "NR": "Yaren", "NU": "Alofi", "CK": "Avarua", "XK": "Pristina", "CI": "Yamoussoukro", "CH": "Berne", "CO": "Bogota", "CN": "Beijing", "CM": "Yaounde", "CL": "Santiago", "CC": "West Island", "CA": "Ottawa", "CG": "Brazzaville", "CF": "Bangui", "CD": "Kinshasa", "CZ": "Prague", "CY": "Nicosia", "CX": "Flying Fish Cove", "CR": "San Jose", "CW": " Willemstad", "CV": "Praia", "CU": "Havana", "SZ": "Mbabane", "SY": "Damascus", "SX": "Philipsburg", "KG": "Bishkek", "KE": "Nairobi", "SS": "Juba", "SR": "Paramaribo", "KI": "Tarawa", "KH": "Phnom Penh", "KN": "Basseterre", "KM": "Moroni", "ST": "Sao Tome", "SK": "Bratislava", "KR": "Seoul", "SI": "Ljubljana", "KP": "Pyongyang", "KW": "Kuwait City", "SN": "Dakar", "SM": "San Marino", "SL": "Freetown", "SC": "Victoria", "KZ": "Astana", "KY": "George Town", "SG": "Singapur", "SE": "Stockholm", "SD": "Khartoum", "DO": "Santo Domingo", "DM": "Roseau", "DJ": "Djibouti", "DK": "Copenhagen", "VG": "Road Town", "DE": "Berlin", "YE": "Sanaa", "DZ": "Algiers", "US": "Washington", "UY": "Montevideo", "YT": "Mamoudzou", "UM": "", "LB": "Beirut", "LC": "Castries", "LA": "Vientiane", "TV": "Funafuti", "TW": "Taipei", "TT": "Port of Spain", "TR": "Ankara", "LK": "Colombo", "LI": "Vaduz", "LV": "Riga", "TO": "Nuku'alofa", "LT": "Vilnius", "LU": "Luxembourg", "LR": "Monrovia", "LS": "Maseru", "TH": "Bangkok", "TF": "Port-aux-Francais", "TG": "Lome", "TD": "N'Djamena", "TC": "Cockburn Town", "LY": "Tripolis", "VA": "Vatican City", "VC": "Kingstown", "AE": "Abu Dhabi", "AD": "Andorra la Vella", "AG": "St. John's", "AF": "Kabul", "AI": "The Valley", "VI": "Charlotte Amalie", "IS": "Reykjavik", "IR": "Tehran", "AM": "Yerevan", "AL": "Tirana", "AO": "Luanda", "AQ": "", "AS": "Pago Pago", "AR": "Buenos Aires", "AU": "Canberra", "AT": "Vienna", "AW": "Oranjestad", "IN": "New Delhi", "AX": "Mariehamn", "AZ": "Baku", "IE": "Dublin", "ID": "Jakarta", "UA": "Kiev", "QA": "Doha", "MZ": "Maputo"}

var locationOptions = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};

function init() {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
};

function locationSuccess(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    getWeatherByCoords(lat, long);
    showForm();
};

function locationError(error) {
    showForm();
};

function showForm() {
    document.getElementById('form').style.display = "block";
}

function getWeatherByCoords(lat, long) {
    var method = 'GET';
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric&appid=44db6a862fba0b067b1930da0d769e98';
    var async = true;
    sendRequest(method, url, async);
};

function getWeatherByAddress() {
    var postcode = document.getElementById('postcode').value;
    var country = document.getElementById('country').value;

    if (postcode && country) {
        var method = 'GET';
        var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + postcode + ',' + country + '&units=metric&appid=44db6a862fba0b067b1930da0d769e98';
        var async = true;
        return sendRequest(method, url, async);
    }

    if (country) {
        var method = 'GET';
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + capitals[country] + ',' + country + '&units=metric&appid=44db6a862fba0b067b1930da0d769e98'
        var async = true;
        return sendRequest(method, url, async);
    }
}

function sendRequest(method, url, async) {
    var request = new XMLHttpRequest();

    request.open(method, url, async);

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            var data = JSON.parse(request.responseText);

            if (data.cod != "200") {
                displayError();
            }

            var weather = {
                location: data.name,
                main: data.weather[0].main,
                description: data.weather[0].description,
                temp: data.main.temp + '°C',
                tempMin: data.main.temp_min + '°C',
                tempMax: data.main.temp_max + '°C',
                iconPath: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
            };

            displayWeather(weather);
        }
    }

    request.send();
}

function displayWeather(weather) {
    var container = document.getElementById('weather');
    container.style.display = "block";

    var location = document.getElementById('location');
    location.innerHTML = weather.location;

    var icon = document.getElementById('icon');
    icon.src = weather.iconPath;
    icon.alt = weather.main;

    if (document.getElementById('weather-list')) {
        return document.getElementById('weather-list').innerHTML = '<li>Weather: ' + weather.main + '</li><li>Description: ' + weather.description + '</li><li>Temperature: ' + weather.temp + '</li><li>Min Temperature: ' + weather.tempMin + '</li><li>Max Temperature: ' + weather.tempMax + '</li>';
    }

    var listHTML = '<ul id="weather-list" style="list-style: none; margin: 0; padding: 0;"><li>Weather: ' + weather.main + '</li><li>Description: ' + weather.description + '</li><li>Temperature: ' + weather.temp + '</li><li>Min Temperature: ' + weather.tempMin + '</li><li>Max Temperature: ' + weather.tempMax + '</li></ul>';
    document.getElementById('weather-info').insertAdjacentHTML('beforeend', listHTML);
};

function displayError() {
    var error = document.getElementById('error');
    error.style.display = "block"

    window.setTimeout(function() {
        error.style.display = "none";
    }, 2500);
}

document.getElementById('submit').addEventListener('click', getWeatherByAddress);

init();
