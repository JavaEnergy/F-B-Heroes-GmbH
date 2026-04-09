export default {
  name: "infoCard",
  title: "Info Card",
  type: "object",
  fields: [
    { name: "title", type: "localeString", title: "Card Title" },
    { name: "description", type: "localeText", title: "Card Description" },
    {
      name: "image",
      type: "image",
      title: "Card Image",
      options: { hotspot: true },
    },
    { name: "link", type: "string", title: "Link (Optional)" },
  ],
};
