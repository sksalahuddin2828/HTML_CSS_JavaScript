const { dialog, app } = require('electron').remote;
const path = require('path');
const { spawn } = require('child_process');

// Function to select a file
function selectFile() {
  const files = dialog.showOpenDialogSync({
    title: 'Select an audio file',
    filters: [
      { name: 'Audio Files', extensions: ['mp3', 'wav', 'ogg'] }
    ]
  });
  
  return (files && files.length > 0) ? files[0] : '';
}

// Function to play the selected file
function playMusic(filePath) {
  const player = spawn('ffplay', ['-nodisp', '-autoexit', filePath]);

  player.on('exit', () => {
    player.kill();
  });

  return player;
}

// Function to stop the music
function stopMusic(player) {
  if (player) {
    player.kill('SIGTERM');
  }
}

function main() {
  let filePath = selectFile();
  let player;

  if (filePath) {
    player = playMusic(filePath);
  }

  while (true) {
    console.log('1. Select a file');
    console.log('2. Stop music');
    console.log('3. Exit');
    const choice = prompt('Enter your choice: ');

    switch (choice) {
      case '1':
        filePath = selectFile();
        if (filePath) {
          stopMusic(player);
          player = playMusic(filePath);
        }
        break;
      case '2':
        stopMusic(player);
        player = null;
        break;
      case '3':
        stopMusic(player);
        app.quit();
        break;
      default:
        console.log('Invalid choice. Please enter 1, 2, or 3.');
    }
  }
}

main();
