const Video = (props) => (
    <div className='bs-component'>        
        <div className='card border-secondary mb-3'>
            <p className='text-center bold pt-2'><a className='mr-2' href='#'>ดูหนังออนไลน์</a>{props.data.name}</p>
            <div className='col-xs-1 text-center pb-3'>
                <button type='button' className='btn btn-outline-success mr-2 active'> พากย์ไทย </button>
                <button type='button' className='btn btn-outline-success mr-2'> Soundtrack ซับไทย </button>
            </div>
            <div className='container text-center'>
                <video width='90%' controls>
                    <source src='https://oload.site/stream/-qbWihy1gMQ~1521278963~184.22.0.0~64h5e012?mime=true' type='video/mp4' />
                </video>
            </div>
            <div className='col-xs-1 text-center pt-3 pb-3'>
                <button type='button' className='btn btn-outline-success mr-2 active'> Player 1 </button>
                <button type='button' className='btn btn-outline-success mr-2'> Player 2 </button>
                <button type='button' className='btn btn-outline-success mr-2'> Player 3 </button>
            </div>
        </div>
    </div>
)

export default Video