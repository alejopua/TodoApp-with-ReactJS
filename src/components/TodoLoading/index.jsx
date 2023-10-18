
function TodoLoading() {
    return (
        <>
            <div className="w-full my-2 animate-pulse flex flex-col items-center gap-4">
                <div className="h-10 bg-slate-400 w-full rounded-xl"></div>
                <div className="h-10 bg-slate-400 w-full rounded-xl"></div>
                <div className="h-10 bg-slate-400 w-full rounded-xl"></div>
            </div>
        </>
    )
}

export { TodoLoading }