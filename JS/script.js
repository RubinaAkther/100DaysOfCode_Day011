const stars = document.querySelectorAll('.rating li');
const submitButton = document.getElementById('submit-button');
const thankYouMessage = document.getElementById('thank-you-card');
const ratingCard = document.getElementById('rating-card');
const finalRating = document.getElementById('final-rating');

let selectedRating = 0;

stars.forEach((star) => {
  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-rating');
    stars.forEach((s) => (s.style.backgroundColor = ''));
    star.style.backgroundColor = 'white';
    star.style.color = 'black';
    submitButton.disabled = false;
  });
});

submitButton.addEventListener('click', () => {
  if (selectedRating) {
    finalRating.textContent = selectedRating;
    ratingCard.classList.add('hide');
    thankYouMessage.classList.remove('hide');
    submitButton.disabled = true;
  } else {
    alert('Please select a rating before submitting.');
  }
});
