import Link from 'next/link'

const Home = props => (
	<>
		<p>HOME!!</p>
		<Link href="/sell">
			<a>go to Sell page</a>
		</Link>
	</>
)
 
export default Home;