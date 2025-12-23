export default function MovieDetail() {
  return <h1>Movie</h1>;
}
export default function MovieDetail({ params }: { params: { id: string } }) {
  return <h1>Movie {params.id}</h1>;
}
