import { add, subtract } from './math.js';

console.log(add(5, 3));      
console.log(subtract(5, 3)); 


import greet from './greeting.js';

console.log(greet('Rahul'));



import { setUser, getUser } from './user.js';

setUser('Priya');
console.log(getUser()); 

import divide, { multiply } from './calculator.js';

console.log(divide(10, 2));   
console.log(multiply(3, 4));  

import { calculateSum as sum } from './mathOperations.js';

console.log(sum(4, 6)); 



import { toUpperCase, toLowerCase, capitalize } from './stringUtils.js';

const myStr = 'hello';
console.log(toUpperCase(myStr));     
console.log(toLowerCase('WORLD'));   
console.log(capitalize('maRathi')); 


import { config } from './config.js';

console.log(config); 


import { Person } from './Person.js';

const p = new Person('Bhakti', 22);
console.log(p.getDetails()); 




import { funcA } from './moduleA.js';
import { funcB } from './moduleB.js';

funcA();
funcB();


import { sum, difference, upper, lower } from './index.js';

console.log(sum(1, 2));       
console.log(difference(2, 1));
console.log(upper('abc'));    
console.log(lower('XYZ')); 

import { capitalize } from './stringUtils.js';

console.log(capitalize('raHul'));  



import subtract, { multiply } from './mathOperations.js';

console.log(subtract(9, 3));  
console.log(multiply(3, 7));  

