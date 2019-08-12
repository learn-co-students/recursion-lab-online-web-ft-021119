function printString(word){
 console.log(word[0])
 if(word.length >1){

 	let myNewWord = word.substring(1, word.length);
 	printString(myNewWord)
 }else{
 	return true;
 }


}


function reverseString(word){
	

	if(word.length > 1){
let myNewWord = word.substring(1, word.length);

return reverseString(myNewWord) + word[0];
}else{
return word
}
}


function isPalindrome(word){

if(word.length === 1){
	return true

}else if(word[0] === word[word.length-1]){
	return isPalindrome(word.substring(1, word.length-1))
}else{
	return false
}

}

function addUpTo(num, index){
console.log(num)
if(index == 0){
	return num[index]
 

}else {

	return addUpTo(num, index-1) + num[index]
}
}

function maxOf(nums){
	if(nums.length === 1){
		return nums[0]
	}else{
		const theNum = nums.shift()
		const maxOfArray = maxOf(nums)
		if (theNum > maxOfArray) {
			return theNum
		}else{
			return maxOfArray


	}
}

}
function includesNumber(array, element){
console.log(array)
console.log(element)
if (array.length == 1 ){
	if(array[0] == element){
		return true}
		else{
			return false
		}
}else {
	const theFirstNum = array.shift()
	return (theFirstNum == element) || includesNumber(array,element)
}
}
