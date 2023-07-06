
const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation(); //Evita que al hacer click sobre el contenedor del modal este se cierre. StopPropagation evita la "propagacion" de los eventos que se tiene en el "arbol" de JSX(Efectos que se envian de hijos a padres o de padres a hijos)

  return ( //Cuando isOpen sea true, se agrega la clase is-open. Se agrega en article onClick={closeModal} para que el modal cierre al hacer click fuera de el
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}> 
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;