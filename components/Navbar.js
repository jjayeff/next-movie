import React from 'react'
import Link from 'next/link'
import {
  CARTOON,
  US,
  ASIAN,
  EPISODE,
  LATEST,
  LIKEST,
  IMDB
} from '../texts'

class Navbar extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault() // หยุดการทำงาน Submit
    const name = e.target.name.value
  }
  renderComponent(groups){
    return groups.map((group,i) =>
      <Link href='/' key={i}>
        <li className='nav-item'>
          <a className='nav-link' style={{cursor: 'pointer'}}>{group}</a>
        </li>
      </Link>
    )
  }
  render(){
    const groups = [LATEST,ASIAN,US,EPISODE,CARTOON,LIKEST,IMDB];
    return (
      <nav className='navbar navbar-expand-lg fixed-top navbar-light bg-light'>
        <div className='container'>
          <Link href='/'>
            <a className='navbar-brand'>
              <img src='https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-film-movie-multimedia-video-camera-36739343a193a1ff-512x512.png' width='30' height='30' className='mr-1'/>
              ตาแฉะ
            </a>
          </Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarColor03' aria-controls='navbarColor03' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarColor03'>
            <ul className='navbar-nav mr-auto'>
              {this.renderComponent(groups)}
            </ul>
            <form className='form-inline my-2 my-lg-0' onSubmit={(e) => handleSubmit(e)}>
              <input className='form-control mr-sm-2' type='text' placeholder='ค้นหา' name='name' />
              <button className='btn btn-success my-2 my-sm-0' type='submit'>ค้นหา</button>
            </form>
          </div>
        </div>
      </nav>
      )
  }
}
  
export default Navbar