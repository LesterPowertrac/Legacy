import React, { useState } from 'react';
import axios from 'axios';
import config from '../api/config';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [productName, setProductName] = useState('');
    const [message, setMessage] = useState('');

    // API URL
    const getApiUrl = () => {
        if (window.location.hostname === 'localhost') {
            return config.api.local;
        } else {
            return config.api.remote;
        }
    };

    const apiUrl = getApiUrl();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('Image', file);
        formData.append('ProductName', productName);

        try {
            const response = await axios.post(`${apiUrl}/products`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(response.data);
            alert(`File uploaded successfull` );
        } catch (error) {
            alert(`Failed to upload file.` );
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 ">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4 ">Upload Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Product Name:</label>
                        <input
                            type="text"
                            value={productName}
                            onChange={handleNameChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Upload Image:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                            required
                        />
                    </div>
                       

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-700 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
                    >
                        Upload
                    </button>
                </form>
                
            </div>
        </div>
    );
};

export default FileUpload;
