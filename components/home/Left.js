import CardMovie from './CardMovie'
import { movie } from '../../data'

const Left = (props) => (
    <div className='col-lg-9 col-md-8 col-sm-6'>
        <div className='bs-component'>        
            <div className='card border-secondary mb-3'>
                <div className='card-header'>{props.title}</div>
                <div className='card-body'>
                    <div className='row'>
                        <CardMovie data={movie}/>
                    </div>
                </div>
                <div className='card-footer'>
                    <div className='text-center'>
                        pager
                    </div>
                </div>
            </div>
        </div>            
    </div>
)

export default Left