# tamagotchi_project_0
First SEI project - create a tomagotchi

Project Name: Thrash Metal Pet Game

Objectives:
- The user will create a pet guitarist. They will feed the guitarist beer, make them practice, and allow them to vent by trashing their dressing room. If any of these metrics are not regulated the guitarist will quit the band.

UI:
- The user will be greeted with a window prompting them to name their guitarist, and set the guitarist's age.
- After they have named their guitarist the window will disappear and reveal the main screen:
- The main screen will consist of a header, a main gameplay are, and a footer. 
  - In the header the pet's name and age will be displayed in each corner. The pet's age will increase by 1 at set intervals as the game continues.
  - The main game area will contain metric bars, metric buttons, and the player's pet avatar. The bars will be positioned horizontally stacked on top of one another at the top fo the maine game area. From top to bottom they will be labeled "Rage Level", "Beer Level" and "Skill level". Above each bar there will be a corresponding button. From top to bottom the buttons will be labeled "Trash Dressing Room", "Drink", and "Practice". Beneath the buttons and metric bars, the player's pet will be centered between to guitar amps.
  - The footer will display a message telling the player what point of progression their pet is at.
  

Gameplay:
- The game will begin with the player's "Beer Level" and "Skill Level" set to 100, and the "Rage Level" set to 0. The "Beer Level" and "Skill Level" bars will empty at set time intervals as time progresses. The "Rage Level" bar will fill. If either the "Beer Level or "Skill Level" bars hit 0, the game will end, and the user will be greeted with a message telling them their pet has quit the band. If the "Rage Level" hits 100, the game will end, and the user will be greeted with a message telling them their pet has quit the band.
- To refill the "Beer" bar, the player will hit the "Drink" button. The "Drink" button will increase the "Beer Level" while also decreasing the "Skill" level. It will also trigger a sound effect, as well as an animation on the player's pet.
- To refill the "Skill" bar, the player will hit the "Practice" button. The "Practice" button will increase the "Skill Level" while also decreasing the "Beer" level. It will also trigger a sound effect, as well as an animation on the player's pet.
- To empty the "Rage" bar, the player will hit the "Trash the Dressing Room" button. The "Trash The Dressing Room Button" will set the "Rage Level" back to zero, while also triggering a sound effect and animation. 
- If the player is able to keep their pet alive long enough, the pet will undergo a visual transformation. The game continues until one of the metrics trigger's the end of the game.

