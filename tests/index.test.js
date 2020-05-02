const isDefined = require("../lib/dev");

test("Variable assigned undefined - is not defined", () => {
  const foo = undefined;
  expect(isDefined(foo)).toBe(false);
});

test("undefined - is not defined", () => {
  expect(isDefined(undefined)).toBe(false);
});

test("Variable assigned null - is not defined", () => {
  const foo = null;
  expect(isDefined(foo)).toBe(false);
});

test("null - is not defined", () => {
  expect(isDefined(null)).toBe(false);
});

test("A defined function - is defined", () => {
  const foo = () => {};
  expect(isDefined(foo)).toBe(true);
});

test("A function - is defined", () => {
  expect(isDefined(() => {})).toBe(true);
});

test("A defined variable - is defined", () => {
  const foo = "foo";
  expect(isDefined(foo)).toBe(true);
});

test("number 1 - is defined", () => {
  expect(isDefined(1)).toBe(true);
});

test('string "foo" - is defined', () => {
  expect(isDefined("foo")).toBe(true);
});

test("[] - is defined", () => {
  expect(isDefined([])).toBe(true);
});

test("{} - is defined", () => {
  expect(isDefined({})).toBe(true);
});
