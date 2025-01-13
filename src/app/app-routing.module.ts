import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueReportComponent } from './issue-report/issue-report.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

const routes: Routes = [
  {path: '', component: IssueListComponent},
  {path: 'issue-report', component: IssueReportComponent},
  {path: 'confirm-dialog', component: ConfirmDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
