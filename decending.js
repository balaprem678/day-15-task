let a , b, c;
a = 60;
b = 80;
c = 90;
if(a > b && a > c){
  if(b > c ){
    console.log("print  : " + a + " , " + b + " ," +c);
  }
  else{
    console.log("print  : " + a + " , " + c + " ," +b);
  }
}
else if(b > a && b > c){
  if(a > c){
    console.log("print  : " + b + " , " + a + " ," +c);
  }
  else{
    console.log("print  : " + b + " , " + c + " ," +a);
  }
}
else{
  if(a > b){
    console.log("print  : " + c + " , " + a + " ," +b);
  }
  else{
    console.log("print  : " + c + " , " + b + " ," +a);
  }
}