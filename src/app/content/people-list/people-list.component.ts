import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../../services/people.service';
import {People} from '../../model/people';
import * as $ from 'jquery';
import 'datatables.net';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  public peopleTable: any;
  private peopleList: any[];

  constructor(private root: AppComponent, private peopleService: PeopleService) {}

  ngOnInit() {
    this.jQueryConfig();
    this.initDTs();
  }

  private initDTs() {
    this.getDataPeople();
  }

  private getDataPeople() {
    this.peopleService.getPeoples().snapshotChanges().subscribe(data => {
      this.peopleList = [];
      data.forEach(d => {
        const x = d.payload.toJSON();
        if (x["key"] === "key...") x["key"] = "generating Key...";
        this.peopleList.push(x as People);
      });
      this.setDTPeople();
    });
}

private getPeopleByKey(key: string) {
    let p: People = new People();
    this.peopleList.forEach(people => {
      if (key === people.key) {
        p = people;
      }
    });
    return p;
}

  private setDTPeople() {
    const table: any = $('#peopleTable');
    const self: any = this;
    const set: any = {
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: true,
      info: true,
      scrollX: true,
      pageLength: 10,
      language: {
        url: 'assets/datatable.spanish.json'
      },
      data: this.peopleList,
      columns: [
        {
          data: null,
          "render": function(data) {
            return data.name + " " + data.lastname1 + " " + data.lastname2;
          }
        },
        {
          data: "photo"
        },
        {
          data: "position"
        },
        {
          data: "key",
          "render": function(data) {
            let button: string;
            button = `<a class="btn editPeople" data-id="${data}"><i class="material-icons">edit</i></a>`;
            return button;
          }
        }
      ]
    };
    if (this.peopleTable) this.peopleTable.destroy();
    this.peopleTable = table.DataTable(set);
  }

  public setFormByPeople(people: People) {
    this.peopleService.selectedPeople = Object.assign({}, people);
  }

  private jQueryConfig() {
    const self = this;
    $('body').on('click', '.new', function() {})
      .on('click', '.editPeople', function() {
        self.setFormByPeople(self.getPeopleByKey($(this).data('id')));
      })
    ;
  }
}
