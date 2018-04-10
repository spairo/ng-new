import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { PushNotificationsService } from 'ng-push';

@Component({
  selector: 'new-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.styl']
})
export class DetalleComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  public param1: string;
  public param2: string;
  public showInvisible: boolean;
  public animal: string;
  public name: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _push: PushNotificationsService,
    public dialog: MatDialog
  ) {
    this.route.queryParams.subscribe(params => {
        this.param1 = params['serie'];
        this.param2 = params['id'];
    });
  }

  ngOnInit() {
    this.showInvisible = false;
    this._push.requestPermission();
  }

  openDialog(): void {
    /*
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
      data: { name: this.name, animal: this.animal }
    });*/

    /*
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '400px',
      width: '600px',
    });
    */


    /*
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
    */
  }

  foo() {
    this._push.create('New - Test', {
      body: 'Do you like my body?',
      icon: '/assets/icons/info.png',
    }).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
/*

@Component({
  selector: 'new-dialog-overview-example-dialog',
  templateUrl: 'detalle.modal.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
*/
