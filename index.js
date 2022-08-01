const ratings = document.querySelectorAll('.ratings__rank');

const submitRating = document.querySelector('.ratings__submit');

let rating;

const removePrev = target => {
  ratings.forEach(r => {
    if (r.classList.contains('active') && r !== target) {
      r.classList.remove('active');
    }
  });
};

ratings.forEach(item => {
  item.addEventListener('click', item => {
    removePrev(item.target);
    item.target.classList.toggle('active');
    rating = item.target.value;
  });
});
