export default function Skeleton() {
  return (
    <>
      <div className="flex  flex-col gap-4 justify-center p-5 w-full min-w-[300px]">    
        <div className="skeleton bg-slate-700 h-4 w-full "></div>
        <div className="skeleton bg-slate-700 h-4 w-full"></div>
        <div className="skeleton bg-slate-700 h-4 w-full"></div>
        <div className="skeleton bg-slate-700 h-4 w-full"></div>
        <div className="skeleton bg-slate-700 h-4 w-full"></div>
      </div>
    </>
  );
}
