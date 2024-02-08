function receivesAFunction(carBrands){
    carBrands();
  }
function returnsANamedFunction(){
    return function namedFunction(){
    }
}
function returnsAnAnonymousFunction(){
    return function(){
    }
}