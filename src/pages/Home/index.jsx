import React from 'react';
import AutoWrite from '@/components/AutoWrite';
import CourseCarousel from '../../components/CourseCarousel'

export default function Home() {
  const AutoWriteText = [
    'Finance',
    'Digital Marketing',
    'Consultation',
    'Entrepreneurship',
    'Product Management',
  ];
  const Collaborators = [
    {
      name: 'Amazon',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png',
    },
    {
      name: 'Flipkart',
      image:
        'https://pbs.twimg.com/profile_images/1267713887165485061/WUR4QXtd_400x400.jpg',
    },
    {
      name: 'Hulu',
      image:
        'https://media.glassdoor.com/sqll/43242/hulu-squarelogo-1561078825650.png',
    },
    {
      name: 'Zomato',
      image:
        'https://logodownload.org/wp-content/uploads/2020/02/zomato-logo.png',
    },
    {
      name: 'Swiggy',
      image:
        'https://www.oneindia.com/img/1200x80/2017/07/swiggy-19-1500443913.jpg',
    },
  ];

  const Statistics = [
    {
      image: 'https://www.seekho.ai/assets/images/home-page/ratingIconRed.svg',
      count: '4.9k+',
      label: 'Rated',
    },
    {
      image: 'https://www.seekho.ai/assets/images/home-page/learnerIconRed.svg',
      count: '70000+',
      label: 'Learners',
    },
    {
      image: 'https://www.seekho.ai/assets/images/home-page/mentorIconRed.svg',
      count: '500+',
      label: 'Mentors & Corporates',
    },
  ];

  return (
    <>
      <section className='px-8 md:px-32 py-8 flex flex-col gap-4 relative'>
        <div className='text-center'>
          <div
            className='absolute top-0 left-0 w-screen h-1/3 bg-cover bg-no-repeat'
            style={{
              zIndex: -1,
              backgroundImage:
                'url(https://www.seekho.ai/assets/images/home-page/heroSectionBG.png)',
            }}
          />
          <h1 className='heading_color'>Accelerate Your Career in</h1>
          <h1 className='mt-4 text-pink-500'>
            <AutoWrite AutoWriteText={AutoWriteText} />
          </h1>
          <p className='text-2xl mt-8 text-gray-700 tracking-wide font-bold'>
            Join Select Membership and get access to 1000+ live classes from
            Industry Gurus, Learning Communities and Kickass Jobs.
          </p>
          <div className='my-[50px] flex justify-center items-center'>
            <div className='relative bg-white flex flex-col gap-4 w-4/5 md:w-[582px] p-4 md:p-8 border border-gray-200 shadow-lg rounded-xl'>
              <div className='absolute bottom-20 -left-40 justify-between items-center gap-2 shadow-lg rounded-l-3xl rounded-tr-3xl p-2 bg-white text-black hidden md:flex'>
                <div className='bg-black rounded-full h-8 w-8'>
                </div>
                {/* <img src="" alt="dp" /> */}
                <p className='text-xs md:text-sm'>Say Bye to Boring Classes!</p>
              </div>
              <div className='w-full h-[200px] md:h-[304px] bg-black rounded-xl'>
                  <img className='h-full w-full' src={`https://media3.giphy.com/media/WoKujxdDbtkFWc5Oww/giphy.gif?cid=ecf05e47p7ldof1vobtzfejuj9vs622jvi1torc5y4adyma3&rid=giphy.gif&ct=g`} alt="" />
              </div>
              <div className='bg-cover w-full h-[25px] md:h-[45px] flex  justify-between gap-4 px-2 md:px-8 '>
                {Collaborators.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt={item.name}
                    className='rounded w-[20px] md:w-[45px] h-[20px] md:h-[45px]'
                  />
                ))}
              </div>

              <div className='bottom-14 -right-4 md:-right-16 flex flex-col justify-center gap-4 md:gap-2 items-center  leading-4 bg-white text-black absolute w-[90px] md:w-[120px] h-[100px] md:h-[133px] px-1 md:px-1.5 py-1.5 md:py-2 border border-gray-200 shadow-lg rounded-lg'>
                <img
                  src='https://www.seekho.ai/assets/images/home-page/heroSectionFloatingVector2.webp'
                  className='w-[200px] h-[200px] '
                  alt='gurus'
                />
                <p className='textxs md:text-sm -mt-14'>500+ Industry Gurus</p>
              </div>
            </div>
          </div>
          {/* video container */}
        </div>

        <div
          className='w-full h-[200px] md:h-[239px] bg-contain md:bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage:
              'url(https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1649850936178-13%20april%202022b.png)',
          }}
        ></div>

        <div>
          <div className='py-[65px] text-center flex flex-col items-center justify-center gap-4 md:gap-[26px]'>
            <h1 className='heading_color'>Seekho Select Membership</h1>
            <p className='text-xl md:text-3xl tracking-wider text-gray-700'>
              Unlock all of Seekho Select at only{' '}
              <span className='text-pink-500 font-bold text-4xl block md:inline-block'>
                ₹999
              </span>{' '}
              per academy
            </p>

            <button className='bg-pink-500 px-4 py-2.5 mt-2 text-white text-lg rounded-xl font-bold shadow-inner-md shadow-md md:hidden mx-auto md:mx-0'>
              Join Now
            </button>
            <button className='text-pink-500 gap-1 hidden md:flex'>
              <span className='flex gap-1 text-2xl font-bold'>Join Now</span>
              <img
                src='/images/icons/arrow-right.svg'
                className='mt-1.5'
                width='25px'
                height='25px'
                alt='arrow'
              />
            </button>
          </div>
        </div>

  
        <div className='flex flex-col items-center gap-4 my-8'>
          <h1 className='heading_color'>Get the Best Courses from Us!</h1>
          <p className='text-2xl text-gray-700'>
            Choose the best course that you would like to accelerate your career in
          </p>
          <CourseCarousel/>
        </div>
      </section>
      {/* Industry Gurus */}
      <section className='px-8 md:px-32 pt-20 bg-pink-200 flex gap-4 flex-col items-center text-center md:text-left'>
        <h1 className='heading_color'>Industry Gurus are here to help you</h1>
        <p className='text-center text-xl md:text-2xl text-gray-700'>
          Follow curated Industry Experts on Seekho. Connect with them via Live
          Classes, 1:1 sessions and discussion forums - it's as cool as that!
        </p>
        <button className='home-page-btn'>Learn from 500+ Gurus</button>

        {/* Images Part */}
        <div className='relative w-full h-[200px] md:h-[600px]'>
          <img
            src='https://www.seekho.ai/assets/images/home-page/mentor1.webp'
            className='absolute bottom-0 -left-8 md:left-0 h-[150px] sm:h-[300px] md:h-[500px]'
            alt='mentor1'
          />
          <img
            src='https://www.seekho.ai/assets/images/home-page/mentor2.webp'
            className='absolute bottom-0 left-4 sm:left-7 md:left-20  h-[150px] sm:h-[350px] md:h-[550px]'
            alt='mentor1'
          />
          <img
            src='https://www.seekho.ai/assets/images/home-page/mentor3.webp'
            className='absolute bottom-0 left-14 sm:left-20 md:left-36  h-[150px] sm:h-[300px] md:h-[500px] z-1'
            alt='mentor1'
          />
          <img
            src='https://www.seekho.ai/assets/images/home-page/mentor5.webp'
            className='absolute bottom-0 left-28 sm:left-44 md:left-96  h-[150px] sm:h-[250px] md:h-[480px] z-0'
            alt='mentor1'
          />
        </div>
      </section>

      <div className='px-8 md:px-32 py-20 md:py-36 flex flex-col-reverse md:flex-row gap-8 md:gap-0 items-center justify-between'>
        <div
          style={{
            backgroundImage:
              'url(https://www.seekho.ai/assets/images/home-page/joinCommunity.webp)',
          }}
          className='w-full md:w-1/2 relative bg-contain md:bg-cover bg-center bg-no-repeat h-[320px]'
        >
          <img
            src='https://i.giphy.com/media/KGMzZvWa5su2O5LCVR/giphy.webp'
            alt='waveHand'
            className='absolute top-[90px] left-[105px] w-[40px] h-[40px] sm:top-[20px] sm:left-[170px] sm:w-[80px] sm:h-[80px] md:top-2.5 md:left-[230px] md:w-[80px] md:h-[80px]'
          />
          <img
            src='https://i.giphy.com/media/KGMzZvWa5su2O5LCVR/giphy.webp'
            alt='waveHand'
            className='absolute top-[140px] w-[40px] h-[40px] sm:top-[20px] sm:w-[80px] sm:h-[80px] md:w-[80px] right-5 md:right-12 md:top-[120px] md:h-[80px]'
          />
        </div>
        <div className='flex flex-col gap-4 md:w-1/3 w-full text-center md:text-left'>
          <p className='text-3xl font-bold'>
            Join 10k+ members from finest colleges and top companies
          </p>
          <p className='text-2xl text-gray-700'>
            Learn from your peers: from solving case studies together to
            availing exclusive mentorship
          </p>
          <button className='home-page-btn'>Join Now</button>
        </div>
      </div>
      <div className='px-8 md:px-32 pb-14 flex flex-col gap-8 items-center justify-between text-center md:text-left'>
        <h1 className='heading_color'>Get truly rewarded for Learning</h1>
        <p className='text-center text-xl md:text-2xl text-gray-700'>
          #SeekhoEveryday and break into the academy talentboards. Get noticed
          and scouted by leading companies who trust our leaderboard ranking
        </p>

        {/* Banner Part */}
        <div
          style={{
            backgroundImage:
              'url(https://www.seekho.ai/assets/images/home-page/talentBoard.webp)',
          }}
          className='relative bg-contain md:bg-cover bg-center bg-no-repeat h-[122px] md:h-[520px] w-full shadow-xl'
        >
          <div
            style={{
              backgroundImage:
                'url(https://www.seekho.ai/assets/images/home-page/talentBoardStats.png)',
            }}
            className='absolute bg-cover bg-center bg-no-repeat -bottom-20 -right-20 h-[320px] w-[500px] hidden md:block'
          ></div>
          <div
            style={{
              backgroundImage:
                'url(https://www.seekho.ai/assets/images/home-page/talentBoardFeedBack.png)',
            }}
            className='absolute bg-cover bg-center bg-no-repeat -bottom-20 left-28 h-[170px] w-[300px] hidden md:block'
          ></div>
        </div>
      </div>

      {/* Comapnies Part */}
      <div className='px-8 md:pl-32 py-20 md:py-40 flex flex-col md:flex-row gap-4 justify-between items-center'>
        <div className='flex flex-col items-start gap-4 md:w-1/2 text-center md:text-left'>
          <h1 className='heading_color'>Kickass Jobs from Leading Companies</h1>
          <p className=' text-center md:text-left text-xl md:text-2xl text-gray-700'>
            Curated and hand picked opportunities for you. Our mission is to get
            you closer to the most exciting jobs and internships
          </p>

          <button className='home-page-btn'>View Opportunities</button>
        </div>
        <div>Orbit Animation</div>
      </div>

      {/* Wall of Love */}
      <div className='px-32 py-12'>
        <div className='relative flex flex-col items-center gap-4'>
          <h1 className='heading_color'>Wall of Love</h1>
          <p className='relative'>
            <span
              style={{
                backgroundImage:
                  'url(https://www.seekho.ai/assets/images/home-page/quoteIconRed.png)',
              }}
              className='absolute bg-cover bg-center bg-no-repeat top-[0px] -right-14 h-[37px] w-[50px]'
            ></span>
            <span className='pt-5'>random testimonial</span>
          </p>
          <div>ratings here</div>
        </div>
      </div>

      {/* bruh part */}
      <div className='py-20 md:py-36 px-8 md:px-36 flex flex-col-reverse md:flex-row gap-20 md:gap-4 justify-between items-center'>
        <div className='w-full md:w-[420px]'>
          <div
            style={{
              backgroundImage:
                'url(https://www.seekho.ai/assets/images/home-page/painPoint.webp)',
            }}
            className='w-full h-[420px] md:h-[610px] bg-contain bg-no-repeat bg-center'
          ></div>
        </div>

        <div className='w-full md:w-1/2 flex flex-col gap-4 justify-start items-start text-center md:text-left'>
          <h1 className='heading_color'>bruh! How exactly do I achieve my career goals?</h1>
          <p className='text-center md:text-left text-xl md:text-2xl text-gray-700'>
            Seekho Select has helped 70,000+ students accelerate their career so
            far.
          </p>
          <button className='home-page-btn'>Get Future Ready</button>
        </div>
      </div>

      {/* Our Vision */}
      <div className='pb-36 px-8 md:px-36 flex gap-20 md:gap-4 flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-1/2 flex flex-col gap-4 justify-start items-start'>
          <h2 className='mx-auto md:mx-0 text-center md:text-left'>
            Our Vision
          </h2>
          <p className=' text-center md:text-left text-xl md:text-2xl tracking-wider text-gray-700'>
            We want to nurture the symbiosis between students, mentors and
            employers. We believe that our future lies in perfecting this
            meaningful interaction.
          </p>
          <button className='text-pink-500 flex gap-1 mx-auto md:mx-0'>
            <span className='flex gap-1 text-2xl font-bold'>Learn More</span>
            <img
              src='/images/icons/arrow-right.svg'
              className='mt-1.5'
              width='25px'
              height='25px'
              alt='arrow'
            />
          </button>
        </div>

        <div
          style={{
            backgroundImage:
              'url(https://www.seekho.ai/assets/images/home-page/about.webp)',
          }}
          className='w-full md:w-1/2 h-[200px] sm:h-[420px] md:h-[610px] bg-contain bg-center bg-no-repeat'
        ></div>
      </div>

      {/* Stats */}
      <div className='px-8 md:px-36 pb-36 flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-start md:items-center'>
        {Statistics.map((stats, index) => (
          <div key={index} className='flex gap-6'>
            <div className='relative'>
              <div className='bg-pink-500 opacity-30 w-[60px] h-[60px] rounded-full'></div>
              <img
                width='50px'
                heigth='50px'
                className='absolute top-5 left-5'
                src={stats.image}
                alt={stats.label}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-pink-500'>{stats.count}</h1>
              <p className='text-gray-700 text-2xl'>{stats.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Download Part */}
      <div className='md:pt-14 pb20 sm:pb-36 px-8 md:px-36 flex flex-col-reverse md:flex-row gap-20 md:gap-4 justify-between items-center'>
        <div
          style={{
            backgroundImage:
              'url(https://www.seekho.ai/assets/images/home-page/downloadApp.webp)',
          }}
          className='bg-contain bg-no-repeat bg-center w-full md:w-1/2 h-[380px] md:h-[500px]'
        ></div>
        <div className='w-full md:w-1/2 flex flex-col gap-6 justify-start items-start text-center md:text-left'>
          <h1 className='heading_color'>All your career needs in a single app</h1>
          <p className='text-xl md:text-2xl tracking-wider text-gray-700'>
            Take classes on the go, interact with community and apply for
            kickass jobs
          </p>
          <div className='flex justify-center gap-4 md:gap-0 md:justify-between items-center w-full'>
            <img
              src='https://www.seekho.ai/assets/images/home-page/appStore.svg'
              className='w-[136px] h-[43px] md:w-[232px] md:h-[66px]'
              alt='Apple Store'
            />
            <img
              src='https://www.seekho.ai/assets/images/home-page/playStore.png'
              className='w-[136px] h-[43px] md:w-[232px] md:h-[66px]'
              alt='Play Store'
            />
          </div>
        </div>
      </div>

      {/* Subscription Part  */}
      <div className='px-4 md:px-36 mb-52 py-14 relative'>
        <div
          className='w-full sm:w-[300px] md:w-[765px] h-[100px] md:h-[133px] top-0 left-0'
          style={{
            background:
              'linear-gradient(90deg, rgb(255, 89, 118), rgb(247, 226, 152))',
            borderRadius: '5px',
            zIndex: '-10',
          }}
        ></div>
        <div
          style={{
            backgroundImage:
              'url(https://www.seekho.ai/assets/images/home-page/subscribePattern.svg)',
          }}
          className='bg-contain bg-center bg-no-repeat w-36 h-36 absolute -bottom-28 md:bottom-0 right-0 md:right-20'
        ></div>
        <div className='ml-2 md:mx-4 absolute top-20 md:w-[1100px] bg-white px-4 py-8 flex gap-4 flex-col md:flex-row justify-between items-center shadow-xl rounded-lg'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-lg md:text-2xl'>
              We hate spam. We like career updates
            </h3>
            <p className='text-md text-gray-700 md:text-xl tracking-wide'>
              Get notified about all the learning and job opportunities.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'rgb(243,243,243)',
            }}
            className='md:h-[70px] md:w-[454px] rounded-lg text-lg shadow-lg px-4 py-2 md:py-8 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between'
          >
            <img
              src='https://www.seekho.ai/assets/images/home-page/emailIcon.svg'
              alt='email'
            />
            <div className='ml-4 md:ml-0 md:py-2.5'>
              <input
                className='md:py-2.5 bg-transparent outline-none w-full  '
                placeholder='Enter your email.'
              />
            </div>
            <button className='home-page-btn'>Notify Me</button>
          </div>
        </div>
      </div>
    </>
  );
}
