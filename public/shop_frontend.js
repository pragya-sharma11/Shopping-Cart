function fetch(done){
    $.get('/api/products', (data)=>{
        done(data);
    })
}
function createProduct(product){
    return $(`
    <div class='col-4 card mx-2 p-2'>
        <h4 class="product-name">${product.name}</h4>
        <div class="product-manufacturer">${product.manufacturer}</div>
        <div class="row">
            <div class="col m-3 p-3"><b>Rs.${product.price}</b></div>
            <button class="btn btn-primary col m-3 p-1">Buy</button>
        </div>
    </div>
    `)
}