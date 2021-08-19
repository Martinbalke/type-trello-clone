
import { observable, action} from 'mobx';
import { ListInterface } from './List';
import { uuid } from 'uuidv4';

export interface BoardInterface {
  id: string,
	title: string;
	favorite: boolean;
  backgroundImage?: string;
  lists?: Array<ListInterface>
}

export default class Board implements BoardInterface {
  @observable id = uuid();
	@observable title = '';
  @observable favorite = false;
  @observable backgroundImage = ''
  @observable lists: Array<ListInterface> = [];


  @action
  updateBoard(title:string , backgroundImage:string) {
    this.title = title;
    this.backgroundImage = backgroundImage;
  }

  @action
  toggleFavorite() {
    return this.favorite = !this.favorite;
  }

  @action
  addList(list: ListInterface) {
    this.lists.push(list);
    }
}