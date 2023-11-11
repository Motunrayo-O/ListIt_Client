type ApiError = {
  [name: string]: string[];
};

type Problem = {
  type: string;
  title: string;
  status: number;
  errors: ApiError;
};

export default Problem;
