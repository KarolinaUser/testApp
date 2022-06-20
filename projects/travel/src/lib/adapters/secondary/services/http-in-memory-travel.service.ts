import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpInMemoryTravelService {
  constructor(private _client: HttpClient) {
  }
}
