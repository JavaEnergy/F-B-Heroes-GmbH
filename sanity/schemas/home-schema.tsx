export default {
  name: "home-page",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "stats", title: "Experience/Stats" },
    { name: "realitat", title: "Realität Section" },
    { name: "partners", title: "Partnerschaften" },
    { name: "final", title: "Final Section" },
  ],
  fields: [
    { name: "title", type: "string", title: "Internal Page Name" },
    {
      name: "hero",
      type: "object",
      group: "hero",
      fields: [
        { name: "title", type: "localeString" },
        { name: "description", type: "localeText" },
        { name: "image", type: "image", options: { hotspot: true } },
      ],
    },
    {
      name: "stats",
      title: "Experience Stats",
      type: "array",
      group: "stats",
      of: [{ type: "statItem" }],
    },

    {
      name: "realitat",
      type: "object",
      group: "realitat",
      fields: [
        { name: "title", type: "localeString" },
        { name: "description", type: "localeText" },
        { name: "image", type: "image" },
      ],
    },
    {
      name: "partnerschaften",
      title: "Partnerschaften Cards",
      type: "array",
      group: "partners",
      of: [{ type: "infoCard" }],
    },
    {
      name: "dividerImages",
      title: "Middle Divider Images",
      type: "object",
      group: "final",
      fields: [
        { name: "leftImage", type: "image" },
        { name: "rightImage", type: "image" },
      ],
    },

    {
      name: "finalCards",
      title: "Bottom 3 Cards",
      type: "array",
      group: "final",
      of: [{ type: "infoCard" }],
    },
  ],
};
