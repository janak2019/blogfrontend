import axios from "axios";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function CreateBlog() {

    const navigate = useNavigate()
    const [data, setData] = useState({
        title: "",
        subtitle: "",
        description: "",
        image: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        
        setData({
            ...data,
            [name]: name === "image" ? e.target.files[0] : value
        })
    }

    const createBlog = async (e)=>{ 
        e.preventDefault()   
        const response = await axios.post("https://blogbackend-7mys.onrender.com/",data,{
        headers : {
            "Content-Type" : "multipart/form-data"
        }
    })
        if(response.status === 200){
            alert("New Article added")

            navigate("/")

        }else{
            alert("Something went wrong")
        }
    }

   

    
   


    return (
        <>
            <NavBar />
            <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
                <div className="mt-10 text-center font-bold">Wanna create blog?</div>
                <div className="mt-3 text-center text-4xl font-bold">Create Blog</div>
                <form onSubmit={createBlog}>
                    <div className="p-8">
                        <div className="flex gap-4">
                            <input type="text" name="title" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Title*" onChange={handleChange} />
                            <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Subtitle*" onChange={handleChange} />
                        </div>
                        <div className="flex gap-4">
                            <input type="file" name="image" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" onChange={handleChange} />

                        </div>
                        <div>
                            <textarea name="description" id="text" cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" onChange={handleChange}>Description</textarea>
                        </div>
                        <div className="text-center">
                            <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Create Blog</button>
                        </div>
                    </div>

                </form>
            </div>
        </>



    )
}