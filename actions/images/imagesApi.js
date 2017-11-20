import * as base64 from 'base-64';

import { createRequestHeaders } from './images.security';

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