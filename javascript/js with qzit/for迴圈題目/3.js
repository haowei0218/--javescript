function MyPow(value) {
    for (let i = 1; i < value; i++) {
        for (let j = 1; j < value; j++) {
            if (Math.pow((i + 100), 2) === j) {
                // Your code here, for example:
                console.log(`Found match: i = ${i}, j = ${j}`);
            }
        }
    }
}

// Example usage:
MyPow(10); // Replace 10 with the desired value
