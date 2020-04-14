import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { GlobalState, GlobalStateModel } from './global.state';
import { GlobalAction } from './global.actions';

describe('Global store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([GlobalState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: GlobalStateModel = {
      items: ['item-1']
    };
    store.dispatch(new GlobalAction('item-1'));
    const actual = store.selectSnapshot(GlobalState.getState);
    expect(actual).toEqual(expected);
  });

});
