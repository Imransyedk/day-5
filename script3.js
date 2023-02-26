
//////ques.1 anonymous funtion////

///////a.)print odd number in array/////
function oddnum(Array){
    let arr=[];
    for(let i=0; i<Array.length; i++){
        if(i%2!=0){
            arr.push(Array[i]);
        }
    }

    return arr;
}
console.log(oddnum([2,3,4,5,6]));

/////////b.)convert all the string to title caps in a string array////

string="learn from guvi geek"
 function titlecase(){
  return string.split(' ').map(function(title){
      return title.replace(title[0],title[0].toUpperCase());
      
  }).join(" ");
         
 }
 console.log("the conversion became : \n" , titlecase());

 /////////c.) sum of all number in an array/////

 function sum(arr){
    var s=0;
    for(var i=0;i<arr.length;i++){
        s=s+arr[i];
    }
    return s;
}
console.log(sum([1,2,3,4,5]));

////////d.) return all the prime numbers in a array////
function a(num){
    var prime=[];
    for(var i=0; i<=num; i++){
        var notprime=false;
        for(var j=2; j<=i; j++){
            if(i%j==0 && j!=i){
                notprime=true;
                
            }
        }
        if(notprime=== false){
            prime.push(i);
        }
    }
    return prime;
}
console.log(a(10));


////////e.) return all the palindromesin an array//
function palindrome(str){
    var l=str.length -1;
    for(var i=0;i< l/2; i++){
        var x=str[i];
        var y=str[l-i];
        if(x==y){
            return str;
        }
    }
    return false;
}function ispalindrome(str){
    var result = palindrome(str);
if(result==true){
    console.log("the string is palindrome");}
    else{
        console.log("the string is not palindrome");
    }
}
    
    

console.log (palindrome("dad"));

/////////f.) return median of two sorted arrays of the same size/////

function getMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
 
    for (count = 0; count <= n; count++)
    {
        
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
       
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");

    ///////// g.) remove duplicates from an array//////
    var arr =[2,3,4,5,2,6,7,2,];
function removeduplicates(data){
    let duplicate=[];
    data.forEach(element=>{
        if(!duplicate.includes(element)){
            duplicate.push(element)
        }
    });

    return duplicate;
}
console.log(removeduplicates(arr));

/////////// h.) rotate an array by K times/////
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
  
Rotate(Array, N, K); 

function Rotate(a, n, k)
{
    
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
            console.log(a[n + i - k] + " ");
        }
        else {
            console.log((a[i - k]) + " ");
        }
    }
   
}

  

///Questin.2 arrow function//////
///////a.)print odd number in array/////

oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
if(array[i]%2!=0){
console.log(array[i])
} 
}

return arr;
}
console.log(oddNumbers([2,3,4,5,6]));

/////////b.)convert all the string to title caps in a string array////

String="learn from guvi geek"
  titlecase=(string)=>{
  return String.split(' ').map(function(title){
      return title.replace(title[0],title[0].toUpperCase());
      
  }).join(" ");
         
 }
 console.log("the conversion became : \n" , titlecase());

 //////c.) sum of all number in an array/////


 sum=(arr)=>{
    var s=0;
    for(var i=0;i<arr.length;i++){
        s=s+arr[i];
    }
    return s;
}
console.log(sum([1,2,3,4,5]));

/////////d.) return all the prime numbers in a array////
a=(num)=>{
    var prime=[];
    for(var i=0; i<=num; i++){
        var notprime=false;
        for(var j=2; j<=i; j++){
            if(i%j==0 && j!=i){
                notprime=true;
                
            }
        }
        if(notprime=== false){
            prime.push(i);
        }
    }
    return prime;
}
console.log(a(10));

////////e.) return all the palindromesin an array//
palindrome=(str)=>{
    var l=str.length -1;
    for(var i=0;i< l/2; i++){
        var x=str[i];
        var y=str[l-i];
        if(x==y){
            return str;
        }
    }
    return false;
 }

function ispalindrome(str){
    var result = palindrome(str);
if(result==true){
    console.log("the string is palindrome");}
    else{
        console.log("the string is not palindrome");
    }

}

    console.log(palindrome("mom"));


      ///////////ques.1 IIFE ////////
///////a.)print odd number in array/////

(function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4])

   
    ////////b.)convert all the string to title caps in a string array////


    (function (str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        } 
        return str.join(' ');
      })("my name is john");

      ////////c.) sum of all number in an array/////


      (function(array){
        var sum = 0;
             for(var i = 0 ; i< array.length ; i++){
                sum = sum + array[i];
              }
              return sum;
        })([1,2,3,4])

        /////////d.) return all the prime numbers in a array////

        (function(numArray){
               numArray = numArray.filter((number) => {
                 for (var i = 2; i <= Math.sqrt(number); i++) {
                   if (number % i === 0) return false;
                 }
                 return true;
               });
               console.log(numArray);
           })([1,2,3,4])

           ///////////e.) return all the palindromesin an array//

           (  function (arr, n){

            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3] , 3)

        ////////f.) return median of two sorted arrays of the same size/////


        (function(array){
            let dup = [...new Set(array)];
            console.log(dup);
           })([1,1,2,3,4])
///////e.) return all the palindromesin an array//

(function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })([1,2,3,4] , 2)

///////////