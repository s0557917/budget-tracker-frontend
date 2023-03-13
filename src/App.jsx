import NavBar from './components/navigation/NavBar'
import StatOverviewContainer from './components/stat-overview/StatOverviewContainer'
import TransactionsTable from './components/transactions-table/TransactionsTable'
import sampleData from '../sample_data/sampleData'
import OverviewCards from './components/stat-overview/OverviewCards'
import Chart from './components/stat-overview/Chart'
import NewTransaBttn from './components/new-transaction/NewTransaBttn'
import NewTransaModal from './components/new-transaction/NewTransaModal'
import { useDisclosure } from '@chakra-ui/react'

function App() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className='h-screen flex flex-col'>
      <NavBar />
      <div className='m-4'>
        <StatOverviewContainer >
          <OverviewCards data={sampleData}/>
          <Chart />
        </StatOverviewContainer >
        <TransactionsTable data={sampleData} />
        <NewTransaBttn onButtonClick={onOpen}/>     
        <NewTransaModal isOpen={isOpen} onClose={onClose}/>
      </div>
    </div>
  )
}

export default App
