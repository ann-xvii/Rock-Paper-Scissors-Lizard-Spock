// when user presses play, call prompt user for selection
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var lizard = document.getElementById("lizard");
var spock = document.getElementById("spock");
var result = document.getElementById("result");
var userSide = document.getElementById("userPick");
var computerSide = document.getElementById("computerPick");
var winner = document.getElementById("winnerPick");
var userScore = 0;
var computerScore = 0;
var itsADraw = 0;
var pick;
var userChoice;


function showWinner(userChoice, computerChoice){
	if (userChoice === "rock") {
		if (computerChoice === "scissors" || computerChoice === "lizard") {
			userScore += 1;
			console.log("Your score is: ", userScore);
			return pick = "You Win!";
		} else if (computerChoice === "spock" || computerChoice === "paper") {
			computerScore += 1;
			console.log("Computer score is: ", computerScore);
			return pick = "Comp Wins!"
		}
	}

	if (userChoice === "paper") {
		if (computerChoice === "spock" || computerChoice === "rock") {
			userScore += 1;
			console.log("Your score is: ", userScore);
			return pick = "You Win!";
		} else if (computerChoice === "scissors" || computerChoice === "lizard") {
			computerScore += 1;
			console.log("Computer score is: ", computerScore);
			return pick = "Comp Wins!"
		}
	}

	if (userChoice === "scissors") {
		if (computerChoice === "paper" || computerChoice === "lizard") {
			userScore += 1;
			console.log("Your score is: ", userScore);
			return pick = "You Win!";
		} else if (computerChoice === "rock" || computerChoice === "spock") {
			computerScore += 1;
			console.log("Computer score is: ", computerScore);
			return pick = "Comp Wins!"
		}
	}

	if (userChoice === "lizard") {
		if (computerChoice === "spock" || computerChoice === "paper") {
			userScore += 1;
			console.log("Your score is: ", userScore);
			return pick = "You Win!";
		} else if (computerChoice === "scissors" || computerChoice === "rock") {
			computerScore += 1;
			console.log("Computer score is: ", computerScore);
			return pick = "Comp Wins!"
		}
	}

	if (userChoice === "spock") {
		if (computerChoice === "rock" || computerChoice === "scissors") {
			userScore += 1;
			console.log("Your score is: ", userScore);
			return pick = "You Win!";
		} else if (computerChoice === "lizard" || computerChoice === "paper") {
			computerScore += 1;
			console.log("Computer score is: ", computerScore);
			return pick = "Comp Wins!"
		}
	}

	if (userChoice === computerChoice) {
		return pick = "BAZINGA!!!"
	}

}

// IMPLEMENTING AN ACTUAL SCOREBOARD!!!
function printScore() {
	if (userScore > computerScore) {
		console.log("You're in the lead!");
	} 	else if (userScore === computerScore) {
		console.log("It's a tie!");
	} else {
		console.log("Comp in the lead!")
	}
	console.log("Totals: \n", "\tYou: " + userScore, "\n\tComp: " + computerScore);

}



// SET COMPUTER CHOICE BASED ON MATH.RANDOM * 5, ROUNDED UP USING CEILING TO GET NUMBERS BETWEEN 1 AND 5
var computerChoice = function(){
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
	return computerChoice;
};

// CALL COMPARE FUNCTION TO SEE WHO WINS!
// UPDATE TEXT ON SCREEN SO YOU KNOW WHAT YOU AND THE COMPUTER PICKED!
function printResult(userChoice, computerChoice, pick) {
	result.innerHTML = compare(userChoice, computerChoice);
	// visualize the comparison by printing them to the screen!
	userSide.innerHTML = userChoice;
	computerSide.innerHTML = computerChoice;
	// write whether You Win or Comp Wins
	// the showWinner function sets the value of pick based on the current choices of the user and the computer
	winner.innerHTML = showWinner(userChoice, computerChoice)

	// change image background from game board to Sheldon win or loss images, for 5 seconds, then click image to play again
		// image 100% opacity for 3 sec
		// overlay a red button for play again

	// to select the correct image, have a function that takes computer or user, and when computer or user wins, updates a value of a variable.
		// the variable will be the argument of the function that changes the picture to and from the win page.  
}

// EVENT HANDLERS
// SET USER CHOICE VARIABLE BASED ON BUTTON CLICKED BY USER
rock.addEventListener("click", function() {
	 userChoice = "rock";
	 result.style.visibility = "visible";
	 printResult(userChoice, computerChoice(), pick);
});

paper.addEventListener("click", function() {
	 userChoice = "paper";
	 result.style.visibility = "visible";
	 printResult(userChoice, computerChoice(), pick);	 
});

scissors.addEventListener("click", function() {
	 userChoice = "scissors";
	 result.style.visibility = "visible";
	 printResult(userChoice, computerChoice(), pick);
});

lizard.addEventListener("click", function() {
	 userChoice = "lizard";
	 result.style.visibility = "visible";
	 printResult(userChoice, computerChoice(), pick);
});

spock.addEventListener("click", function() {
	 userChoice = "spock";
	 result.style.visibility = "visible";
	 printResult(userChoice, computerChoice(), pick);
});


// COMPARE FUNCTION DEFINES THE OUTCOME OF THE USER'S CHOICE VS THE COMPUTER'S CHOICE!
var compare = function (userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		itsADraw += 1;
		return "The result is a tie!";
	} 

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
				return "Scissors cut paper!"
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
				return "Spock vaporizes Rock!"
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
};



