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


export const getWeatherForecast = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<WeatherForecast[]>> => {
    return axios.get(
      `/WeatherForecast`,options
    );
  }


export const getGetWeatherForecastQueryKey = () => [`/WeatherForecast`];

    
export const useGetWeatherForecast = <TData = AsyncReturnType<typeof getWeatherForecast>, TError = AxiosError<unknown>>(
  options?: { query?:UseQueryOptions<AsyncReturnType<typeof getWeatherForecast>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetWeatherForecastQueryKey();

  

  const queryFn: QueryFunction<AsyncReturnType<typeof getWeatherForecast>> = () => getWeatherForecast(axiosOptions);

  const query = useQuery<AsyncReturnType<typeof getWeatherForecast>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}

export const postWeatherForecast = (
    weatherForecast: WeatherForecast, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    return axios.post(
      `/WeatherForecast`,
      weatherForecast,options
    );
  }



    export const usePostWeatherForecast = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof postWeatherForecast>, TError,{data: WeatherForecast}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof postWeatherForecast>, {data: WeatherForecast}> = (props) => {
          const {data} = props || {};

          return  postWeatherForecast(data,axiosOptions)
        }

      return useMutation<AsyncReturnType<typeof postWeatherForecast>, TError, {data: WeatherForecast}, TContext>(mutationFn, mutationOptions)
    }
    