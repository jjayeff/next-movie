import Layout from '../../components/Layout'
import Home from '../../components/home'

const Index = (props) => (
  <Layout title='ดูหนังออนไลน์ฟรี กัน ตาแฉะ' type='user' data={props.url.query}>
    <Home title='หน้าแรก - ดูหนังออนไลน์ฟรี กัน ตาแฉะ' data={props.url.query}/>
  </Layout>
)

export default Index