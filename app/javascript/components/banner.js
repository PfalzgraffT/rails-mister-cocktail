import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Mister", "Cocktaill"],
    typeSpeed: 15,
    loop: true
  });
}

export { loadDynamicBannerText };
