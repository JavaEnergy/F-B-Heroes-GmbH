import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function getHomePage(lang: string): Promise<any> {
  return client.fetch(
    groq`*[_type == "home-page"][0]{
      _id,
      // 1. Hero Section
      hero {
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      },
      // 2. Experience Stats Array
      stats[] {
        number,
        "label": label.${lang}
      },
      // 3. Realität Section
      realitat {
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      },
      // 4. Partnerschaften Cards Array
      partnerschaften[] {
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url,
        link
      },
      // 5. Middle Divider Images
      dividerImages {
        "leftImage": leftImage.asset->url,
        "rightImage": rightImage.asset->url
      },
      // 6. Final Bottom Cards Array
      finalCards[] {
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      }
    }`,
    { lang },
  );
}
