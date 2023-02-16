import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'ikjthbwi',
    dataset: 'production',
    apiVersion: '2023-02-06',
    useCdn: true,
    token: process.env.NEXT_PUBLICK_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);