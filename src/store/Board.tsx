import { observable, action } from 'mobx';
import { ListInterface } from './List';
import { uuid } from 'uuidv4';
import { makeObservable } from 'mobx';

export interface BoardInterface {
	id: string;
	title: string;
	favorite: boolean;
	backgroundImage?: string;
	lists?: Array<ListInterface>;
}

export default class Board implements BoardInterface {
	id = uuid();
	title = '';
	favorite = false;
	backgroundImage = '';
	lists: Array<ListInterface> = [];

	constructor() {
		makeObservable(this, {
			id: observable,
			title: observable,
			favorite: observable,
			backgroundImage: observable,
      lists: observable,
      updateBoard: action,
      toggleFavorite: action,
      addList: action
		});
	}

	updateBoard(title: string, backgroundImage: string) {
		this.title = title;
		this.backgroundImage = backgroundImage;
	}

	toggleFavorite() {
		return (this.favorite = !this.favorite);
	}

	addList(list: ListInterface) {
		this.lists.push(list);
	}
}
