// window.onscroll = function() {myFfnction};

// function myFunction(){
//     if(document.body.scrollTop>100 || document.documentElement.scrollTop > 100) {
//         document.getElementById("myP").className="test";
//     }
//     else{
//         document.getElementById("myP").className="";
//     }
// }

const header = document.getElementById('myP')

window.addEventListener('scroll', function() {
    if(window.pageYOffset >= 58) {
        header.classList.add('change')
    } else {
        header.classList.remove('change')
    }
})