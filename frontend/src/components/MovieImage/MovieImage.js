export function MovieImage({ path, size = 200 }) {
	return (
		<figure style={{ margin: 0}}>
			<img src={`https://image.tmdb.org/t/p/w${size}/${path}`} alt="" />
		</figure>
	)
}
