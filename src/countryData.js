const countryData =
  // 20180327104700
  // http://techslides.com/demos/country-capitals.json

  [
    {
      CountryName: "Palestine",
      CapitalName: "Jerusalem",
      CountryCode: "PS",
      ContinentName: "Asia"
    },
    {
      CountryName: "Nauru",
      CapitalName: "Yaren",
      CountryCode: "NR",
      ContinentName: "Australia"
    },
    {
      CountryName: "Afghanistan",
      CapitalName: "Kabul",
      CountryCode:
        "http://www.senojflags.com/images/country-flag-icons/Afghanistan-Flag.png",
      ContinentName: "Asia"
    },
    {
      CountryName: "Albania",
      CapitalName: "Tirana",
      CountryCode: "AL",
      ContinentName: "Europe"
    },
    {
      CountryName: "Algeria",
      CapitalName: "Algiers",
      CountryCode: "DZ",
      ContinentName: "Africa"
    },
    {
      CountryName: "American Samoa",
      CapitalName: "Pago Pago",
      CountryCode: "AS",
      ContinentName: "Australia"
    },
    {
      CountryName: "Andorra",
      CapitalName: "Andorra la Vella",
      CountryCode: "AD",
      ContinentName: "Europe"
    },
    {
      CountryName: "Angola",
      CapitalName: "Luanda",
      CountryCode: "AO",
      ContinentName: "Africa"
    },
    {
      CountryName: "Antigua and Barbuda",
      CapitalName: "Saint John's",
      CountryCode: "AG",
      ContinentName: "North America"
    },
    {
      CountryName: "Argentina",
      CapitalName: "Buenos Aires",
      CountryCode: "AR",
      ContinentName: "South America"
    },
    {
      CountryName: "Armenia",
      CapitalName: "Yerevan",
      CountryCode: "AM",
      ContinentName: "Europe"
    },
    {
      CountryName: "Australia",
      CapitalName: "Canberra",
      CountryCode: "AU",
      ContinentName: "Australia"
    },
    {
      CountryName: "Austria",
      CapitalName: "Vienna",
      CountryCode: "AT",
      ContinentName: "Europe"
    },
    {
      CountryName: "Azerbaijan",
      CapitalName: "Baku",
      CountryCode: "AZ",
      ContinentName: "Europe"
    },
    {
      CountryName: "Bahamas",
      CapitalName: "Nassau",
      CountryCode: "BS",
      ContinentName: "North America"
    },
    {
      CountryName: "Bahrain",
      CapitalName: "Manama",
      CountryCode: "BH",
      ContinentName: "Asia"
    },
    {
      CountryName: "Bangladesh",
      CapitalName: "Dhaka",
      CountryCode: "BD",
      ContinentName: "Asia"
    },
    {
      CountryName: "Barbados",
      CapitalName: "Bridgetown",
      CountryCode: "BB",
      ContinentName: "North America"
    },
    {
      CountryName: "Belarus",
      CapitalName: "Minsk",
      CountryCode: "BY",
      ContinentName: "Europe"
    },
    {
      CountryName: "Belgium",
      CapitalName: "Brussels",
      CountryCode: "BE",
      ContinentName: "Europe"
    },
    {
      CountryName: "Belize",
      CapitalName: "Belmopan",
      CountryCode: "BZ",
      ContinentName: "Central America"
    },
    {
      CountryName: "Benin",
      CapitalName: "Porto-Novo",
      CountryCode: "BJ",
      ContinentName: "Africa"
    },
    {
      CountryName: "Bhutan",
      CapitalName: "Thimphu",
      CountryCode: "BT",
      ContinentName: "Asia"
    },
    {
      CountryName: "Bolivia",
      CapitalName: "La Paz",
      CountryCode: "BO",
      ContinentName: "South America"
    },
    {
      CountryName: "Bosnia and Herzegovina",
      CapitalName: "Sarajevo",
      CountryCode: "BA",
      ContinentName: "Europe"
    },
    {
      CountryName: "Botswana",
      CapitalName: "Gaborone",
      CountryCode: "BW",
      ContinentName: "Africa"
    },
    {
      CountryName: "Brazil",
      CapitalName: "Brasilia",
      CountryCode: "BR",
      ContinentName: "South America"
    },
    {
      CountryName: "Brunei Darussalam",
      CapitalName: "Bandar Seri Begawan",
      CountryCode: "BN",
      ContinentName: "Asia"
    },
    {
      CountryName: "Bulgaria",
      CapitalName: "Sofia",
      CountryCode: "BG",
      ContinentName: "Europe"
    },
    {
      CountryName: "Burkina Faso",
      CapitalName: "Ouagadougou",
      CountryCode: "BF",
      ContinentName: "Africa"
    },
    {
      CountryName: "Myanmar",
      CapitalName: "Naypyidaw",
      CountryCode: "MM",
      ContinentName: "Asia"
    },
    {
      CountryName: "Burundi",
      CapitalName: "Bujumbura",
      CountryCode: "BI",
      ContinentName: "Africa"
    },
    {
      CountryName: "Cambodia",
      CapitalName: "Phnom Penh",
      CountryCode: "KH",
      ContinentName: "Asia"
    },
    {
      CountryName: "Cameroon",
      CapitalName: "Yaounde",
      CountryCode: "CM",
      ContinentName: "Africa"
    },
    {
      CountryName: "Canada",
      CapitalName: "Ottawa",
      CountryCode: "CA",
      ContinentName: "Central America"
    },
    {
      CountryName: "Cape Verde",
      CapitalName: "Praia",
      CountryCode: "CV",
      ContinentName: "Africa"
    },
    {
      CountryName: "Cayman Islands",
      CapitalName: "George Town",
      CountryCode: "KY",
      ContinentName: "North America"
    },
    {
      CountryName: "Central African Republic",
      CapitalName: "Bangui",
      CountryCode: "CF",
      ContinentName: "Africa"
    },
    {
      CountryName: "Chad",
      CapitalName: "N'Djamena",
      CountryCode: "TD",
      ContinentName: "Africa"
    },
    {
      CountryName: "Chile",
      CapitalName: "Santiago",
      CountryCode: "CL",
      ContinentName: "South America"
    },
    {
      CountryName: "China",
      CapitalName: "Beijing",
      CountryCode: "CN",
      ContinentName: "Asia"
    },
    {
      CountryName: "Colombia",
      CapitalName: "Bogota",
      CountryCode: "CO",
      ContinentName: "South America"
    },
    {
      CountryName: "Comoros",
      CapitalName: "Moroni",
      CountryCode: "KM",
      ContinentName: "Africa"
    },
    {
      CountryName: "Democratic Republic of the Congo",
      CapitalName: "Kinshasa",
      CountryCode: "CD",
      ContinentName: "Africa"
    },
    {
      CountryName: "Republic of Congo",
      CapitalName: "Brazzaville",
      CountryCode: "CG",
      ContinentName: "Africa"
    },
    {
      CountryName: "Cook Islands",
      CapitalName: "Avarua",
      CountryCode: "CK",
      ContinentName: "Australia"
    },
    {
      CountryName: "Costa Rica",
      CapitalName: "San Jose",
      CountryCode: "CR",
      ContinentName: "Central America"
    },
    {
      CountryName: "Cote d'Ivoire",
      CapitalName: "Yamoussoukro",
      CountryCode: "CI",
      ContinentName: "Africa"
    },
    {
      CountryName: "Croatia",
      CapitalName: "Zagreb",
      CountryCode: "HR",
      ContinentName: "Europe"
    },
    {
      CountryName: "Cuba",
      CapitalName: "Havana",
      CountryCode: "CU",
      ContinentName: "North America"
    },
    {
      CountryName: "Cyprus",
      CapitalName: "Nicosia",
      CountryCode: "CY",
      ContinentName: "Europe"
    },
    {
      CountryName: "Czech Republic",
      CapitalName: "Prague",
      CountryCode: "CZ",
      ContinentName: "Europe"
    },
    {
      CountryName: "Denmark",
      CapitalName: "Copenhagen",
      CountryCode: "DK",
      ContinentName: "Europe"
    },
    {
      CountryName: "Djibouti",
      CapitalName: "Djibouti",
      CountryCode: "DJ",
      ContinentName: "Africa"
    },
    {
      CountryName: "Dominica",
      CapitalName: "Roseau",
      CountryCode: "DM",
      ContinentName: "North America"
    },
    {
      CountryName: "Dominican Republic",
      CapitalName: "Santo Domingo",
      CountryCode: "DO",
      ContinentName: "North America"
    },
    {
      CountryName: "Ecuador",
      CapitalName: "Quito",
      CountryCode: "EC",
      ContinentName: "South America"
    },
    {
      CountryName: "Egypt",
      CapitalName: "Cairo",
      CountryCode: "EG",
      ContinentName: "Africa"
    },
    {
      CountryName: "El Salvador",
      CapitalName: "San Salvador",
      CountryCode: "SV",
      ContinentName: "Central America"
    },
    {
      CountryName: "Equatorial Guinea",
      CapitalName: "Malabo",
      CountryCode: "GQ",
      ContinentName: "Africa"
    },
    {
      CountryName: "Eritrea",
      CapitalName: "Asmara",
      CountryCode: "ER",
      ContinentName: "Africa"
    },
    {
      CountryName: "Estonia",
      CapitalName: "Tallinn",
      CountryCode: "EE",
      ContinentName: "Europe"
    },
    {
      CountryName: "Ethiopia",
      CapitalName: "Addis Ababa",
      CountryCode: "ET",
      ContinentName: "Africa"
    },
    {
      CountryName: "Falkland Islands",
      CapitalName: "Stanley",
      CountryCode: "FK",
      ContinentName: "South America"
    },
    {
      CountryName: "Faroe Islands",
      CapitalName: "Torshavn",
      CountryCode: "FO",
      ContinentName: "Europe"
    },
    {
      CountryName: "Fiji",
      CapitalName: "Suva",
      CountryCode: "FJ",
      ContinentName: "Australia"
    },
    {
      CountryName: "Finland",
      CapitalName: "Helsinki",
      CountryCode: "FI",
      ContinentName: "Europe"
    },
    {
      CountryName: "France",
      CapitalName: "Paris",
      CountryCode: "FR",
      ContinentName: "Europe"
    },
    {
      CountryName: "French Polynesia",
      CapitalName: "Papeete",
      CountryCode: "PF",
      ContinentName: "Australia"
    },
    {
      CountryName: "Gabon",
      CapitalName: "Libreville",
      CountryCode: "GA",
      ContinentName: "Africa"
    },
    {
      CountryName: "The Gambia",
      CapitalName: "Banjul",
      CountryCode: "GM",
      ContinentName: "Africa"
    },
    {
      CountryName: "Georgia",
      CapitalName: "Tbilisi",
      CountryCode: "GE",
      ContinentName: "Europe"
    },
    {
      CountryName: "Germany",
      CapitalName: "Berlin",
      CountryCode: "DE",
      ContinentName: "Europe"
    },
    {
      CountryName: "Ghana",
      CapitalName: "Accra",
      CountryCode: "GH",
      ContinentName: "Africa"
    },
    {
      CountryName: "Gibraltar",
      CapitalName: "Gibraltar",
      CountryCode: "GI",
      ContinentName: "Europe"
    },
    {
      CountryName: "Greece",
      CapitalName: "Athens",
      CountryCode: "GR",
      ContinentName: "Europe"
    },
    {
      CountryName: "Greenland",
      CapitalName: "Nuuk",
      CountryCode: "GL",
      ContinentName: "Central America"
    },
    {
      CountryName: "Grenada",
      CapitalName: "Saint George's",
      CountryCode: "GD",
      ContinentName: "North America"
    },
    {
      CountryName: "Guatemala",
      CapitalName: "Guatemala City",
      CountryCode: "GT",
      ContinentName: "Central America"
    },
    {
      CountryName: "Guernsey",
      CapitalName: "Saint Peter Port",
      CountryCode: "GG",
      ContinentName: "Europe"
    },
    {
      CountryName: "Guinea",
      CapitalName: "Conakry",
      CountryCode: "GN",
      ContinentName: "Africa"
    },
    {
      CountryName: "Guinea-Bissau",
      CapitalName: "Bissau",
      CountryCode: "GW",
      ContinentName: "Africa"
    },
    {
      CountryName: "Guyana",
      CapitalName: "Georgetown",
      CountryCode: "GY",
      ContinentName: "South America"
    },
    {
      CountryName: "Haiti",
      CapitalName: "Port-au-Prince",
      CountryCode: "HT",
      ContinentName: "North America"
    },
    {
      CountryName: "Vatican City",
      CapitalName: "Vatican City",
      CountryCode: "VA",
      ContinentName: "Europe"
    },
    {
      CountryName: "Honduras",
      CapitalName: "Tegucigalpa",
      CountryCode: "HN",
      ContinentName: "Central America"
    },
    {
      CountryName: "Hungary",
      CapitalName: "Budapest",
      CountryCode: "HU",
      ContinentName: "Europe"
    },
    {
      CountryName: "Iceland",
      CapitalName: "Reykjavik",
      CountryCode: "IS",
      ContinentName: "Europe"
    },
    {
      CountryName: "India",
      CapitalName: "New Delhi",
      CountryCode: "IN",
      ContinentName: "Asia"
    },
    {
      CountryName: "Indonesia",
      CapitalName: "Jakarta",
      CountryCode: "ID",
      ContinentName: "Asia"
    },
    {
      CountryName: "Iran",
      CapitalName: "Tehran",
      CountryCode: "IR",
      ContinentName: "Asia"
    },
    {
      CountryName: "Iraq",
      CapitalName: "Baghdad",
      CountryCode: "IQ",
      ContinentName: "Asia"
    },
    {
      CountryName: "Ireland",
      CapitalName: "Dublin",
      CountryCode: "IE",
      ContinentName: "Europe"
    },
    {
      CountryName: "Isle of Man",
      CapitalName: "Douglas",
      CountryCode: "IM",
      ContinentName: "Europe"
    },
    {
      CountryName: "Israel",
      CapitalName: "Jerusalem",
      CountryCode: "IL",
      ContinentName: "Asia"
    },
    {
      CountryName: "Italy",
      CapitalName: "Rome",
      CountryCode: "IT",
      ContinentName: "Europe"
    },
    {
      CountryName: "Jamaica",
      CapitalName: "Kingston",
      CountryCode: "JM",
      ContinentName: "North America"
    },
    {
      CountryName: "Japan",
      CapitalName: "Tokyo",
      CountryCode: "JP",
      ContinentName: "Asia"
    },
    {
      CountryName: "Jordan",
      CapitalName: "Amman",
      CountryCode: "JO",
      ContinentName: "Asia"
    },
    {
      CountryName: "Kazakhstan",
      CapitalName: "Astana",
      CountryCode: "KZ",
      ContinentName: "Asia"
    },
    {
      CountryName: "Kenya",
      CapitalName: "Nairobi",
      CountryCode: "KE",
      ContinentName: "Africa"
    },
    {
      CountryName: "Kiribati",
      CapitalName: "Tarawa",
      CountryCode: "KI",
      ContinentName: "Australia"
    },
    {
      CountryName: "North Korea",
      CapitalName: "Pyongyang",
      CountryCode: "KP",
      ContinentName: "Asia"
    },
    {
      CountryName: "South Korea",
      CapitalName: "Seoul",
      CountryCode: "KR",
      ContinentName: "Asia"
    },
    {
      CountryName: "Kosovo",
      CapitalName: "Pristina",
      CountryCode: "KO",
      ContinentName: "Europe"
    },
    {
      CountryName: "Kuwait",
      CapitalName: "Kuwait City",
      CountryCode: "KW",
      ContinentName: "Asia"
    },
    {
      CountryName: "Kyrgyzstan",
      CapitalName: "Bishkek",
      CountryCode: "KG",
      ContinentName: "Asia"
    },
    {
      CountryName: "Laos",
      CapitalName: "Vientiane",
      CountryCode: "LA",
      ContinentName: "Asia"
    },
    {
      CountryName: "Latvia",
      CapitalName: "Riga",
      CountryCode: "LV",
      ContinentName: "Europe"
    },
    {
      CountryName: "Lebanon",
      CapitalName: "Beirut",
      CountryCode: "LB",
      ContinentName: "Asia"
    },
    {
      CountryName: "Lesotho",
      CapitalName: "Maseru",
      CountryCode: "LS",
      ContinentName: "Africa"
    },
    {
      CountryName: "Liberia",
      CapitalName: "Monrovia",
      CountryCode: "LR",
      ContinentName: "Africa"
    },
    {
      CountryName: "Libya",
      CapitalName: "Tripoli",
      CountryCode: "LY",
      ContinentName: "Africa"
    },
    {
      CountryName: "Liechtenstein",
      CapitalName: "Vaduz",
      CountryCode: "LI",
      ContinentName: "Europe"
    },
    {
      CountryName: "Lithuania",
      CapitalName: "Vilnius",
      CountryCode: "LT",
      ContinentName: "Europe"
    },
    {
      CountryName: "Luxembourg",
      CapitalName: "Luxembourg",
      CountryCode: "LU",
      ContinentName: "Europe"
    },
    {
      CountryName: "Macedonia",
      CapitalName: "Skopje",
      CountryCode: "MK",
      ContinentName: "Europe"
    },
    {
      CountryName: "Madagascar",
      CapitalName: "Antananarivo",
      CountryCode: "MG",
      ContinentName: "Africa"
    },
    {
      CountryName: "Malawi",
      CapitalName: "Lilongwe",
      CountryCode: "MW",
      ContinentName: "Africa"
    },
    {
      CountryName: "Malaysia",
      CapitalName: "Kuala Lumpur",
      CountryCode: "MY",
      ContinentName: "Asia"
    },
    {
      CountryName: "Maldives",
      CapitalName: "Male",
      CountryCode: "MV",
      ContinentName: "Asia"
    },
    {
      CountryName: "Mali",
      CapitalName: "Bamako",
      CountryCode: "ML",
      ContinentName: "Africa"
    },
    {
      CountryName: "Malta",
      CapitalName: "Valletta",
      CountryCode: "MT",
      ContinentName: "Europe"
    },
    {
      CountryName: "Marshall Islands",
      CapitalName: "Majuro",
      CountryCode: "MH",
      ContinentName: "Australia"
    },
    {
      CountryName: "Mauritania",
      CapitalName: "Nouakchott",
      CountryCode: "MR",
      ContinentName: "Africa"
    },
    {
      CountryName: "Mauritius",
      CapitalName: "Port Louis",
      CountryCode: "MU",
      ContinentName: "Africa"
    },
    {
      CountryName: "Mexico",
      CapitalName: "Mexico City",
      CountryCode: "MX",
      ContinentName: "Central America"
    },
    {
      CountryName: "Federated States of Micronesia",
      CapitalName: "Palikir",
      CountryCode: "FM",
      ContinentName: "Australia"
    },
    {
      CountryName: "Moldova",
      CapitalName: "Chisinau",
      CountryCode: "MD",
      ContinentName: "Europe"
    },
    {
      CountryName: "Monaco",
      CapitalName: "Monaco",
      CountryCode: "MC",
      ContinentName: "Europe"
    },
    {
      CountryName: "Mongolia",
      CapitalName: "Ulaanbaatar",
      CountryCode: "MN",
      ContinentName: "Asia"
    },
    {
      CountryName: "Montenegro",
      CapitalName: "Podgorica",
      CountryCode: "ME",
      ContinentName: "Europe"
    },
    {
      CountryName: "Morocco",
      CapitalName: "Rabat",
      CountryCode: "MA",
      ContinentName: "Africa"
    },
    {
      CountryName: "Mozambique",
      CapitalName: "Maputo",
      CountryCode: "MZ",
      ContinentName: "Africa"
    },
    {
      CountryName: "Namibia",
      CapitalName: "Windhoek",
      CountryCode: "NA",
      ContinentName: "Africa"
    },
    {
      CountryName: "Nepal",
      CapitalName: "Kathmandu",
      CountryCode: "NP",
      ContinentName: "Asia"
    },
    {
      CountryName: "Netherlands",
      CapitalName: "Amsterdam",
      CountryCode: "NL",
      ContinentName: "Europe"
    },
    {
      CountryName: "New Zealand",
      CapitalName: "Wellington",
      CountryCode: "NZ",
      ContinentName: "Australia"
    },
    {
      CountryName: "Nicaragua",
      CapitalName: "Managua",
      CountryCode: "NI",
      ContinentName: "Central America"
    },
    {
      CountryName: "Niger",
      CapitalName: "Niamey",
      CountryCode: "NE",
      ContinentName: "Africa"
    },
    {
      CountryName: "Nigeria",
      CapitalName: "Abuja",
      CountryCode: "NG",
      ContinentName: "Africa"
    },
    {
      CountryName: "Niue",
      CapitalName: "Alofi",
      CountryCode: "NU",
      ContinentName: "Australia"
    },
    {
      CountryName: "Norway",
      CapitalName: "Oslo",
      CountryCode: "NO",
      ContinentName: "Europe"
    },
    {
      CountryName: "Oman",
      CapitalName: "Muscat",
      CountryCode: "OM",
      ContinentName: "Asia"
    },
    {
      CountryName: "Pakistan",
      CapitalName: "Islamabad",
      CountryCode: "PK",
      ContinentName: "Asia"
    },
    {
      CountryName: "Palau",
      CapitalName: "Melekeok",
      CountryCode: "PW",
      ContinentName: "Australia"
    },
    {
      CountryName: "Panama",
      CapitalName: "Panama City",
      CountryCode: "PA",
      ContinentName: "Central America"
    },
    {
      CountryName: "Papua New Guinea",
      CapitalName: "Port Moresby",
      CountryCode: "PG",
      ContinentName: "Australia"
    },
    {
      CountryName: "Paraguay",
      CapitalName: "Asuncion",
      CountryCode: "PY",
      ContinentName: "South America"
    },
    {
      CountryName: "Peru",
      CapitalName: "Lima",
      CountryCode: "PE",
      ContinentName: "South America"
    },
    {
      CountryName: "Philippines",
      CapitalName: "Manila",
      CountryCode: "PH",
      ContinentName: "Asia"
    },
    {
      CountryName: "Poland",
      CapitalName: "Warsaw",
      CountryCode: "PL",
      ContinentName: "Europe"
    },
    {
      CountryName: "Portugal",
      CapitalName: "Lisbon",
      CountryCode: "PT",
      ContinentName: "Europe"
    },
    {
      CountryName: "Puerto Rico",
      CapitalName: "San Juan",
      CountryCode: "PR",
      ContinentName: "North America"
    },
    {
      CountryName: "Qatar",
      CapitalName: "Doha",
      CountryCode: "QA",
      ContinentName: "Asia"
    },
    {
      CountryName: "Romania",
      CapitalName: "Bucharest",
      CountryCode: "RO",
      ContinentName: "Europe"
    },
    {
      CountryName: "Russia",
      CapitalName: "Moscow",
      CountryCode: "RU",
      ContinentName: "Europe"
    },
    {
      CountryName: "Rwanda",
      CapitalName: "Kigali",
      CountryCode: "RW",
      ContinentName: "Africa"
    },
    {
      CountryName: "Saint Kitts and Nevis",
      CapitalName: "Basseterre",
      CountryCode: "KN",
      ContinentName: "North America"
    },
    {
      CountryName: "Saint Lucia",
      CapitalName: "Castries",
      CountryCode: "LC",
      ContinentName: "North America"
    },
    {
      CountryName: "Saint Vincent and the Grenadines",
      CapitalName: "Kingstown",
      CountryCode: "VC",
      ContinentName: "Central America"
    },
    {
      CountryName: "Samoa",
      CapitalName: "Apia",
      CountryCode: "WS",
      ContinentName: "Australia"
    },
    {
      CountryName: "San Marino",
      CapitalName: "San Marino",
      CountryCode: "SM",
      ContinentName: "Europe"
    },
    {
      CountryName: "Sao Tome and Principe",
      CapitalName: "Sao Tome",
      CountryCode: "ST",
      ContinentName: "Africa"
    },
    {
      CountryName: "Saudi Arabia",
      CapitalName: "Riyadh",
      CountryCode: "SA",
      ContinentName: "Asia"
    },
    {
      CountryName: "Senegal",
      CapitalName: "Dakar",
      CountryCode: "SN",
      ContinentName: "Africa"
    },
    {
      CountryName: "Serbia",
      CapitalName: "Belgrade",
      CountryCode: "RS",
      ContinentName: "Europe"
    },
    {
      CountryName: "Seychelles",
      CapitalName: "Victoria",
      CountryCode: "SC",
      ContinentName: "Africa"
    },
    {
      CountryName: "Sierra Leone",
      CapitalName: "Freetown",
      CountryCode: "SL",
      ContinentName: "Africa"
    },
    {
      CountryName: "Singapore",
      CapitalName: "Singapore",
      CountryCode: "SG",
      ContinentName: "Asia"
    },
    {
      CountryName: "Slovakia",
      CapitalName: "Bratislava",
      CountryCode: "SK",
      ContinentName: "Europe"
    },
    {
      CountryName: "Slovenia",
      CapitalName: "Ljubljana",
      CountryCode: "SI",
      ContinentName: "Europe"
    },
    {
      CountryName: "Solomon Islands",
      CapitalName: "Honiara",
      CountryCode: "SB",
      ContinentName: "Australia"
    },
    {
      CountryName: "Somalia",
      CapitalName: "Mogadishu",
      CountryCode: "SO",
      ContinentName: "Africa"
    },
    {
      CountryName: "South Africa",
      CapitalName: "Pretoria",
      CountryCode: "ZA",
      ContinentName: "Africa"
    },
    {
      CountryName: "South Sudan",
      CapitalName: "Juba",
      CountryCode: "SS",
      ContinentName: "Africa"
    },
    {
      CountryName: "Spain",
      CapitalName: "Madrid",
      CountryCode: "ES",
      ContinentName: "Europe"
    },
    {
      CountryName: "Sri Lanka",
      CapitalName: "Colombo",
      CountryCode: "LK",
      ContinentName: "Asia"
    },
    {
      CountryName: "Sudan",
      CapitalName: "Khartoum",
      CountryCode: "SD",
      ContinentName: "Africa"
    },
    {
      CountryName: "Suriname",
      CapitalName: "Paramaribo",
      CountryCode: "SR",
      ContinentName: "South America"
    },
    {
      CountryName: "Swaziland",
      CapitalName: "Mbabane",
      CountryCode: "SZ",
      ContinentName: "Africa"
    },
    {
      CountryName: "Sweden",
      CapitalName: "Stockholm",
      CountryCode: "SE",
      ContinentName: "Europe"
    },
    {
      CountryName: "Switzerland",
      CapitalName: "Bern",
      CountryCode: "CH",
      ContinentName: "Europe"
    },
    {
      CountryName: "Syria",
      CapitalName: "Damascus",
      CountryCode: "SY",
      ContinentName: "Asia"
    },
    {
      CountryName: "Taiwan",
      CapitalName: "Taipei",
      CountryCode: "TW",
      ContinentName: "Asia"
    },
    {
      CountryName: "Tajikistan",
      CapitalName: "Dushanbe",
      CountryCode: "TJ",
      ContinentName: "Asia"
    },
    {
      CountryName: "Tanzania",
      CapitalName: "Dar es Salaam",
      CountryCode: "TZ",
      ContinentName: "Africa"
    },
    {
      CountryName: "Thailand",
      CapitalName: "Bangkok",
      CountryCode: "TH",
      ContinentName: "Asia"
    },
    {
      CountryName: "Timor-Leste",
      CapitalName: "Dili",
      CountryCode: "TL",
      ContinentName: "Asia"
    },
    {
      CountryName: "Togo",
      CapitalName: "Lome",
      CountryCode: "TG",
      ContinentName: "Africa"
    },
    {
      CountryName: "Tonga",
      CapitalName: "Nuku'alofa",
      CountryCode: "TO",
      ContinentName: "Australia"
    },
    {
      CountryName: "Trinidad and Tobago",
      CapitalName: "Port of Spain",
      CountryCode: "TT",
      ContinentName: "North America"
    },
    {
      CountryName: "Tunisia",
      CapitalName: "Tunis",
      CountryCode: "TN",
      ContinentName: "Africa"
    },
    {
      CountryName: "Turkey",
      CapitalName: "Ankara",
      CountryCode: "TR",
      ContinentName: "Europe"
    },
    {
      CountryName: "Turkmenistan",
      CapitalName: "Ashgabat",
      CountryCode: "TM",
      ContinentName: "Asia"
    },
    {
      CountryName: "Tuvalu",
      CapitalName: "Funafuti",
      CountryCode: "TV",
      ContinentName: "Australia"
    },
    {
      CountryName: "Uganda",
      CapitalName: "Kampala",
      CountryCode: "UG",
      ContinentName: "Africa"
    },
    {
      CountryName: "Ukraine",
      CapitalName: "Kyiv",
      CountryCode: "UA",
      ContinentName: "Europe"
    },
    {
      CountryName: "United Arab Emirates",
      CapitalName: "Abu Dhabi",
      CountryCode: "AE",
      ContinentName: "Asia"
    },
    {
      CountryName: "United Kingdom",
      CapitalName: "London",
      CountryCode: "GB",
      ContinentName: "Europe"
    },
    {
      CountryName: "United States",
      CapitalName: "Washington",
      CountryCode: "-77.000000",
      ContinentName: "US"
    },
    {
      CountryName: "Uruguay",
      CapitalName: "Montevideo",
      CountryCode: "UY",
      ContinentName: "South America"
    },
    {
      CountryName: "Uzbekistan",
      CapitalName: "Tashkent",
      CountryCode: "UZ",
      ContinentName: "Asia"
    },
    {
      CountryName: "Vanuatu",
      CapitalName: "Port-Vila",
      CountryCode: "VU",
      ContinentName: "Australia"
    },
    {
      CountryName: "Venezuela",
      CapitalName: "Caracas",
      CountryCode: "VE",
      ContinentName: "South America"
    },
    {
      CountryName: "Vietnam",
      CapitalName: "Hanoi",
      CountryCode: "VN",
      ContinentName: "Asia"
    },
    {
      CountryName: "Yemen",
      CapitalName: "Sanaa",
      CountryCode: "YE",
      ContinentName: "Asia"
    },
    {
      CountryName: "Zambia",
      CapitalName: "Lusaka",
      CountryCode: "ZM",
      ContinentName: "Africa"
    },
    {
      CountryName: "Zimbabwe",
      CapitalName: "Harare",
      CountryCode: "ZW",
      ContinentName: "Africa"
    }
  ];

