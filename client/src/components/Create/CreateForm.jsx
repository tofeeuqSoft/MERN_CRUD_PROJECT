const CreateForm = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex items-center justify-center font-sans p-4">
            <div className="w-full max-w-md mx-auto">
                <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="productName"
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            placeholder="Product Name"
                            required
                        />
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                            Product Code 
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="productCode"
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            placeholder="Product Code"
                            required
                        />
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                           Product Image
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="img"
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            placeholder="Product Image URL"
                            required
                        />
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                            Unit Price
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="unitPrice"
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            placeholder="Unit Price"
                            required
                        />
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                            Product Quantity
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="qty"
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            placeholder="Product Quantity"
                            required
                        />
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                            Total Price
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="totalPrice"
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            placeholder="Total Price"
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateForm;