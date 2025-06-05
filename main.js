const HashMap = require('./HashMap');

// Create a new HashMap instance
const test = new HashMap();

// Add initial key-value pairs
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// Overwrite some values
console.log('\nOverwriting values:');
test.set('apple', 'green');
test.set('banana', 'brown');
console.log('apple is now:', test.get('apple'));
console.log('banana is now:', test.get('banana'));

// Trigger resize by adding another entry
console.log('\nAdding moon to trigger resize:');
test.set('moon', 'silver');
console.log('Current size:', test.length());

// Test various methods
console.log('\nTesting methods:');
console.log('get(banana):', test.get('banana'));
console.log('has(elephant):', test.has('elephant'));
console.log('remove(kite):', test.remove('kite'));
console.log('length:', test.length());

console.log('\nAll keys:', test.keys());
console.log('\nAll values:', test.values());
console.log('\nAll entries:', test.entries());

// Clear and check length
console.log('\nClearing hashmap...');
test.clear();
console.log('Length after clear:', test.length()); 