const flagData = [
  {
    code: "AD",
    emoji: "🇦🇩",
    unicode: "U+1F1E6 U+1F1E9",
    name: "Andorra",
    title: "flag for Andorra"
  },
  {
    code: "AE",
    emoji: "🇦🇪",
    unicode: "U+1F1E6 U+1F1EA",
    name: "United Arab Emirates",
    title: "flag for United Arab Emirates"
  },
  {
    code: "AF",
    emoji: "🇦🇫",
    unicode: "U+1F1E6 U+1F1EB",
    name: "Afghanistan",
    title: "flag for Afghanistan"
  },
  {
    code: "AG",
    emoji: "🇦🇬",
    unicode: "U+1F1E6 U+1F1EC",
    name: "Antigua and Barbuda",
    title: "flag for Antigua and Barbuda"
  },
  {
    code: "AI",
    emoji: "🇦🇮",
    unicode: "U+1F1E6 U+1F1EE",
    name: "Anguilla",
    title: "flag for Anguilla"
  },
  {
    code: "AL",
    emoji: "🇦🇱",
    unicode: "U+1F1E6 U+1F1F1",
    name: "Albania",
    title: "flag for Albania"
  },
  {
    code: "AM",
    emoji: "🇦🇲",
    unicode: "U+1F1E6 U+1F1F2",
    name: "Armenia",
    title: "flag for Armenia"
  },
  {
    code: "AO",
    emoji: "🇦🇴",
    unicode: "U+1F1E6 U+1F1F4",
    name: "Angola",
    title: "flag for Angola"
  },
  {
    code: "AQ",
    emoji: "🇦🇶",
    unicode: "U+1F1E6 U+1F1F6",
    name: "Antarctica",
    title: "flag for Antarctica"
  },
  {
    code: "AR",
    emoji: "🇦🇷",
    unicode: "U+1F1E6 U+1F1F7",
    name: "Argentina",
    title: "flag for Argentina"
  },
  {
    code: "AS",
    emoji: "🇦🇸",
    unicode: "U+1F1E6 U+1F1F8",
    name: "American Samoa",
    title: "flag for American Samoa"
  },
  {
    code: "AT",
    emoji: "🇦🇹",
    unicode: "U+1F1E6 U+1F1F9",
    name: "Austria",
    title: "flag for Austria"
  },
  {
    code: "AU",
    emoji: "🇦🇺",
    unicode: "U+1F1E6 U+1F1FA",
    name: "Australia",
    title: "flag for Australia"
  },
  {
    code: "AW",
    emoji: "🇦🇼",
    unicode: "U+1F1E6 U+1F1FC",
    name: "Aruba",
    title: "flag for Aruba"
  },
  {
    code: "AX",
    emoji: "🇦🇽",
    unicode: "U+1F1E6 U+1F1FD",
    name: "Åland Islands",
    title: "flag for Åland Islands"
  },
  {
    code: "AZ",
    emoji: "🇦🇿",
    unicode: "U+1F1E6 U+1F1FF",
    name: "Azerbaijan",
    title: "flag for Azerbaijan"
  },
  {
    code: "BA",
    emoji: "🇧🇦",
    unicode: "U+1F1E7 U+1F1E6",
    name: "Bosnia and Herzegovina",
    title: "flag for Bosnia and Herzegovina"
  },
  {
    code: "BB",
    emoji: "🇧🇧",
    unicode: "U+1F1E7 U+1F1E7",
    name: "Barbados",
    title: "flag for Barbados"
  },
  {
    code: "BD",
    emoji: "🇧🇩",
    unicode: "U+1F1E7 U+1F1E9",
    name: "Bangladesh",
    title: "flag for Bangladesh"
  },
  {
    code: "BE",
    emoji: "🇧🇪",
    unicode: "U+1F1E7 U+1F1EA",
    name: "Belgium",
    title: "flag for Belgium"
  },
  {
    code: "BF",
    emoji: "🇧🇫",
    unicode: "U+1F1E7 U+1F1EB",
    name: "Burkina Faso",
    title: "flag for Burkina Faso"
  },
  {
    code: "BG",
    emoji: "🇧🇬",
    unicode: "U+1F1E7 U+1F1EC",
    name: "Bulgaria",
    title: "flag for Bulgaria"
  },
  {
    code: "BH",
    emoji: "🇧🇭",
    unicode: "U+1F1E7 U+1F1ED",
    name: "Bahrain",
    title: "flag for Bahrain"
  },
  {
    code: "BI",
    emoji: "🇧🇮",
    unicode: "U+1F1E7 U+1F1EE",
    name: "Burundi",
    title: "flag for Burundi"
  },
  {
    code: "BJ",
    emoji: "🇧🇯",
    unicode: "U+1F1E7 U+1F1EF",
    name: "Benin",
    title: "flag for Benin"
  },
  {
    code: "BL",
    emoji: "🇧🇱",
    unicode: "U+1F1E7 U+1F1F1",
    name: "Saint Barthélemy",
    title: "flag for Saint Barthélemy"
  },
  {
    code: "BM",
    emoji: "🇧🇲",
    unicode: "U+1F1E7 U+1F1F2",
    name: "Bermuda",
    title: "flag for Bermuda"
  },
  {
    code: "BN",
    emoji: "🇧🇳",
    unicode: "U+1F1E7 U+1F1F3",
    name: "Brunei Darussalam",
    title: "flag for Brunei Darussalam"
  },
  {
    code: "BO",
    emoji: "🇧🇴",
    unicode: "U+1F1E7 U+1F1F4",
    name: "Bolivia",
    title: "flag for Bolivia"
  },
  {
    code: "BQ",
    emoji: "🇧🇶",
    unicode: "U+1F1E7 U+1F1F6",
    name: "Bonaire, Sint Eustatius and Saba",
    title: "flag for Bonaire, Sint Eustatius and Saba"
  },
  {
    code: "BR",
    emoji: "🇧🇷",
    unicode: "U+1F1E7 U+1F1F7",
    name: "Brazil",
    title: "flag for Brazil"
  },
  {
    code: "BS",
    emoji: "🇧🇸",
    unicode: "U+1F1E7 U+1F1F8",
    name: "Bahamas",
    title: "flag for Bahamas"
  },
  {
    code: "BT",
    emoji: "🇧🇹",
    unicode: "U+1F1E7 U+1F1F9",
    name: "Bhutan",
    title: "flag for Bhutan"
  },
  {
    code: "BV",
    emoji: "🇧🇻",
    unicode: "U+1F1E7 U+1F1FB",
    name: "Bouvet Island",
    title: "flag for Bouvet Island"
  },
  {
    code: "BW",
    emoji: "🇧🇼",
    unicode: "U+1F1E7 U+1F1FC",
    name: "Botswana",
    title: "flag for Botswana"
  },
  {
    code: "BY",
    emoji: "🇧🇾",
    unicode: "U+1F1E7 U+1F1FE",
    name: "Belarus",
    title: "flag for Belarus"
  },
  {
    code: "BZ",
    emoji: "🇧🇿",
    unicode: "U+1F1E7 U+1F1FF",
    name: "Belize",
    title: "flag for Belize"
  },
  {
    code: "CA",
    emoji: "🇨🇦",
    unicode: "U+1F1E8 U+1F1E6",
    name: "Canada",
    title: "flag for Canada"
  },
  {
    code: "CC",
    emoji: "🇨🇨",
    unicode: "U+1F1E8 U+1F1E8",
    name: "Cocos (Keeling) Islands",
    title: "flag for Cocos (Keeling) Islands"
  },
  {
    code: "CD",
    emoji: "🇨🇩",
    unicode: "U+1F1E8 U+1F1E9",
    name: "Congo",
    title: "flag for Congo"
  },
  {
    code: "CF",
    emoji: "🇨🇫",
    unicode: "U+1F1E8 U+1F1EB",
    name: "Central African Republic",
    title: "flag for Central African Republic"
  },
  {
    code: "CG",
    emoji: "🇨🇬",
    unicode: "U+1F1E8 U+1F1EC",
    name: "Congo",
    title: "flag for Congo"
  },
  {
    code: "CH",
    emoji: "🇨🇭",
    unicode: "U+1F1E8 U+1F1ED",
    name: "Switzerland",
    title: "flag for Switzerland"
  },
  {
    code: "CI",
    emoji: "🇨🇮",
    unicode: "U+1F1E8 U+1F1EE",
    name: "Côte D'Ivoire",
    title: "flag for Côte D'Ivoire"
  },
  {
    code: "CK",
    emoji: "🇨🇰",
    unicode: "U+1F1E8 U+1F1F0",
    name: "Cook Islands",
    title: "flag for Cook Islands"
  },
  {
    code: "CL",
    emoji: "🇨🇱",
    unicode: "U+1F1E8 U+1F1F1",
    name: "Chile",
    title: "flag for Chile"
  },
  {
    code: "CM",
    emoji: "🇨🇲",
    unicode: "U+1F1E8 U+1F1F2",
    name: "Cameroon",
    title: "flag for Cameroon"
  },
  {
    code: "CN",
    emoji: "🇨🇳",
    unicode: "U+1F1E8 U+1F1F3",
    name: "China",
    title: "flag for China"
  },
  {
    code: "CO",
    emoji: "🇨🇴",
    unicode: "U+1F1E8 U+1F1F4",
    name: "Colombia",
    title: "flag for Colombia"
  },
  {
    code: "CR",
    emoji: "🇨🇷",
    unicode: "U+1F1E8 U+1F1F7",
    name: "Costa Rica",
    title: "flag for Costa Rica"
  },
  {
    code: "CU",
    emoji: "🇨🇺",
    unicode: "U+1F1E8 U+1F1FA",
    name: "Cuba",
    title: "flag for Cuba"
  },
  {
    code: "CV",
    emoji: "🇨🇻",
    unicode: "U+1F1E8 U+1F1FB",
    name: "Cape Verde",
    title: "flag for Cape Verde"
  },
  {
    code: "CW",
    emoji: "🇨🇼",
    unicode: "U+1F1E8 U+1F1FC",
    name: "Curaçao",
    title: "flag for Curaçao"
  },
  {
    code: "CX",
    emoji: "🇨🇽",
    unicode: "U+1F1E8 U+1F1FD",
    name: "Christmas Island",
    title: "flag for Christmas Island"
  },
  {
    code: "CY",
    emoji: "🇨🇾",
    unicode: "U+1F1E8 U+1F1FE",
    name: "Cyprus",
    title: "flag for Cyprus"
  },
  {
    code: "CZ",
    emoji: "🇨🇿",
    unicode: "U+1F1E8 U+1F1FF",
    name: "Czech Republic",
    title: "flag for Czech Republic"
  },
  {
    code: "DE",
    emoji: "🇩🇪",
    unicode: "U+1F1E9 U+1F1EA",
    name: "Germany",
    title: "flag for Germany"
  },
  {
    code: "DJ",
    emoji: "🇩🇯",
    unicode: "U+1F1E9 U+1F1EF",
    name: "Djibouti",
    title: "flag for Djibouti"
  },
  {
    code: "DK",
    emoji: "🇩🇰",
    unicode: "U+1F1E9 U+1F1F0",
    name: "Denmark",
    title: "flag for Denmark"
  },
  {
    code: "DM",
    emoji: "🇩🇲",
    unicode: "U+1F1E9 U+1F1F2",
    name: "Dominica",
    title: "flag for Dominica"
  },
  {
    code: "DO",
    emoji: "🇩🇴",
    unicode: "U+1F1E9 U+1F1F4",
    name: "Dominican Republic",
    title: "flag for Dominican Republic"
  },
  {
    code: "DZ",
    emoji: "🇩🇿",
    unicode: "U+1F1E9 U+1F1FF",
    name: "Algeria",
    title: "flag for Algeria"
  },
  {
    code: "EC",
    emoji: "🇪🇨",
    unicode: "U+1F1EA U+1F1E8",
    name: "Ecuador",
    title: "flag for Ecuador"
  },
  {
    code: "EE",
    emoji: "🇪🇪",
    unicode: "U+1F1EA U+1F1EA",
    name: "Estonia",
    title: "flag for Estonia"
  },
  {
    code: "EG",
    emoji: "🇪🇬",
    unicode: "U+1F1EA U+1F1EC",
    name: "Egypt",
    title: "flag for Egypt"
  },
  {
    code: "EH",
    emoji: "🇪🇭",
    unicode: "U+1F1EA U+1F1ED",
    name: "Western Sahara",
    title: "flag for Western Sahara"
  },
  {
    code: "ER",
    emoji: "🇪🇷",
    unicode: "U+1F1EA U+1F1F7",
    name: "Eritrea",
    title: "flag for Eritrea"
  },
  {
    code: "ES",
    emoji: "🇪🇸",
    unicode: "U+1F1EA U+1F1F8",
    name: "Spain",
    title: "flag for Spain"
  },
  {
    code: "ET",
    emoji: "🇪🇹",
    unicode: "U+1F1EA U+1F1F9",
    name: "Ethiopia",
    title: "flag for Ethiopia"
  },
  {
    code: "EU",
    emoji: "🇪🇺",
    unicode: "U+1F1EA U+1F1FA",
    name: "European Union",
    title: "flag for European Union"
  },
  {
    code: "FI",
    emoji: "🇫🇮",
    unicode: "U+1F1EB U+1F1EE",
    name: "Finland",
    title: "flag for Finland"
  },
  {
    code: "FJ",
    emoji: "🇫🇯",
    unicode: "U+1F1EB U+1F1EF",
    name: "Fiji",
    title: "flag for Fiji"
  },
  {
    code: "FK",
    emoji: "🇫🇰",
    unicode: "U+1F1EB U+1F1F0",
    name: "Falkland Islands (Malvinas)",
    title: "flag for Falkland Islands (Malvinas)"
  },
  {
    code: "FM",
    emoji: "🇫🇲",
    unicode: "U+1F1EB U+1F1F2",
    name: "Micronesia",
    title: "flag for Micronesia"
  },
  {
    code: "FO",
    emoji: "🇫🇴",
    unicode: "U+1F1EB U+1F1F4",
    name: "Faroe Islands",
    title: "flag for Faroe Islands"
  },
  {
    code: "FR",
    emoji: "🇫🇷",
    unicode: "U+1F1EB U+1F1F7",
    name: "France",
    title: "flag for France"
  },
  {
    code: "GA",
    emoji: "🇬🇦",
    unicode: "U+1F1EC U+1F1E6",
    name: "Gabon",
    title: "flag for Gabon"
  },
  {
    code: "GB",
    emoji: "🇬🇧",
    unicode: "U+1F1EC U+1F1E7",
    name: "United Kingdom",
    title: "flag for United Kingdom"
  },
  {
    code: "GD",
    emoji: "🇬🇩",
    unicode: "U+1F1EC U+1F1E9",
    name: "Grenada",
    title: "flag for Grenada"
  },
  {
    code: "GE",
    emoji: "🇬🇪",
    unicode: "U+1F1EC U+1F1EA",
    name: "Georgia",
    title: "flag for Georgia"
  },
  {
    code: "GF",
    emoji: "🇬🇫",
    unicode: "U+1F1EC U+1F1EB",
    name: "French Guiana",
    title: "flag for French Guiana"
  },
  {
    code: "GG",
    emoji: "🇬🇬",
    unicode: "U+1F1EC U+1F1EC",
    name: "Guernsey",
    title: "flag for Guernsey"
  },
  {
    code: "GH",
    emoji: "🇬🇭",
    unicode: "U+1F1EC U+1F1ED",
    name: "Ghana",
    title: "flag for Ghana"
  },
  {
    code: "GI",
    emoji: "🇬🇮",
    unicode: "U+1F1EC U+1F1EE",
    name: "Gibraltar",
    title: "flag for Gibraltar"
  },
  {
    code: "GL",
    emoji: "🇬🇱",
    unicode: "U+1F1EC U+1F1F1",
    name: "Greenland",
    title: "flag for Greenland"
  },
  {
    code: "GM",
    emoji: "🇬🇲",
    unicode: "U+1F1EC U+1F1F2",
    name: "Gambia",
    title: "flag for Gambia"
  },
  {
    code: "GN",
    emoji: "🇬🇳",
    unicode: "U+1F1EC U+1F1F3",
    name: "Guinea",
    title: "flag for Guinea"
  },
  {
    code: "GP",
    emoji: "🇬🇵",
    unicode: "U+1F1EC U+1F1F5",
    name: "Guadeloupe",
    title: "flag for Guadeloupe"
  },
  {
    code: "GQ",
    emoji: "🇬🇶",
    unicode: "U+1F1EC U+1F1F6",
    name: "Equatorial Guinea",
    title: "flag for Equatorial Guinea"
  },
  {
    code: "GR",
    emoji: "🇬🇷",
    unicode: "U+1F1EC U+1F1F7",
    name: "Greece",
    title: "flag for Greece"
  },
  {
    code: "GS",
    emoji: "🇬🇸",
    unicode: "U+1F1EC U+1F1F8",
    name: "South Georgia",
    title: "flag for South Georgia"
  },
  {
    code: "GT",
    emoji: "🇬🇹",
    unicode: "U+1F1EC U+1F1F9",
    name: "Guatemala",
    title: "flag for Guatemala"
  },
  {
    code: "GU",
    emoji: "🇬🇺",
    unicode: "U+1F1EC U+1F1FA",
    name: "Guam",
    title: "flag for Guam"
  },
  {
    code: "GW",
    emoji: "🇬🇼",
    unicode: "U+1F1EC U+1F1FC",
    name: "Guinea-Bissau",
    title: "flag for Guinea-Bissau"
  },
  {
    code: "GY",
    emoji: "🇬🇾",
    unicode: "U+1F1EC U+1F1FE",
    name: "Guyana",
    title: "flag for Guyana"
  },
  {
    code: "HK",
    emoji: "🇭🇰",
    unicode: "U+1F1ED U+1F1F0",
    name: "Hong Kong",
    title: "flag for Hong Kong"
  },
  {
    code: "HM",
    emoji: "🇭🇲",
    unicode: "U+1F1ED U+1F1F2",
    name: "Heard Island and Mcdonald Islands",
    title: "flag for Heard Island and Mcdonald Islands"
  },
  {
    code: "HN",
    emoji: "🇭🇳",
    unicode: "U+1F1ED U+1F1F3",
    name: "Honduras",
    title: "flag for Honduras"
  },
  {
    code: "HR",
    emoji: "🇭🇷",
    unicode: "U+1F1ED U+1F1F7",
    name: "Croatia",
    title: "flag for Croatia"
  },
  {
    code: "HT",
    emoji: "🇭🇹",
    unicode: "U+1F1ED U+1F1F9",
    name: "Haiti",
    title: "flag for Haiti"
  },
  {
    code: "HU",
    emoji: "🇭🇺",
    unicode: "U+1F1ED U+1F1FA",
    name: "Hungary",
    title: "flag for Hungary"
  },
  {
    code: "ID",
    emoji: "🇮🇩",
    unicode: "U+1F1EE U+1F1E9",
    name: "Indonesia",
    title: "flag for Indonesia"
  },
  {
    code: "IE",
    emoji: "🇮🇪",
    unicode: "U+1F1EE U+1F1EA",
    name: "Ireland",
    title: "flag for Ireland"
  },
  {
    code: "IL",
    emoji: "🇮🇱",
    unicode: "U+1F1EE U+1F1F1",
    name: "Israel",
    title: "flag for Israel"
  },
  {
    code: "IM",
    emoji: "🇮🇲",
    unicode: "U+1F1EE U+1F1F2",
    name: "Isle of Man",
    title: "flag for Isle of Man"
  },
  {
    code: "IN",
    emoji: "🇮🇳",
    unicode: "U+1F1EE U+1F1F3",
    name: "India",
    title: "flag for India"
  },
  {
    code: "IO",
    emoji: "🇮🇴",
    unicode: "U+1F1EE U+1F1F4",
    name: "British Indian Ocean Territory",
    title: "flag for British Indian Ocean Territory"
  },
  {
    code: "IQ",
    emoji: "🇮🇶",
    unicode: "U+1F1EE U+1F1F6",
    name: "Iraq",
    title: "flag for Iraq"
  },
  {
    code: "IR",
    emoji: "🇮🇷",
    unicode: "U+1F1EE U+1F1F7",
    name: "Iran",
    title: "flag for Iran"
  },
  {
    code: "IS",
    emoji: "🇮🇸",
    unicode: "U+1F1EE U+1F1F8",
    name: "Iceland",
    title: "flag for Iceland"
  },
  {
    code: "IT",
    emoji: "🇮🇹",
    unicode: "U+1F1EE U+1F1F9",
    name: "Italy",
    title: "flag for Italy"
  },
  {
    code: "JE",
    emoji: "🇯🇪",
    unicode: "U+1F1EF U+1F1EA",
    name: "Jersey",
    title: "flag for Jersey"
  },
  {
    code: "JM",
    emoji: "🇯🇲",
    unicode: "U+1F1EF U+1F1F2",
    name: "Jamaica",
    title: "flag for Jamaica"
  },
  {
    code: "JO",
    emoji: "🇯🇴",
    unicode: "U+1F1EF U+1F1F4",
    name: "Jordan",
    title: "flag for Jordan"
  },
  {
    code: "JP",
    emoji: "🇯🇵",
    unicode: "U+1F1EF U+1F1F5",
    name: "Japan",
    title: "flag for Japan"
  },
  {
    code: "KE",
    emoji: "🇰🇪",
    unicode: "U+1F1F0 U+1F1EA",
    name: "Kenya",
    title: "flag for Kenya"
  },
  {
    code: "KG",
    emoji: "🇰🇬",
    unicode: "U+1F1F0 U+1F1EC",
    name: "Kyrgyzstan",
    title: "flag for Kyrgyzstan"
  },
  {
    code: "KH",
    emoji: "🇰🇭",
    unicode: "U+1F1F0 U+1F1ED",
    name: "Cambodia",
    title: "flag for Cambodia"
  },
  {
    code: "KI",
    emoji: "🇰🇮",
    unicode: "U+1F1F0 U+1F1EE",
    name: "Kiribati",
    title: "flag for Kiribati"
  },
  {
    code: "KM",
    emoji: "🇰🇲",
    unicode: "U+1F1F0 U+1F1F2",
    name: "Comoros",
    title: "flag for Comoros"
  },
  {
    code: "KN",
    emoji: "🇰🇳",
    unicode: "U+1F1F0 U+1F1F3",
    name: "Saint Kitts and Nevis",
    title: "flag for Saint Kitts and Nevis"
  },
  {
    code: "KP",
    emoji: "🇰🇵",
    unicode: "U+1F1F0 U+1F1F5",
    name: "North Korea",
    title: "flag for North Korea"
  },
  {
    code: "KR",
    emoji: "🇰🇷",
    unicode: "U+1F1F0 U+1F1F7",
    name: "South Korea",
    title: "flag for South Korea"
  },
  {
    code: "KW",
    emoji: "🇰🇼",
    unicode: "U+1F1F0 U+1F1FC",
    name: "Kuwait",
    title: "flag for Kuwait"
  },
  {
    code: "KY",
    emoji: "🇰🇾",
    unicode: "U+1F1F0 U+1F1FE",
    name: "Cayman Islands",
    title: "flag for Cayman Islands"
  },
  {
    code: "KZ",
    emoji: "🇰🇿",
    unicode: "U+1F1F0 U+1F1FF",
    name: "Kazakhstan",
    title: "flag for Kazakhstan"
  },
  {
    code: "LA",
    emoji: "🇱🇦",
    unicode: "U+1F1F1 U+1F1E6",
    name: "Lao People's Democratic Republic",
    title: "flag for Lao People's Democratic Republic"
  },
  {
    code: "LB",
    emoji: "🇱🇧",
    unicode: "U+1F1F1 U+1F1E7",
    name: "Lebanon",
    title: "flag for Lebanon"
  },
  {
    code: "LC",
    emoji: "🇱🇨",
    unicode: "U+1F1F1 U+1F1E8",
    name: "Saint Lucia",
    title: "flag for Saint Lucia"
  },
  {
    code: "LI",
    emoji: "🇱🇮",
    unicode: "U+1F1F1 U+1F1EE",
    name: "Liechtenstein",
    title: "flag for Liechtenstein"
  },
  {
    code: "LK",
    emoji: "🇱🇰",
    unicode: "U+1F1F1 U+1F1F0",
    name: "Sri Lanka",
    title: "flag for Sri Lanka"
  },
  {
    code: "LR",
    emoji: "🇱🇷",
    unicode: "U+1F1F1 U+1F1F7",
    name: "Liberia",
    title: "flag for Liberia"
  },
  {
    code: "LS",
    emoji: "🇱🇸",
    unicode: "U+1F1F1 U+1F1F8",
    name: "Lesotho",
    title: "flag for Lesotho"
  },
  {
    code: "LT",
    emoji: "🇱🇹",
    unicode: "U+1F1F1 U+1F1F9",
    name: "Lithuania",
    title: "flag for Lithuania"
  },
  {
    code: "LU",
    emoji: "🇱🇺",
    unicode: "U+1F1F1 U+1F1FA",
    name: "Luxembourg",
    title: "flag for Luxembourg"
  },
  {
    code: "LV",
    emoji: "🇱🇻",
    unicode: "U+1F1F1 U+1F1FB",
    name: "Latvia",
    title: "flag for Latvia"
  },
  {
    code: "LY",
    emoji: "🇱🇾",
    unicode: "U+1F1F1 U+1F1FE",
    name: "Libya",
    title: "flag for Libya"
  },
  {
    code: "MA",
    emoji: "🇲🇦",
    unicode: "U+1F1F2 U+1F1E6",
    name: "Morocco",
    title: "flag for Morocco"
  },
  {
    code: "MC",
    emoji: "🇲🇨",
    unicode: "U+1F1F2 U+1F1E8",
    name: "Monaco",
    title: "flag for Monaco"
  },
  {
    code: "MD",
    emoji: "🇲🇩",
    unicode: "U+1F1F2 U+1F1E9",
    name: "Moldova",
    title: "flag for Moldova"
  },
  {
    code: "ME",
    emoji: "🇲🇪",
    unicode: "U+1F1F2 U+1F1EA",
    name: "Montenegro",
    title: "flag for Montenegro"
  },
  {
    code: "MF",
    emoji: "🇲🇫",
    unicode: "U+1F1F2 U+1F1EB",
    name: "Saint Martin (French Part)",
    title: "flag for Saint Martin (French Part)"
  },
  {
    code: "MG",
    emoji: "🇲🇬",
    unicode: "U+1F1F2 U+1F1EC",
    name: "Madagascar",
    title: "flag for Madagascar"
  },
  {
    code: "MH",
    emoji: "🇲🇭",
    unicode: "U+1F1F2 U+1F1ED",
    name: "Marshall Islands",
    title: "flag for Marshall Islands"
  },
  {
    code: "MK",
    emoji: "🇲🇰",
    unicode: "U+1F1F2 U+1F1F0",
    name: "Macedonia",
    title: "flag for Macedonia"
  },
  {
    code: "ML",
    emoji: "🇲🇱",
    unicode: "U+1F1F2 U+1F1F1",
    name: "Mali",
    title: "flag for Mali"
  },
  {
    code: "MM",
    emoji: "🇲🇲",
    unicode: "U+1F1F2 U+1F1F2",
    name: "Myanmar",
    title: "flag for Myanmar"
  },
  {
    code: "MN",
    emoji: "🇲🇳",
    unicode: "U+1F1F2 U+1F1F3",
    name: "Mongolia",
    title: "flag for Mongolia"
  },
  {
    code: "MO",
    emoji: "🇲🇴",
    unicode: "U+1F1F2 U+1F1F4",
    name: "Macao",
    title: "flag for Macao"
  },
  {
    code: "MP",
    emoji: "🇲🇵",
    unicode: "U+1F1F2 U+1F1F5",
    name: "Northern Mariana Islands",
    title: "flag for Northern Mariana Islands"
  },
  {
    code: "MQ",
    emoji: "🇲🇶",
    unicode: "U+1F1F2 U+1F1F6",
    name: "Martinique",
    title: "flag for Martinique"
  },
  {
    code: "MR",
    emoji: "🇲🇷",
    unicode: "U+1F1F2 U+1F1F7",
    name: "Mauritania",
    title: "flag for Mauritania"
  },
  {
    code: "MS",
    emoji: "🇲🇸",
    unicode: "U+1F1F2 U+1F1F8",
    name: "Montserrat",
    title: "flag for Montserrat"
  },
  {
    code: "MT",
    emoji: "🇲🇹",
    unicode: "U+1F1F2 U+1F1F9",
    name: "Malta",
    title: "flag for Malta"
  },
  {
    code: "MU",
    emoji: "🇲🇺",
    unicode: "U+1F1F2 U+1F1FA",
    name: "Mauritius",
    title: "flag for Mauritius"
  },
  {
    code: "MV",
    emoji: "🇲🇻",
    unicode: "U+1F1F2 U+1F1FB",
    name: "Maldives",
    title: "flag for Maldives"
  },
  {
    code: "MW",
    emoji: "🇲🇼",
    unicode: "U+1F1F2 U+1F1FC",
    name: "Malawi",
    title: "flag for Malawi"
  },
  {
    code: "MX",
    emoji: "🇲🇽",
    unicode: "U+1F1F2 U+1F1FD",
    name: "Mexico",
    title: "flag for Mexico"
  },
  {
    code: "MY",
    emoji: "🇲🇾",
    unicode: "U+1F1F2 U+1F1FE",
    name: "Malaysia",
    title: "flag for Malaysia"
  },
  {
    code: "MZ",
    emoji: "🇲🇿",
    unicode: "U+1F1F2 U+1F1FF",
    name: "Mozambique",
    title: "flag for Mozambique"
  },
  {
    code: "NA",
    emoji: "🇳🇦",
    unicode: "U+1F1F3 U+1F1E6",
    name: "Namibia",
    title: "flag for Namibia"
  },
  {
    code: "NC",
    emoji: "🇳🇨",
    unicode: "U+1F1F3 U+1F1E8",
    name: "New Caledonia",
    title: "flag for New Caledonia"
  },
  {
    code: "NE",
    emoji: "🇳🇪",
    unicode: "U+1F1F3 U+1F1EA",
    name: "Niger",
    title: "flag for Niger"
  },
  {
    code: "NF",
    emoji: "🇳🇫",
    unicode: "U+1F1F3 U+1F1EB",
    name: "Norfolk Island",
    title: "flag for Norfolk Island"
  },
  {
    code: "NG",
    emoji: "🇳🇬",
    unicode: "U+1F1F3 U+1F1EC",
    name: "Nigeria",
    title: "flag for Nigeria"
  },
  {
    code: "NI",
    emoji: "🇳🇮",
    unicode: "U+1F1F3 U+1F1EE",
    name: "Nicaragua",
    title: "flag for Nicaragua"
  },
  {
    code: "NL",
    emoji: "🇳🇱",
    unicode: "U+1F1F3 U+1F1F1",
    name: "Netherlands",
    title: "flag for Netherlands"
  },
  {
    code: "NO",
    emoji: "🇳🇴",
    unicode: "U+1F1F3 U+1F1F4",
    name: "Norway",
    title: "flag for Norway"
  },
  {
    code: "NP",
    emoji: "🇳🇵",
    unicode: "U+1F1F3 U+1F1F5",
    name: "Nepal",
    title: "flag for Nepal"
  },
  {
    code: "NR",
    emoji: "🇳🇷",
    unicode: "U+1F1F3 U+1F1F7",
    name: "Nauru",
    title: "flag for Nauru"
  },
  {
    code: "NU",
    emoji: "🇳🇺",
    unicode: "U+1F1F3 U+1F1FA",
    name: "Niue",
    title: "flag for Niue"
  },
  {
    code: "NZ",
    emoji: "🇳🇿",
    unicode: "U+1F1F3 U+1F1FF",
    name: "New Zealand",
    title: "flag for New Zealand"
  },
  {
    code: "OM",
    emoji: "🇴🇲",
    unicode: "U+1F1F4 U+1F1F2",
    name: "Oman",
    title: "flag for Oman"
  },
  {
    code: "PA",
    emoji: "🇵🇦",
    unicode: "U+1F1F5 U+1F1E6",
    name: "Panama",
    title: "flag for Panama"
  },
  {
    code: "PE",
    emoji: "🇵🇪",
    unicode: "U+1F1F5 U+1F1EA",
    name: "Peru",
    title: "flag for Peru"
  },
  {
    code: "PF",
    emoji: "🇵🇫",
    unicode: "U+1F1F5 U+1F1EB",
    name: "French Polynesia",
    title: "flag for French Polynesia"
  },
  {
    code: "PG",
    emoji: "🇵🇬",
    unicode: "U+1F1F5 U+1F1EC",
    name: "Papua New Guinea",
    title: "flag for Papua New Guinea"
  },
  {
    code: "PH",
    emoji: "🇵🇭",
    unicode: "U+1F1F5 U+1F1ED",
    name: "Philippines",
    title: "flag for Philippines"
  },
  {
    code: "PK",
    emoji: "🇵🇰",
    unicode: "U+1F1F5 U+1F1F0",
    name: "Pakistan",
    title: "flag for Pakistan"
  },
  {
    code: "PL",
    emoji: "🇵🇱",
    unicode: "U+1F1F5 U+1F1F1",
    name: "Poland",
    title: "flag for Poland"
  },
  {
    code: "PM",
    emoji: "🇵🇲",
    unicode: "U+1F1F5 U+1F1F2",
    name: "Saint Pierre and Miquelon",
    title: "flag for Saint Pierre and Miquelon"
  },
  {
    code: "PN",
    emoji: "🇵🇳",
    unicode: "U+1F1F5 U+1F1F3",
    name: "Pitcairn",
    title: "flag for Pitcairn"
  },
  {
    code: "PR",
    emoji: "🇵🇷",
    unicode: "U+1F1F5 U+1F1F7",
    name: "Puerto Rico",
    title: "flag for Puerto Rico"
  },
  {
    code: "PS",
    emoji: "🇵🇸",
    unicode: "U+1F1F5 U+1F1F8",
    name: "Palestinian Territory",
    title: "flag for Palestinian Territory"
  },
  {
    code: "PT",
    emoji: "🇵🇹",
    unicode: "U+1F1F5 U+1F1F9",
    name: "Portugal",
    title: "flag for Portugal"
  },
  {
    code: "PW",
    emoji: "🇵🇼",
    unicode: "U+1F1F5 U+1F1FC",
    name: "Palau",
    title: "flag for Palau"
  },
  {
    code: "PY",
    emoji: "🇵🇾",
    unicode: "U+1F1F5 U+1F1FE",
    name: "Paraguay",
    title: "flag for Paraguay"
  },
  {
    code: "QA",
    emoji: "🇶🇦",
    unicode: "U+1F1F6 U+1F1E6",
    name: "Qatar",
    title: "flag for Qatar"
  },
  {
    code: "RE",
    emoji: "🇷🇪",
    unicode: "U+1F1F7 U+1F1EA",
    name: "Réunion",
    title: "flag for Réunion"
  },
  {
    code: "RO",
    emoji: "🇷🇴",
    unicode: "U+1F1F7 U+1F1F4",
    name: "Romania",
    title: "flag for Romania"
  },
  {
    code: "RS",
    emoji: "🇷🇸",
    unicode: "U+1F1F7 U+1F1F8",
    name: "Serbia",
    title: "flag for Serbia"
  },
  {
    code: "RU",
    emoji: "🇷🇺",
    unicode: "U+1F1F7 U+1F1FA",
    name: "Russia",
    title: "flag for Russia"
  },
  {
    code: "RW",
    emoji: "🇷🇼",
    unicode: "U+1F1F7 U+1F1FC",
    name: "Rwanda",
    title: "flag for Rwanda"
  },
  {
    code: "SA",
    emoji: "🇸🇦",
    unicode: "U+1F1F8 U+1F1E6",
    name: "Saudi Arabia",
    title: "flag for Saudi Arabia"
  },
  {
    code: "SB",
    emoji: "🇸🇧",
    unicode: "U+1F1F8 U+1F1E7",
    name: "Solomon Islands",
    title: "flag for Solomon Islands"
  },
  {
    code: "SC",
    emoji: "🇸🇨",
    unicode: "U+1F1F8 U+1F1E8",
    name: "Seychelles",
    title: "flag for Seychelles"
  },
  {
    code: "SD",
    emoji: "🇸🇩",
    unicode: "U+1F1F8 U+1F1E9",
    name: "Sudan",
    title: "flag for Sudan"
  },
  {
    code: "SE",
    emoji: "🇸🇪",
    unicode: "U+1F1F8 U+1F1EA",
    name: "Sweden",
    title: "flag for Sweden"
  },
  {
    code: "SG",
    emoji: "🇸🇬",
    unicode: "U+1F1F8 U+1F1EC",
    name: "Singapore",
    title: "flag for Singapore"
  },
  {
    code: "SH",
    emoji: "🇸🇭",
    unicode: "U+1F1F8 U+1F1ED",
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    title: "flag for Saint Helena, Ascension and Tristan Da Cunha"
  },
  {
    code: "SI",
    emoji: "🇸🇮",
    unicode: "U+1F1F8 U+1F1EE",
    name: "Slovenia",
    title: "flag for Slovenia"
  },
  {
    code: "SJ",
    emoji: "🇸🇯",
    unicode: "U+1F1F8 U+1F1EF",
    name: "Svalbard and Jan Mayen",
    title: "flag for Svalbard and Jan Mayen"
  },
  {
    code: "SK",
    emoji: "🇸🇰",
    unicode: "U+1F1F8 U+1F1F0",
    name: "Slovakia",
    title: "flag for Slovakia"
  },
  {
    code: "SL",
    emoji: "🇸🇱",
    unicode: "U+1F1F8 U+1F1F1",
    name: "Sierra Leone",
    title: "flag for Sierra Leone"
  },
  {
    code: "SM",
    emoji: "🇸🇲",
    unicode: "U+1F1F8 U+1F1F2",
    name: "San Marino",
    title: "flag for San Marino"
  },
  {
    code: "SN",
    emoji: "🇸🇳",
    unicode: "U+1F1F8 U+1F1F3",
    name: "Senegal",
    title: "flag for Senegal"
  },
  {
    code: "SO",
    emoji: "🇸🇴",
    unicode: "U+1F1F8 U+1F1F4",
    name: "Somalia",
    title: "flag for Somalia"
  },
  {
    code: "SR",
    emoji: "🇸🇷",
    unicode: "U+1F1F8 U+1F1F7",
    name: "Suriname",
    title: "flag for Suriname"
  },
  {
    code: "SS",
    emoji: "🇸🇸",
    unicode: "U+1F1F8 U+1F1F8",
    name: "South Sudan",
    title: "flag for South Sudan"
  },
  {
    code: "ST",
    emoji: "🇸🇹",
    unicode: "U+1F1F8 U+1F1F9",
    name: "Sao Tome and Principe",
    title: "flag for Sao Tome and Principe"
  },
  {
    code: "SV",
    emoji: "🇸🇻",
    unicode: "U+1F1F8 U+1F1FB",
    name: "El Salvador",
    title: "flag for El Salvador"
  },
  {
    code: "SX",
    emoji: "🇸🇽",
    unicode: "U+1F1F8 U+1F1FD",
    name: "Sint Maarten (Dutch Part)",
    title: "flag for Sint Maarten (Dutch Part)"
  },
  {
    code: "SY",
    emoji: "🇸🇾",
    unicode: "U+1F1F8 U+1F1FE",
    name: "Syrian Arab Republic",
    title: "flag for Syrian Arab Republic"
  },
  {
    code: "SZ",
    emoji: "🇸🇿",
    unicode: "U+1F1F8 U+1F1FF",
    name: "Swaziland",
    title: "flag for Swaziland"
  },
  {
    code: "TC",
    emoji: "🇹🇨",
    unicode: "U+1F1F9 U+1F1E8",
    name: "Turks and Caicos Islands",
    title: "flag for Turks and Caicos Islands"
  },
  {
    code: "TD",
    emoji: "🇹🇩",
    unicode: "U+1F1F9 U+1F1E9",
    name: "Chad",
    title: "flag for Chad"
  },
  {
    code: "TF",
    emoji: "🇹🇫",
    unicode: "U+1F1F9 U+1F1EB",
    name: "French Southern Territories",
    title: "flag for French Southern Territories"
  },
  {
    code: "TG",
    emoji: "🇹🇬",
    unicode: "U+1F1F9 U+1F1EC",
    name: "Togo",
    title: "flag for Togo"
  },
  {
    code: "TH",
    emoji: "🇹🇭",
    unicode: "U+1F1F9 U+1F1ED",
    name: "Thailand",
    title: "flag for Thailand"
  },
  {
    code: "TJ",
    emoji: "🇹🇯",
    unicode: "U+1F1F9 U+1F1EF",
    name: "Tajikistan",
    title: "flag for Tajikistan"
  },
  {
    code: "TK",
    emoji: "🇹🇰",
    unicode: "U+1F1F9 U+1F1F0",
    name: "Tokelau",
    title: "flag for Tokelau"
  },
  {
    code: "TL",
    emoji: "🇹🇱",
    unicode: "U+1F1F9 U+1F1F1",
    name: "Timor-Leste",
    title: "flag for Timor-Leste"
  },
  {
    code: "TM",
    emoji: "🇹🇲",
    unicode: "U+1F1F9 U+1F1F2",
    name: "Turkmenistan",
    title: "flag for Turkmenistan"
  },
  {
    code: "TN",
    emoji: "🇹🇳",
    unicode: "U+1F1F9 U+1F1F3",
    name: "Tunisia",
    title: "flag for Tunisia"
  },
  {
    code: "TO",
    emoji: "🇹🇴",
    unicode: "U+1F1F9 U+1F1F4",
    name: "Tonga",
    title: "flag for Tonga"
  },
  {
    code: "TR",
    emoji: "🇹🇷",
    unicode: "U+1F1F9 U+1F1F7",
    name: "Turkey",
    title: "flag for Turkey"
  },
  {
    code: "TT",
    emoji: "🇹🇹",
    unicode: "U+1F1F9 U+1F1F9",
    name: "Trinidad and Tobago",
    title: "flag for Trinidad and Tobago"
  },
  {
    code: "TV",
    emoji: "🇹🇻",
    unicode: "U+1F1F9 U+1F1FB",
    name: "Tuvalu",
    title: "flag for Tuvalu"
  },
  {
    code: "TW",
    emoji: "🇹🇼",
    unicode: "U+1F1F9 U+1F1FC",
    name: "Taiwan",
    title: "flag for Taiwan"
  },
  {
    code: "TZ",
    emoji: "🇹🇿",
    unicode: "U+1F1F9 U+1F1FF",
    name: "Tanzania",
    title: "flag for Tanzania"
  },
  {
    code: "UA",
    emoji: "🇺🇦",
    unicode: "U+1F1FA U+1F1E6",
    name: "Ukraine",
    title: "flag for Ukraine"
  },
  {
    code: "UG",
    emoji: "🇺🇬",
    unicode: "U+1F1FA U+1F1EC",
    name: "Uganda",
    title: "flag for Uganda"
  },
  {
    code: "UM",
    emoji: "🇺🇲",
    unicode: "U+1F1FA U+1F1F2",
    name: "United States Minor Outlying Islands",
    title: "flag for United States Minor Outlying Islands"
  },
  {
    code: "US",
    emoji: "🇺🇸",
    unicode: "U+1F1FA U+1F1F8",
    name: "United States",
    title: "flag for United States"
  },
  {
    code: "UY",
    emoji: "🇺🇾",
    unicode: "U+1F1FA U+1F1FE",
    name: "Uruguay",
    title: "flag for Uruguay"
  },
  {
    code: "UZ",
    emoji: "🇺🇿",
    unicode: "U+1F1FA U+1F1FF",
    name: "Uzbekistan",
    title: "flag for Uzbekistan"
  },
  {
    code: "VA",
    emoji: "🇻🇦",
    unicode: "U+1F1FB U+1F1E6",
    name: "Vatican City",
    title: "flag for Vatican City"
  },
  {
    code: "VC",
    emoji: "🇻🇨",
    unicode: "U+1F1FB U+1F1E8",
    name: "Saint Vincent and The Grenadines",
    title: "flag for Saint Vincent and The Grenadines"
  },
  {
    code: "VE",
    emoji: "🇻🇪",
    unicode: "U+1F1FB U+1F1EA",
    name: "Venezuela",
    title: "flag for Venezuela"
  },
  {
    code: "VG",
    emoji: "🇻🇬",
    unicode: "U+1F1FB U+1F1EC",
    name: "Virgin Islands, British",
    title: "flag for Virgin Islands, British"
  },
  {
    code: "VI",
    emoji: "🇻🇮",
    unicode: "U+1F1FB U+1F1EE",
    name: "Virgin Islands, U.S.",
    title: "flag for Virgin Islands, U.S."
  },
  {
    code: "VN",
    emoji: "🇻🇳",
    unicode: "U+1F1FB U+1F1F3",
    name: "Viet Nam",
    title: "flag for Viet Nam"
  },
  {
    code: "VU",
    emoji: "🇻🇺",
    unicode: "U+1F1FB U+1F1FA",
    name: "Vanuatu",
    title: "flag for Vanuatu"
  },
  {
    code: "WF",
    emoji: "🇼🇫",
    unicode: "U+1F1FC U+1F1EB",
    name: "Wallis and Futuna",
    title: "flag for Wallis and Futuna"
  },
  {
    code: "WS",
    emoji: "🇼🇸",
    unicode: "U+1F1FC U+1F1F8",
    name: "Samoa",
    title: "flag for Samoa"
  },
  {
    code: "YE",
    emoji: "🇾🇪",
    unicode: "U+1F1FE U+1F1EA",
    name: "Yemen",
    title: "flag for Yemen"
  },
  {
    code: "YT",
    emoji: "🇾🇹",
    unicode: "U+1F1FE U+1F1F9",
    name: "Mayotte",
    title: "flag for Mayotte"
  },
  {
    code: "ZA",
    emoji: "🇿🇦",
    unicode: "U+1F1FF U+1F1E6",
    name: "South Africa",
    title: "flag for South Africa"
  },
  {
    code: "ZM",
    emoji: "🇿🇲",
    unicode: "U+1F1FF U+1F1F2",
    name: "Zambia",
    title: "flag for Zambia"
  },
  {
    code: "ZW",
    emoji: "🇿🇼",
    unicode: "U+1F1FF U+1F1FC",
    name: "Zimbabwe",
    title: "flag for Zimbabwe"
  }
];

module.exports = { countryData, flagData };
