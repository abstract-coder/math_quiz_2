// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input

player1 = document.getElementById("player1_name_input").value;
player2 = document.getElementById("player2_name_input").value;

  // Store these values locally

localStorage.setItem("player_1", player1);
localStorage.setItem("player_2", player2);

  //Assign "game_page.html" to window.location
  window.location.replace("index.html");
}