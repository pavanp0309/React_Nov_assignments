
import { funcB } from './moduleB.js';
export function funcA() {
  console.log('A calls B:');
  funcB();
}
