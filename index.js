document.addEventListener('DOMContentLoaded', () => {
  const viewProjectsBtn = document.getElementById('viewProjectsBtn')
  const audio = new Audio(
    'https://res.cloudinary.com/dq4yjeejc/video/upload/v1722331324/Magical-Moments-chosic.com__z3kesq.mp3',
  )

  // Set audio to loop
  audio.loop = true

  // Play the audio
  audio.play()

  // Add a click event listener to the button to play audio
  viewProjectsBtn.addEventListener('click', () => {
    audio.play()
  })
})
