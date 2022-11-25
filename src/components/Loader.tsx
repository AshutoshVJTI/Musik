import { LoaderProps } from "../types/@types";
const Loader = (props: LoaderProps) => {
  const { title} = props;
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl text-white mt-2">
        {title || "Loading.."}
      </h1>
    </div>
  );
};
export default Loader;
