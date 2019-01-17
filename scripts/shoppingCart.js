const shoppingCart = []
console.table(shoppingCart)
console.log(shoppingCart)

// const newArray = shoppingCart.filter(products => products > 2)
// console.log(newArray)

const totalNumberOfItems =() => {
    for (let i = 0; i < shoppingCart.length; i++) {
        const quantityof = shoppingCart[i];
        if (quantityOf.products.id = 2) {
            console.log(1)
        }
        
                }
            }
            const displayShoppingCart = () => {
                const cartEl = document.querySelector("#cartItems")
                cartEl.innerHTML = ""
                
                let grandTotal = 0
                
                shoppingCart.forEach((product, idx) => {
                    
                    cartEl.innerHTML +=
                    `
                    <section class="shoppingCart__item">
                    <div>${product.name}</div>
                    <div></div>
                    <div>${product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}</div>
                    
                    <button id="${idx}" class="cart_removeButton">Remove</button>
                    </section>
                    `
                    
                    grandTotal += product.price
                })
                
                cartEl.innerHTML += `
                <h3>You owe us: ${grandTotal.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })}</h3>
                `
                
                // Get a reference to all purchase buttons
                const allRemoveButtons = document.querySelectorAll(".cart_removeButton")
                
                // Add a click event listener to each button
                for (const button of allRemoveButtons) {
                    button.addEventListener(
                        "click",
                        (event) => {
                            const indexToRemove = parseInt(event.target.id)
                            shoppingCart.splice(indexToRemove, 1)
                            displayShoppingCart()
                        }
                        )
                        
                    }
                    const newArray = shoppingCart.filter(products => products > 2)
                    console.log(newArray)
                }
                
                
                
                
                









