const { Farmer, Address, Document } = require("../../src/app/models");

const truncate = require("../utils/truncate");

const factory = require("../factories");

describe("Farmer", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("matches farmer model and its foreign associations", async () => {
    const farmer = await factory.create("Farmer");
    const address = await factory.create("Address");
    const document = await factory.create("Document");

    await document.setFarmer(farmer);
    await address.setFarmer(farmer);

    await farmer.setDocument(document);
    await farmer.setAddress(address);

    expect(farmer).toHaveProperty("id");
    expect(farmer).toHaveProperty("name");

    expect(document).toHaveProperty("farmerId");

    expect(address).toHaveProperty("farmerId");
  });
});
