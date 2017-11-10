

export const imagesUrl = `${process.env.API_URL}/images`;

export async function getAllImages(){

   const images =  fetch(imagesUrl)
   .then(res => res.json());

   return images;
}

///images/ID/vuln/os