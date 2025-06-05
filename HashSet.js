class HashSet {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.buckets = new Array(initialCapacity).fill(null);
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.size = 0;
    }

    hash(key) {
        const PRIME = 31;
        let total = 0;
        
        for (let i = 0; i < key.length; i++) {
            total = (total * PRIME + key.charCodeAt(i)) % this.buckets.length;
        }
        
        return total;
    }

    add(key) {
        const index = this.hash(key);
        
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        // Check if key already exists
        const bucket = this.buckets[index];
        for (const existingKey of bucket) {
            if (existingKey === key) {
                return false; // Key already exists
            }
        }

        // Add new key
        bucket.push(key);
        this.size++;

        // Check if resize is needed
        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }

        return true; // Key was added
    }

    has(key) {
        const index = this.hash(key);
        
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        if (!bucket) return false;

        return bucket.includes(key);
    }

    remove(key) {
        const index = this.hash(key);
        
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        if (!bucket) return false;

        const keyIndex = bucket.indexOf(key);
        if (keyIndex === -1) return false;

        bucket.splice(keyIndex, 1);
        this.size--;
        return true;
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;
    }

    length() {
        return this.size;
    }

    values() {
        const allValues = [];
        for (const bucket of this.buckets) {
            if (bucket) {
                allValues.push(...bucket);
            }
        }
        return allValues;
    }

    resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;

        // Rehash all existing values
        for (const bucket of oldBuckets) {
            if (bucket) {
                for (const key of bucket) {
                    this.add(key);
                }
            }
        }
    }
}

module.exports = HashSet; 