/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */

const yourApiKey = "cd596b5fd7f3f282f291a6e08c0dcc42";

const data = {
  method: "flickr.photos.search",
  api_key: yourApiKey,
  text: "cat", // Search Text
  sort: "interestingness-desc",
  per_page: 12,
  license: "4",
  extras: "owner_name,license",
  format: "json",
  nojsoncallback: 1,
};

const parameters = new URLSearchParams(data);

const url = `https://api.flickr.com/services/rest/?${parameters}`;

const getFlickrImageURL = (photo, size) => {
  let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
  if (size) {
    // Configure image size
    url += `_${size}`;
  }
  url += ".jpg";
  return url;
};

export const getImages = async (length = 10) => {
  const images = [];
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   const title = c?.description;
      //   const url = c?.image?.url;

      //   images.push({ title, url });
      // get an array of image-url
      data.photos.photo.map((photo) => {
        return images.push(getFlickrImageURL(photo, "q"));
      });
    });
  return images;
};
