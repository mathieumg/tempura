# DEPRECATED: This package has been deprecated in favor of [common-tags](https://github.com/declandewet/common-tags).

# tempura

[![npm version](https://badge.fury.io/js/tempura.svg)](https://badge.fury.io/js/tempura)
[![Build Status](https://travis-ci.org/mathieumg/tempura.svg)](https://travis-ci.org/mathieumg/tempura)
[![Dependency Status](https://david-dm.org/mathieumg/tempura.svg)](https://david-dm.org/mathieumg/tempura)
[![devDependency Status](https://david-dm.org/mathieumg/tempura/dev-status.svg)](https://david-dm.org/mathieumg/tempura#info=devDependencies)

Template literal utilities under the form of tags

# Usage
## noMultiSpaceAfterLineFeed
Utility to write template literals without having to worry about whitespace after newline feeds and before text, and newline feeds.

```js
import {noMultiSpaceAfterLineFeed} from 'tempura';

const myMultilineString = noMultiSpaceAfterLineFeed`
   My Super String
   That is well indented.
`;

console.log(myMultilineString);

/* Outputs the following
My Super String
That is well indentend
*/

```

## noMultiLine
Utility to remove all newline characters from a template literal.

```js
import {noMultiLine} from 'tempura';

const myMultilineString = noMultiLine`
expression that should

be on a single line
but is multilined for line length
`;

console.log(myMultilineString);

/* Outputs the following
expression that shouldbe on a single linebut is multilined for line length
*/
```

## noWhitespace
Utility to remove all whitespace in template literals.

```js
import {noWhitespace} from 'tempura';

const myStringWithWhiteSpace = noWhitespace`
expression that shouldn't have whitespace in it,
but has some for clarity in code
`;

console.log(myStringWithWhiteSpace);

/* Outputs the following
expressionthatshouldn'thavewhitespaceinit,buthassomeforclarityincode
*/
```
