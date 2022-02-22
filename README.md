# lodash_es

> Copy from `lodash-es v4.17.21`.

I hope the lock of Deno can lock my dependent version, but now I encounter the
wrong version of lodash, even if I have used the pin version like this:
`https://cdn.skypack.dev/pin/lodash@v4.17.21-K6GEbP02mWFnLA45zAmi/mode=imports/optimized/lodash.js`.
So I have to fork it by a modules.

Now you can use :

```ts
import * as _ from "https://deno.land/x/lodash_es@v0.0.1/mod.ts";

const array = [1];
const other = _.concat(array, 2, [3], [[4]]);

console.log(other);
```

Below is the origin docs.

---

The [Lodash](https://lodash.com/) library exported as
[ES](http://www.ecma-international.org/ecma-262/6.0/) modules.

Generated using [lodash-cli](https://www.npmjs.com/package/lodash-cli):

```shell
$ lodash modularize exports=es -o ./
```

See the [package source](https://github.com/lodash/lodash/tree/4.17.21-es) for
more details.
