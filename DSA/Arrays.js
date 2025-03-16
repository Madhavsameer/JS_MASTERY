// Two Sum
function twosum(arr, target){
    let ans=[];
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++ ){
            if(arr[i]+arr[j]==target){
                ans.push(i);
                ans.push(j);
                return ans;

            }
        }
    }
}

let arr=[1,2,2,5,3,4,4,4,4];
// let target=9;
// console.log(twosum(arr,target))


//Remove Duplicates

function rd(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]==arr[j]){
                console.log(arr[j]);
                break;
            }
        }
    }
    console.log(arr);
}

// rd(arr);


//Rotate array by kth right position
function rotate(arr,k){
    reverse(arr,0,arr.length-1);
    reverse(arr,0,k-1);
    reverse(arr,k,arr.length-1);

}
function reverse(arr,left,right){
    while(left<right){
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left++;
        right--;
    }
}

// rotate(arr,3);
// console.log(arr);


//check if array is sorted
function ca(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }

    return true;

}

// console.log(ca(arr));

let arr2=[1,2,3,4,5,6,8,9,10];
function missing(arr2,n){
    // let os=n*(n+1)/2;
    // let sum=0;
    // for(let i=0; i<arr.length; i++){
    //     sum+=arr2[i];
    // }
    // return os-sum;
    for(let i=0; i<arr2.length;i++){
        if(arr2[i+1]-arr2[i]!=1){
            return arr2[i]+1;
        }
    }
}
console.log(missing(arr2,10));






