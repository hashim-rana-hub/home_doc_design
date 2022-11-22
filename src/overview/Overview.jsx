import React, { useEffect, useState } from 'react'
import {graph_data} from './OverviewSpiderData'
import Header from '../common/Header'
import imageurl from '../assets/images/generator.png'
import redGenerator from '../assets/images/redGenerator.png'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const BaseTabs = () => {
  return (
    <div className="mt-[4.8125rem] text-center">
      <ul className="flex justify-center text-black -mb-px font-medium " 
          id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li className="mr-[4.3125rem]" role="presentation">
            <a className="inline-block text-lg font-medium text-[#B338FF] rounded-t-lg  
              active:border-b-2 active:border-[#B33BFF] " id="overview-tab" 
              data-tabs-target="#overview" type="button" role="tab" aria-controls="overview" 
              aria-selected="false">Overview</a>
        </li>
        <li className="mr-[69px]" role="presentation">
            <a className="inline-block text-lg font-medium  rounded-t-lg active:border-b-2 
              active:border-[#B33BFF] hover:text-gray-600 hover:opacity-75" 
              id="quiz-tab" href="#quiz" type="button" role="tab" 
              aria-controls="quiz" aria-selected="true">Quiz</a>
        </li>
        <li className="mr-2" role="presentation">
            <a className="inline-block text-lg font-medium  rounded-t-lg active:border-b-2 
              active:border-[#B33BFF] hover:text-gray-600 hover:opacity-75" 
              id="products-tab" href="#products" type="button" role="tab" 
              aria-controls="products" aria-selected="false">Products</a>
        </li>
      </ul>
    </div>
  )
}

const OverviewButtons = () => {
  const listing = [
    {
      id: 1,
      title: "lorem ipsum"
    },
    {
      id: 2,
      title: "lorem ipsum"
    },
    {
      id: 3,
      title: "lorem ipsum"
    },
    {
      id: 4,
      title: "lorem ipsum"
    },
    {
      id: 5,
      title: "lorem ipsum"
    },
    {
      id: 6,
      title: "lorem ipsum"
    },
    {
      id: 7,
      title: "lorem ipsum"
    },
    {
      id: 8,
      title: "lorem ipsum"
    },
    {
      id: 9,
      title: "lorem ipsum"
    },
    {
      id: 10,
      title: "lorem ipsum"
    },
    {
      id: 11,
      title: "lorem ipsum"
    },
    {
      id: 12,
      title: "lorem ipsum"
    },
    {
      id: 13,
      title: "lorem ipsum"
    },
    {
      id: 14,
      title: "lorem ipsum"
    },
    {
      id: 15,
      title: "lorem ipsum"
    },
    {
      id: 16,
      title: "lorem ipsum"
    },
    {
      id: 17,
      title: "lorem ipsum"
    },
    {
      id: 18,
      title: "lorem ipsum"
    },
    
  ]
  const [listLenght, setlistLenght] = useState(4);
  const [showButton, setShowButton] = useState(listLenght > listing.length && true);

  useEffect(() => {
    if(showButton) {
      setlistLenght(listing.length)
    }
    else {
      setlistLenght(4)
    }
  }, [showButton])
 
  const learn_more = () => {
    setShowButton(!showButton)
  }
  return (
    <>
      <div className="text-center mt-[4.375rem]">
        <a className="btn mr-6"  href="#what">What is it?</a>
        <a className="btn mr-6" href="#reason">Reasons to buy</a>
        <a className="btn mr-6" href="#key">Key things to know</a>
        <a className="btn" href="">Methodology</a>
      </div>
      <div id='content' className='mt-[5.25rem]'>
        <div className='grid grid-cols-2 gap-36' id='what'>
          <div className='text-left'>
            <h1 className='text-4xl font-medium mb-[1.375rem]'>What is it?</h1>
            <p className='text-lg font-normal mb-10'>Generators are an appliance that allow you to still have electricity if the power goes out.</p>
            <p className='text-lg font-semibold'>Reasons to buy</p>
            <ul className='mt-3 mb-6 '>
            { listing?.slice(0, listLenght).map((list, id) => 
              <li key={list.id} className='text-base list-disc ml-5 font-normal list-item'>{list.title}</li>
              )}
            </ul>
           <a className='text-[#B33BFF] text-base font-normal'
              onClick={learn_more}
            >{!showButton? "Learn more" : "Learn Less"}</a>
            </div>
          <div>
            <img className='mx-auto' src={imageurl} />
          </div>
        </div>
      </div>
    </>
  )
}

const OverviewQuiz = () => {
  return (
    <div id='quiz' className='mt-[9.375rem]'>
      <h2 className='text-5xl font-semibold'>Your quiz is completed!</h2>
      <p className='mt-6 mb-10 text-base font-normal text-[#727f87]'>First, let’s find out if you need a generator at all  answer our quiz to see your personalized results in real time! </p>
      <div className="shadow-sm bg-#fff px-10 py-[2.875rem] rounded-md">
        <div className='flex items-center text-[#B338FF]'>
          <div className="bg-gray-600 rounded-full w-full h-4">
            <div className="w-8/12 h-4 bg-[#B33BFF]  text-right rounded-full ">
            </div>
          </div>
          <span className='ml-6'>75%</span>
        </div>
      </div>
      <div className='grid grid-cols-3 mt-[4.8125rem] gap-14'>
        <div className="col-span-2 py-[70px] flex flex-col justify-center px-[4.8125rem] bg-white border border-gray-200 shadow-sm rounded-[20px] ">
          <p className='text-lg font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout?</p>
          <input placeholder='Enter Your Answer Here...' className='mt-[39px] mb-[104px] pl-[2.125rem] py-4 text-lg font-normal
           text-[#959595] border-2 border-[#b33bff] rounded-xl outline-none'/>
          <div className='flex justify-between'>
            <a className='text-lg font-normal text-[#6B6B6B]'>Back</a>
            <a className='text-lg font-normal text-[#B33BFF]'>Skip</a>
          </div> 
        </div>
        <div>
          <div className='h-[300px] w-[300px] ml-auto'>
            <RadarChart data={[1,3,7,5,2,9]} />
          </div>
          <ul className='flex flex-wrap w-full items-center text-[#727f87]'>
          {
            graph_data?.map((item) => {
              return (
                <li key={item.id} className='min-w-[150px] mt-5 w-1/2'>
                  <span className='mr-4 text-[14px] font-bold '>{item.label}</span>
                  <span className='mr-4 text-base font-normal'>{item.tag}</span>
                  <span className='text-[14px] font-normal text-black border border-[#F6F2F7] rounded-lg py-[10px] pl-3 pr-8'>{item.price_val}</span>
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
    </div>
  )
}

const RadarChart = ({data: radarData}) => {
  const data = {
    labels: ['PR', 'PW', 'GE', 'PP', 'SZ', 'MS'],
    datasets: [
      {
        label: '# of Votes',
        data: radarData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  return (
    <Radar data={data}/>
  )
}

const TrendingCard = ({variant, data}) => {
  return (
    <>
      <div className={`overflow-hidden w-full flex justify-start
       px-[60px] py-11 mt-[3.75rem] shadow-sm bg-#fff relative ${variant ? "rounded-[40px]" : "rounded-[20px]"}`}>
        <div className=' mr-[60px] xl:w/4'>
          <img src={redGenerator} />
        </div>
        <div className={`flex flex-col text-left ${variant? "xl:w/8 ": "xl:w/4"}`}>
          <h4 className='text-2xl font-semibold'>Masuta || MM-3200 E</h4>
          <div className='flex'>
            <div className='mr-[180px]'>
              <p className='text-[14px] font-normal text-[#727f87]'>Type</p>
              <span className='text-lg font-semibold text-[#B33BFF]'>Portable</span>
            </div>
            <div>
              <p className='text-[14px] font-normal text-[#727f87]'>Fuel Type</p>
              <span className='text-lg font-semibold text-[#B33BFF]'>Gasoline</span>
            </div>
          </div>
          <p className='max-w-[430px] text-[#7E7287] text-base font-normal my-6'>Device that converts motive power into electric power for 
          use in an external.</p>
          <div>
            <p className='text[##7E7287] text-[14px] text-[#7E7287] font-normal'>Best price</p>
            <span className='text-lg font-semibold text-[#B33BFF]'>$115.15</span>
          </div>
          <div className='flex flex-col text-[#2193FD] text-base font-normal my-6'>
            <a>www.generatorshop.nz</a>
            <a className='underline'>See all retailers</a>
          </div>
          <div>
            <a className='bg-[#B33BFF] px-16 py-3 rounded-xl text-white'>Buy</a>
          </div>
        </div>
        {
          !variant? (
            <div before="Most Valueable" className='text-white before:absolute 
            before:content-[attr(before)] before:right-[-40px] 
            before:bg-[#B33BFF] before:w-[200px] before:rotate-45 '></div>
          ) : null
        }
        { variant && <div className='xl:w/4'>
          <RadarChart  data={data}/>
          <div className='mt-5'>
            <a className='bg-[#B33BFF] px-16 py-3 rounded-xl text-white'>Added</a>
          </div>
        </div> }
      
      </div>
    </>
  )
}

const ProductRank = () => {
  return (
    <div id="products" className='mt-[90px]'>
      <h2 className='text-5xl font-semibold'>Your Ranked Product Listings</h2>
      <p className='text-[#727F87] text-base font-normal'>You can save this list to your profile</p>
      <div className='h-[550px] flex justify-center'>
        <RadarChart data={[1,2,3,3,4, 4]}/>
      </div>
      </div>
  ) 
}

const Overview = () => {
  return (
    <div className="container mx-auto pb-9">
      <Header />
      <BaseTabs />
      <OverviewButtons />
      <OverviewQuiz />
      <TrendingCard />
      <ProductRank />
      <TrendingCard data={[1,2,3,3,4, 4]} variant='triple'/>
      <TrendingCard data={[5,2,4,3,4, 1]} variant='triple'/>
      <TrendingCard data={[1,2,5,3,4,2]} variant='triple'/>
    </div>
  )
}

export default Overview