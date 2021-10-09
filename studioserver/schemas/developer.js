export default {
  name: 'developer',
  title: 'Developer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'sitename',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
    },
    {
      name: 'github',
      title: 'Github Profile',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Developer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
