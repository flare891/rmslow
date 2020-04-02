import { NgModule } from '@angular/core';

import { CoreModule } from '@rms-frontend/core';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { NewFolderModalComponent } from './new-folder-modal/new-folder-modal.component';
import { RenameModalComponent } from './rename-modal/rename-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ExplorerState } from './+state/file.state';

@NgModule({
  declarations: [
    AppComponent,
    FileExplorerComponent,
    NewFolderModalComponent,
    RenameModalComponent
  ],
  imports: [
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    NgxsModule.forRoot([ExplorerState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
