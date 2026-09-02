import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog/posts";
import BlogPostClient from "./BlogPostClient";
import { pageMetadata } from "@/lib/seo";

interface PageParams {
  params: Promise<{ slug: string; locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    Object.keys(blogPosts).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageParams) {
  const { slug, locale } = await params;
  const post = blogPosts[slug];
  if (!post) return {};

  return pageMetadata({
    title: `${post.title} | Blog EBS Tunis`,
    description: post.excerpt,
    path: `/${locale}/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://ebs.tn${post.featuredImage}`,
    datePublished: "2026-08-24T08:00:00+01:00",
    dateModified: "2026-09-02T08:00:00+01:00",
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: "https://ebs.tn",
    },
    publisher: {
      "@type": "CollegeOrUniversity",
      name: "Espima Business School",
      logo: {
        "@type": "ImageObject",
        url: "https://ebs.tn/images/logo.png",
      },
    },
    mainEntityOfPage: `https://ebs.tn/fr/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
