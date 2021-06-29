const request = require("supertest");

const app = require("../../src/app");

const { Address, Document, Farmer } = require("../../src/app/models");

const truncate = require("../utils/truncate");

const factory = require("../factories");

describe("Farmer", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should find a farmer by name or doc number", async () => {
    const farmer = await factory.create("Farmer");

    const document = await factory.create("Document");

    const address = await factory.create("Address");

    await document.setFarmer(farmer);
    await address.setFarmer(farmer);
    await farmer.setDocument(document);
    await farmer.setAddress(address);

    const responseByName = await request(app)
      .get("/api/farmers/" + farmer.name)
      .send();
    expect(responseByName.status).toBe(200);

    responseByName.body.forEach((f) => {
      f.createdAt = new Date(f.createdAt);
      f.updatedAt = new Date(f.updatedAt);
      f.document.createdAt = new Date(f.document.createdAt);
      f.document.updatedAt = new Date(f.document.updatedAt);
      f.address.createdAt = new Date(f.address.createdAt);
      f.address.updatedAt = new Date(f.address.updatedAt);
    });

    expect(responseByName.body).toMatchObject([farmer.dataValues]);

    const responseByDocNumber = await request(app)
      .get("/api/farmers/" + document.number)
      .send();
    expect(responseByDocNumber.status).toBe(200);

    responseByDocNumber.body.forEach((f) => {
      f.createdAt = new Date(f.createdAt);
      f.updatedAt = new Date(f.updatedAt);
      f.document.createdAt = new Date(f.document.createdAt);
      f.document.updatedAt = new Date(f.document.updatedAt);
      f.address.createdAt = new Date(f.address.createdAt);
      f.address.updatedAt = new Date(f.address.updatedAt);
    });

    expect(responseByDocNumber.body).toMatchObject([farmer.dataValues]);
  });

  it("should not found farmer by name or doc number that does not exist", async () => {
    const responseByName = await request(app)
      .get("/api/farmers/not%20existent")
      .send();

    expect(responseByName.status).toBe(404);
  });

  it("should return not found when an empty name or doc number is passed to /api/farmers/:s", async () => {
    const responseByName = await request(app).get("/api/farmers/%20").send();

    expect(responseByName.status).toBe(400);
    expect(responseByName.body.message).toBe("Search term is required");
  });
});
