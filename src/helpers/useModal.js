import { useState } from "react";

export const useModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    return [isOpen, openModal, closeModal];//Devuelve la variable de estado que determina si esta abierto o cerrado, metodo que abre y metodo que cierra
};