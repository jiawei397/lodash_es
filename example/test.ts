import * as _ from "../mod.ts";

import { concat } from "../mod.ts";

const array = [1];
const other = _.concat(array, 2, [3], [[4]]);

console.log(other);

const other2 = concat(array, 2, [3], [[4]]);
console.log(other2);
