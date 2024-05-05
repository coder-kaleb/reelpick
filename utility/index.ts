import { MovieApiResponse, optionProps } from "@/constants";

export const fetchData = async (url: string, options: optionProps) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    return (await response.json()) as MovieApiResponse;
  } catch (error) {
    alert(error);
  }
};
