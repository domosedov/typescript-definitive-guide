import { action, computed, decorate, observable } from "mobx";
import {
  IWhatIsNewTocInnovationWithContent,
} from "../types/IWhatIsNewToc";
import { ContentDataWinPageStore } from "./ContentDataWinPageStore";
import { Observable } from "rxjs";


export interface IInnovationFilter<Id=unknown> {
  id: Id
  isActive:boolean;

  predicate(innovation: IWhatIsNewTocInnovationWithContent): boolean;

  getObservable(): Observable<IInnovationFilter>;
}

export class InnovationDataStore {
  get isActive(){
    return this.innovationDataAll.length !== this.contentDataWinPageStore.pageContent.innovations.length;
  }

  get filters(){
    return this.filterAll.filter(filter => filter.isActive);
  }
  // get innovationDataAll(){
  //   return this.contentDataWinPageStore.pageContent.innovations.filter(innovation =>
  //     this.filters.every(filter => filter.predicate(innovation))
  //   );
  // }

  innovationDataAll:  IWhatIsNewTocInnovationWithContent[];

  readonly filterAll: IInnovationFilter[] = [];


  constructor (readonly contentDataWinPageStore: ContentDataWinPageStore) {
    this.innovationDataAll = this.update();
  }

  readonly addFilter = (filter: IInnovationFilter) => {
    this.filterAll.push(filter)

    filter.getObservable().subscribe(this.update);
  };
  readonly deleteFilter = (filter: IInnovationFilter) => this.filterAll
    .splice(this.filterAll.indexOf(filter), 1);
  readonly deleteAllFilter = () => {
    while(this.filterAll.length){
      this.filterAll.pop();
    }
  };
  readonly isFilterActiveById = <T>(filterId:T) => {
    let filter = this.filters.find(item => item.id === filterId);

    return filter ? filter.isActive : false;
  }

  private update = () => {
    this.innovationDataAll = this.contentDataWinPageStore.pageContent.innovations.filter(innovation =>
      this.filters.every(filter => filter.predicate(innovation))
    );

    return this.innovationDataAll;
  }
}

decorate( InnovationDataStore, {
  isActive: computed,
  filters: computed,
  innovationDataAll: observable,
  filterAll: observable,
  isFilterActiveById: action,
} );
