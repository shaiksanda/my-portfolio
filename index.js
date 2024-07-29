// Get the button and audio elements
const viewProjectsBtn = document.getElementById('viewProjectsBtn')
const audio = new Audio(
  'https://res.cloudinary.com/dq4yjeejc/video/upload/v1722134393/beat_2_e8o29r.wav',
)

// Add a click event listener to the button
viewProjectsBtn.addEventListener('click', () => {
  // Play the audio
  audio.play()
})
