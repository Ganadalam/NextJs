import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ⭐ 핵심
  return (
    <div>
      <Suspense fallback={<h1>Loadiing movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loadiing movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
