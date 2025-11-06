const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = +counter.getAttribute("data-target");
  if (!target) return; // يتخطى العناصر اللي مفيهاش data-target (زي "M+")

  let count = 0;

  function updateCounter() {
    const speed = 8; // قلل الرقم لو عايزة السرعة أعلى
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