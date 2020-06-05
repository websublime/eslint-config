// Rules: id-length, prefer-const, no-unused-vars
let x = 0;

// Rules: id-length, prefer-const, arrow-body-style'
let foo = () => {
  return 0;
};

// Rules: no-var, no-unused-vars, quotes
var fun = {
  bar: "baz",
  qux: "quux",
};

// Rules: curly, no-undef, no-plusplus
if (sun) sun++;

// Rules: id-match, camelcase
const my_favorite_color = "#112C85";

// Rules: default-case, no-undef, space-before-blocks, indent
switch(a) {
case "a":
    break;
case "b":
    break;
}

// Rules: no-unused-expressions, jsx-quotes, semi
<a b="c" />

// Rules: no-unused-vars, quotes, lines-around-comment
const night = "long";
/* what a great and wonderful day */
const day = "great";

// Rules: max-params, no-unused-vars, space-before-function-paren
function fully (bar, baz, qux, qxx, cc) {
  doSomething();
}

const bar = (bar, baz, qux, qxx, cc) => {
  doSomething();
};

// Rules: no-console
console.log("Log a debug level message.");
console.warn("Log a warn level message.");
console.error("Log an error level message.");

// Rules: sort-keys, no-restricted-syntax, guard-for-in, no-undef
const obj = {age:1, year:2, month:3};
for(prop in obj) {
  console.log(prop);
}

// Rules: prefer-arrow-callback, func-names
function flora() {};
funk(function(atom) { return atom; });

// Rules: simple-import-sort/sort, no-unused-vars, import/no-unresolved, sort-imports-es6/sort-imports-es6
import fuzzy from 'foo';
import { barezi } from 'bar';

// no-constant-condition, space-before-blocks, no-empty, no-undef, space-in-parens
if(true){}
atob( 'xxxxx' );
