import './App.css'
import Tracker from './components/Tracker'
import { useFetch } from './service';

function App() {
    const {fetched, data, setIp} = useFetch("");

  return (
    <>
    {(data!==null)?
     <Tracker fetched={fetched} data={data!} setIp={setIp} />: ""}
    </>
  )
}

export default App
