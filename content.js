document.addEventListener('DOMContentLoaded', () => {
    const adElements = document.querySelectorAll('.ad, .ads, [id^="ad-"]');
    adElements.forEach((el) => el.remove());
    console.log('Ads removed from the page.');
  });  