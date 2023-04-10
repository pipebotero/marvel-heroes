import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class MarvelApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req;

    const md5 = new Md5();
    const ts = Date.now(); 
    const hash = md5.appendStr(`${ts.toString()}${environment.marvelAPI.marvelPrivateKey}${environment.marvelAPI.marvelPublicKey}`).end();
    request = req.clone({
      setParams: {
        ts: ts.toString(),
        apikey: environment.marvelAPI.marvelPublicKey,
        hash: hash,
      },
    });

    return next.handle(request);
  }
}
