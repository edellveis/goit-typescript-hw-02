import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

interface Image {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  created_at: string;
  likes: number;
}

interface FetchImagesResponse {
  results: Image[];
  total_pages: number;
  total: number;
}

export const fetchImagesByTitle = async (
  title: string,
  page: number
): Promise<AxiosResponse<FetchImagesResponse>> => {
  const axiosOptions = {
    params: {
      query: title,
      page: page,
      per_page: 30,
      client_id: '_R4aQuJ40OU1qnBtzE5IaPSM__8d7icgebkN2VAJd-4',
      orientation: 'portrait',
    },
  };

  return await axios.get<FetchImagesResponse>('search/photos', axiosOptions);
};
