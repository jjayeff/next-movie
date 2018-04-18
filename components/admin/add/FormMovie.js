import React from 'react'
import Router from 'next/router'
import { types, years, groups } from '../../../data'

class FormMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Iron Man 3 มหาประลัย คนเกราะเหล็ก 3',
            imdb: '7.2',
            img: 'https://www.movie2free.com/wp-content/uploads/thumb/ironman3-230x300.jpg',
            quality: 'HD',
            sound: 'Thai+Soundtrack(FULL)',
            year: '2018',
            trailer: 'https://www.youtube.com/embed/Ke1Y3P9D0Bc',
            synopsis: 'โทนี่ สตาร์ค/ไอรอน แมน อัจฉริยะนักอุตสาหกรรมสุดเกรียน ตกอยู่ภายใต้หลุมพรางของศัตรูผู้ไม่รู้จักขอบเขตของคำว่าโหดร้าย เมื่อสตาร์คพบว่าโลกส่วนตัวของเขาได้ถูกทำลายลงด้วยเงื้อมมือของศัตรูเหล่านั้น เขาจึงออกตามล่าคนที่ต้องรับผิดชอบกับเหตุการณ์ที่เกิดขึ้นแบบพลิกแผ่นดิน ในทุกย่างก้าวของการเดินทางครั้งนี้ คือการทดสอบความเข้มแข็งของเขา เมื่อหลังชนฝา สตาร์คเอาตัวรอดมาได้โดยอุปกรณ์ต่าง ๆ ของเขาเอง สิ่งที่พึ่งพาได้ในตอนนี้ก็คือความเป็นนักประดิษฐ์และสัญชาตญาณ เพื่อจะปกป้องคนที่เขารัก เมื่อเขาลุกขึ้นสู้อีกครั้ง สตาร์คจึงได้พบกับคำตอบของคำถามที่คอยหลอกหลอนเขามาโดยตลอดว่า คนสร้างชุดเกราะหรือชุดเกราะสร้างคนกันแน่?',
            videosThai: [],
            videosEng: [],
            type: [],
            group: [],
            videoThai1: 'https://oload.site/stream/5A6qWBstfvo~1522574638~184.22.0.0~1LxhqLtd?mime=true',
            videoThai2: '',
            videoThai3: '',
            videoEng1: 'https://oload.site/stream/5A6qWBstfvo~1522574638~184.22.0.0~1LxhqLtd?mime=true',
            videoEng2: '',
            videoEng3: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeType = this.handleChangeType.bind(this)
        this.handleChangeGroup = this.handleChangeGroup.bind(this)
    }
    
    handleChange(type, e) {
        var myobj = JSON.parse(`{ "${type}":"${e.target.value}" }`)
        this.setState(myobj)
    }

    handleChangeType(e) {
        this.setState({
            type: [...this.state.type, e.target.value]
        })
    }

    handleChangeGroup(e) {
        this.setState({
            group: [...this.state.group, e.target.value]
        })
    }
    
    async handleSubmit(e) {
        e.preventDefault()
        if(this.state.videoThai1 != '') await this.setState({videosThai: [...this.state.videosThai, this.state.videoThai1]})
        if(this.state.videoThai2 != '') await this.setState({videosThai: [...this.state.videosThai, this.state.videoThai2]})
        if(this.state.videoThai3 != '') await this.setState({videosThai: [...this.state.videosThai, this.state.videoThai3]})
        if(this.state.videoEng1 != '') await this.setState({videosEng: [...this.state.videosEng, this.state.videoEng1]})
        if(this.state.videoEng2 != '') await this.setState({videosEng: [...this.state.videosEng, this.state.videoEng2]})
        if(this.state.videoEng3 != '') await this.setState({videosEng: [...this.state.videosEng, this.state.videoEng3]})
        if(this.state.type.length === 0) await this.setState({type: [...this.state.type, 'ไม่มีหมวดหมู่']})
        if(this.state.group.length === 0) await this.setState({group: [...this.state.group, 'หนังฝรั่ง']})
        if (confirm('Are you sure ?!')) {
            Router.reload()
            this.props.data.createMovie(this.state)
            Router.push('/admin/info')
        }
    }
    renderComponentRadioType(datas){
        return datas.map((data, index) => 
            <div className="col-lg-4" key={index}>
                <label className="form-check-label" style={{paddingLeft:'25px'}}>
                    <input type="radio" className="form-check-input" value={data} onChange={this.handleChangeType}/>{data}
                </label>
            </div>
        )
    }
    renderComponentRadioGroup(datas){
        return datas.map((data, index) => 
            <div className="col-lg-4" key={index}>
                <label className="form-check-label" style={{paddingLeft:'25px'}}>
                    <input type="radio" className="form-check-input" value={data} onChange={this.handleChangeGroup}/>{data}
                </label>
            </div>
        )
    }
    renderComponentYears(datas){
        return datas.map((data, index) => <option key={index}>{data}</option>)
    }
    render(){
        return (
            <div className="bs-component">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="form-group">
                            <label>* ชื่อหนัง</label>
                            <input type="text" className="form-control" placeholder="ชื่อหนังภาษาไทย + ภาษาอังกฤษ" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-3">
                                <label>* IMDB</label>
                                <input type="number" className="form-control" placeholder="คะแนนตัวเลข" min="0" max="10" step="0.1" value={this.state.imdb} onChange={this.handleChange.bind(this, 'imdb')} />
                            </div>
                            <div className="col-lg-3">
                                <label>* เสียง</label>
                                <select className="form-control" value={this.state.sound} onChange={this.handleChange.bind(this, 'sound')}>
                                    <option>Thai+Soundtrack(FULL)</option>
                                    <option>Thai(T)</option>
                                    <option>Soundtrack(S)</option>
                                </select>
                            </div>
                            <div className="col-lg-3">
                                <label>* ความชัด</label>
                                <select className="form-control" value={this.state.quality} onChange={this.handleChange.bind(this, 'quality')}>
                                    <option>HD</option>
                                    <option>SD</option>
                                    <option>ZM</option>
                                </select>
                            </div>
                            <div className="col-lg-3">
                                <label>* ปี</label>
                                <select className="form-control" value={this.state.year} onChange={this.handleChange.bind(this, 'year')} >
                                    {this.renderComponentYears(years)}
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label>* ลิงค์รูปภาพ</label>
                                <input type="text" className="form-control" placeholder="https://www.movie2free.com/wp-content/uploads/thumb/PercyJackson1-230x300.jpg" value={this.state.img} onChange={this.handleChange.bind(this, 'img')} />
                            </div>
                            <div className="col-lg-6 ">
                                <label>* ลิงค์ตัวอย่าง</label>
                                <input type="text" className="form-control" placeholder="https://www.movie2free.com/wp-content/uploads/thumb/PercyJackson1-230x300.jpg" value={this.state.trailer} onChange={this.handleChange.bind(this, 'trailer')} />
                            </div>
                            <label className="col-lg-12 ">* ประเภทหนัง</label>
                            {this.renderComponentRadioType(types)}
                            <label className="col-lg-12 ">* หมวดหมู่หนัง</label>
                            {this.renderComponentRadioGroup(groups)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleTextarea">* เรื่องย่อ</label>
                            <textarea className="form-control" rows="5" value={this.state.synopsis} onChange={this.handleChange.bind(this, 'synopsis')}></textarea>
                            <label>* ลิงค์วิดีโอพากย์ไทย</label>
                            <input type="text" className="form-control" placeholder="ใส่ลิ้งค์วิดีโอ" value={this.state.videoThai1} onChange={this.handleChange.bind(this, 'videoThai1')}/>
                            <input type="text" className="form-control" placeholder="ใส่ลิ้งค์วิดีโอ" value={this.state.videoThai2} onChange={this.handleChange.bind(this, 'videoThai2')}/>
                            <input type="text" className="form-control" placeholder="ใส่ลิ้งค์วิดีโอ" value={this.state.videoThai3} onChange={this.handleChange.bind(this, 'videoThai3')}/>
                            <label>* ลิงค์วิดีโอซับไทย</label>
                            <input type="text" className="form-control" placeholder="ใส่ลิ้งค์วิดีโอ" value={this.state.videoEng1} onChange={this.handleChange.bind(this, 'videoEng1')}/>
                            <input type="text" className="form-control" placeholder="ใส่ลิ้งค์วิดีโอ" value={this.state.videoEng2} onChange={this.handleChange.bind(this, 'videoEng2')}/>
                            <input type="text" className="form-control" placeholder="ใส่ลิ้งค์วิดีโอ" value={this.state.videoEng3} onChange={this.handleChange.bind(this, 'videoEng3')}/>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default FormMovie