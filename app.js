alert("Welcome to our NGO website 💖 Together, let's make the world a better place 🌍");

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = +counter.getAttribute("data-target");
  if (!target) return;

  let count = 0;

  function updateCounter() {
    const speed = 8;
    const increment = target / 100;

    if (count < target) {
      count += increment;
      counter.textContent = Math.ceil(count).toLocaleString();
      setTimeout(updateCounter, speed);
    } else {
      counter.textContent = target.toLocaleString();
    }
  }

  updateCounter();
});

  const SUPABASE_URL = "https://knnmbmzabhjganxkqluc.supabase.co";
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtubm1ibXphYmhqZ2FueGtxbHVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNTI4ODAsImV4cCI6MjA3NzkyODg4MH0.PsibY_QDVglge_Mys4M-K7TofdHbdVJR437WN2ohkZw";
      const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email, phone, password }]);

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Account created successfully!");
  }
});

