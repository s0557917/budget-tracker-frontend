import {Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box} from '@chakra-ui/react'
import Card from '../stat-overview/Card'
import { getNumberColorByValue, formatCurrency } from '../../helpers/formatting-helpers'

export default function TransactionsTable({ data }) {
    return(
        <Box className='my-16 flex-1'>
            <Card>
                <p className='text-5xl font-bold py-5 px-2'>Transactions</p>
                <TableContainer >
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Date</Th>
                                <Th>Creditor</Th>
                                <Th>Category</Th>
                                <Th>Amount</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map(transaction => 
                                <Tr>
                                    <Td>{transaction.date}</Td>
                                    <Td>{transaction.creditor}</Td>
                                    <Td>{transaction.category}</Td>
                                    <Td isNumeric>
                                        <span className={`font-bold ${getNumberColorByValue(transaction.amount)}`}>
                                            {formatCurrency(transaction.amount)}
                                        </span>
                                    </Td>
                                </Tr>)
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}