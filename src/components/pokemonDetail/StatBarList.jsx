import React from 'react'
import BarProgresStat from './BarProgresStat'

const StatBarList = ({stats}) => {
  return (
    <section className='mb-5'>
        <h2>Stats</h2>
        <section>
            {
                stats?.map((stat) => <BarProgresStat key={stat.name} stat={stat} />)
            }
        </section>    
    </section>
  )
}

export default StatBarList
