import React from 'react'
import './style.scss'
export default function sectionHeader({ title }) {
    return (
        <h6 className='section-header'>
            {title}
        </h6>
    )
}
