//Assignment_LA5

// Simulate a hash table using a JavaScript object
let customerHash = {};
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
let nextNumber = 1;

function simpleHash(name) {
    // A very basic hash function (replace with a more robust one if needed)
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 5; // Adjust modulo for desired table size
}


function addCustomer(name) {
    let hashKey = simpleHash(name);
    if (!customerHash[hashKey]) {
        customerHash[hashKey] = [];
    }
    customerHash[hashKey].push({ name: name, number: nextNumber++ });
    console.log(${name} added to the hashed table.);
}

function serveCustomer(number) {

    for (let key in customerHash) {
        for (let i = 0; i < customerHash[key].length; i++) {
            if (customerHash[key][i].number === number) {
                let servedCustomer = customerHash[key][i].name;
                customerHash[key].splice(i, 1); // Remove served customer
                console.log(Serving customer: ${servedCustomer});
                displayHashTable();
                return;
            }
        }
    }
    console.log(Customer with number ${number} not found.);
}

function displayHashTable() {
    console.log("Current Hash Table:", customerHash);
}


// Example usage
customers.forEach(customer => addCustomer(customer));
serveCustomer(1);
serveCustomer(3);
displayHashTable();
