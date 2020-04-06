import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { ExplorerState } from './file.state';
import { FileElement } from '@rms-frontend/file-explorer';
import { UploadFiles, AddFolder, DeleteFolder } from './file.actions';
import { StateReset } from 'ngxs-reset-plugin';

export const DEFAULT_STATE = {
  explorer: {
    files: [],
    currentRoot: { id: 'root', name: 'Files', isFolder: true, parent: '' }
  }
};

describe('Explorer', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ExplorerState])]
    });
    store = TestBed.get(Store);
    store.reset(DEFAULT_STATE);
  });
  it('it adds files to state', () => {
    const filesToUpload: FileElement[] = [];
    for (let i = 0; i < 4; i++) {
      const folder = new FileElement();
      folder.isFolder = false;
      folder.name = `Folder${i}`;
      folder.parent = 'root';
      folder.id = i.toString();
      filesToUpload.push(folder);
    }
    store.dispatch(new UploadFiles(filesToUpload));
    let files = [...store.selectSnapshot(state => state.explorer.files)];
    expect(files).toEqual(files);
    store.dispatch(new UploadFiles([filesToUpload[0]]));
    filesToUpload.push(filesToUpload[0]);
    files = store.selectSnapshot(state => state.explorer.files);
    expect(files).toEqual(files);
  });
  it('it adds folders to state', () => {
    const folder = new FileElement();
    folder.isFolder = false;
    folder.name = `Folder`;
    folder.parent = 'root';
    folder.id = '1';
    const empty = store.selectSnapshot(state => state.explorer.files);
    expect(empty).toEqual([]);
    store.dispatch(new AddFolder(folder));
    const oneFolder = store.selectSnapshot(state => state.explorer.files);
    expect(oneFolder).toEqual([folder]);
  });
  it('it adds a folder then Deletes a folders from state', () => {
    const folder = new FileElement();
    folder.isFolder = false;
    folder.name = `Folder`;
    folder.parent = 'root';
    folder.id = '1';
    store.dispatch(new AddFolder(folder));
    const oneFolder = store.selectSnapshot(state => state.explorer.files);
    expect(oneFolder).toEqual([folder]);
    store.dispatch(new DeleteFolder('1'));
    const empty = store.selectSnapshot(state => state.explorer.files);
    expect(empty).toEqual([]);
  });
});
