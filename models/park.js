const Park = function (name, price){
  this.name = name;
  this.price = price;
  this.collectionDinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaurToAdd) {
  this.collectionDinosaurs.push(dinosaurToAdd);
};

Park.prototype.removeDinosaur = function (dinosaurToRemove) {
  const indexOfDinosaur = this.collectionDinosaurs.indexOf(dinosaurToRemove);
  this.collectionDinosaurs.splice(indexOfDinosaur,1);
};

Park.prototype.numberOfGuests = function(){
  let amount = 0
  for (dinosaur of this.collectionDinosaurs){
    amount += dinosaur.guestsAttractedPerDay
  }
  return amount
}

module.exports = Park
