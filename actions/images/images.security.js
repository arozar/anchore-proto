import * as base64 from 'base-64';

export function createRequestHeaders(){
    let headers = new Headers();
    
    headers.append('Authorization', 'Basic ' + base64.encode(`${process.env.API_USER}:${process.env.API_PASS}`));

    return headers;
}