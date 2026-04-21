import { createClient, groq } from "next-sanity";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error(
    "Missing Sanity environment variables. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET (or SANITY_PROJECT_ID and SANITY_DATASET) in your .env.local file.",
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function getHomePage(lang: string): Promise<any> {
  return client.fetch(
    groq`*[_type == "home-page"][0]{
      _id,
      hero {
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      },
      stats[] {
        number,
        "label": label.${lang}
      },
      realitat {
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      },
      partnerschaften[] {
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url,
        link
      },
      dividerImages {
        "leftImage": leftImage.asset->url,
        "rightImage": rightImage.asset->url
      },
      finalCards[] {
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      }
    }`,
    { lang },
  );
}

export async function getServicesPage(lang: string): Promise<any> {
  return client.fetch(
    groq`*[_type == "services-page"][0]{
      _id,
      hero {
        "subtitle": subtitle.${lang},
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      },
      overview {
        cards[] {
          "title": title.${lang},
          "description": description.${lang},
          "image": image.asset->url
        }
      }
    }`,
    { lang },
  );
}

export async function getRoboticPage(lang: string): Promise<any> {
  return client.fetch(
    groq`*[_type == "robotic-gastronomy-page"][0]{
      _id,
      // 01. Hero Section
      hero {
        "badge": badge.${lang},
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      },
      // 02. Definition & Cards Section
      definitionCards {
        "title": title.${lang},
        "description": description.${lang},
        cards[] {
          "icon": icon.asset->url,
          "title": title.${lang},
          "description": description.${lang}
        }
      },
      // 03. Expertise & References Section
      expertiseReferences {
        "title": title.${lang},
        cards[] {
          "image": image.asset->url,
          "label": label.${lang},
          "title": title.${lang},
          "description": description.${lang}
        }
      },
      // 04. Implementation Partner Section
      implementationPartner {
        "circleImage": circleImage.asset->url
      }
    }`,
    { lang },
  );
}

export async function getNetworkPage(lang: string): Promise<any> {
  return client.fetch(
    groq`*[_type == "network-page"][0]{
      hero {
        "badge": badge.${lang},
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      },
      expertsSection {
        "title": title.${lang},
        "description": description.${lang},
        cards[] {
          "image": image.asset->url,
          "title": title.${lang},
          "description": description.${lang}
        }
      }
    }`,
    { lang },
  );
}

export async function getAboutPage(lang: string): Promise<any> {
  return client.fetch(
    groq`*[_type == "about-page"][0]{
      hero {
        "badge": badge.${lang},
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      },
      cardsSection {
        "title": title.${lang},
        "description": description.${lang},
        cards[] {
          "image": image.asset->url,
          "title": title.${lang},
          "description": description.${lang}
        }
      }
    }`,
    { lang },
  );
}

export async function getExtraPage(slug: string, lang: string) {
  return client.fetch(
    groq`*[_type == "extra-page" && slug.current == $slug][0]{
      title,
      "content": content.${lang}
    }`,
    { slug, lang },
  );
}
