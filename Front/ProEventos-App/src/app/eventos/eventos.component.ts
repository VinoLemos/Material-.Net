import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  public filteredEvents: any =[];

  widthImg: number = 50;
  marginImg: number = 2;
  showImg: boolean = true;
  private _listFilter: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEvents();
  }

  alterImage(){
    this.showImg = !this.showImg;
  }

  public get listFilter(){
    return this._listFilter;
  }

  public set listFilter(value: string){
    this._listFilter = value;
    this.filteredEvents = this.listFilter?
                          this.filterEvents(this.listFilter) : this.eventos;
  }

  filterEvents(filterBy: string) :any{
    filterBy = filterBy.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase()
                           .indexOf(filterBy) !== -1 ||
      evento.local.toLocaleLowerCase()
          .indexOf(filterBy) !== -1
    )
  }

  public getEvents(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => {
        this.eventos = response;
        this.filteredEvents = this.eventos;
      },
      error => console.log(error)
    );
  }

}
