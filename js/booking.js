document.addEventListener("DOMContentLoaded", () => {
  
  const conferenceForm = document.getElementById("conferenceForm");
  
  if (!conferenceForm) return;
  
  conferenceForm.addEventListener("submit", function(e) {
    
    e.preventDefault();
    
    const bookingRef =
      "AKH-" +
      new Date().getFullYear() +
      Math.floor(Math.random() * 9000 + 1000);
    
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const organization = document.getElementById("organization").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;
    const facility = document.getElementById("facility").value;
    const notes = document.getElementById("notes").value;
    
    const services = [];
    
    document.querySelectorAll('#conferenceForm input[type="checkbox"]:checked')
      .forEach(item => services.push(item.value));
    
    const message =
      `*NEW CONFERENCE BOOKING REQUEST*

Booking Reference:
${bookingRef}

Name:
${name}

Phone:
${phone}

Organization:
${organization}

Conference Date:
${date}

Expected Participants:
${guests}

Hall Required:
${facility}

Facilities:
${services.join(", ")}

Additional Requirements:
${notes}

Kindly send me a quotation and availability.

Thank you.`;
    
    const whatsappNumber = "254742676542";
    
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    
  });
  
});