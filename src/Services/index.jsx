const apiEndpoints = {
  getBestCourses : 'https://api.beyondexams.org/api/v1/get_best_courses'
}


export const getBestCourses = () => {
  return fetch(apiEndpoints.getBestCourses, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => {
    return response
  })
  .catch(error => {
    return error
  })
}