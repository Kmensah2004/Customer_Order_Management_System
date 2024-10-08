//Task 1 array with 4 diffrent products from coffee shop
const inventory = [{name: "coffee", price: 6.99, quantity:5},
    {name: "Bagel", price: 5.99, quantity:11},
    {name: "LemonBread", price: 1.50, quantity:15},
    {name: "Lemonade", price: 3.99, quantity:8}];
    console.log(inventory);

    // Task 2
    const orders = []; // intialized an empty array to push orders into
console.log("Orders array initialize:");
console.log(orders);

//Task 3
function placeOrder(customerName, orderedItems) {
    // Check if there is enough stock for each ordered item
    orderedItems.forEach(item => {
    const product = inventory.find(prod => prod.name === item.name); // Find the product in the inventory   
        if (!product ) {
            console.log(`Error: ${item.name} is not available in the current inventory.`); // if no ordered product is found in inventory it displays error message
            return; 
        }

       else if (product.quantity < item.quantity) {
            console.log(`Error: Insufficient stock for ${item.name}. Available: ${product.quantity}`);
            return; //  if stock ordered is not suitable for stock in inventory it prints error message
        }
        else
        {
            product.quantity -= item.quantity; // if product is found it takes the quantity ordered minus the product in stock
            return product.quantity;
        }
    })

    // Add the order to the orders array with 'Pending' status
    orders.push({
        customerName: customerName,
        items: orderedItems,
        status: 'Pending' 
    });

    console.log(`Order placed successfully for ${customerName}.`)
}

// utilized of placeOrder function:
placeOrder('James Gold', [{ name: 'coffee', quantity: 2 }, { name: 'Bagel', quantity: 3 }]);
placeOrder('Kosi Mensah', [{ name: 'LemonBread', quantity: 16 }]); // Error due to insufficient stock

//Task 4
function calculateOrderTotal(order) {
    let total = 0;
    order.items.forEach(item => {
        const product = inventory.find(prod => prod.name === item.name); 
        {
            total += product.price * item.quantity; // Add price of product multiplied by its quantity to the total
        }
});
    return total; // Return the total price for the order
}

const order = orders[0]; // Fetch the James Gold's order
console.log(`Total for ${order.customerName}'s order: $${calculateOrderTotal(order)}`);

//Task 5
function completeOrder(customerName){
    const order = orders.find(ord => ord.customerName === customerName); // Find the customer's order by name
        if (order) {
            order.status = 'Completed'; // Change the order status to 'Completed'
            console.log(`Order for ${customerName} has been completed.`);
        } else {
            console.log(`Error: No order for ${customerName}.`); // Error if no  order is found
        }
    }
    completeOrder('Mark Reed');
completeOrder('Kosi Mensah');

//Task 6
function checkingPendingOrders()
{
       orders.forEach(order => {       
        if (order.status === 'Pending') {
console.log(`Pending Order for ${order.customerName}:`);
console.log(`Items: ${order.orderedItems}`);
            }
        });
    }
    checkingPendingOrders(); 
    

