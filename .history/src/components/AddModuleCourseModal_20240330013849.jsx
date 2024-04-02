
import { Label, TextInput, Button, Checkbox, Modal} from 'flowbite-react'
import React from 'react'

export default function AddModuleCourseModal() {
    const [openModal, setOpenModal] = useState(false);
   
  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }
  return (
     <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Thêm module mới</h3>
   
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
