import camelCaseToTitleCase from "./camelCaseToTitleCase.js";

describe("converts camelCase to title case", () => {
  it("two words", () =>
    expect(camelCaseToTitleCase("javaScript")).toEqual("Java Script"));
  it("three words", () =>
    expect(camelCaseToTitleCase("GameOfThrones")).toEqual("Game Of Thrones"));
});
