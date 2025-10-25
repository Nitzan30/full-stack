class Product {
    id;
    name;
    price;
    link;
    category;
    constructor(id, name, price, link, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.link = link;
        this.category = category;
    }
}
// Creating the product arr
const productList = [];
let productIdCounter = 1;// for the delete buttonn

function addProduct(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const price = +form.price.value;
    const linkA = form.link.value;
    const category = form.category.value;
    
    const product = new Product(productIdCounter++, name, price, linkA, category);
    productList.push(product);
    // console.log(product);
    // console.log('All products:', productList);
    form.reset();
    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById("productTableBody");
    tableBody.innerHTML = '';
    // Loading all products for rows creation 
    for (let i = 0; i < productList.length; i++) {
    const product = productList[i]; 
    const row = document.createElement('tr');//creating row
    
    // Create each cell separately
    const nameCell = document.createElement('td');//creating cell for name
    nameCell.innerText = product.name;
    
    const priceCell = document.createElement('td');//creating cell for price
    priceCell.innerText = product.price;
    
    const categoryCell = document.createElement('td');//creating cell for category
    categoryCell.innerText = product.category;
    
    const pictureCell = document.createElement('td');//creating cell for picture
    const img = document.createElement('img');
    img.src = product.link;
    pictureCell.appendChild(img);
    
    const actionsCell = document.createElement('td');//creating cell for action -the button 
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = 'Delete the Product';
    deleteBtn.onclick = function() {
        deleteProduct(product.id);
    };
    actionsCell.appendChild(deleteBtn);
    
    // Add all cells to the row - one row
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(categoryCell);
    row.appendChild(pictureCell);
    row.appendChild(actionsCell);
    
    // Add the row to the table
    tableBody.appendChild(row);
}
}
function deleteProduct(productId) {
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].id === productId) {
            // Remove the product from the productList
            productList.splice(i, 1);
            // Update the table 
            updateTable();
            break; //no need bcs we found the matched ID 
        }
    }
}