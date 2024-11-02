# decimalid v1.0.0

***

### Brief annotation

"decimalid" is an utility that helps to create tiny numeric decimal identifiers. This is useful when, for some reason, the identifier cannot contain string characters and be numbered.
Powered by a built-in JavaScript pseudo-random number generator.

### Installation with npm

``npm install --save decimalid``

### Installation with yarn

``yarn add decimalid``

### Importing

```js
import decimalid from "decimalid"

// Or using CommonJS

const decimalId = require("decimalid").default;
```

### Importing types

```js
import decimalid from "decimalid/types"
```

## Usage

```js
import decimalid from "decimalid";

const tenDigitIdentifier = decimalid();
const twelveDigitIdentifier = decimalid(12);

console.log(tenDigitIdentifier); // => 1276234538
console.log(twelveDigitIdentifier); // => 34610534889
```

`size` is the only parameter that can range from 1 to 20 and indicates the number of digits.

## License

[MIT](LICENSE)
