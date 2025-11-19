import React from 'react'

const Card = (props) => {
  return (
    // console.log(props)
    <div>
      <a href={props.elem.url} target="_blank">
            <div className="h-40 w-44 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={props.elem.download_url}
              />
            </div>
            <h2 className="font-bold ">{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card
