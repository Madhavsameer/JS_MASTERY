function* table(num){
   let count=1;
    while(count<=10){
        yield num*count;
        count++;
    }

}

const print=table(5);

let i=1;
while(i<=10){
    console.log(print.next());
    i++;
}