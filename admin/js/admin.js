function animateCounter(id, target) {
  
  const element = document.getElementById(id);
  
  if (!element) return;
  
  let current = 0;
  
  const step = Math.ceil(target / 80);
  
  const timer = setInterval(() => {
    
    current += step;
    
    if (current >= target) {
      
      current = target;
      
      clearInterval(timer);
      
    }
    
    element.textContent = current.toLocaleString();
    
  }, 20);
  
}

animateCounter("todayOrders", 42);

animateCounter("conferenceBookings", 8);

animateCounter("websiteVisitors", 736);