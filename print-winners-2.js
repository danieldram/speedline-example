module.exports = (inputArray) => {

    let hashTable = new Map();
    let theWinner
    // Iterate through the array, with "order" being each item in the array.

    inputArray.map((order) => {

        if ((order.toppings.length === 3) && (order.email !== '')) {

            // Convert the array of toppings to a string:

            let toppingsAsString = order.toppings.toString();

            let matchingValue = hashTable.get(toppingsAsString);

            if (matchingValue) {

                // This key was already in the hash table.

                matchingValue.duplicate = true;

            } else {

                // Insert a new object containing the email into the hash table, using the toppings as the key.
                hashTable.set(toppingsAsString, {email: order.email});

            }

        }

    });

    // Iterate through the values in the hash table, with "value" being each value.

    hashTable.forEach((value) => {

        if (!value.duplicate) {

            // Print out the email.

            console.log(value.email);
            theWinner = value.email

        }

    });

    return theWinner

}
