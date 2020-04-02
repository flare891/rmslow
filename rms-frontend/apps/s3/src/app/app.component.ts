import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileElement } from './models/file-element';
import { FileService } from './file-service.service';
import { v4 } from 'uuid';
import { ExplorerState } from './+state/file.state';
import { Select, Store } from '@ngxs/store';
import { AddFolder } from './+state/file.actions';

@Component({
  selector: 's3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 's3';
  fileElements: Observable<FileElement[]>;
  currentRoot: FileElement;
  currentPath: string;
  canNavigateUp = false;

  @Select(state => state.explorer.files) files$: Observable<FileElement[]>;

  ngOnInit(): void {
    const initialFolders: FileElement[] = [];
    for (let i = 0; i < 10; i++) {
      const folder = new FileElement();
      folder.isFolder = true;
      folder.name = `Folder${i}`;
      folder.parent = 'root';
      initialFolders.push(folder);
    }
    initialFolders.forEach(element => {
      this.store.dispatch(new AddFolder(element));
    });

    this.updateFileElementQuery();
  }

  constructor(public fileService: FileService, public store: Store) {}

  addFolder(folder: { name: string }) {
    this.fileService.add({
      id: v4(),
      isFolder: true,
      name: folder.name,
      parent: this.currentRoot ? this.currentRoot.id : 'root'
    });
    this.updateFileElementQuery();
  }

  removeElement(element: FileElement) {
    this.fileService.delete(element.id);
    this.updateFileElementQuery();
  }

  moveElement(event: { element: FileElement; moveTo: FileElement }) {
    this.fileService.update(event.element.id, { parent: event.moveTo.id });
    this.updateFileElementQuery();
  }

  renameElement(element: FileElement) {
    this.fileService.update(element.id, { name: element.name });
    this.updateFileElementQuery();
  }

  updateFileElementQuery() {
    this.fileElements = this.fileService.queryInFolder(
      this.currentRoot ? this.currentRoot.id : 'root'
    );
  }

  navigateUp() {
    if (this.currentRoot && this.currentRoot.parent === 'root') {
      this.currentRoot = null;
      this.canNavigateUp = false;
      this.updateFileElementQuery();
    } else {
      this.currentRoot = this.fileService.get(this.currentRoot.parent);
      this.updateFileElementQuery();
    }
    this.currentPath = this.popFromPath(this.currentPath);
  }

  navigateToFolder(element: FileElement) {
    this.currentRoot = element;
    this.updateFileElementQuery();
    this.currentPath = this.pushToPath(this.currentPath, element.name);
    this.canNavigateUp = true;
  }

  filesUploaded(files: FileElement[]) {
    files.forEach(file => {
      file.parent = this.currentRoot?.id || 'root';
      this.fileService.add(file);
      this.updateFileElementQuery();
    });
  }

  pushToPath(path: string, folderName: string) {
    let p = path ? path : '';
    p += `${folderName}/`;
    return p;
  }

  popFromPath(path: string) {
    let p = path ? path : '';
    let split = p.split('/');
    split.splice(split.length - 2, 1);
    p = split.join('/');
    return p;
  }
}
