import icon_close from './../assets/icon_close.svg';
import icon_link from './../assets/icon_link.svg';


export function getIconImage (rolename) {
  switch(rolename) {
    case close:
      return icon_close;
    case link:
      return icon_link;
    default:
      return null;
  }
}