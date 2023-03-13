import { IconButton } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'

export default function NewTransaBttn({ onButtonClick }) {
    return (
        <div className="fixed bottom-4 right-4">
            <IconButton
                height="100px"
                width="100px"
                colorScheme='green'
                aria-label='Add new transaction'
                onClick={onButtonClick}
                icon={
                    <AddIcon boxSize="14"/>
                }
            />
        </div>
    )
}