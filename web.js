
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })

        };
    });

 


let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);





    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};



ScrollReveal({
    
    // reset: true,
    distance: '80px',
    duration:2000,
    delay:200

});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'bottom'});

ScrollReveal().reveal('.home-content h1, .about-img ', {origin:'left'});

ScrollReveal().reveal('.home-content p, .about-content ', {origin:'right'});


const typed = new Typed('.multiple-text',{
    strings:['FullStack Developer','Applications Developer','Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})



// document.getElementById('.face').addEventlistener
// ('click',function(){

//     window.location.href = 
//      'https://www.facebook.com';
// }
// );



const mybt = document.getElementById("face");
const mytle = document.getElementById("tele");
const myins = document.getElementById("insta");
const mygit = document.getElementById("github");

mybt.addEventListener("click",function(e){

    location.href = 'https://www.facebook.com/gdyjhthtsd234/';
});


mytle.addEventListener("click",function(e){

    location.href = 'https://t.me/apo_software';
});


myins.addEventListener("click",function(e){

    location.href = 'https://www.instagram.com/xr_apo/';
});


mygit.addEventListener("click",function(e){

    location.href = 'https://github.com/AbdullahHaitham20';
});


const form = document.querySelector('form');
const full = document.getElementById("full")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const Message = document.getElementById("Message")



function sendEmail (){

    const bodyMessage = `Full Name: ${full.value}<br>
    Email:${email.value}<br> Phone Number${phone.value}<br>Message
    ${Message.value}<br>`;



    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abdohaitham13@gmail.com",
        Password : "C263975126692E30CF6BDB2991B1EBBECDF9",
        To : 'abdohaitham13@gmail.com',
        From : "abdohaitham13@gmail.com",
        Subject :subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "I will Reply to you Very soon!",
                icon: "success"
              });
        }
      }
    );
}


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
})