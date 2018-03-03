//Define variables
$(document).ready(function(){
    var time = 31;
    var correct = 0
    var incorrect = 0
	var unanswered = 0
	var wins = 0
	var loss = 0

// Questions and Answer Arrays
    var question = ["What day is the longest possible day in the Northern Hemisphere, and the shortest possible day in the Southern Hemisphere?", "When was Pluto discovered?", "Who discovered Pluto?", "What is the largest of Saturn's Moons?", "How many known moons does Jupiter have?", "What is the largest known moon in our Solar System?", "What is the largest Planet in our Solar System?"];

    var answer = ["Summer Solstice", "March 13th, 1930", "Clyde Tombaugh", "Titan", "69", "Ganymede", "Jupiter"];

    var questionOne = ["Summer Solstice", "Winter Solstice", "Autumnal Equinox", "Spring Equinox"]

    var questionTwo = ["March 13th, 1930", "Yesterday", "June 5th, 1926", "March 15th, 1928"]

    var questionThree = ["Clyde Tombaugh", "George R.R. Martin", "Percival Lowell", "Isaac Newton"]

    var questionFour = ["Titan", "Calypso", "Hyperion", "Dione"]

    var questionFive = ["15", "69", "50", "73"]

    var questionSix = ["Titan", "The Moon", "Ganymede", "Callisto"]

    var questionSeven = ["Earth", "Neptune", "Saturn", "Jupiter"]

    setTimeout(firstSet, 0);
	setTimeout(secondSet, 5000);
	setTimeout(thirdSet, 100000);
	setTimeout(fourthSet, 15000);
	setTimeout(fifthSet, 20000);
	setTimeout(sixthSet, 25000);
	setTimeout(seventhSet, 30000)
 	setTimeout(FINAL, 35000);


	//Choice A is Summer Solstice
	function firstSet() {

		$("#question").html(question[0]);
		i++;
		$("#choiceA").html(questionOne[0]);
		$("#choiceB").html(questionOne[1]);
		$("#choiceC").html(questionOne[2]);
		$("#choiceD").html(questionOne[3]);
	};


	//March 13th, 1930 is choiceA
	function secondSet() {
		if (document.getElementById("choiceA").checked){
			wins++
		} else {
			loss++
		};

		$("#question").html(question[1]);
		i++;
		$("#choiceA").html(questionTwo[0]);
		$("#choiceB").html(questionTwo[1]);
		$("#choiceC").html(questionTwo[2]);
		$("#choiceD").html(questionTwo[3]);
	};

	//Clyde Tombaugh is choiceA
	function thirdSet() {
		if (document.getElementById("choiceA").checked){
			wins++
		} else {
			loss++
		};

		$("#question").html(question[2]);
		i++;
		$("#choiceA").html(questionThree[0]);
		$("#choiceB").html(questionThree[1]);
		$("#choiceC").html(questionThree[2]);
		$("#choiceD").html(questionThree[3]);
	};

	//Titan is choiceA
	function fourthSet() {
		if (document.getElementById("choiceA").checked){
			wins++
		} else {
			loss++
		};

		$("#question").html(question[3]);
		i++;
		$("#choiceA").html(questionFour[0]);
		$("#choiceB").html(questionFour[1]);
		$("#choiceC").html(questionFour[2]);
		$("#choiceD").html(questionFour[3]);
	};

	//69 is choiceB
	function fifthSet() {
		if (document.getElementById("choiceB").checked){
			wins++
		} else {
			loss++
		};

		$("#question").html(question[4]);
		i++;
		$("#choiceA").html(questionFive[0]);
		$("#choiceB").html(questionFive[1]);
		$("#choiceC").html(questionFive[2]);
		$("#choiceD").html(questionFive[3]);
	};

	//Ganymede is choiceC
	function sixthSet() {
		if (document.getElementById("choiceC").checked){
			wins++
		} else {
			loss++
		};

		$("#question").html(question[5]);
		i++;
		$("#choiceA").html(questionSix[0]);
		$("#choiceB").html(questionSix[1]);
		$("#choiceC").html(questionSix[2]);
		$("#choiceD").html(questionSix[3]);
	};

	//Jupiter is choiceD
	function seventhSet() {
		if (document.getElementById("choiceD").checked){
			wins++
		} else {
			loss++
		};

		$("#question").html(question[6]);
		i++;
		$("#choiceA").html(questionTwo[0]);
		$("#choiceB").html(questionTwo[1]);
		$("#choiceC").html(questionTwo[2]);
		$("#choiceD").html(questionTwo[3]);
	};

	function FINAL() {
		$('#score').html('wins: ' + wins + ' losses: ' + loss);
	}



	$('button').on('click', function(){
		console.log(this.id);

	})
})