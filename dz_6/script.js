var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

text = text.toLowerCase();
var array = text.split('. ');
var reverse = [];
var wordArray = [];

for (var i = 0; i < array.length; i++) {
	wordArray[i] = array[i].split(' ');
	reverse[i] = sortBubble(wordArray[i]);
	reverse[i] = capitaliseFirstLetter(reverse[i]);

}

reverse = reverse.join('. ') + '.';
console.log(reverse);

function capitaliseFirstLetter(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function sortBubble(data) {
	var tmp;
	for (var i = data.length - 1; i > 0; i--) {  
		var counter=0;
		for (var j = 0; j < i; j++) {
			if (data[j].length < data[j+1].length) {
				tmp = data[j];
				data[j] = data[j+1];
				data[j+1] = tmp;
				counter++;
			}
		}  
		if(counter==0){
		  break;
		} 
	}
  return data.join(' ');
 };

