const ratings = document.querySelectorAll('.ratings__rank');
const ratingsWrapper = document.querySelector('.ratings__wrapper');
const confirmationWrapper = document.querySelector('.confirmation__wrapper');
const setResult = document.querySelector('.confirmation__result');
const submitRating = document.querySelector('.ratings__submit');

let rating;

const submit = () => {
  ratings.forEach(rank => {
    if (rank.classList.contains('active')) {
      rank.classList.remove('active');
    }
  });
  ratingsWrapper.classList.add('ratings__wrapper--remove');
  confirmationWrapper.classList.add('confirmation__wrapper--display');
  setResult.textContent = rating;
};

const changeRank = () => {
  const ratingsArr = [...ratings];

  ratingsArr.forEach(rank => {
    if (rank.value > rating) {
      rank.classList.remove('active');
    }
    if (rank.value <= rating) {
      rank.classList.add('active');
    }
  });
};

ratings.forEach(item => {
  item.addEventListener('mouseover', item => {
    rating = item.target.value;
    changeRank();
  });
});

submitRating.addEventListener('click', () => {
  submit();
});

/* kPhHp6RRkVFarVt */
