export default {
  name: "statItem",
  title: "Statistic Item",
  type: "object",
  fields: [
    { name: "number", type: "string", title: "Number (e.g. 25+)" },
    {
      name: "label",
      type: "localeString",
      title: "Label (e.g. Jahre Erfahrung)",
    },
  ],
};
