// the fullvideo id is used to create functions to pause and play the video which is called on the thumbnail and the x
// the modalvideo id, which includes the video and the x, is used to create functions to show and collapse the modal which is also called on the thumbnail and x
function openVideo() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('fullVideo');
    video.play();
    modal.style.display = 'flex';
}
function closeVideo() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('fullVideo');
    video.pause();
    video.currentTime = 0;
    modal.style.display = 'none';
}

const sign = document.getElementById('modalSign');
function openModal(){
    sign.style.display = 'block';
}
function closeModal(){
    sign.style.display = 'none';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == sign) {
    sign.style.display = "none";
  }
}

const signIn = document.getElementById('signIn');
function openSignIn(){
    signIn.style.display = 'block'
}
function closeSignIn(){
    signIn.style.display = 'none';
}
// when the person clicks on the background the modal should close
window.onclick = function(event){
    if(event.target == signIn){
        signIn.style.display = 'none';
    }
}




// tab change functions
const btns = document.querySelectorAll(".tabButtons");
const tabs = document.querySelectorAll(".tabs");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btns.forEach(button => button.classList.remove("active"))
        btn.classList.add("active")

        tabs.forEach(tab => tab.classList.remove("active"))
        const tabId = btn.getAttribute("data-tab")

        document.getElementById(tabId).classList.add("active")
    })
});