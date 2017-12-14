var Bar = function(options) {
  this.name = options.name;
  this.location = options.location;
  this.address = options.address;
  this.description = options.description;
  this.website = options.website;
  this.image = options.image;
  this.drinks = options.drinks || [];
};

module.exports = Bar;
