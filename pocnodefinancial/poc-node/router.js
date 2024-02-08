const categoryController = require("./category.controller")

const routes = {
  "/category" :  categoryController,
}

function route(request, response){
  for(const [prefix, controller] of Object.entries(routes)){
    if(request.url.toLowerCase().startsWith(prefix.toLowerCase())){
      controller.handler(request, response);
    }  
  }
}

module.exports.route = route;