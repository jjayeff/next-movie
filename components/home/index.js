import Left from './Left'
import Right from './Right'

const Index = (props) => (
    <div className='container' style={{paddingTop:'80px'}}>
        <div className='row'>
            <Left title={props.title}/>
            <Right />
        </div>
    </div>
)

export default Index