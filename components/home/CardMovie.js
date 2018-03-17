import React from 'react'
import Link from 'next/link'

class CardMovie extends React.Component {
    renderComponent(datas){
        return datas.map((data) =>
            <div className='col-lg-3 col-md-6' key={data.id}>
                <div className='card mb-3'>
                    <div className='movie'>
                        <Link href={{ pathname: `/movie`, query: data }} replace>
                            <div className='movie-box'>
                                <div className='movie-title'><a href='#'>{data.name}</a></div>
                                <div className='movie-imdb'><b><span>{data.imdb}</span></b></div>
                                <div className='movie-corner movie-HD'>{data.quality}</div>
                                <div className='movie-image'><img src={data.img}/></div>
                            </div>
                        </Link>
                    <div className='movie-footer'>{data.footer}</div>
                </div>
                </div>
            </div>
        )
      }
    render(){
        return (
            <div className='row'>
                {this.renderComponent(this.props.data)}    
            </div>
        )
    }
}

export default CardMovie