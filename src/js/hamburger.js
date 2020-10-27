//     /*******hanburger manu click event********/


$(".menu-btn")
    .click(function(e) {
        if (e.target.className.split(" ")[0] === 'menu-btn'||
            e.target.className.split(" ")[0] === 'menu-btn-hamburger') 
            {
                $(".menu-btn").toggleClass("expanded");
                $(".menu-btn-hamburger").toggleClass("expanded");
                $(".nav").toggleClass("expanded");
            }
        console.log(e.target);
    });