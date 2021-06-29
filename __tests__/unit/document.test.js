const { Document } = require("../../src/app/models");

const truncate = require("../utils/truncate");

const factory = require("../factories");

describe("Document", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("matches document model", async () => {
    const document = await factory.create("Document");

    expect(document).toHaveProperty("type");
    expect(document).toHaveProperty("number");
  });
});
