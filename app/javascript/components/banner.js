import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["You love cocktails?", "You are in the good place"],
    typeSpeed: 20,
    loop: true
  });
}

export { loadDynamicBannerText };
