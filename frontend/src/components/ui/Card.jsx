export function Card({ children }) {
  return (
    <div className="p-4 bg-slate-200 shadow-[4px_4px_10px_#b0c4de] text-black rounded-lg border border-gray-300  transition-transform transform hover:scale-105 hover:shadow-[4px_4px_5px_#778597] " >
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}
