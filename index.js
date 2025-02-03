
document.addEventListener("DOMContentLoaded", () =>{

    const showControllerButton = document.getElementById('showMusic');
    const controller = document.getElementById('audioController');
    
    controller.hidden = true;
    
    showControllerButton.addEventListener('click', toggleAudioControllerVisibility);
    
    function toggleAudioControllerVisibility() {
        
        if (controller.hidden) {
            showControllerButton.textContent = 'Hide music';
        }
        else{
            showControllerButton.textContent = 'Some music?';
        }
        
        controller.hidden = !controller.hidden;
    }
    
    // const playButton = document.getElementById('playMusic');
    // playButton.addEventListener('click', playAudio)
    //
    // function playAudio() {
    //     const audioElements = document.getElementsByTagName('audio');
    //     for (const element of audioElements) {
    //         element.play()
    //     }
    // }
    
})

