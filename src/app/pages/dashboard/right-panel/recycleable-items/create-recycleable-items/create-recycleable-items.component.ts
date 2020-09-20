import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrganizationsService } from 'src/app/services/organizations.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-recycleable-items',
  templateUrl: './create-recycleable-items.component.html',
  styleUrls: ['./create-recycleable-items.component.css']
})
export class CreateRecycleableItemsComponent implements OnInit {

  @ViewChild('fileSelector') fileSelector;

  organizations;
  isHovering: boolean;
  file: File;

  organizationUid;
  name;
  description;
  photo;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  task: AngularFireUploadTask;

  constructor(
    private authService: AuthService,
    private organizationService: OrganizationsService,
    private snackbar: MatSnackBar,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit() {
    this.loadAllOrganizations();
  }

  private loadAllOrganizations() {
    this.organizationService.getOrganizations().subscribe((response: APIResponse) => {
      this.organizations = response.data;
    });
  }

  openFileBrowser() {
    this.fileSelector.nativeElement.click();
  }

  onFileSelected(event) {
    console.log(event);
    if (event.target.files.length > 1) {
      return this.snackbar.open(
        'You can not upload more than one image. Please upload only one!',
        null, { duration: 2000 }
      );
    }
    this.file = event.target.files[0];
    this.uploadFile();
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    console.log(files);
    if (files.length > 1) {
      return this.snackbar.open(
        'You can not upload more than one image. Please upload only one!',
        null, { duration: 2000 }
      );
    }
    this.file = files[0];
    this.uploadFile();
  }

  uploadFile() {
    console.log('uploading file');
    const path = `recyclable-items/${Date.now()}_${this.file.name}`;

    const ref = this.storage.ref(path);

    this.task = this.storage.upload(path, this.file);

    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      finalize(async () => {
        this.photo = await ref.getDownloadURL().toPromise();
        console.log(this.photo);
      })
    );
  }

  isUploading(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  createItem() {
    console.log(this.name, this.organizationUid);
  }

}
