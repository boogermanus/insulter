import {Injectable} from '@angular/core'
import {HttpClient, HttpResponse} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {IInsult} from './insult';
import { environment } from '../environments/environment';

@Injectable()
export class DataService {
    constructor(private _http:HttpClient) {

    }

    getInsult(nsfw:boolean) : Observable<IInsult> {
        if(nsfw)
            return this._http.get<IInsult>(environment.dataServiceNSFWAPI)
               
        
        return this._http.get<IInsult>(environment.dataServiceSFWAPI)
            
    }
}