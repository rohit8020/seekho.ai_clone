const MODULE_NAME = 'home';

function generateKeyName(value) {
  return [MODULE_NAME, value];
}

const QUERY_KEYS = {
  GET_BEST_COURSES: generateKeyName('BestCourses'),
};

export default QUERY_KEYS;