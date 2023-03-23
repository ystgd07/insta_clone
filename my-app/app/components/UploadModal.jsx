'use client';
import { modalState } from '@/atom/modalAtom';
import { useRecoilState } from 'recoil';
import Modal from 'react-modal';
import { CameraIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
export default function UploadModal() {
    const [open, setOpen] = useRecoilState(modalState);
    const [selectedFile, setSelectedFile] = useState(null);
    const filePickerRef = useRef(null);
    function addImageToPost(event) {
        const reader = new FileReader();
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    }
    return (
        <div>
            {open && (
                <Modal
                    className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
                    isOpen={open}
                    onRequestClose={() => {
                        setOpen(false);
                        setSelectedFile(null);
                    }}
                >
                    <div className="flex flex-col items-center justify-center h-[100%] ">
                        {selectedFile ? (
                            <img
                                onClick={() => setSelectedFile(null)}
                                src={selectedFile}
                                alt=""
                                className="w-full max-h-[250px] object-cotain cursor-pointer"
                            />
                        ) : (
                            <CameraIcon
                                onClick={() => filePickerRef.current.click()}
                                className="p-2 text-red-500 bg-red-200 border-2 rounded-full cursor-pointer h-14"
                            />
                        )}

                        <input type="file" hidden ref={filePickerRef} onChange={addImageToPost}></input>
                        <input
                            type="text"
                            maxLength="150"
                            placeholder="Please enter your caption..."
                            className="w-full m-4 text-center border-none focus:ring-0 "
                        />
                        <button
                            disabled
                            className="w-full p-2 text-white bg-red-600 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100 "
                        >
                            Upload Post
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
}
