export default {
  name: "robotic-gastronomy-page",
  title: "Robotic Gastronomy Page",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Internal Name",
      description: "For internal use in Sanity Studio",
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
      name: "definitionCards",
      type: "object",
      title: "02. Definition & Cards Section",
      fields: [
        { name: "title", type: "localeString", title: "Section Title" },
        { name: "description", type: "localeText", title: "Description" },
        {
          name: "cards",
          type: "array",
          title: "Feature Cards",
          of: [
            {
              type: "object",
              fields: [
                { name: "icon", type: "image", title: "Icon" },
                { name: "title", type: "localeString", title: "Card Title" },
                {
                  name: "description",
                  type: "localeText",
                  title: "Card Description",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "expertiseReferences",
      type: "object",
      title: "03. Expertise & References Section",
      fields: [
        { name: "title", type: "localeString", title: "Section Title" },
        {
          name: "cards",
          type: "array",
          title: "Reference Cards",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "image",
                  type: "image",
                  title: "Image",
                  options: { hotspot: true },
                },
                {
                  name: "label",
                  type: "localeString",
                  title: "Label (e.g. REFERENZ)",
                },
                { name: "title", type: "localeString", title: "Card Title" },
                {
                  name: "description",
                  type: "localeText",
                  title: "Card Description",
                },
                {
                  name: "slug",
                  type: "string",
                  title: "Case Study Slug",
                  description:
                    "Slug of the linked case study page, e.g. lady-umami or vipho-to-go. Leave empty to make the card non-clickable.",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "implementationPartner",
      type: "object",
      title: "04. Implementation Partner Section",
      fields: [
        {
          name: "circleImage",
          type: "image",
          title: "Circle Section Image",
          options: { hotspot: true },
        },
      ],
    },
  ],
};
