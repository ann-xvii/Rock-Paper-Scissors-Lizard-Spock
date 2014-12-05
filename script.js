var userChoice = prompt("Do you choose rock, paper, scissors, lizard or spock?");

var computerChoice = Math.ceil(5 * Math.random());

switch (computerChoice) {
	case 1:
		computerChoice = "rock";
		console.log("The computer chooses: " + computerChoice + "!!");
		break;
	case 2:
		computerChoice = "paper";
		console.log("The computer chooses: " + computerChoice + "!!");
		break;
	case 3:
		computerChoice = "scissors";
		console.log("The computer chooses: " + computerChoice + "!!");
		break;
	case 4:
		computerChoice = "lizard";
		console.log("The computer chooses: " + computerChoice + "!!");
		break;
	case 5:
		computerChoice = "spock";
		console.log("The computer chooses: " + computerChoice + "!!");
		break;
}



var compare = function (userChoice, computerChoice) {
	if (userChoice == computerChoice) {
		alert("It was a tie!");
		return "The result is a tie!";
	} 

	// else if (userChoice === "rock") {
	// 	if (computerChoice === "scissors" || computerChoice === "lizard") {
	// 		return "rock wins!"
	// 	} else {
	// 		return computerChoice + " wins!!"
	// 	}
	// } 

	else if (userChoice === "rock") {
		switch (computerChoice) {
			case "scissors":
				return "Rock crushes scissors!"
				break;
			case "lizard":
				return "Rock crushes Lizard!"
				break;
			case "spock":
				return "Spock vaporizes rock!"
				break;
			case "paper":
				return "Paper covers rock!"
				break;
		}
	}

	else if (userChoice === "paper") {
		switch (computerChoice) {
			case "spock":
				return "Paper disproves Spock!"
				break;
			case "rock":
				return "Paper covers Rock!"
				break;
			case "scissors":
				return "Scissors cut paper!"
				break;
			case "lizard":
				return "Lizard eats Paper!"
				break;
		}
	}

	else if (userChoice === "scissors") {
		switch (computerChoice) {
			case "paper":
				return "Scissors cuts paper!"
				break;
			case "lizard":
				return "Scissors decapitates lizard!"
				break;
			case "spock":
				return "Spock smashes scissors!"
				break;
			case "rock":
				return "Rock smashes scissors!"
				break;
		}
	}

	else if (userChoice === "lizard") {
		switch (computerChoice) {
			case "spock":
				return "Lizard poisons Spock!"
				break;
			case "paper":
				return "Lizard eats Paper!"
				break;
			case "rock":
				return "Rock crushes Lizard!"
				break;
			case "scissors":
				return "Scissors decapitate lizard!"
				break;
		}
	}

	else if (userChoice === "spock") {
		switch (computerChoice) {
			case "rock":
				return "Spock vaporizes Spock!"
				break;
			case "scissors":
				return "Spock smashes scissors!"
				break;
			case "lizard":
				return "Lizard poisons Spock!"
				break;
			case "paper":
				return "Paper disproves Spock!"
				break;
		}
	}
}

console.log(compare(userChoice, computerChoice));

// var compare = function(choice1, choice2) {
//     if (choice1 === choice2) {
//         return "The result is a tie!"
//     }
// }