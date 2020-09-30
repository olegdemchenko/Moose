import Glide from '@glidejs/glide';
export default () => {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    gap: 25,
    perView: 3,
  }).mount();
};