import { MovieApiResponse, optionProps } from "@/constants";

export const fetchData = async (url: string, options: optionProps) => {
  try {
    const response = await fetch(url, {
      ...options,
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    return (await response.json()) as MovieApiResponse;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
