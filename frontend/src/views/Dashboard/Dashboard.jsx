import { Link } from "react-router-dom";
import FormAddFont from "../../components/FormAddFont/FormAddFont";
import Table from "../../components/table/table";
import { FontsService } from "../../services/fonts";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination/Pagination";

const Dashboard = () => {
  const [fonts, setFonts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchFonts = async () => {
    try {
      const data = await FontsService.getAllFonts();
      setFonts(data);
    } catch (error) {
      console.error("Error fetching fonts:", error);
    }
  };

  useEffect(() => {
    fetchFonts();
  }, []);

  const handleAddFont = async (newFont) => {
    try {
      const created = await FontsService.createFont(newFont);
      setFonts([...fonts, created]);
      alert("Tipografía agregada exitosamente");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleteFont = async (id) => {
    try {
      await FontsService.deleteFont(id);
      setFonts(fonts.filter((font) => font.id !== id));
      alert("Tipografía eliminada exitosamente");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdateFont = async (id, updatedData) => {
    try {
      const updated = await FontsService.updateFont(id, updatedData);
      setFonts(fonts.map((font) => (font.id === id ? updated : font)));
      alert("Tipografía actualizada exitosamente");
    } catch (error) {
      alert(error.message);
    }
  };

  // Calcular las tipografías para la página actual
  const indexOfLastFont = currentPage * itemsPerPage;
  const indexOfFirstFont = indexOfLastFont - itemsPerPage;
  const currentFonts = fonts.slice(indexOfFirstFont, indexOfLastFont);

  return (
    <div className="bg-gray-950 text-gray-100 p-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <FormAddFont onAddFont={handleAddFont} />

          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Tipografías Registradas</h2>
            </div>

            <div>
              <Table
                fonts={currentFonts}
                onDelete={handleDeleteFont}
                onUpdate={handleUpdateFont}
              />
            </div>

            <Pagination
              item="tipografías"
              currentPage={currentPage}
              totalItems={fonts.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
