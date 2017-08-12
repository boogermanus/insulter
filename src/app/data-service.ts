import {Injectable} from '@angular/core'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {IInsult} from './insult';

@Injectable()
export class DataService {
    private _dataServiceAPI = 'http://permutate.us:8091/api/insult'

    constructor(private _http:Http) {

    }

    getInsult() : Observable<IInsult> {
        return this._http.get(this._dataServiceAPI)
        .map((response:Response) => <IInsult>response.json());
    }
}