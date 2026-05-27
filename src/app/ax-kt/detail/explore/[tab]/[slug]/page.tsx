import { notFound } from "next/navigation";
import AxKtDetailFooter from "@/ax-kt/components/AxKtDetailFooter";
import ExploreDetailBody from "@/ax-kt/detail/ExploreDetailBody";
import { exploreTabs, type ExploreTabId } from "@/ax-kt/exploreContent";

const VALID_TABS = new Set(exploreTabs.map((t) => t.id));

export default async function ExploreDetailPage({
  params,
}: {
  params: Promise<{ tab: string; slug: string }>;
}) {
  const { tab, slug } = await params;
  if (!VALID_TABS.has(tab as ExploreTabId)) notFound();

  return (
    <article>
      <ExploreDetailBody tab={tab as ExploreTabId} slug={slug} />
      <AxKtDetailFooter />
    </article>
  );
}
