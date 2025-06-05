# HashMap Implementation

A JavaScript implementation of HashMap and HashSet data structures created as part of The Odin Project curriculum.

## Features

### HashMap (`HashMap.js`)
- Custom hash function using prime number multiplication
- Collision handling using chaining (array-based)
- Dynamic resizing when load factor exceeds 0.75
- Initial capacity of 16 buckets

#### Methods
- `set(key, value)`: Insert or update a key-value pair
- `get(key)`: Retrieve value for a key
- `has(key)`: Check if key exists
- `remove(key)`: Remove a key-value pair
- `length()`: Get total number of entries
- `clear()`: Remove all entries
- `keys()`: Get array of all keys
- `values()`: Get array of all values
- `entries()`: Get array of all key-value pairs

### HashSet (`HashSet.js`)
A bonus implementation of a HashSet data structure that only stores unique keys.

#### Methods
- `add(key)`: Add a new key
- `has(key)`: Check if key exists
- `remove(key)`: Remove a key
- `length()`: Get total number of keys
- `clear()`: Remove all keys
- `values()`: Get array of all keys

## Usage

```javascript
const HashMap = require('./HashMap');

// Create new HashMap
const map = new HashMap();

// Add key-value pairs
map.set('key1', 'value1');
map.set('key2', 'value2');

// Get value
console.log(map.get('key1')); // 'value1'

// Check if key exists
console.log(map.has('key2')); // true

// Remove key
map.remove('key1');

// Get all keys
console.log(map.keys()); // ['key2']
```

## Testing
Run the included test file:
```bash
node main.js
```

## Implementation Details
- Uses array-based chaining for collision resolution
- Hash function applies modulo at each step to prevent integer overflow
- Automatic resizing maintains O(1) average time complexity
- Error handling for index out of bounds
- ES6+ JavaScript features

## Project Context
This project is part of The Odin Project's curriculum, focusing on data structures and algorithms in JavaScript. It demonstrates understanding of:
- Hash table concepts
- Collision resolution
- Dynamic resizing
- JavaScript classes and methods
- Data structure implementation