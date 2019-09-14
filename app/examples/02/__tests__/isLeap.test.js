import { isLeap } from "../isLeap";

describe("A leap year", () => {
  it("year not divisible by 4: common year", () => {
    expect(isLeap(2015)).toBeFalsy();
  });

  it("year divisible by 4, not divisible by 100: leap year", () => {
    expect(isLeap(2016)).toBeTruthy();
  });

  it("year divisible by 100, not divisible by 400: common year", () => {
    expect(isLeap(2100)).toBeFalsy();
  });

  it("year divisible by 400: leap year", () => {
    expect(isLeap(2000)).toBeTruthy();
  });

  it("year divisible by 200, not divisible by 400: common year", () => {
    expect(isLeap(1800)).toBeFalsy();
  });
});
