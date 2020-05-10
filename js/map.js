var data;
var s = [], jsondata = []
function handleFileSelect(evt) {
    var file = evt.target.files[0];

    Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
        getJsonData(results.data)
    }
    });
}

function getJsonData(data) {
    date = new Date(data[data.length-2]['Last Update'])
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var con = 0, death = 0, rec = 0 
    document.getElementById("update").append('  ' + months[date.getMonth()] + ' ' + date.getDate())
    debugger
    var mapGeoJSON = Highcharts.maps["custom/world"];
    $.each(mapGeoJSON.features, function(index, feature) {
        var id = feature.properties['hc-key'];
        var val;
        if (id === "cn") {val = data.filter(datum => datum['Country/Region'] === 'Mainland China')}
        if (id === "aw") val = data.filter(datum => datum['Country/Region'] === 'Aruba')
        if (id === "af") val = data.filter(datum => datum['Country/Region'] === 'Afghanistan')
        if (id === "ao") val = data.filter(datum => datum['Country/Region'] === 'Angola')
        if (id === "al") val = data.filter(datum => datum['Country/Region'] === 'Albania')
        if (id === "ad") val = data.filter(datum => datum['Country/Region'] === 'Andorra')
        if (id === "ae") val = data.filter(datum => datum['Country/Region'] === 'United Arab Emirates')
        if (id === "ar") val = data.filter(datum => datum['Country/Region'] === 'Argentina')
        if (id === "am") val = data.filter(datum => datum['Country/Region'] === 'Armenia')
        if (id === "as") val = data.filter(datum => datum['Country/Region'] === 'American Samoa')
        if (id === "ag") var val = data.filter(datum => datum['Country/Region'] === 'Antigua and Barbuda')
        if (id === "au") var val = data.filter(datum => datum['Country/Region'] === 'Australia')
        if (id === "at") val = data.filter(datum => datum['Country/Region'] === 'Austria')
        if (id === "az") val = data.filter(datum => datum['Country/Region'] === 'Azerbaijan')
        if (id === "bi") val = data.filter(datum => datum['Country/Region'] === 'Burundi')
        if (id === "be") val = data.filter(datum => datum['Country/Region'] === 'Belgium')
        if (id === "bj") val = data.filter(datum => datum['Country/Region'] === 'Benin')
        if (id === "bf") val = data.filter(datum => datum['Country/Region'] === 'Burkina Faso')
        if (id === "bd") val = data.filter(datum => datum['Country/Region'] === 'Bangladesh')
            
        if (id === "bg") val = data.filter(datum => datum['Country/Region'] === 'Bulgaria')
        if (id === "bh") val = data.filter(datum => datum['Country/Region'] === 'Bahrain')
        if (id === "bs") val = data.filter(datum => datum['Country/Region'] === 'Bahamas, The')
        if (id === "ba") val = data.filter(datum => datum['Country/Region'] === 'Bosnia and Herzegovina')
        if (id === "by") val = data.filter(datum => datum['Country/Region'] === 'Belarus')
        if (id === "bz") val = data.filter(datum => datum['Country/Region'] === 'Belize')
        if (id === "bm") val = data.filter(datum => datum['Country/Region'] === 'Bermuda')
        if (id === "bo") val = data.filter(datum => datum['Country/Region'] === 'Bolivia')
        if (id === "br") val = data.filter(datum => datum['Country/Region'] === 'Brazil')
        if (id === "bb") val = data.filter(datum => datum['Country/Region'] === 'Barbados')
        if (id === "bn") val = data.filter(datum => datum['Country/Region'] === 'Brunei Darussalam')
        if (id === "bt") val = data.filter(datum => datum['Country/Region'] === 'Bhutan')
        if (id === "bw") val = data.filter(datum => datum['Country/Region'] === 'Botswana')
        if (id === "cf") val = data.filter(datum => datum['Country/Region'] === 'Central African Republic')
        if (id === "ca") val = data.filter(datum => datum['Country/Region'] === 'Canada')
        if (id === "ch") val = data.filter(datum => datum['Country/Region'] === 'Switzerland')
        if (id === "cl") val = data.filter(datum => datum['Country/Region'] === 'Chile')
        if (id === "ci") val = data.filter(datum => datum['Country/Region'] === "Cote d'Ivoire")
        if (id === "cm") val = data.filter(datum => datum['Country/Region'] === 'Cameroon')
        if (id === "cd") val = data.filter(datum => datum['Country/Region'] === 'Congo, Dem. Rep.')
        if (id === "cg") val = data.filter(datum => datum['Country/Region'] === 'Congo, Rep.')
        if (id === "co") val = data.filter(datum => datum['Country/Region'] === 'Colombia')
        if (id === "km") val = data.filter(datum => datum['Country/Region'] === 'Comoros')
        if (id === "cv") val = data.filter(datum => datum['Country/Region'] === 'Cabo Verde')
        if (id === "cr") val = data.filter(datum => datum['Country/Region'] === 'Costa Rica')
        if (id === "cu") val = data.filter(datum => datum['Country/Region'] === 'Cuba')
        if (id === "cw") val = data.filter(datum => datum['Country/Region'] === 'Curacao')
        if (id === "ky") val = data.filter(datum => datum['Country/Region'] === 'Cayman Islands')
        if (id === "cy") val = data.filter(datum => datum['Country/Region'] === 'Cyprus')
        if (id === "cz") val = data.filter(datum => datum['Country/Region'] === 'Czech Republic')
        if (id === "de") val = data.filter(datum => datum['Country/Region'] === 'Germany')
        if (id === "dj") val = data.filter(datum => datum['Country/Region'] === 'Djibouti')
        if (id === "dm") val = data.filter(datum => datum['Country/Region'] === 'Dominica')
        if (id === "dk") val = data.filter(datum => datum['Country/Region'] === 'Denmark')
        if (id === "do") val = data.filter(datum => datum['Country/Region'] === 'Dominican Republic')
        if (id === "dz") val = data.filter(datum => datum['Country/Region'] === 'Algeria')
        if (id === "ec") val = data.filter(datum => datum['Country/Region'] === 'Ecuador')
        if (id === "eg") val = data.filter(datum => datum['Country/Region'] === 'Egypt, Arab Rep.')
        if (id === "er") val = data.filter(datum => datum['Country/Region'] === 'Eritrea')
        if (id === "es") val = data.filter(datum => datum['Country/Region'] === 'Spain')
        if (id === "ee") val = data.filter(datum => datum['Country/Region'] === 'Estonia')
        if (id === "et") val = data.filter(datum => datum['Country/Region'] === 'Ethiopia')
        if (id === "fi") val = data.filter(datum => datum['Country/Region'] === 'Finland')
        if (id === "fj") val = data.filter(datum => datum['Country/Region'] === 'Fiji')
        if (id === "fr") val = data.filter(datum => datum['Country/Region'] === 'France')
        if (id === "fo") val = data.filter(datum => datum['Country/Region'] === 'Faroe Islands')
        if (id === "fm") val = data.filter(datum => datum['Country/Region'] === 'Micronesia, Fed.')
        if (id === "ga") val = data.filter(datum => datum['Country/Region'] === 'Gabon')
        if (id === "gb") val = data.filter(datum => datum['Country/Region'] === 'United Kingdom')
        if (id === "ge") val = data.filter(datum => datum['Country/Region'] === 'Georgia')
        if (id === "gh") val = data.filter(datum => datum['Country/Region'] === 'Ghana')
        if (id === "gi") val = data.filter(datum => datum['Country/Region'] === 'Gibraltar')
        if (id === "gn") val = data.filter(datum => datum['Country/Region'] === 'Guinea')
        if (id === "gm") val = data.filter(datum => datum['Country/Region'] === 'Gambia, The')
        if (id === "gw") val = data.filter(datum => datum['Country/Region'] === 'Guinea-Bissau')
        if (id === "gq") val = data.filter(datum => datum['Country/Region'] === 'Equatorial Guinea')
        if (id === "gr") val = data.filter(datum => datum['Country/Region'] === 'Greece')
        if (id === "gd") val = data.filter(datum => datum['Country/Region'] === 'Grenada')
        if (id === "gl") val = data.filter(datum => datum['Country/Region'] === 'Greenland')
        if (id === "gt") val = data.filter(datum => datum['Country/Region'] === 'Guatemala')
        if (id === "gu") val = data.filter(datum => datum['Country/Region'] === 'Guam')
        if (id === "gy") val = data.filter(datum => datum['Country/Region'] === 'Guyana')
        if (id === "hk") val = data.filter(datum => datum['Country/Region'] === 'Hong Kong SAR, China')
        if (id === "hn") val = data.filter(datum => datum['Country/Region'] === 'Honduras')
        if (id === "hr") val = data.filter(datum => datum['Country/Region'] === 'Croatia')
        if (id === "ht") val = data.filter(datum => datum['Country/Region'] === 'Haiti')
        if (id === "hu") val = data.filter(datum => datum['Country/Region'] === 'Hungary')
        if (id === "id") val = data.filter(datum => datum['Country/Region'] === 'Indonesia')
        if (id === "im") val = data.filter(datum => datum['Country/Region'] === 'Isle of Man')
        if (id === "in") val = data.filter(datum => datum['Country/Region'] === 'India')
        if (id === "ie") val = data.filter(datum => datum['Country/Region'] === 'Ireland')
        if (id === "ir") val = data.filter(datum => datum['Country/Region'] === 'Iran, Islamic Rep.')
        if (id === "iq") val = data.filter(datum => datum['Country/Region'] === 'Iraq')
        if (id === "is") val = data.filter(datum => datum['Country/Region'] === 'Iceland')
        if (id === "il") val = data.filter(datum => datum['Country/Region'] === 'Israel')
        if (id === "it") val = data.filter(datum => datum['Country/Region'] === 'Italy')
        if (id === "jm") val = data.filter(datum => datum['Country/Region'] === 'Jamaica')
        if (id === "jo") val = data.filter(datum => datum['Country/Region'] === 'Jordan')
        if (id === "jp") val = data.filter(datum => datum['Country/Region'] === 'Japan')
        if (id === "kz") val = data.filter(datum => datum['Country/Region'] === 'Kazakhstan')
        if (id === "ke") val = data.filter(datum => datum['Country/Region'] === 'Kenya')
        if (id === "kg") val = data.filter(datum => datum['Country/Region'] === 'Kyrgyz Republic')
        if (id === "kh") val = data.filter(datum => datum['Country/Region'] === 'Cambodia')
        if (id === "ki") val = data.filter(datum => datum['Country/Region'] === 'Kiribati')
        if (id === "kn") val = data.filter(datum => datum['Country/Region'] === 'St.Kitts and Nevis')
        if (id === "kr") val = data.filter(datum => datum['Country/Region'] === 'South Korea')
        if (id === "kw") val = data.filter(datum => datum['Country/Region'] === 'Kuwait')
        if (id === "la") val = data.filter(datum => datum['Country/Region'] === 'Lao PDR')
        if (id === "lb") val = data.filter(datum => datum['Country/Region'] === 'Lebanon')
        if (id === "lr") val = data.filter(datum => datum['Country/Region'] === 'Liberia')
        if (id === "ly") val = data.filter(datum => datum['Country/Region'] === 'Libya')
        if (id === "lc") val = data.filter(datum => datum['Country/Region'] === 'St.Lucia')
        if (id === "li") val = data.filter(datum => datum['Country/Region'] === 'Liechtenstein')
        if (id === "lk") val = data.filter(datum => datum['Country/Region'] === 'Sri Lanka')
        if (id === "ls") val = data.filter(datum => datum['Country/Region'] === 'Lesotho')
        if (id === "lt") val = data.filter(datum => datum['Country/Region'] === 'Lithuania')
        if (id === "lu") val = data.filter(datum => datum['Country/Region'] === 'Luxembourg')
        if (id === "lv") val = data.filter(datum => datum['Country/Region'] === 'Latvia')
        if (id === "mo") val = data.filter(datum => datum['Country/Region'] === 'Macao SAR, China')
        if (id === "mf") val = data.filter(datum => datum['Country/Region'] === 'St.Martin(French)')
        if (id === "ma") val = data.filter(datum => datum['Country/Region'] === 'Morocco')
        if (id === "mc") val = data.filter(datum => datum['Country/Region'] === 'Monaco')
        if (id === "md") val = data.filter(datum => datum['Country/Region'] === 'Moldova')
        if (id === "mg") val = data.filter(datum => datum['Country/Region'] === 'Madagascar')
        if (id === "mv") val = data.filter(datum => datum['Country/Region'] === 'Maldives')
        if (id === "mx") val = data.filter(datum => datum['Country/Region'] === 'Mexico')
        if (id === "mh") val = data.filter(datum => datum['Country/Region'] === 'Marshall Islands')
        if (id === "mk") val = data.filter(datum => datum['Country/Region'] === 'Macedonia, FYR')
        if (id === "ml") val = data.filter(datum => datum['Country/Region'] === 'Mali')
        if (id === "mt") val = data.filter(datum => datum['Country/Region'] === 'Malta')
        if (id === "mm") val = data.filter(datum => datum['Country/Region'] === 'Myanmar')
        if (id === "me") val = data.filter(datum => datum['Country/Region'] === 'Montenegro')
        if (id === "mn") val = data.filter(datum => datum['Country/Region'] === 'Mongolia')
        if (id === "mp") val = data.filter(datum => datum['Country/Region'] === 'Northern Mariana Islands')
        if (id === "mz") val = data.filter(datum => datum['Country/Region'] === 'Mozambique')
        if (id === "mr") val = data.filter(datum => datum['Country/Region'] === 'Mauritania')
        if (id === "mu") val = data.filter(datum => datum['Country/Region'] === 'Mauritius')
        if (id === "mw") val = data.filter(datum => datum['Country/Region'] === 'Malawi')
        if (id === "my") val = data.filter(datum => datum['Country/Region'] === 'Malaysia')
        if (id === "na") val = data.filter(datum => datum['Country/Region'] === 'Namibia')
        if (id === "nc") val = data.filter(datum => datum['Country/Region'] === 'New Caledonia')
        if (id === "ne") val = data.filter(datum => datum['Country/Region'] === 'Niger')
        if (id === "ng") val = data.filter(datum => datum['Country/Region'] === 'Nigeria')
        if (id === "ni") val = data.filter(datum => datum['Country/Region'] === 'Nicaragua')
        if (id === "nl") val = data.filter(datum => datum['Country/Region'] === 'Netherlands')
        if (id === "no") val = data.filter(datum => datum['Country/Region'] === 'Norway')
        if (id === "np") val = data.filter(datum => datum['Country/Region'] === 'Nepal')
        if (id === "nr") val = data.filter(datum => datum['Country/Region'] === 'Nauru')
        if (id === "nz") val = data.filter(datum => datum['Country/Region'] === 'New Zealand')
        if (id === "om") val = data.filter(datum => datum['Country/Region'] === 'Oman')
        if (id === "pk") val = data.filter(datum => datum['Country/Region'] === 'Pakistan')
        if (id === "pa") val = data.filter(datum => datum['Country/Region'] === 'Panama')
        if (id === "pe") val = data.filter(datum => datum['Country/Region'] === 'Peru')
        if (id === "ph") val = data.filter(datum => datum['Country/Region'] === 'Philippines')
        if (id === "pw") val = data.filter(datum => datum['Country/Region'] === 'Palau')
        if (id === "pg") val = data.filter(datum => datum['Country/Region'] === 'Papua New Guinea')
        if (id === "pl") val = data.filter(datum => datum['Country/Region'] === 'Poland')
        if (id === "pr") val = data.filter(datum => datum['Country/Region'] === 'Puerto Rico')
        if (id === "kp") val = data.filter(datum => datum['Country/Region'] === 'Korea, DPR')
        if (id === "pt") val = data.filter(datum => datum['Country/Region'] === 'Portugal')
        if (id === "py") val = data.filter(datum => datum['Country/Region'] === 'Paraguay')
        if (id === "ps") val = data.filter(datum => datum['Country/Region'] === 'West Bank and Gaza')
        if (id === "pf") val = data.filter(datum => datum['Country/Region'] === 'French Polynesia')
        if (id === "qa") val = data.filter(datum => datum['Country/Region'] === 'Qatar')
        if (id === "ro") val = data.filter(datum => datum['Country/Region'] === 'Romania')
        if (id === "ru") val = data.filter(datum => datum['Country/Region'] === 'Russian Federation')
        if (id === "rw") val = data.filter(datum => datum['Country/Region'] === 'Rwanda')
        if (id === "sa") val = data.filter(datum => datum['Country/Region'] === 'Saudi Arabia')
        if (id === "sd") val = data.filter(datum => datum['Country/Region'] === 'Sudan')
        if (id === "sn") val = data.filter(datum => datum['Country/Region'] === 'Senegal')
        if (id === "sg") val = data.filter(datum => datum['Country/Region'] === 'Singapore')
        if (id === "sb") val = data.filter(datum => datum['Country/Region'] === 'Solomon Islands')
        if (id === "sl") val = data.filter(datum => datum['Country/Region'] === 'Sierra Leone')
        if (id === "sv") val = data.filter(datum => datum['Country/Region'] === 'El Salvador')
        if (id === "sm") val = data.filter(datum => datum['Country/Region'] === 'San Marino')
        if (id === "so") val = data.filter(datum => datum['Country/Region'] === 'Somalia')
        if (id === "rs") val = data.filter(datum => datum['Country/Region'] === 'Serbia')
        if (id === "ss") val = data.filter(datum => datum['Country/Region'] === 'South Sudan')
        if (id === "st") val = data.filter(datum => datum['Country/Region'] === 'Sao Tome and Principe')
        if (id === "sr") val = data.filter(datum => datum['Country/Region'] === 'Suriname')
        if (id === "sk") val = data.filter(datum => datum['Country/Region'] === 'Slovak Republic')
        if (id === "si") val = data.filter(datum => datum['Country/Region'] === 'Slovenia')
        if (id === "se") val = data.filter(datum => datum['Country/Region'] === 'Sweden')
        if (id === "sz") val = data.filter(datum => datum['Country/Region'] === 'Swaziland')
        if (id === "sx") val = data.filter(datum => datum['Country/Region'] === 'Sint Maarten')
        if (id === "sc") val = data.filter(datum => datum['Country/Region'] === 'Seychelles')
        if (id === "sy") val = data.filter(datum => datum['Country/Region'] === 'Syrian Arab Republic')
        if (id === "tc") val = data.filter(datum => datum['Country/Region'] === 'Turks and Caicos Islands')
        if (id === "td") val = data.filter(datum => datum['Country/Region'] === 'Chad')
        if (id === "tg") val = data.filter(datum => datum['Country/Region'] === 'Togo')
        if (id === "th") val = data.filter(datum => datum['Country/Region'] === 'Thailand')
        if (id === "tj") val = data.filter(datum => datum['Country/Region'] === 'Tajikistan')
        if (id === "tm") val = data.filter(datum => datum['Country/Region'] === 'Turkmenistan')
        if (id === "tl") val = data.filter(datum => datum['Country/Region'] === 'Timor-Leste')
        if (id === "to") val = data.filter(datum => datum['Country/Region'] === 'Tonga')
        if (id === "tt") val = data.filter(datum => datum['Country/Region'] === 'Trinidad and Tobago')
        if (id === "tn") val = data.filter(datum => datum['Country/Region'] === 'Tunisia')
        if (id === "tr") val = data.filter(datum => datum['Country/Region'] === 'Turkey')
        if (id === "tv") val = data.filter(datum => datum['Country/Region'] === 'Tuvalu')
        if (id === "ug") val = data.filter(datum => datum['Country/Region'] === 'Uganda')
        if (id === "ua") val = data.filter(datum => datum['Country/Region'] === 'Ukraine')
        if (id === "uy") val = data.filter(datum => datum['Country/Region'] === 'Uruguay')
        if (id === "us") val = data.filter(datum => (datum['Country/Region'] === 'United States' || datum['Country/Region'] === 'US'))
        if (id === "uz") val = data.filter(datum => datum['Country/Region'] === 'Uzbekistan')
        if (id === "vc") val = data.filter(datum => datum['Country/Region'] === 'St.Vincent and Grenadines')
        if (id === "ve") val = data.filter(datum => datum['Country/Region'] === 'Venezuela,RB')
        if (id === "vg") val = data.filter(datum => datum['Country/Region'] === 'British Virgin Islands')
        if (id === "vi") val = data.filter(datum => datum['Country/Region'] === 'Virgin Islands(U.S.)')
        if (id === "vn") val = data.filter(datum => datum['Country/Region'] === 'Vietnam')
        if (id === "vu") val = data.filter(datum => datum['Country/Region'] === 'Vanuatu')
        if (id === "ws") val = data.filter(datum => datum['Country/Region'] === 'Samoa')
        if (id === "ye") val = data.filter(datum => datum['Country/Region'] === 'Yemen, Rep.')
        if (id === "za") val = data.filter(datum => datum['Country/Region'] === 'South Africa')
        if (id === "zm") val = data.filter(datum => datum['Country/Region'] === 'Zambia')
        if (id === "zw") val = data.filter(datum => datum['Country/Region'] === 'Zimbabwe')
        if (typeof val != "undefined"  
                        && val != null  
                        && val.length != null  
                        && val.length > 0) {
            var value = 0;
            val = val.filter(datum => new Date(datum['Last Update']).getMonth() === date.getMonth())
            val = val.filter(datum => new Date(datum['Last Update']).getDate() === date.getDate())
            val.forEach(item=>{
                if (item['Confirmed']) con += item['Confirmed']
            })
            val.forEach(item=>{
                if (item['Death']) death += item['Death']
            })
            val.forEach(item=>{
                if (item['Recovered']) rec += item['Recovered']
            })
            for (i in val){
                if (val[i]['Confirmed']){
                    value += parseInt(val[i]['Confirmed'])
                }
                
            }
            jsondata.push({
            code3: feature.properties['iso-a3'],
            z: value
        });
        }
        
    });
    document.getElementById("confirmed").append("  " + con)
    document.getElementById("death").append("  " + death)
    document.getElementById("recovered").append("  " + rec)
    jsondata = jsondata.filter(datum => datum['z'] !== 0)
    Highcharts.mapChart('container', {
        chart: {
            borderWidth: 1,
            map: 'custom/world'
        },

        title: {
            text: 'Global Coronavirus Situation'
        },

        legend: {
            enabled: false
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        series: [{
            name: 'Countries',
            color: '#24f25a',
            enableMouseTracking: false
        }, {
            type: 'mapbubble',
            name: 'Confirmed',
            joinBy: ['iso-a3', 'code3'],
            data: jsondata,
            minSize: 4,
            maxSize: '12%',
            tooltip: {
                pointFormat: '{point.properties.country-abbrev}: {point.z} '
            }
        }]
    });
}
$(document).ready(function(){
    $("#csv-file").change(handleFileSelect);
});
Highcharts.mapChart('container', {
    chart: {
        borderWidth: 1,
        map: 'custom/world'
    },

    title: {
        text: 'Global Coronavirus Situation'
    },

    legend: {
        enabled: false
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    series: [{
        name: 'Countries',
        color: '#24f25a',
        enableMouseTracking: false
    }, {
        type: 'mapbubble',
        name: 'Confirmed ',
        joinBy: ['iso-a3', 'code3'],
        data: data,
        minSize: 4,
        maxSize: '12%',
        tooltip: {
            pointFormat: '{point.properties.country-abbrev}: {point.z}'
        }
    }]
});
