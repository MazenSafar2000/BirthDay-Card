// // Show landing page after the countdown video ends
// document.getElementById("intro-video").addEventListener("ended", function () {
//   document.getElementById("countdown-video").style.display = "none";
//   document.getElementById("landing").classList.remove("hidden");
//   // Play background music
//   const music = document.getElementById("bg-music");
//   music.play();
// });

// function showContent() {
//   // Stop background music when entering the surprise section
//   const music = document.getElementById("bg-music");
//   music.pause();
//   music.currentTime = 0; // Reset the music

//   document.getElementById("landing").style.display = "none";
//   document.getElementById("surprise-content").classList.remove("hidden");
// }

// Function to start music and show the surprise content
function startMusicAndShowContent() {
  // Play background music once
  const music = document.getElementById('bg-music');
  music.play().catch(function(error) {
      console.log('Music play failed: ', error);
  });

  // Hide the landing section and show the surprise content
  document.getElementById('landing').style.display = 'none';
  document.getElementById('surprise-content').classList.remove('hidden');
}

