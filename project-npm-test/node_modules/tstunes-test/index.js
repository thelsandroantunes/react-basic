class Calc {

  sum(x,y){

    return x + y;

  }

  sub(x,y){

    return x - y;
  }

  mult(x,y){
    return x * y;
  }

  div(x,y){
    if (x >y) {
      return x / y;  
    }else if (y > x ) {
      return y / x;
    }else if (x == y) {
      return 1
    }
    
  }

}

module.exports = new Calc