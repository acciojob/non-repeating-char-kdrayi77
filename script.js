function firstNonRepeatedChar(str) {
 const freq={}
	for(i=0;i<str.length;i++)
		{
			freq[str[i]]=(freq[str[i]] || 0)+1;
		}
    for(let x in freq)
		{
			if(freq[x]==1)
			{
			return x;
			}
		}
	return "null";
	 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
