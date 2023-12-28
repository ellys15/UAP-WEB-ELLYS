var products = [];

function addProduct() {
    var productName = document.getElementById('productName').value;
    var productCode = document.getElementById('productCode').value;
    var productPrice = parseFloat(document.getElementById('productPrice').value);
   // var productQuantity = document.getElementById('Jumlah Barang').value

    if (isNaN(productPrice) || productPrice <= 0) {
        alert('Harga barang harus angka dan lebih dari 0.');
        return;
    }

    var product = {
        name: productName,
        code: productCode,
        price: productPrice,
        //qyt : productQuantity
    };

    products.push(product);

    displayProducts();

    calculateTotal();

    pembayaran();
}

function displayProducts() {
    var productListElement = document.getElementById('productList');
    productListElement.innerHTML = '';

    products.forEach(function(product) {
        var listItem = document.createElement('li');
        listItem.textContent = `${product.name} (Kode: ${product.code}) - Rp.${product.price.toFixed(3)}`;
        productListElement.appendChild(listItem);
    });
}

function calculateTotal() {
    var totalPriceElement = document.getElementById('totalPrice');

    var total = products.reduce(function(sum, product) {
        return sum + product.price;
    }, 0);

    alert(`Total: Rp.${total.toFixed(3)}`);
}

function pembayaran(){
    var totalBayarElement = document.getElementById('totalKembalian');

    var bayar = products.reduce(function(min, calculateTotal){
        return min - calculateTotal;
    })
    //alert (`Masukkan Uang : Rp.${uang.toFixed(3)}`);
    alert (`Total Kembalian Anda : Rp.${bayar.toFixed(3)}`);
}