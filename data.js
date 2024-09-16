function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

// Example usage
const nums = [1, 2, 3, 4, 5, 6];
console.log(getEvenNumbers(nums)); // Output: [2, 4, 6]
// Example person object
const person = {
    name: "John Doe",
    age: 35,
    email: "john.doe@example.com"
};

// Function to filter people over 30
function filterPeopleOver30(people) {
    return people.filter(person => person.age > 30);
}

// Example usage
const peopleArray = [
    { name: "Alice", age: 28, email: "alice@example.com" },
    { name: "Bob", age: 34, email: "bob@example.com" },
    { name: "Charlie", age: 45, email: "charlie@example.com" }
];
console.log(filterPeopleOver30(peopleArray)); // Output: [ { name: 'Bob', age: 34, email: 'bob@example.com' }, { name: 'Charlie', age: 45, email: 'charlie@example.com' } ]
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output: 2
console.log(stack.peek()); // Output: 1
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage
const sentence = "Hello World";
console.log(removeVowels(sentence)); // Output: "Hll Wrld"