import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http'


@Injectable()
export class ProductService {

  constructor(private private_http: Http) { }

  private _albumUrl = "../assets/album.json"

  getAlbum(id: number){
    return this.private_http.get(this._albumUrl)
    .map(response => response.json())
  }
}
