console.log("hi");
$.getJSON("./json/en-preworks.json", function(data) {
    console.log(data)
})
// var settings = {
//     "url": "./build/json/en-preworks.json",
//     "method": "GET",
//     "dataType":   "jsonp", 
//     "timeout": 0,
//     "headers": {
//       "Content-Type": "application/json"
//     },
//   };
  
//   $.ajax(settings).done(function (data) {
//     console.log(JSON.stringify(data));
//   });

