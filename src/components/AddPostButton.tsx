"use client"

import { useFormStatus } from "react-dom"

const AddPostButton = () => {

    const {pending} = useFormStatus();

  return (
    <button className=" bg-blue-500 p-2 mt-2 rounded-md text-white disabled:bg-blue-300 disabled:cursor-not-allowed" disabled={pending}>{pending ? "Sending" : "Send"}</button>
  )
}

export default AddPostButton