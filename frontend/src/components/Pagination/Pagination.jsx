import React from 'react'

export const Pagination = ({currentPage, totalItems, itemsPerPage, onPageChange, item}) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const goToPage = (pageNumber) => {
        onPageChange(pageNumber);
    };

    // Calcular el rango de items mostrados
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const showingFrom = totalItems === 0 ? 0 : indexOfFirstItem + 1;
    const showingTo = Math.min(indexOfLastItem, totalItems);

  return (
    <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-gray-400">
            Mostrando {showingFrom}-{showingTo} de {totalItems} {item}
        </p>
        <div className="flex gap-2">
            <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`px-3 py-2 ${currentPage === 1 ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'} rounded-lg text-sm`}>
                Anterior
            </button>
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 rounded-lg text-sm ${currentPage === page ? 'bg-primary text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                    {page}
                </button>
            ))}
            <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 ${currentPage === totalPages ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'} rounded-lg text-sm`}>
                Siguiente
            </button>
        </div>
    </div>
  )
}
