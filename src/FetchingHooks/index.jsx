import { useQuery } from 'react-query';
import {
  getBestCourses
} from '../Services';
import QUERY_KEYS from '../Queries';

/**
 * @returns react-query object
 */

export const useBestCourses = (params) => {
  return useQuery([...QUERY_KEYS.GET_BEST_COURSES], () => getBestCourses(params), {
    retry: false,
  });
};
