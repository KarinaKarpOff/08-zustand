import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const tag = resolvedParams.slug?.[0] || "all";
  const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  return {
    title: `${formattedTag} Notes | NoteHub`,
    description: `Browse and manage your ${formattedTag} notes in NoteHub.`,
    openGraph: {
      title: `${formattedTag} Notes | NoteHub`,
      description: `Browse and manage your ${formattedTag} notes in NoteHub.`,
      url: `https://notehub.com/notes/filter/${tag}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: `NoteHub ${formattedTag} Notes`,
        },
      ],
    },
  };
}

// import {
//   QueryClient,
//   HydrationBoundary,
//   dehydrate,
// } from "@tanstack/react-query";
// import { fetchNotes } from "@/lib/api";
// import NotesClient from "./Notes.client";

// interface NotesPageProps {
//   params: Promise<{ slug: string[] }>;
// }

// export default async function NotesPage({ params }: NotesPageProps) {
//   const { slug } = await params;
//   const currentTag = slug?.[0] === "all" ? "" : slug?.[0] || "";

//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["notes", 1, currentTag],
//     queryFn: () => fetchNotes(1, "", currentTag),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotesClient tag={currentTag} />
//     </HydrationBoundary>
//   );
// }
