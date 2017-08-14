window.onload = function(){

// target score
var target = Math.floor(Math.random() * 102) +19;

// displaying target score
$("#given-number").html("<p>" + target + "</p>");

console.log("target score " + target);


// wins and losses
var wins = 0;
var losses = 0;

// crystal values
var crystal1 = Math.floor(Math.random() * 12)+1;
var crystal2 = Math.floor(Math.random() * 12)+1;
var crystal3 = Math.floor(Math.random() * 12)+1;
var crystal4 = Math.floor(Math.random() * 12)+1;
console.log("one " + crystal1);
console.log("two " + crystal2);
console.log("three " + crystal3);
console.log("four " + crystal4);


// player score
var playerScore = 0;




// clicking crystal 1 adds to player score
$("#crystal-1").on("click", function(){
	playerScore = playerScore + crystal1;
	console.log(playerScore);
	$("#player-score").html(playerScore);

	// winning condition
	if(playerScore === target){
		// add a win
		wins = wins + 1;
		alert("Win! You repaired the crystal shyp!");
		$("#wins").html("<p>Wins: " + wins + "</p>");
		// reset target score
		target = Math.floor(Math.random() * 102) +19;
		$("#given-number").html("<p>" + target + "</p>");
		console.log("new target " + target);
		// reset player score
		playerScore = 0;
		$("#player-score").html(playerScore);
		// rerandomize crystal values
		crystal1 = Math.floor(Math.random() * 12)+1;
		crystal2 = Math.floor(Math.random() * 12)+1;
		crystal3 = Math.floor(Math.random() * 12)+1;
		crystal4 = Math.floor(Math.random() * 12)+1;
		console.log("new one " + crystal1);
		console.log("new two " + crystal2);
		console.log("new three " + crystal3);
		console.log("new four " + crystal4);

	}
	// losing condition
	else if(playerScore > target){
		// add a loss
		losses = losses + 1;
		alert("Ya blew it");
		$("#losses").html("<p>Losses: " + losses + "</p>");
		// reset target score
		target = Math.floor(Math.random() * 102) +19;
		$("#given-number").html("<p>" + target + "</p>");
		console.log("new target " + target);
		// reset player score
		playerScore = 0;
		$("#player-score").html(playerScore);
		// rerandomize crystal values
		crystal1 = Math.floor(Math.random() * 12)+1;
		crystal2 = Math.floor(Math.random() * 12)+1;
		crystal3 = Math.floor(Math.random() * 12)+1;
		crystal4 = Math.floor(Math.random() * 12)+1;
		console.log("new one " + crystal1);
		console.log("new two " + crystal2);
		console.log("new three " + crystal3);
		console.log("new four " + crystal4);

	}
})

// clicking crystal 2 adds to player score
$("#crystal-2").on("click", function(){
	playerScore = playerScore + crystal2;
	console.log(playerScore);
	$("#player-score").html(playerScore);

	// winning condition
	if(playerScore === target){
		// add a win
		wins = wins + 1;
		alert("Win! You repaired the crystal shyp!");
		$("#wins").html("<p>Wins: " + wins + "</p>");
		// reset target score
		target = Math.floor(Math.random() * 102) +19;
		$("#given-number").html("<p>" + target + "</p>");
		console.log("new target " + target);
		// reset player score
		playerScore = 0;
		$("#player-score").html(playerScore);
		// rerandomize crystal values
		crystal1 = Math.floor(Math.random() * 12)+1;
		crystal2 = Math.floor(Math.random() * 12)+1;
		crystal3 = Math.floor(Math.random() * 12)+1;
		crystal4 = Math.floor(Math.random() * 12)+1;
		console.log("new one " + crystal1);
		console.log("new two " + crystal2);
		console.log("new three " + crystal3);
		console.log("new four " + crystal4);

	}
	// losing condition
	else if(playerScore > target){
		// add a loss
		losses = losses + 1;
		alert("Ya blew it");
		$("#losses").html("<p>Losses: " + losses + "</p>");
		// reset target score
		target = Math.floor(Math.random() * 102) +19;
		$("#given-number").html("<p>" + target + "</p>");
		console.log("new target " + target);
		// reset player score
		playerScore = 0;
		$("#player-score").html(playerScore);
		// rerandomize crystal values
		crystal1 = Math.floor(Math.random() * 12)+1;
		crystal2 = Math.floor(Math.random() * 12)+1;
		crystal3 = Math.floor(Math.random() * 12)+1;
		crystal4 = Math.floor(Math.random() * 12)+1;
		console.log("new one " + crystal1);
		console.log("new two " + crystal2);
		console.log("new three " + crystal3);
		console.log("new four " + crystal4);

	}
})

// clicking crystal 3 adds to player score
$("#crystal-3").on("click", function(){
	playerScore = playerScore + crystal3;
	console.log(playerScore);
	$("#player-score").html(playerScore);

	// winning condition
	if(playerScore === target){
		// add a win
		wins = wins + 1;
		alert("Win! You repaired the crystal shyp!");
		$("#wins").html("<p>Wins: " + wins + "</p>");
		// reset target score
		target = Math.floor(Math.random() * 102) +19;
		$("#given-number").html("<p>" + target + "</p>");
		console.log("new target " + target);
		// reset player score
		playerScore = 0;
		$("#player-score").html(playerScore);
		// rerandomize crystal values
		crystal1 = Math.floor(Math.random() * 12)+1;
		crystal2 = Math.floor(Math.random() * 12)+1;
		crystal3 = Math.floor(Math.random() * 12)+1;
		crystal4 = Math.floor(Math.random() * 12)+1;
		console.log("new one " + crystal1);
		console.log("new two " + crystal2);
		console.log("new three " + crystal3);
		console.log("new four " + crystal4);

	}
	// losing condition
	else if(playerScore > target){
		// add a loss
		losses = losses + 1;
		alert("Ya blew it");
		$("#losses").html("<p>Losses: " + losses + "</p>");
		// reset target score
		target = Math.floor(Math.random() * 102) +19;
		$("#given-number").html("<p>" + target + "</p>");
		console.log("new target " + target);
		// reset player score
		playerScore = 0;
		$("#player-score").html(playerScore);
		// rerandomize crystal values
		crystal1 = Math.floor(Math.random() * 12)+1;
		crystal2 = Math.floor(Math.random() * 12)+1;
		crystal3 = Math.floor(Math.random() * 12)+1;
		crystal4 = Math.floor(Math.random() * 12)+1;
		console.log("new one " + crystal1);
		console.log("new two " + crystal2);
		console.log("new three " + crystal3);
		console.log("new four " + crystal4);

	}
})

// clicking crystal 4 adds to player score
$("#crystal-4").on("click", function(){
	playerScore = playerScore + crystal4;
	console.log(playerScore);
	$("#player-score").html(playerScore);

	// winning condition
	if(playerScore === target){
		// add a win
		wins = wins + 1;
		alert("Win! You repaired the crystal shyp!");
		$("#wins").html("<p>Wins: " + wins + "</p>");
		// reset target score
		target = Math.floor(Math.random() * 102) +19;
		$("#given-number").html("<p>" + target + "</p>");
		console.log("new target " + target);
		// reset player score
		playerScore = 0;
		$("#player-score").html(playerScore);
		// rerandomize crystal values
		crystal1 = Math.floor(Math.random() * 12)+1;
		crystal2 = Math.floor(Math.random() * 12)+1;
		crystal3 = Math.floor(Math.random() * 12)+1;
		crystal4 = Math.floor(Math.random() * 12)+1;
		console.log("new one " + crystal1);
		console.log("new two " + crystal2);
		console.log("new three " + crystal3);
		console.log("new four " + crystal4);

	}
	// losing condition
	else if(playerScore > target){
		// add a loss
		losses = losses + 1;
		alert("Ya blew it");
		$("#losses").html("<p>Losses: " + losses + "</p>");
		// reset target score
		target = Math.floor(Math.random() * 102) +19;
		$("#given-number").html("<p>" + target + "</p>");df
		console.log("new target " + target);
		// reset player score
		playerScore = 0;
		$("#player-score").html(playerScore);
		// rerandomize crystal values
		crystal1 = Math.floor(Math.random() * 12)+1;
		crystal2 = Math.floor(Math.random() * 12)+1;
		crystal3 = Math.floor(Math.random() * 12)+1;
		crystal4 = Math.floor(Math.random() * 12)+1;
		console.log("new one " + crystal1);
		console.log("new two " + crystal2);
		console.log("new three " + crystal3);
		console.log("new four " + crystal4);

	}
})












}