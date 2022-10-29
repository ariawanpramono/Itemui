import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState();
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState();
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    }

    const saveItem = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        // console.log(file);
        formData.append("file", file);
        formData.append("name", name);
        formData.append("description", desc);
        formData.append("category_id", category);

        axios.post("http://localhost:5000/items", formData);
        navigate('/detail/itemsbycategory',  { state: { idCategory: 0 } })
    }


  return (
    <>
    {success ? (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button onClick={setSuccess(false)} type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    ):(
        ""
    )
    }


    <div className='container mt-5 mx-auto'>
        <div className='col-md-4'>
            <div className='card'>
                <div className="card-header">
                    Tambah Barang Temuan
                </div>
                <div className='card-body'>
                <form onSubmit={saveItem}>

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
                    <button type="submit" className="btn btn-block btn-primary">Tambah</button>
                </div>
                </form>

                </div>


            </div>

        </div>
    </div>
    </>
  )
}

export default AddItem