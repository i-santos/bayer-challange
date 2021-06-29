const { Address } = require("../../src/app/models");

const truncate = require("../utils/truncate");

const factory = require("../factories");

describe("Address", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("matches address model", async () => {
    const address = await factory.create("Address");

    expect(address).toHaveProperty("street");
    expect(address).toHaveProperty("country");
    expect(address).toHaveProperty("state");
    expect(address).toHaveProperty("address");
  });
});
