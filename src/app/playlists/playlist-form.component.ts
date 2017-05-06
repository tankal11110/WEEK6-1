import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistsService } from "./playlists.service";

@Component({
  selector: 'playlist-form',
  template: `
      <div  class="thumbnail">
        <form #formRef="ngForm" novalidate="true" (ngSubmit)="save(formRef.valid, playlist)">
          <div class="form-group">
              <label>Name:</label>
              <input type="text" #nameRef = "ngModel" [(ngModel)]="playlist.name" name="name" class="form-control" required minlength="3" maxlength="20">
             
              <div *ngIf="nameRef.touched || nameRef.dirty || formRef.submitted">
                <form-feedback [error]="nameRef"></form-feedback>
              </div>
          </div>

          <div class="form-group">
              <label>Tracks:</label>
              <input type="number" [value]="playlist.tracks" class="form-control">
          </div>
        
          <div class="form-group">
              <label>Kolor:</label>
              <input type="color" [(ngModel)]="playlist.color"  [ngModelOptions]="{standalone: true}" class="form-control">
          </div>

          <div class="form-group">
              <label>
              <input type="checkbox" [(ngModel)]="playlist.favourite"  [ngModelOptions]="{standalone: true}">
              Favourite</label>
          </div>

          <div class="form-group">
              <button class="btn btn-success float-xs-right">Save</button>
          </div>
          </form>
      </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {
  
  @Input()
  playlist;

  @Output('saved')
  onSaved = new EventEmitter();

  save(valid, playlist){
     
      if (!valid){
          return;
      }
     this.playlistsService.savePlaylist(playlist);
  }


  constructor( private playlistsService: PlaylistsService) { }

  ngOnInit() {
      
  }

}
