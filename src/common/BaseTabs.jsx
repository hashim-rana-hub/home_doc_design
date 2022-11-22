import React from 'react'

const BaseTabs = () => {
  return (
    <div class="mt-[4.8125rem] text-center">
      <ul class="flex justify-center text-black -mb-px font-medium " 
          id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li class="mr-[4.3125rem]" role="presentation">
            <a class="inline-block text-lg font-medium  text-[#B338FF] rounded-t-lg  active:border-b-2 active:border-[#B33BFF]" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
        </li>
        <li class="mr-[69px]" role="presentation">
            <a class="inline-block text-lg font-medium  rounded-t-lg active:border-b-2 active:border-[#B33BFF] hover:text-gray-600 hover:opacity-75" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</a>
        </li>
        <li class="mr-2" role="presentation">
            <a class="inline-block text-lg font-medium  rounded-t-lg active:border-b-2 active:border-[#B33BFF] hover:text-gray-600 hover:opacity-75" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
        </li>
      </ul>
</div>
  )
}

export default BaseTabs