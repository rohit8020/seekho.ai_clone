import { useBestCourses } from '../FetchingHooks';
import React,{useRef} from 'react';
import Course from './Course';
 
function CourseCarousel() {

  
  const bestCoursesQueryListData = useBestCourses();
  // console.log(bestCoursesQueryListData)
  const scrollRef = useRef(null);
  if(bestCoursesQueryListData.isLoading) return 'Loading Courses...'
  return (
      <div className=''>
         <div className='flex pt-14 gap-1 sm:gap-4 items-center'>
           
          <button 
          onClick={()=>{
            scrollRef.current.scrollLeft -= scrollRef.current.clientWidth;
          }
          }
          className='focus:outline-none outline-none h-6 w-6 p-1 rounded-full border border-black flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>
          </button>


        <div className='flex gap-4 overflow-x-auto no-scrollbar' ref={scrollRef}>
        {bestCoursesQueryListData.data && bestCoursesQueryListData?.data?.data?.data?.map((course,index) => (
          <div 
            key={index}
          className='w-[200px] sm:w-[330px]'>
            <Course 
          img={course.image_url}
          description={course.description}
          title={course.title}
          videos={course.video_count}
          />
          </div>
          ))}
          </div>
        
          <button 
          onClick={()=>{
            scrollRef.current.scrollLeft += scrollRef.current.clientWidth;
          }
          }className='focus:outline-none outline-none h-6 w-6 p-1 rounded-full border border-black flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
</button>
           </div> 
      </div>
  );
}




export default CourseCarousel;
