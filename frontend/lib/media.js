import { getStrapiUrl } from './api';

export const getStrapiMedia = (media) => {
  const imageUrl = media.url.startsWith('/')
    ? getStrapiUrl(media.url)
    : media.url;

  return imageUrl;
};
