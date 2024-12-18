# TypeScript: Object is possibly 'null'

This example demonstrates a common TypeScript error: 'Object is possibly 'null'. This error arises when you attempt to access a property of a variable that might hold a null or undefined value without explicitly checking for those possibilities.

The `bug.ts` file showcases the error. The `bugSolution.ts` file provides a corrected version.  The solution uses optional chaining and nullish coalescing to safely handle the potential null value.