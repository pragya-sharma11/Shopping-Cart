function fetch(done){
    $.get('/api/products', (data)=>{
        done(data);
    })
}