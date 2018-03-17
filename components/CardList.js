import React from 'react'
import Link from 'next/link'

class CardList extends React.Component {
    renderComponent(groups){
        return groups.map((group,i) =>
          <Link href='/' key={i}>
            <li className='list-group-item'><b><a className='text-success' style={{cursor: 'pointer'}}>{group}</a></b></li>
          </Link>
        )
      }
    render(){
        return (
            <div className='bs-component'>
                <div className='card mb-3'>
                    <p className='card-header'>{this.props.head}</p>
                    <ul className='list-group list-group-flush'>
                        {this.renderComponent(this.props.data)}
                    </ul> 
                </div>
            </div>
        )
    }
}

export default CardList