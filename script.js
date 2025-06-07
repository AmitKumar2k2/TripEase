function openModal(title, price, rating) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalPrice").textContent = "Price: " + price;
  document.getElementById("modalRating").textContent = "Rating: " + rating;
  document.getElementById("destinationModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("destinationModal").style.display = "none";
}

// Trigger animations when scrolling
document.addEventListener("DOMContentLoaded", () => {
  const animatables = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = "0.2s";
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animatables.forEach(el => observer.observe(el));
});
