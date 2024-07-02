
const button = document.getElementById('whatsapp-button');
const phone_number = "+2348149364901"; 
const message = "Hello, I'm contacting from your site, Can I get a tattoo";
button.addEventListener('click', () => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phone_number)}&text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  });

const button1 = document.getElementById('whatsapp-button1');
const phone_number1 = "+2349122140041"; 
const message1 = "Hello,I would like to get a website";
button1.addEventListener('click', () => {
const whatsappUrl1 = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phone_number1)}&text=${encodeURIComponent(message1)}`;
window.open(whatsappUrl1, '_blank');
  });

const button2 = document.getElementById('instagram-button');
const instagramUrl = "https://www.instagram.com/fixmebynf/";
button2.addEventListener('click', () => {
window.open(instagramUrl, '_blank');
  });

const button3 = document.querySelector('email-button');
const emailAddress = "	nifemifixme@gmail.com";
const subject = "Your subject here";
const body = "Type your message here";

button3.addEventListener('click', () => {
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
  

  function submitForm (){
    
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const appointmentDate = document.getElementById('appointmentDate').value;
  const phone = document.getElementById('phone').value;
  const secondMessage = document.getElementById('message').value;


  const whatsappMessage = `Hi, my name is ${firstName} ${lastName}. I'd like to schedule an appointment for ${appointmentDate}. My phone number is ${phone}. Message: ${secondMessage} `;


  const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://api.whatsapp.com/send?phone=+2348149364901&text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  }
   