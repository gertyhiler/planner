import Project from "pages/project";

export default function Page({ params }: { params: { slug?: string } }) {
  if (!params.slug) return <div>Project not found</div>;
  return <Project slug={params.slug} />;
}
