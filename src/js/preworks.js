import './hamburger.js';
import './footer.js';
const breakPointPc = window.matchMedia("(min-width: 801px)")
const enPreworksJson = "./json/en-preworks.json";

$.getJSON(enPreworksJson)
    .done(function(data) {
    // console.log(data)
        let outputPc = '<ul class="cards">';
        let outputMb = '<ul class="cards">'
        $.each(data, function(key, value) {
                outputPc += 
                `   <li class="card">
                        <a href="#">
                            <figure class="card">
                                <img src="images/${value.image}" alt="images of my articles">
                                <figcaption class="caption">
                                    <h2 class="works-title">${value.title}</h2>
                                    <p class="works-mark">${value.details.year} at ${value.details.company} in ${value.details.country[0]}</p>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    ` 
                outputMb += 
                `   <li class="card">
                        <a href="#">
                            <img src="images/${value.image}" alt="images of my articles">
                            <h2 class="works-title">${value.title}</h2>
                            <p class="works-mark">${value.details.year} at ${value.details.company} in ${value.details.country[0]}</p>
                        </a>
                    </li>
                `
        })
        // console.log(outputPc);
        outputPc += '</ul>'
        outputMb += '</ul>'
        if(breakPointPc.matches) { 
            $('#preworks-content').html(outputPc);
        } else {
            $('#preworks-content').html(outputMb);
        }
        $( window ).resize(function() {
            if(breakPointPc.matches) { 
                $('#preworks-content').html(outputPc);
            } else {
                $('#preworks-content').html(outputMb);
            }

        })
    })
    
    .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( `Request Failed: ${err} `);
            console.log(`http status: ${jqxhr.status}`)
    })



 // console.log(`${key}`)
            // console.log(`${value.title}`)
            // console.log(`${Object.keys(value.language)}`)
            // console.log(`${value.details.year}`)
            // console.log(`${value.details.company}`)
            // Object.keys(value.language).map(k => console.log(value.language[k]))