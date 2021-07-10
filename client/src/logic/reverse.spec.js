import { reverse } from "./reverse.js";

describe("it reverses a string", () => {
  it("works", () => expect(reverse("abc")).toEqual("cba"));
});
