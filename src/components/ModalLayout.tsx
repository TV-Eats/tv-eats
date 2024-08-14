import { useModalStore } from "../stores/modalStore";

function ModalLayout() {
  const { modalContent, closeModalClearContent } = useModalStore();

  return (
    <div className=" backdrop-blur-sm flex justify-center  items-center overflow-x-hidden overflow-y-hidden fixed inset-0  outline-none focus:outline-none">
      <div className="relative w-full my-4 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            {modalContent}
            <button
              className="btn bg-blue text-white"
              onClick={() => closeModalClearContent()}
            >Close</button>

          </div>
        </div>
      </div>
    </div>

  )
}

export default ModalLayout;