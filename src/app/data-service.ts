import {Injectable} from '@angular/core'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {IInsult} from './insult';
import { environment } from '../environments/environment';

@Injectable()
export class DataService {
    constructor(private _http:Http) {

    }

    getInsult(nsfw:boolean) : Observable<IInsult> {
        if(nsfw)
            return this._http.get(environment.dataServiceNSFWAPI)
                .map((response:Response) => <IInsult>response.json());
        
        return this._http.get(environment.dataServiceSFWAPI)
            .map((response:Response) => <IInsult>response.json());
    }
}