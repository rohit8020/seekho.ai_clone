import { useBestCourses } from '../FetchingHooks';
import React, {useState,useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Course from './Course';
 
function CourseCarousel() {

  const bestCoursesQueryListData = useBestCourses();
  console.log(bestCoursesQueryListData)

  return (
      <div className='w-96'>
        {bestCoursesQueryListData.isLoading && 'Loading Courses...'}
        <Carousel className='' autoPlay={true} interval={1400}>
        {bestCoursesQueryListData.data && bestCoursesQueryListData?.data?.data?.data?.map((course,index) => (
          <Course 
          img={course.image_url}
          description={course.description}
          title={course.title}
          videos={course.video_count}
          />
        ))}
        </Carousel>
      </div>
  );
}

export default CourseCarousel;
