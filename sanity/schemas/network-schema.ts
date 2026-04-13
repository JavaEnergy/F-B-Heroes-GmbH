export default {
  name: "network-page",
  title: "Network Page",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Internal Name",
    },

    {
      name: "hero",
      type: "object",
      title: "01. Hero Section",
      fields: [
        { name: "badge", type: "localeString", title: "Badge Text" },
        { name: "title", type: "localeString", title: "Main Title" },
        { name: "description", type: "localeText", title: "Description Text" },
        {
          name: "image",
          type: "image",
          title: "Hero Image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "expertsSection",
      type: "object",
      title: "02. Experts Section",
      fields: [
        { name: "title", type: "localeString", title: "Section Title" },
        {
          name: "description",
          type: "localeText",
          title: "Section Description",
        },
        {
          name: "cards",
          type: "array",
          title: "Expert Cards",
          of: [
            {
              type: "object",
              fields: [
                { name: "image", type: "image", title: "Expert Image/Icon" },
                {
                  name: "title",
                  type: "localeString",
                  title: "Expert Name/Field",
                },
                {
                  name: "description",
                  type: "localeText",
                  title: "Description",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
