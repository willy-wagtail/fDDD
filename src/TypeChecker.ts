export class TypeChecker {
  static isString(data: unknown): data is string {
    return typeof data === "string";
  }

  static isNumber(data: unknown): data is number {
    return typeof data === "number";
  }

  static isArray(data: unknown): data is unknown[] {
    return Array.isArray(data);
  }

  static isObject(data: unknown): data is Record<string, unknown> {
    return typeof data === "object" && !Array.isArray(data) && data !== null;
  }

  static isType<T>(
    data: unknown,
    typeGuard: (value: unknown) => value is T
  ): data is T {
    return typeGuard(data);
  }

  static isArrayOf<T>(
    data: unknown[],
    typeGuard: (value: unknown) => value is T
  ): data is T[] {
    return Array.isArray(data) && data.every(typeGuard);
  }
}
