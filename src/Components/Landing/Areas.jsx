import React from 'react'
import Area from './Area'
import { areas } from '../../data'

const Areas = () => {
  return (
    <section className="areas clearfix">
      {areas.map((area) => {
        const { icon, title, text } = area
        return <Area key={area} icon={icon} title={title} text={text} />
      })}
    </section>
  )
}

export default Areas
