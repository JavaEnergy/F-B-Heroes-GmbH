export default {
  name: "extra-page",
  title: "Extra Pages",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "content",
      title: "Page Content",
      type: "localePortableText",
    },
  ],
};
