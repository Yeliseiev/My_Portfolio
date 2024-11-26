export function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const URL = 'https://yeliseiev.github.io/My_Portfolio/api/projects.json';

export const fetchProjects = async <T>(): Promise<T> => {
  const response = await fetch(URL);

  return response.json() as T;
};
