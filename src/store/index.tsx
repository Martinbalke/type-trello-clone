import { BoardInterface } from "./Board";
import { action, observable } from "mobx";


export interface StoreInterface {
  boards: Array<BoardInterface>
}

class Store implements StoreInterface {
	
  @observable boards: Array<BoardInterface> = [];

  @action
  addBoard(board: BoardInterface) {
    this.boards.push(board)
  }

  @action
  deleteBoard(id: string) {
    this.boards = this.boards.filter(board => board.id !== id);
  }


}


