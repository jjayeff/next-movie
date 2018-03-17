import Layout from '../components/Layout'
import Movie from '../components/movie'

const Index = (props) => (
  <Layout title={props.url.query.name}>
    <Movie data={props.url.query}/>
  </Layout>
)

export default Index