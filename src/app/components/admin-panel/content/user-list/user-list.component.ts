import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../models/user';
import {SortService} from '../../../../services/sort.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  loading = false;
  total = 0;
  page = 1;
  limit = 10;

  @Output() onUsersLoaded: EventEmitter<any> = new EventEmitter<any>();

  constructor(private userService: UserService, private sortService: SortService, private router: Router) {
    this.users = [];
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.loading = true;
    this.userService.getUsers(this.page - 1, this.limit)
      .subscribe(
        data => {
          this.users = data.content;
          this.total = data.totalElements;
          this.loading = false;
          this.onUsersLoaded.emit(data.totalElements);
          this.sortService.sort(this.users, {sortColumn: 'id', sortDirection: 'asc'});
        },
        err => {
          this.logError(err);
          this.loading = false;
        }
      );
  }

  // Pagination

  goToPage(n: number) {
    this.page = n;
    this.loadData();
  }

  onNext() {
    this.page++;
    this.loadData();
  }

  onPrev() {
    this.page--;
    this.loadData();
  }

  // Sorting

  onSorted($event) {
    this.users = this.sortService.sort(this.users, $event);
  }

  // TODO Logger
  logError(error) {
    console.error('Error: ' + error.message ? error.message : error.toString());
  }

  // Public Actions

  public newUserClick() {
    this.router.navigate(['/dashboard/admin/users/new']);
  }

}
