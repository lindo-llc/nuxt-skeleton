import {
  isMobile
} from 'mobile-device-detect';

export default ({ app }, inject) => {
  inject('isMobile', () => {
    return isMobile
  })
}
