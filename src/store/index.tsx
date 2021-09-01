import { BoardInterface } from "./Board";
import { action, observable } from "mobx";
import { createContext } from "react";
import { makeObservable } from "mobx";
import { uuid } from "uuidv4";


export interface StoreInterface {
  boards: Array<BoardInterface>
}

 class Store implements StoreInterface {
		boards: Array<BoardInterface> = [
			{
				id: uuid(),
				title: 'Some board',
				favorite: true,
			},
			{
				id: uuid(),
				title: 'Some board 2',
				favorite: false,
			},
		];

		constructor() {
			makeObservable(this, {
				boards: observable,
				addBoard: action,
				deleteBoard: action,
			});
		}

		addBoard(board: BoardInterface) {
			this.boards.push(board);
		}

		deleteBoard(id: string) {
			this.boards = this.boards.filter((board) => board.id !== id);
		}
 }


export default createContext(new Store())