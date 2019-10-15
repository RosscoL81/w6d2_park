const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur

  beforeEach(function () {
    dinosaur = new Dinosaur("Diplodocus", "herbivore", 100)
    dinosaur1 = new Dinosaur("t-rex", "carnivore", 50)
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 25)
    park = new Park("Dino World", 20, [])
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Dino World");
  });


  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionDinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur.species);
    const actual = park.collectionDinosaurs;
    assert.deepStrictEqual(actual, ["Diplodocus"])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur.species)
    park.addDinosaur(dinosaur1.species)
    park.removeDinosaur(dinosaur1.species);
    const actual = park.collectionDinosaurs;
    assert.deepStrictEqual(actual, ["Diplodocus"] )
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur.guestsAttractedPerDay)
    park.addDinosaur(dinosaur1.guestsAttractedPerDay)
    park.addDinosaur(dinosaur2.guestsAttractedPerDay)
    const actual = park.numberOfGuests();
    assert.strictEqual(actual, 175);
  });

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
