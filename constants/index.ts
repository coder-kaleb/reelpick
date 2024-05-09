// CONSTANT VARIABLES
export const baseApiUrl = "https://api.themoviedb.org";

export const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export interface navProps {
  isOpen: boolean;
  extendWidth: boolean;
  setNavState: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      extendWidth: boolean;
    }>
  >;
}

export interface Movie {
  // adult: boolean;
  backdrop_path: string | undefined;
  genre_ids: number[];
  id: number;
  // original_language: string;
  // original_title: string;
  overview: string;
  // popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  // video: boolean;
  vote_average: number;
  // vote_count: number;
}

export type MoviePreview = Pick<
  Movie,
  "release_date" | "vote_average" | "title" | "poster_path" | "id" | "genre_ids"
>;
export type loadingProps = { loading: string };

export type allPro = MoviePreview & {
  loading: boolean;
};
export interface MovieApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface optionProps {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
  },
};