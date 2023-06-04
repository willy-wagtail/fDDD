import { TypeChecker } from "./TypeChecker";

describe("TypeChecker", () => {
  describe("isString", () => {
    it("should return true for a string", () => {
      expect(TypeChecker.isString("hello")).toBe(true);
    });

    it("should return false for a non-string", () => {
      expect(TypeChecker.isString(123)).toBe(false);
      expect(TypeChecker.isString(false)).toBe(false);
      expect(TypeChecker.isString(null)).toBe(false);
      expect(TypeChecker.isString(undefined)).toBe(false);
      expect(TypeChecker.isString({})).toBe(false);
    });
  });

  describe("isNumber", () => {
    it("should return true for a number", () => {
      expect(TypeChecker.isNumber(42)).toBe(true);
    });

    it("should return false for a non-number", () => {
      expect(TypeChecker.isNumber("123")).toBe(false);
      expect(TypeChecker.isNumber(false)).toBe(false);
      expect(TypeChecker.isNumber(null)).toBe(false);
      expect(TypeChecker.isNumber(undefined)).toBe(false);
      expect(TypeChecker.isNumber({})).toBe(false);
    });
  });

  describe("isArray", () => {
    it("should return true for an array", () => {
      expect(TypeChecker.isArray([])).toBe(true);
    });

    it("should return false for a non-array", () => {
      expect(TypeChecker.isArray({})).toBe(false);
      expect(TypeChecker.isArray("hello")).toBe(false);
      expect(TypeChecker.isArray(123)).toBe(false);
      expect(TypeChecker.isArray(null)).toBe(false);
      expect(TypeChecker.isArray(undefined)).toBe(false);
    });
  });

  describe("isObject", () => {
    it("should return true for an object", () => {
      expect(TypeChecker.isObject({})).toBe(true);
      expect(TypeChecker.isObject({ key: "value" })).toBe(true);
    });

    it("should return false for a non-object", () => {
      expect(TypeChecker.isObject("hello")).toBe(false);
      expect(TypeChecker.isObject(123)).toBe(false);
      expect(TypeChecker.isObject([])).toBe(false);
      expect(TypeChecker.isObject(null)).toBe(false);
      expect(TypeChecker.isObject(undefined)).toBe(false);
    });
  });

  describe("isType", () => {
    it("should return true if the value satisfies the type guard", () => {
      const isEven = (value: unknown): value is number => {
        return typeof value === "number" && value % 2 === 0;
      };

      expect(TypeChecker.isType(4, isEven)).toBe(true);
    });

    it("should return false if the value does not satisfy the type guard", () => {
      const isEven = (value: unknown): value is number => {
        return typeof value === "number" && value % 2 === 0;
      };

      expect(TypeChecker.isType(3, isEven)).toBe(false);
      expect(TypeChecker.isType("hello", isEven)).toBe(false);
      expect(TypeChecker.isType(null, isEven)).toBe(false);
      expect(TypeChecker.isType(undefined, isEven)).toBe(false);
    });
  });

  describe("isArrayOf", () => {
    it("should return true for an array of the correct type", () => {
      const typeGuard = (value: unknown): value is number => {
        return typeof value === "number";
      };

      expect(TypeChecker.isArrayOf([1, 2, 3], typeGuard)).toBe(true);
      expect(TypeChecker.isArrayOf([], typeGuard)).toBe(true);
    });

    it("should return false for an array with at least one element of the incorrect type", () => {
      const typeGuard = (value: unknown): value is number => {
        return typeof value === "number";
      };

      expect(TypeChecker.isArrayOf([1, 2, "3"], typeGuard)).toBe(false);
      expect(TypeChecker.isArrayOf(["hello", "world"], typeGuard)).toBe(false);
    });
  });
});
