import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { OverlayContainer } from '@angular/cdk/overlay';
import { GlobalState, SetTheme } from '@rms-frontend/core';

@Component({
  selector: 's3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 's3';

  @Select(GlobalState.getTheme) theme$: Observable<string>;

  themeSub = this.theme$.subscribe(a => {
    this.overlayContainer.getContainerElement().classList.add(`${a}-theme`);
  });

  themeChange(theme) {
    this.store.dispatch(new SetTheme(theme));
  }
  ngOnInit(): void {}

  constructor(public overlayContainer: OverlayContainer, public store: Store) {}
}
