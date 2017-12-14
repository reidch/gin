var Bar = require('../bar');
var assert = require('assert');

describe("Bar", function() {
  var bar;

  beforeEach(function() {
    bar = new Bar({
      name: "Gin71",
      location: {lat: 55.858711, lng: -4.250405},
      address: "No.4 Merchant City, Glasgow, Virginia Ct, Glasgow G1 1TN",
      description: "Gin71 was Glasgow's first dedicated Gin Bar. The city's largest selection of Gins, home made tonics and cocktails.",
      website: "https://www.gin71.com",
      image: "https://images.itison.com/system/201611/78706/1480089437/original.jpg?w=572&h=378"
    });
  });

  it("should have a name", function() {
    assert.strictEqual(bar.name, "Gin71");
  });

  it("should have a location", function() {
    assert.deepStrictEqual(bar.location, {lat: 55.858711, lng: -4.250405});
  });

  it("should have an address", function() {
    assert.strictEqual(bar.address, "No.4 Merchant City, Glasgow, Virginia Ct, Glasgow G1 1TN");
  });

  it("should have a description", function() {
    assert.notStrictEqual(bar.description, null);
  });

  it("should have a link to the official bar website", function() {
    assert.strictEqual(bar.website, "https://www.gin71.com");
  });

  it("should have a link to an image", function() {
    assert.notStrictEqual(bar.image, null);
  });

  it("should be able to have no drinks available", function() {
    assert.deepStrictEqual(bar.drinks, []);
  })

});
