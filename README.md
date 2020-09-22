# @codewell/is-defined

## Intallation

```
npm install @codewell/is-defined
```

## Basic usage

```JavaScript
import isDefined from '@codewell/is-defined';

isDefined(undefined); // => false
isDefined(null); // => false

isDefined(1); // => true
isDefined('foo'); // => true
isDefined(() => {})); // => true
isDefined([]); // => true
isDefined({}); // => true
```
