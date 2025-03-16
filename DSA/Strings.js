//Reverse a String
function reverse(str){

    let result="";
    for(let i=str.length; i>=0;i--){
        result+=str.charAt(i);
    }

    return result;
}

// console.log(reverse("Madhav"));


//Pallindrome String
function pall(str){
    str=str.toLowerCase();
    let rev="";
    for(let i=str.length; i>=0;i--){
        rev+=str.charAt(i);
    }

    if(rev===str){
        return true;
    }
    else{
        return false;
    }

}

// console.log(pall("Mam"));

function anagram(str1,str2){
    if(str1.length!=str2.length){
        return false;
    }
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    let char1=[];
    let char2=[];
    for(let i=0;i<str1.length;i++){
        char1.push(str1.charAt(i));
    }
    for(let i=0;i<str2.length;i++){
        char2.push(str2.charAt(i));
    }
    char1.sort();
    char2.sort();
    str1=char1.toString();
    str2=char2.toString();
    if(str1===str2){
        return true;
    }
    else{
        return false;
    }
}

console.log(anagram("mada","dam"))

//first unique chracter

function firstUnique(str){
    let index=1;
    for(let i=0; i<str.length;i++){
        
        
    }
}


