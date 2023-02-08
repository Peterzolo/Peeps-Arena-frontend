import { avatarColors } from './static.data';
import { floor, random, some, findIndex } from 'lodash';

export class Utils {
  static avatarColor() {
    return avatarColors[floor(random(0.9) * avatarColors.length)];
  }
}
