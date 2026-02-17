# SwiftCart

##  What is the difference between null and undefined?

### undefined

জাভাস্ক্রিপ্ট এক্সেকিউশন  কনটেক্সট এর মেমোরি ক্রিয়েশন phase এ আমাদের ভ্যারিয়েবল গুলোর ম্যান undefined থাকে , এরমানে আমাদের ভেরিয়েবল এর জন্য মেমোরি তৈরী করা হয়  কিন্তু এর কোনো ভেলু এসাইন করা হয় নি।  এই অবস্থায় ভেরিএবলে undefined হয়.

```js
var a ;
console.log(a);
```

let name; → শুধু ভ্যারিয়েবল declare করে
কিন্তু কোনো value এসাইন করা হয় নি 
তাই JavaScript automatically undefined assign করে

## null

null মানে ইচ্ছাকৃতভাবে empty value assign করা হয়েছে।

```js
var a = null;
```
এটা সাধারণত আগে কোনো value এসাইন করা হয়েছিল কিন্তু আমরা এখন এটাকে ব্যবহার করতে চাচ্ছি না সেখানে null দিতে পারি। 



##  What is the use of the map() function in JavaScript? How is it different from forEach()

### map()
ম্যাপ হচ্ছে একটা array ফাংশন যেটা একটা array এর প্রতিটা এলিমেন্ট এর উপর লুপ চালায় এবং একটা কলব্যাক ফাংশন এর মাধ্যমে  নতুন একটা array রিটার্ন করে।  কিন্তু ইটা আগের array এর কোনো পরিবর্তন করে না।

```js
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

### forEach()

forEach() এমন একটি method যা array-এর প্রতিটি উপাদানের উপর একবার করে callback function execute করে, কিন্তু কিছু return করে না।

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => console.log(number));

// Output:
// 1
// 2        
// 3        
// 4        
// 5
```
map() and forEach() দুটি ফাংশন এর মধ্যে পার্থক্য হলো map() নতুন array রিটার্ন করে কিন্তু foreach( ) কোনো কিছু রিটার্ন করে না। ।

```js   
const numbers = [1, 2, 3, 4, 5];
const result = numbers.foreach(number => number * number);

console.log(result); // Output: undefined
```


# What is the difference between == and ===?
== (Loose Equality)

== compare করে value, কিন্তু compare করার আগে type convert করে নেয় (Type Coercion করে)।

```js
console.log(5 == "5"); // true
```
== প্রথমে string কে number এ convert করে
তারপর compare করে → 5 == 5 → true

### === (Strict Equality)

=== compare করে value + type দুটোই এখানে কোনো type conversion হয় না।

```js
console.log(5 === "5"); // false
```


#  Explain the concept of Scope in JavaScript (Global, Function, Block)

Scope মানে হলো — একটি variable কোথা থেকে access করা যাবে এবং কোথা থেকে যাবে না।
সাধারণত child তার parent এর সব প্রপার্টি এক্সেস করতে পারে কিন্তু প্যারেন্ট তার চাইল্ড এর কোনো প্রপার্টি এক্সেস করতে পারে না। 

JavaScript এ মূলত ৩ ধরনের Scope আছে 
Global Scope
Function Scope
Block Scope

### Global scope : 
যে variable কোনো function বা block এর বাইরে declare করা হয়,এবং সেটি ফাংশন এর যে কোনো জায়গা থেকে এক্সেস করা যায় তাই  global scope .

```js
let name = "Ashik";

function greet() {
  console.log(name);
}

greet(); // Ashik
```

### Function Scope
যে variable function এর ভিতরে declare করা হয় এবং সেটি শুধু ওই function এর ভিতরেই accessible।
অর্থাৎ ঐ ফাংশন এর বাহির থেকে ঐ ফাংশন এর কোনো ভ্যালু এক্সেস করতে চাইলে এরর হবে। 

```js
function test() {
  let age = 25;
  console.log(age);
}

test(); // 25
console.log(age); // Error
```


# Block Scope
Block মানে { } এর ভিতরের অংশ. let এবং const block scope.

```js
if (true) {
  let x = 10;
  const y = 20;
}

console.log(x); //  Error
console.log(y); //  Error
```
let এবং const হলো ব্লক স্কোপ কিন্তু var গ্লোবাল স্কোপ। 
