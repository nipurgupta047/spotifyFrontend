import React from 'react'
import './styles.css'
import { FaPlus, FaArrowRight, FaLayerGroup} from 'react-icons/fa'

export default function Library() {
  return (
    <div id='library'>
      <div id='yourLibrary'>
        <div id='iconAndLabelLibrary'>
            <div id='iconLibrary'>
                <FaLayerGroup />
            </div>
            <p className='yourLibraryWord'>Your Library</p>
        </div>
        <button className='libraryBtn'><FaPlus /></button>
        <button className='libraryBtn'><FaArrowRight /></button>
      </div>

      <div id='libraryItems'>
        <div className='try'>
            abcdefghijkl
        </div>
        <div className='try'>
            abcdefghijkl
        </div>
        <div className='try'>
            abcdefghijkl
        </div>
        <div className='try'>
            abcdefghijkl
        </div>


        <div className='try'>
            abcdefghijkl
        </div>
        <div className='try'>
            abcdefghijkl
        </div>
        <div className='try'>
            abcdefghijkl
        </div>
        <div className='try'>
            abcdefghijkl
        </div>
        <div className='try'>
            abcdefghijkl
        </div>

        <div className='try'>
            abcdefghijkl
        </div><div className='try'>
            abcdefghijkl
        </div>
        <div className='try'>
            abcdefghijkl
        </div>
        <div className='try'>
            abcdefghijkl
        </div>
        <div className='try'>
            abcdefghijkl
        </div>
        <div className='try'>
            abcdefghijkl
        </div>
        <div className='try'>
            d
        </div>
        <div className='try'>
            c
        </div>
        <div className='try'>
            b
        </div>
        <div className='try'>
            a
        </div>
      </div>
    </div>
  )
}
