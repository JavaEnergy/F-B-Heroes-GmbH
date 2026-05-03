export default {
  name: "case-study",
  title: "Case Study",
  type: "document",
  fields: [
    {
      name: "internalTitle",
      type: "string",
      title: "Internal Title",
      description: "For internal use in Sanity Studio only",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "URL-safe identifier, e.g. lady-umami or vipho-to-go",
      options: { source: "internalTitle" },
      validation: (Rule: any) => Rule.required(),
    },

    // 01. Hero
    {
      name: "hero",
      type: "object",
      title: "01. Hero Section",
      fields: [
        { name: "preTitle", type: "localeString", title: "Pre Title (e.g. REFERENZ)" },
        { name: "title", type: "localeString", title: "Main Title" },
        { name: "subtitle", type: "localeString", title: "Subtitle / Location Line" },
        { name: "introText", type: "localeText", title: "Intro Text" },
        {
          name: "heroImage",
          type: "image",
          title: "Hero Image",
          options: { hotspot: true },
        },
      ],
    },

    // 02. Content Sections
    {
      name: "sections",
      type: "array",
      title: "02. Content Sections",
      description: "Optional sections with a title, body text, and an optional image",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "localeString", title: "Section Title (optional)" },
            { name: "body", type: "localeText", title: "Body Text" },
            {
              name: "image",
              type: "image",
              title: "Section Image (optional)",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },

    // 03. Learnings
    {
      name: "learnings",
      type: "object",
      title: "03. Learnings Section",
      fields: [
        { name: "title", type: "localeString", title: "Section Title" },
        {
          name: "items",
          type: "array",
          title: "Learning Points",
          of: [
            {
              type: "object",
              fields: [
                { name: "text", type: "localeText", title: "Learning Text" },
              ],
            },
          ],
        },
      ],
    },

    // 04. Conclusion
    {
      name: "conclusion",
      type: "object",
      title: "04. Conclusion",
      fields: [
        { name: "text", type: "localeText", title: "Conclusion Text" },
      ],
    },

    // 05. Gallery
    {
      name: "galleryImages",
      type: "array",
      title: "05. Gallery Images",
      description: "Upload 5–8 curated images. Editors should pre-optimize images to under 2 MB.",
      of: [{ type: "image", options: { hotspot: true } }],
    },

    // 06. Video
    {
      name: "videoUrl",
      type: "string",
      title: "06. Video URL",
      description:
        "Paste a YouTube or Vimeo URL. The video will be embedded on the page. Leave empty to hide the section.",
    },

    // 07. CTA
    {
      name: "cta",
      type: "object",
      title: "07. CTA Section",
      fields: [
        { name: "text", type: "localeString", title: "CTA Button Text" },
        {
          name: "link",
          type: "string",
          title: "CTA Link",
          description: "e.g. /contact or https://tim-6oq017zf.scoreapp.com",
        },
      ],
    },

    // 08. SEO
    {
      name: "seo",
      type: "object",
      title: "08. SEO",
      fields: [
        { name: "title", type: "localeString", title: "SEO Title" },
        { name: "description", type: "localeText", title: "SEO Description" },
      ],
    },
  ],
};
