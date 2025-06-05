class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.buckets = new Array(initialCapacity).fill(null);
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.size = 0;
    }

    hash(key) {
        const PRIME = 31;
        let total = 0;
        
        // Convert string to numeric index using prime multiplication
        for (let i = 0; i < key.length; i++) {
            // Use modulo at each step to prevent integer overflow
            total = (total * PRIME + key.charCodeAt(i)) % this.buckets.length;
        }
        
        return total;
    }

    set(key, value) {
        const index = this.hash(key);
        
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        // If bucket is empty, create new array
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        // Check if key already exists
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update value
                return;
            }
        }

        // Add new key-value pair
        bucket.push([key, value]);
        this.size++;

        // Check if resize is needed
        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
    }

    get(key) {
        const index = this.hash(key);
        
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        if (!bucket) return null;

        for (const [k, v] of bucket) {
            if (k === key) return v;
        }

        return null;
    }

    has(key) {
        const index = this.hash(key);
        
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        if (!bucket) return false;

        return bucket.some(([k]) => k === key);
    }

    remove(key) {
        const index = this.hash(key);
        
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        if (!bucket) return false;

        const keyIndex = bucket.findIndex(([k]) => k === key);
        if (keyIndex === -1) return false;

        bucket.splice(keyIndex, 1);
        this.size--;
        return true;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;
    }

    keys() {
        const allKeys = [];
        for (const bucket of this.buckets) {
            if (bucket) {
                allKeys.push(...bucket.map(([key]) => key));
            }
        }
        return allKeys;
    }

    values() {
        const allValues = [];
        for (const bucket of this.buckets) {
            if (bucket) {
                allValues.push(...bucket.map(([_, value]) => value));
            }
        }
        return allValues;
    }

    entries() {
        const allEntries = [];
        for (const bucket of this.buckets) {
            if (bucket) {
                allEntries.push(...bucket);
            }
        }
        return allEntries;
    }

    resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;

        // Rehash all existing entries
        for (const bucket of oldBuckets) {
            if (bucket) {
                for (const [key, value] of bucket) {
                    this.set(key, value);
                }
            }
        }
    }
}

module.exports = HashMap; 