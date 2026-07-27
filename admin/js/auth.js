// =====================================
// PASSWORD TOGGLE
// =====================================

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (togglePassword && passwordInput) {
  
  togglePassword.addEventListener("click", () => {
    
    const type =
      passwordInput.getAttribute("type") === "password" ?
      "text" :
      "password";
    
    passwordInput.setAttribute("type", type);
    
    togglePassword.innerHTML =
      type === "password" ?
      '<i class="fas fa-eye"></i>' :
      '<i class="fas fa-eye-slash"></i>';
    
  });
  
}


// =====================================
// LOGIN
// =====================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  
  loginForm.addEventListener("submit", function(e) {
    
    e.preventDefault();
    
    const email =
      document.getElementById("email").value.trim();
    
    const password =
      document.getElementById("password").value.trim();
    
    const button =
      document.querySelector(".login-btn");
    
    button.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Signing In...';
    
    button.disabled = true;
    
    setTimeout(() => {
      
      if (
        email === "admin@abila.com" &&
        password === "admin123"
      ) {
        
        localStorage.setItem("adminLoggedIn", "true");
        
        window.location.href =
          "dashboard.html";
        
      } else {
        
        alert("Invalid email or password.");
        
        button.innerHTML = "Login";
        
        button.disabled = false;
        
      }
      
    }, 1000);
    
  });
  
}


// =====================================
// AUTH GUARD
// =====================================

function requireAuth() {
  
  const loggedIn =
    localStorage.getItem("adminLoggedIn");
  
  if (loggedIn !== "true") {
    
    window.location.href = "index.html";
    
  }
  
}


// =====================================
// LOGOUT
// =====================================

function logout() {
  
  localStorage.removeItem("adminLoggedIn");
  
  window.location.href = "index.html";
  
}