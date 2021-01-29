import { InternalError } from "../errors";

export default class Collection<K, V> extends Map<K, V> {
  constructor(input?: ReadonlyArray<readonly [K, V]> | null) {
    super(input)
  }

  get(key: K): V | undefined {
    return super.get(key);
  }

  public set(key: K, value: V): this {
    super.set(key, value)

    return this
  }

  find(fn: (value: V, key: K) => boolean): V | undefined {
    for (const [key, val] of this) {
      if (fn(val, key)) return val;
    }

    return undefined
  }

  delete(key: K): boolean {
    return super.delete(key)
  }

  clear(): void {
    return super.clear();
  }

  toArray(): [K, V][] {
    const array = this.entries()

    return Array.from(array)
  }

  getKeys(): K[] {
    const keys = []

    for (const [key] of this) {
      keys.push(key)
    }

    return keys
  }

  getValues(): V[] {
    const values = []

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [key, value] of this) {
      values.push(value)
    }

    return values
  }

  first(amount?: number): V | V[] {
    if (!amount) return this.values().next().value
    if (amount < 0) {
      throw new InternalError('The amount argument can\'t be negative.')
    }

    const res = []

    for (let i = 0; i < amount; i++) {
      res.push(this.toArray()[i][1])
    }
    return res;
  }
}