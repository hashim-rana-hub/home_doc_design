import React from 'react'
import { ReactComponent as HomeDoctorIcon } from '../assets/svgs/homedoctor-icon.svg'
import { ReactComponent as AvatarIcon } from '../assets/svgs/avatar-icon.svg'


const Header = () => {
  return (
    <nav class="p-8 pb-0 flex justify-between items-center">
        <div class="logo p-0">
           <HomeDoctorIcon />
        </div>
        <ul class="flex justify-center items-center">
          <li
            class="mr-10 pb-5 cursor-pointer hover:opacity-40 hover:border-b-2 hover:border-red-500 active:border-b-2 active:border-purple-600 active:opacity-100 active:text-blue-700"
          >
          <a>
            Categories
          </a>
          </li>
          <li
            class="mr-10 pb-5 cursor-pointer hover:opacity-40 hover:border-b-2 hover:border-red-500 active:border-b-2 active:border-purple-600 active:opacity-100 active:text-blue-700"
          >
          <a>
            Themes
          </a>
          </li>
          <li
            class="mr-10 pb-5 cursor-pointer hover:opacity-40 hover:border-b-2 hover:border-red-500 active:border-b-2 active:border-purple-600 active:opacity-100 active:text-blue-700"
          >
          <a>
            About us
          </a>
          </li>
          <li class="pb-5">
            <AvatarIcon />
          </li>
        </ul>
      </nav>
  )
}

export default Header