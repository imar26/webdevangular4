import {Website} from '../models/website/website.model.client';
import {WEBSITES} from './website.mock.client';

export class WebsiteService {
  websites: Website[] = WEBSITES;
  findAllWebsites() {
    return this.websites;
  }
}
