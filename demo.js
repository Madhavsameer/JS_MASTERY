
//Pallindrom check
function pall(str){
    let rev=""
    for(let i=str.length;i>=0;i--){
        rev+=str.charAt(i);
    }

    if(str===rev){
        return true;
    }

    return false;
}
// console.log(pall("madam"));


//reverse a string
function rev(str){
    let rev=""
    for(let i=str.length;i>=0;i--){
        rev+=str.charAt(i);
    }
    return rev;

}

// console.log(rev("Aditya"));


//Prime check
function prime(num){
    for(let i=2; i<num; i++){
        if(num%i==0){
            return false;
        }
    }

    return true;


}

// console.log(prime(6));



//factorial  of a number
function fact(num){
    let res=1;
    if(num==0 ||num==1){
        return res;
    }
    for(let i=num; i>=1; i--){
        res*=i;
    }
    return res;
}

// console.log(fact(5));



//fibonacci sequence

function fib(num){

    let res=[0,1];
    if(num==0){
        return [];
    }
    if(num==1){
        return [0];
    }
    if(num==2){
        return [0,1];
    }
    for(let i=2; i<num; i++){
        res.push(res[i-1]+res[i-2]);
    }
    return res;
}


// console.log(fib(5))


//swap variables without third variable
function swap(a,b){
    a=a+b;
    b=a-b;
    a=a-b;

    return [a,b];

}

// console.log(swap(5,7));



//remove vowels from a string
function removevowel(str){
    let res=""
    for(let i=0; i<str.length; i++){
        if(str.charAt(i)=='a' ||
         str.charAt(i)=='e' ||
          str.charAt(i)=='i' ||
          str.charAt(i)=='o'  ||
        str.charAt(i)=='o'){
            continue;
        }
        else{
            res+=str.charAt(i);
        }
    }
    return res;
}

// console.log(removevowel("madhav"))


//rotate an array by k posyion to the right
function rotate(arr,k){

    let n=arr.length;
    k = k % n;
    if (k === 0) {
        console.log(arr);
        return;
    }

    let l=arr.length-1;
    arrrev(arr,0,l);
    arrrev(arr,0,k-1);
    arrrev(arr,k,l);
    
    
    console.log(arr);
    function arrrev(arr,left,right){
        while(left<right){
            let temp=arr[left];
            arr[left]=arr[right];
            arr[right]=temp;
            left++;
            right--;
        }
    }

}

// let arr=[1,2,3,4,5];
// rotate(arr,2);


//Bubble sort

function bubblesort(arr){

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr)

}

let arr=[1,8,9,7,5,6,4];
bubblesort(arr);












