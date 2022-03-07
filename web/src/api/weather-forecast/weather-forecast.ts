/**
 * Generated by orval v6.6.0 🍺
 * Do not edit manually.
 * api
 * OpenAPI spec version: 1.0
 */
import axios,{
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from 'react-query'
import type {
  WeatherForecast
} from '../api.schemas'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;


export const getApiWeatherForecast = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<WeatherForecast[]>> => {
    return axios.get(
      `/api/WeatherForecast`,options
    );
  }


export const getGetApiWeatherForecastQueryKey = () => [`/api/WeatherForecast`];

    
export const useGetApiWeatherForecast = <TData = AsyncReturnType<typeof getApiWeatherForecast>, TError = AxiosError<unknown>>(
  options?: { query?:UseQueryOptions<AsyncReturnType<typeof getApiWeatherForecast>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetApiWeatherForecastQueryKey();

  

  const queryFn: QueryFunction<AsyncReturnType<typeof getApiWeatherForecast>> = () => getApiWeatherForecast(axiosOptions);

  const query = useQuery<AsyncReturnType<typeof getApiWeatherForecast>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}

export const postApiWeatherForecast = (
    weatherForecast: WeatherForecast, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    return axios.post(
      `/api/WeatherForecast`,
      weatherForecast,options
    );
  }



    export const usePostApiWeatherForecast = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof postApiWeatherForecast>, TError,{data: WeatherForecast}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof postApiWeatherForecast>, {data: WeatherForecast}> = (props) => {
          const {data} = props || {};

          return  postApiWeatherForecast(data,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof postApiWeatherForecast>, TError, {data: WeatherForecast}, TContext>(mutationFn, mutationOptions)
    }
    