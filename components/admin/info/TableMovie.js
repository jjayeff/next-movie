import React from 'react'
import Link from 'next/link'

class TableMovie extends React.Component {
    handleDelete(id, e) {
        e.preventDefault()
        if (confirm('Are you sure ?!')) {
            this.props.data.deleteMovie(id)
        }
    }
    renderComponent(datas) {
        return datas.map((data, index) => 
                <tr className="table-active" key={data._id}>
                    <td><img src={data.img} style={{width:'auto',height:'70px'}}/></td>
                    <td>{index + 1}</td>
                    <td>
                        <Link href={{ pathname: `/movie`, query: data }} replace>
                            <a href='#'>{data.name}</a>
                        </Link>
                    </td> 
                    <td>{data.quality}</td>
                    <td><span className='movie-imdb-star' />{data.imdb}</td>
                    <td>{data.sound}</td>
                    <td><button type="button" className="btn btn-warning">Edit</button></td>
                    <td><button type="button" className="btn btn-danger" onClick={this.handleDelete.bind(this, data._id)}>Delete</button></td>
                </tr>
        )
    }
    render(){ 
        return (
            <div className='col-lg-12'>
            <div className='bs-component'>
                <table className="table table-hover">
                    <thead align='center'>
                        <tr className="table-success">
                            <th scope="col">Image</th>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quality</th>
                            <th scope="col">IMDB</th>
                            <th scope="col">Sound</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderComponent(this.props.data.movies)}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default TableMovie