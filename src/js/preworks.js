import './hamburger.js';
import './footer.js';

const enPreworksJson = "./json/en-preworks.json";
$.getJSON(enPreworksJson)
    .done(function(data) {
    // console.log(data)
        var output = '<ul class="cards">';
        $.each(data, function(key, value) {
            output += 
            `<li class="card">
                <a href="#">
                    <h2 class="works-title">${value.title}</h2>
                    <p class="works-mark">${value.details.year} at ${value.details.company} in ${value.details.country[0]}</p>
                   
                    
            </li>`
            // console.log(`${key}`)
            // console.log(`${value.title}`)
            // console.log(`${Object.keys(value.language)}`)
            // console.log(`${value.details.year}`)
            // console.log(`${value.details.company}`)
            // Object.keys(value.language).map(k => console.log(value.language[k]))

        });
        output += '</ul>';
        console.log(output);
        $('#preworks-content').html(output);
    })
    .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( `Request Failed: ${err} `);
            console.log(`http status: ${jqxhr.status}`)
    })



