const requests = [
  
  {
    
    reference: "CONF-24001",
    
    client: "John Otieno",
    
    organization: "County Government",
    
    date: "2026-08-20",
    
    guests: 120,
    
    hall: "Large",
    
    status: "Pending"
    
  },
  
  {
    
    reference: "CONF-24002",
    
    client: "Faith Achieng",
    
    organization: "ACK Church",
    
    date: "2026-08-28",
    
    guests: 60,
    
    hall: "Medium",
    
    status: "Approved"
    
  }
  
];

const tbody = document.getElementById("conferenceTable");

if (tbody) {
  
  requests.forEach(request => {
    
    tbody.innerHTML += `

<tr>

<td>${request.reference}</td>

<td>${request.client}</td>

<td>${request.organization}</td>

<td>${request.date}</td>

<td>${request.guests}</td>

<td>${request.hall}</td>

<td>

<span class="badge ${request.status.toLowerCase()}">

${request.status}

</span>

</td>

<td>

<button class="table-btn">

View

</button>

</td>

</tr>

`;
    
  });
  
}