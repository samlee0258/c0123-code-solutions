var $carouselImages = document.querySelectorAll('.carousel-image');
var $progressDots = document.querySelectorAll('.carousel-nav > .fa-circle');

var timerId;
var currentIndex = 0;

function showIndex(targetIndex) {
  for (var index = 0; index < $carouselImages.length; index++) {
    if (index === targetIndex) {
      $carouselImages[index].className = 'carousel-image';
      $progressDots[index].className = 'fa-solid fa-circle';
    } else {
      $carouselImages[index].className = 'carousel-image hidden';
      $progressDots[index].className = 'fa-regular fa-circle';
    }
  }
  currentIndex = targetIndex;
  autoPlay();
}

function autoPlay() {
  clearTimeout(timerId);
  timerId = setTimeout(function () {
    showIndex(getNextIndex());
  }, 3000);
}

function getNextIndex() {
  if (currentIndex === $carouselImages.length - 1) {
    return 0;
  } else {
    return currentIndex + 1;
  }
}

function getPreviousIndex() {
  if (currentIndex === 0) {
    return $carouselImages.length - 1;
  } else {
    return currentIndex - 1;
  }
}

function handleClick(event) {

  if (event.target.matches('.carousel-left-button')) {
    showIndex(getPreviousIndex());
    return;
  }

  if (event.target.matches('.carousel-right-button')) {
    showIndex(getNextIndex());
    return;
  }

  if (!event.target.matches('.fa-circle')) {
    return;
  }

  for (var index = 0; index < $progressDots.length; index++) {
    if (event.target === $progressDots[index]) {
      showIndex(index);
      break;
    }
  }
}

var $carouselContainer = document.querySelector('.carousel-box');
$carouselContainer.addEventListener('click', handleClick);

autoPlay();
