import fs from 'fs';
import { InternalError } from '../errors';

export default class Map {
  private object = {};
  private size: number;

  constructor(opt = { load: false }) {
    this.object = {};

    if (this.object && typeof opt.load == 'string') {
      this.object = require(opt.load);
    } else if (opt.load && typeof opt.load == 'object') {
      this.object = opt.load;
    }

    this.size = Object.keys(this.object).length;
  }

  // @ts-ignore
  async set(key, value): Promise<void> {
    // @ts-ignore
    this.object[key] = value;

    this.size = Object.keys(this.object).length;
  }

  // @ts-ignore
  get(key) {
    if (Object.keys(this.object).includes(key)) {
      // @ts-ignore
      return this.object[key];
    } else {
      return null;
    }
  }

  values() {
    const val = Object.keys(this.object);
    const obj = [];

    let z = 0;

    for (const x of val) {
      obj.push({
        // @ts-ignore
        value: this.object[x],
        key: x,
        index: z,
      });

      ++z;
    }

    return obj;
  }

  forEach(func: CallableFunction) {
    let key;
    let value;
    let index;

    for (const x in Object.keys(this.object)) {
      index = x;
      key = Object.keys(this.object)[x];
      // @ts-ignore
      value = this.object[key];

      func(key, value, index);
    }
  }
  async write(path: string): Promise<void> {
    if (!path || typeof path != 'string') {
      throw new InternalError(
        `The write input path must be a string! Received: ${typeof path}`
      );
    }

    fs.writeFileSync(path, JSON.stringify(this.object));
  }

  remove(key: string) {
    if (Object.keys(this.object).includes(key)) {
      // @ts-ignore
      delete this.object[key];
      --this.size;

      return key;
    } else {
      return null;
    }
  }

  firstKey() {
    return Object.keys(this.object)[0];
  }

  firstValue() {
    return this.size == 0 ? undefined : Object.values(this.object)[0];
  }
}
