function filterProperties(){alert("Property listings are being updated. Please contact ZeeraK on WhatsApp for current availability.");}
document.getElementById("contactForm").addEventListener("submit",function(e){
 e.preventDefault();
 const name=document.getElementById("name").value.trim();
 const phone=document.getElementById("phone").value.trim();
 const interest=document.getElementById("interest").value;
 const message=document.getElementById("message").value.trim();
 const text=`Hello ZeeraK Real Estate & Builders,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AInterested in: ${encodeURIComponent(interest)}%0ARequirements: ${encodeURIComponent(message || "Please contact me regarding my property requirement.")}`;
 window.open("https://wa.me/923452117099?text="+text,"_blank");
});
