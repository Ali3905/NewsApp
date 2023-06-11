import React from 'react'

const news = (props) => {
    let {title, desc , img, newsUrl, date, dat, author} = props;
    let unknown = "Unknown"
    return (
      <div>
        <div className="card" style={{height: '33rem'}}>
          <img src={img} className="card-img-top" alt="..."  style={{height: '200px'}}/>
          <div className="card-body">
            <h5 className="card-title">{title}.. </h5>
            <p className="card-text">{desc}...</p>
            <p className="card-text" style={{"fontWeight": "bold"}}> Author : {author || unknown} <br/> {date} {dat} </p>

            <a href={newsUrl} target = "_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default news
