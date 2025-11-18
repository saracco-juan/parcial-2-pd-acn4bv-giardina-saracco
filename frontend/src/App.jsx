import Dashboard from './components/Dashboard/Dashboard'
import Button from './components/Button/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function App() {

  return (
    <div>
      <Dashboard />
      <div className="flex justify-center mt-20">
        <Button
          icon={<DeleteIcon color="error" />}
          variant={"delete"}
          type={"button"}
        />
        <Button
          icon={<EditIcon color="warning" />}
          variant={"edit"}
          type={"button"}
        />
        <Button
          text={"Boton"}
          variant={"primary"}
          type={"button"}
        />
      </div>
    </div>
  );
}

export default App
