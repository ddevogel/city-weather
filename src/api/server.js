var http = require('http');
//var dispatcher = require('httpdispatcher');

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('hi');
    // try {
    //     //log the request on console
    //     console.log(request.url);
    //     //Disptach
    //     dispatcher.dispatch(request, response);
    // } catch(err) {
    //     console.log(err);
    // }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(function(){
    console.log(process.env);
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", process.env.PORT || 3000);
});

// //A sample GET request    
// dispatcher.onGet("/", function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('home');
// });    

// //A sample POST request
// dispatcher.onPost("/post1", function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Got Post Data');
// });

