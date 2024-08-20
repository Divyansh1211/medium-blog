export const Skeleton = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="h-2.5 bg-gray-200 rounded-full ">
        <div className="font-bold pl-2 text-slate-400"></div>
      </div>
      <div className="text-2xl "></div>
      <div className="h-2 bg-gray-200 rounded-full "></div>
      <div className="h-2 bg-gray-200 rounded-full "></div>
      <div className="bg-slate-200 w-full h-1 mt-4 "></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
