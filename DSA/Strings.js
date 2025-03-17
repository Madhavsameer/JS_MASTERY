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


//Anagram
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

// console.log(anagram("mada","dam"))

//first unique character

function firstUnique(str){
    str=str.toLowerCase();
    
    console.log(str);
    let char=[];
    for(let i=0; i<str.length;i++){
        char.push(str.charAt(i));
    }
    for(let i=0;i<char.length;i++){
        for(let j=0; j<char.length; j++){
            if(char[i]!=char[j]){
                continue;
            }
            
        }
        
    }
    
    console.log(char)
    
}
// console.log(firstUnique("Madhav"));





//count vowel and consonants
function cvc(str){
    str=str.toLowerCase();
    let v=0;
    let c=0;
    for(let i=0; i<str.length; i++){
        if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || 
        str.charAt(i)=='o' ||
        str.charAt(i)=='u'){
            v++;
        }
        else{
            c++;
        }
    }
    console.log("Number of vowels: "+v);
    console.log("Number of consonants: "+c);
}

// cvc("sameer");

function stringcompress(str){
    let res=""
    
    for(let i=0; i<str.length; i+=count){
        res+=str.charAt(i);
        var count=1;
        for(let j=i+1; j<=str.length;j++){
            if(str.charAt(j)==str.charAt(i)){
                count++;
                
            }
            
        }
        
        res+=count;
    }

    return res;


}
console.log(stringcompress("aaabbcc"));

