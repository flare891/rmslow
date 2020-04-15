import { NgModule } from '@angular/core';

import { CoreModule, GlobalState } from '@rms-frontend/core';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { FileExplorerModule } from '@rms-frontend/file-explorer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExplorerState } from './+state/file.state';
import { HeaderModule } from '@rms-frontend/header';
import { ExplorerComponent } from './explorer/explorer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ExplorerComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    FileExplorerModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    NgxsModule.forFeature([ExplorerState]),
    NgxsStoragePluginModule.forRoot({
      key: [GlobalState, ExplorerState]
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
