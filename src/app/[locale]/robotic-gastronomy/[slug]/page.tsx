import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { getCaseStudy } from "../../../../../sanity/sanity-utils";
import {
  CaseStudyHero,
  CaseStudySections,
  CaseStudyLearnings,
  CaseStudyVideo,
  CaseStudyGallery,
  CaseStudyConclusion,
} from "@/components/case-study";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const data = await getCaseStudy(slug, locale);
  if (!data) return {};
  return {
    title: data.seo?.title ?? data.hero?.title,
    description: data.seo?.description ?? data.hero?.introText,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  const data = await getCaseStudy(slug, locale);

  if (!data) notFound();

  return (
    <>
      <CaseStudyHero
        preTitle={data.hero?.preTitle ?? null}
        title={data.hero?.title ?? slug}
        subtitle={data.hero?.subtitle ?? null}
        introText={data.hero?.introText ?? null}
        heroImage={data.hero?.heroImage ?? null}
        backLabel={dict.caseStudy.backLink}
        locale={locale}
      />
      <CaseStudySections sections={data.sections ?? []} />
      {data.learnings?.items?.length > 0 && (
        <CaseStudyLearnings
          title={data.learnings.title}
          items={data.learnings.items}
        />
      )}
      <CaseStudyVideo videoUrl={data.videoUrl ?? null} />
      <CaseStudyGallery images={data.galleryImages ?? []} />
      <CaseStudyConclusion
        title={dict.caseStudy.conclusionTitle}
        text={data.conclusion?.text ?? null}
      />
    </>
  );
}
