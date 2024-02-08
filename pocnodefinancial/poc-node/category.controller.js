const category = {

  id: 10,
  name: 'Bruno',

}

function handler(request, response){

  response.setHeader("Content-Type", "application/json");
  response.statusCode = 200;
  response.end(JSON.stringify(category))

}



module.exports.handler = handler;

