import React from 'react'
import './styles.css'
import HomeAndSearch from './HomeAndSearch/HomeAndSearch'
import Library from './Library/Library'

export default function Navigation() {
  return (
    <div id='navigation'>
        <HomeAndSearch />
        <Library />
    </div>
  )
}
