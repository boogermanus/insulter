import {Injectable} from '@angular/core'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {IInsult} from './insult';

@Injectable()
export class DataService {
    private _dataServiceNSFWAPI = 'http://api.permutate.us:8091/api/insult';
    private _dataServiceSFWAPI = 'http://api.permutate.us:8091/api/insult/sfw';

    constructor(private _http:Http) {

    }

    getInsult(nsfw:boolean) : Observable<IInsult> {
        if(nsfw)
            return this._http.get(this._dataServiceNSFWAPI)
                .map((response:Response) => <IInsult>response.json());
        
        return this._http.get(this._dataServiceSFWAPI)
            .map((response:Response) => <IInsult>response.json());
    }
}