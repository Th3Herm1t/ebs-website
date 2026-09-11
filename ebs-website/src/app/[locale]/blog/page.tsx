import BlogClient from "./BlogClient";
import { getBlogPosts } from "@/lib/blog/posts";

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <BlogClient posts={getBlogPosts(locale === "en" ? "en" : "fr")} locale={locale === "en" ? "en" : "fr"} />;
}
