import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching Videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ⭐ 핵심
  console.log("-------------------------------");

  console.log("st fetching");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  console.log("end fetching");
  return <h1>{movie.title}</h1>;
}

// export const metadata = {
//   title: "Home",
// };

// const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// async function getMovies() {
//   await new Promise((resolve) => setTimeout(resolve, 10000));
//   const response = await fetch(URL);
//   const json = await response.json();
//   return json;
// }

// export default async function HomePage() {
//   const movies = await getMovies();
//   return <div>{JSON.stringify(movies)}</div>;
// }

// // import { API_URL } from "../../../(home)/page";

// // async function getMovie(id: string) {
// //   console.log(`Fetching movies: ${Date.now()}`);
// //   await new Promise((resolve) => setTimeout(resolve, 5000));
// //   const response = await fetch(`${API_URL}/${id}`);
// //   return response.json();
// // }

// // async function getVideos(id: string) {
// //   console.log(`Fetching videos: ${Date.now()}`);
// //   await new Promise((resolve) => setTimeout(resolve, 5000));
// //   const response = await fetch(`${API_URL}/${id}/videos`);
// //   return response.json();
// // }

// // export default async function MovieDetail({
// //   params: { id },
// // }: {
// //   params: { id: string };
// // }) {
// //   console.log("===========");
// //   console.log("start fetching");
// //   const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
// //   console.log("end fetching");
// //   return <h1>{movie.title}</h1>;
// // }
