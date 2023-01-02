const janji = new Promise(function(resolve,reject){
    if(true){
  resolve('promise aceepted')
  }else{
    reject('promise gagal');
  }
})

janji.then(function(result){
    console.log(result);
}).catch(error => console.log(error))