import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

export default function NewTransaModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>New Transaction</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}