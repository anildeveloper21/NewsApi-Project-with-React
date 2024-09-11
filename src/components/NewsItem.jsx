import React from 'react'
import image from '../assets/images.jpg'

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-2 px-2 py-2" style={{ maxWidth: "320px" }}>
            <img src={src?src:image} style={{height:"200px", width:"360", overflow:"hidden"}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,45)}</h5>
                <p className="card-text">{description?description.slice(0,60):"this news decription is created by me for random news decription"}</p>
                <a href={url} className="btn btn-primary">Read more</a>
            </div>
        </div>
    )
}

export default NewsItem
