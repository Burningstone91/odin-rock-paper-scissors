function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3)
  return choices[random]
}