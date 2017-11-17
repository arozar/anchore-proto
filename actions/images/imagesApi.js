import * as base64 from 'base-64';

export const imagesUrl = `/api/images`;

export async function getAllImages(){

   const images =  await fetch(imagesUrl, {headers: createRequestHeaders()})
   .then(res => res.json());

   return images;
}

export async function getImageVuln (imageDigest) {
    const vulnData = await fetch(getVulnUrl(imageDigest),{ headers: createRequestHeaders()})
    .then(res => res.json());

    return vulnData
}

export function getVulnUrl(imageDigest){
    return `${imagesUrl}/${imageDigest}/os`;
}

///images/ID/vuln/os
export function createRequestHeaders(){
    let headers = new Headers();
    
    headers.append('Authorization', 'Basic ' + base64.encode(`${process.env.API_USER}:${process.env.API_PASS}`));

    return headers;
}