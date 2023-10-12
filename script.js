const froyoOrder = prompt("Hello, please enter your froyo flavers seperated by a coma ONLY please.  For example strawberry, mango, ...");

const splitIntoArray = froyoOrder.split(",");

const orderTable = {}


function froyoOrderTable(arr) {
    arr.forEach(element => {
        if (orderTable[element]) {
            orderTable[element] += 1;
        } else {
            orderTable[element] = 1;
        }
    });
    return orderTable;
}


console.log(orderTable);
froyoOrderTable(splitIntoArray);
