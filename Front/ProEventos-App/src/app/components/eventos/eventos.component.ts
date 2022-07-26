import { Component, OnInit, TemplateRef } from '@angular/core';
import { Evento } from '../../models/Evento';
import { EventoService } from '../../services/evento.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';

import { ToastrService  } from 'ngx-toastr';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  //providers: [EventoService],
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
   ngOnInit(): void {
  }
}
