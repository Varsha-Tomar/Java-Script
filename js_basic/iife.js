// Immediately Invoked function expressions (IIFE)

(function chai () {
    console.log('DB CONNECTED');
})();  // it is neccessary to run next function otherwise next function produce errors in code.

((name) => {
    console.log(`Db Connected Two ${name}`);
}) ('Varsha')



