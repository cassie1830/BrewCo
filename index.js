const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

window.onload = function() {
  const openStatus = document.getElementById('openStatus');
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentDay = currentTime.getDay(); 
  if (currentHour >= 13 && currentHour < 22) {
      openStatus.textContent = "Open now";
  } else {
      openStatus.textContent = "Closed now :(";
  }}