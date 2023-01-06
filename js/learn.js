function baz(test) {
    let counter = 0;
    let currentSymbol;
    for (let i = 0; i < test.length; i++) {
        currentSymbol = test.charAt(i);
        
        if (currentSymbol === "(") {
            counter++;
            console.log(counter, '++');
        }
        else if (currentSymbol === ")") {
            counter--;
            console.log(counter,'--');
        }
        
        if (counter < 0) {
            console.log(counter, '< 0');
            return counter;
        }
    }
    return counter;
}

const testString = '((())))))) ((()((((()()))))))'; // 0
let result = baz(testString);
console.log('result:', result);