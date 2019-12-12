const Farm = require("../model/Farm");
const farmCtrl = {};

const farms = [];
farms.push(new Farm("Catena", "Memo","12"));
farms.push(new Farm("Help Net", "Grivitei","18"));
farms.push(new Farm("Sensi Blue", "Mihai Viteazu","15"));

farmCtrl.farm = (request, response) => {
  response.send(farms);
};

farmCtrl.farmByStrada = (request, response) => {
  console.log(request.params.strada);

  response.send(farms.find(p => p.strada === parseInt(request.params.strada)));
};

module.exports = farmCtrl;