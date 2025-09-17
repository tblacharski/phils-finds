"use client";

type PaginationProps = {
  totalPosts: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  totalPosts,
  perPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalPosts / perPage);

  if (totalPages <= 1) return null;

  // Generate page numbers with ellipsis
  const getPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2);

      if (currentPage > 4) pages.push("...");

      const start = Math.max(3, currentPage - 1);
      const end = Math.min(totalPages - 2, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 3) pages.push("...");

      pages.push(totalPages - 1, totalPages);
    }

    return pages;
  };

  const baseBtn = "px-5 py-3 rounded-xl border text-sm font-medium transition-colors duration-200 cursor-pointer";
  const activeBtn = "bg-blue-600 text-white border-blue-600 hover:bg-blue-700";
  const normalBtn = "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400";
  const disabledBtn = "opacity-50 !cursor-not-allowed bg-gray-100 text-gray-400";

  return (
    <div className="flex gap-2 mt-6 items-center justify-center">
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} className={`${baseBtn} ${currentPage === 1 ? disabledBtn : normalBtn}`}>&laquo; Prev</button>

      {getPages().map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className="px-3 py-1 text-gray-500 select-none">...</span>
        ) : (
          <button key={page} onClick={() => onPageChange(page as number)} className={`${baseBtn} ${currentPage === page ? activeBtn : normalBtn}`}>{page}</button>
        )
      )}
      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} className={`${baseBtn} ${currentPage === totalPages ? disabledBtn : normalBtn}`}> Next &raquo; </button>
    </div>
  );
}
