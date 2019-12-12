const Med = require("../model/Med");
const medCtrl = {};

const meds = [];
meds.push(new Med("Paracetamol", "Catena"));
meds.push(new Med("Aspirina", "SensiBlue"));
meds.push(new Med("Nurofen", "HelpNet"));
meds.push(new Med("Algocalmin", "Catena"));

medCtrl.med = (request, response) => {
  response.send(meds);
};

medCtrl.medByFarmacie = (request, response) => {
  console.log(request.params.farmacie);

  response.send(meds.find(p => p.farmacie === parseInt(request.params.farmacie)));
};

module.exports = medCtrl;