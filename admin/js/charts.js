const ctx = document.getElementById("salesChart");

if (ctx) {
  
  new Chart(ctx, {
    
    type: "line",
    
    data: {
      
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      
      datasets: [{
        
        label: "Revenue (KES)",
        
        data: [28500, 34700, 31200, 46100, 39500, 52400, 48350],
        
        borderColor: "#C9A227",
        
        backgroundColor: "rgba(201,162,39,.15)",
        
        fill: true,
        
        tension: .4,
        
        borderWidth: 3,
        
        pointRadius: 5,
        
        pointHoverRadius: 8
        
      }]
      
    },
    
    options: {
      
      responsive: true,
      
      maintainAspectRatio: false,
      
      plugins: {
        
        legend: {
          
          display: false
          
        }
        
      },
      
      scales: {
        
        y: {
          
          beginAtZero: true
          
        }
        
      }
      
    }
    
  });
  
}