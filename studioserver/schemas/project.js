export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'github',
      title: 'Github Link',
      type: 'url',
    },
    {
      name: 'developer',
      title: 'Developer',
      type: 'reference',
      to: { type: 'developer' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
    },
  ],

  preview: {
    select: {
      title: 'title',
      developer: 'developer.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { developer } = selection;
      return Object.assign({}, selection, {
        subtitle: developer && `by ${developer}`,
      });
    },
  },
};
