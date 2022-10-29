import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from "js-cookie";

const EditItem = () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState();
    const [success, setSuccess] = useState(false);
    const [decoded, setDecoded] = useState();

    const {id} = useParams();

    const getItemById = async () => {
        const response = await axios.get(`http://localhost:5000/items/${id}`);
        setName(response.data.name);
        setDesc(response.data.description);
        setPreview(response.data.url);
        const category_id = response.data.category_id;
        console.log(category_id);

        if (category_id === 1) {
            setCategory('Aksesoris')
        }else if(category_id === 2){
            setCategory('Dokumen')
        }else if(category_id === 3){
            setCategory('Elektronik')
        }else if(category_id === 4){
            setCategory('Kendaraan');
        }else if(category_id === 5){
            setCategory('Lain-lain')
        }
    }

    useEffect(()=>{
        getItemById();
        if (Cookies.get('token') != null) {
            setDecoded(jwtDecode(Cookies.get('token')))
        }
    },[])

    const navigate = useNavigate(); 

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    }

    const updateItem = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        // console.log(file);
        formData.append("file", file);
        formData.append("name", name);
        formData.append("description", desc);
        formData.append("category_id", category);

        axios.patch(`http://localhost:5000/items/${id}`, formData);
        
        navigate('/detail/itemsbycategory',  { state: { idCategory: 0 } })
    }


  return (
    <>

    {(decoded != null) ? (
    <div className='container mt-5 mx-auto'>
    <div className='col-md-4'>
        <div className='card'>
            <div className="card-header">
                Ubah Barang Temuan
            </div>
            <div className='card-body'>
            <form onSubmit={updateItem}>

            <div className="mb-3 mt-3">
                <label htmlFor="item-name" className="form-label">Nama Barang</label>
                <input 
                type="text" 
                className="form-control" 
                id="item-name" 
                value={name} 
                onChange={
                    (e) => {
                        setName(e.target.value);
                        
                    }
                }></input>
            </div>
            <div className="mb-4">
                <label htmlFor="item-desc" className="form-label">Deskripsi Barang</label>
                <input 
                type="text" 
                className="form-control" 
                id="item-desc" 
                placeholder="Lokasi ditemukan, ciri-ciri, dan lain-lain"
                value={desc}
                onChange={
                    (e) => {
                        setDesc(e.target.value)
                    }
                }
                ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="item-category" className="form-label">Kategori Barang</label>
                <select
                className="form-select" 
                aria-label="Default select example"
                onChange={
                    (e) => {
                        setCategory(e.target.value)
                    }
                }
                >
                    <option>Pilih Kategori</option>
                    <option value="1">Aksesoris</option>
                    <option value="2">Dokumen</option>
                    <option value="3">Elektronik</option>
                    <option value="4">Kendaraan</option>
                    <option value="5">Lain-lain</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Gambar</label>
                <input 
                className="form-control" 
                type="file" 
                id="formFile"
                onChange={loadImage}
                ></input>
            </div>

            {preview ? (
                <figure>
                    <img className='rounded float-start mb-3' src={preview} alt="Preview Image"/>
                </figure>
            ):(
                ""
            )
            }

            <div>
                <button type="submit" className="btn btn-block btn-primary">Ubah</button>
            </div>
            </form>

            </div>


        </div>

    </div>
    </div>
    ) : (
<div className='container mt-5 mx-auto'>
        <div className='col-md-4'>
            <div className='card'>
                <div className="card-header">
                    Ubah Barang Temuan
                </div>
                <div className='card-body'>
                <form onSubmit={updateItem}>

                <div className="mb-3 mt-3">
                    <label htmlFor="item-name" className="form-label">Nama Barang</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="item-name" 
                    value={name} 
                    readOnly
                    
                    ></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="item-desc" className="form-label">Deskripsi Barang</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="item-desc" 
                    placeholder="Lokasi ditemukan, ciri-ciri, dan lain-lain"
                    value={desc}
                   
                    readOnly
                    ></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="item-desc" className="form-label">Kategori Barang</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="item-desc" 
                    placeholder="Lokasi ditemukan, ciri-ciri, dan lain-lain"
                    value={category}
                    
                    readOnly
                    ></input>
                </div>
                


                {preview ? (
                    <figure>
                        <img className='rounded float-start mb-3' src={preview} alt="Preview Image"/>
                    </figure>
                ):(
                    ""
                )
                }
                </form>

                </div>


            </div>

        </div>
    </div>
    )}


    
    </>
  )
}

export default EditItem