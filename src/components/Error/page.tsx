import { useRouteError } from "react-router-dom"

type RouteError = {
  status: number;
  message: string;
}

export const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div className="font-bold">
      {error.status === 404 ? "Not Found" : error.message}
    </div>
  )
}
