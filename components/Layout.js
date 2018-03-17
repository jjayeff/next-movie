import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../css/style.css'

const Layout = (props) => (
  <div>
    <Head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
        <link rel="icon" type="image/jpg" href="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-film-movie-multimedia-video-camera-36739343a193a1ff-512x512.png" />
        <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <Navbar />
    {props.children}
  </div>
)

export default Layout