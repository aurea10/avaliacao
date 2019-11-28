import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { locateDirectiveOrProvider } from '@angular/core/src/render3/di';
import { error } from '@angular/compiler/src/util';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperacaoAPIServiceService {

  apiURL:string='http://172.16.58.22:8001/api/funcoes/multiplicacao'

  constructor( private httpClient: HttpClient) { }

  handleError(error() {

      let errorMessage = `Código de erro: $ {error.status}\nMenssagem: ${error.message}`;
      alert(errorMessage);
      return throwError(errorMessage)



  };
  )


}
