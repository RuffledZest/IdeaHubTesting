function Submission() {
    return (
        <>
            <div className="  bg-white h-full w-full flex flex-col">

                <div className="text-center">
                    <h1 className="text-center text-6xl"> Submit your Idea</h1>
                    <br></br>
                    <p>Enter all the fields</p>
                </div>
                <br></br>
                <br></br>


                {/* Form */}
                <div className="flex justify-between">
                    <div className=" h-full w-1/2 bg-white mx-10 flex flex-col gap-12">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required="" />

                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Idea Description</label>
                            <input type="text" name="description" id="description" className="h-44 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required="" />
                        </div>


                        {/* Technology Tags Used Selection list: */}
                        <div className="text-black">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technology Tags Used</label>
                            <label htmlFor="cars">Choose a car:</label>

                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>


                        {/* idea category */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Idea Category</label>
                            <input type="text" name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category" required="" />
                        </div>
                    </div>




                    <div className="w-1/2 h-full bg-white mx-10 flex flex-col gap-12 ">
                        {/* make a retangular box like input field of type file with full parent's width and height 1/2 of width, the box should have a big Plus sign indicating user to select and upload a file style this input field as required */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload File</label>
                            <input type="file" name="file" id="file" className="bg-gray-50 border border-gray-300 text-gray-900 h-32 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Upload File" required="" />
                        </div>


                        {/* Intellectual property status section: Ask innovators to indicate the IP status of their idea (e.g., "Patented", "Patent Pending", "Unpatented").Provide guidance or links to resources on IP protection for those who are unsure. style this input field as checkboxes and style them as required */}
                        <div className="text-black">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Intellectual Property Status</label>
                            <div className="flex">

                                <label>Patented</label>
                                <input type="checkbox" name="patented" id="patented" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Patented" required="" />
                            </div>

                            <div className="flex w-full">
                                <label>Pending</label>
                                <input type="checkbox" name="patentpending" id="patentpending" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Patent Pending" required="" />
                            </div>

                            <div className="flex">
                                <label>Unpatented</label>
                                <input type="checkbox" name="unpatented" id="unpatented" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Unpatented" required="" />

                            </div>

                        </div>

                        {/* innovators information, here ask three inputs such as full name, email address, linkedin profile link */}
                        <div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                                <input type="text" name="fullname" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required="" />
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required="" />
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LinkedIn Profile Link</label>
                                <input type="text" name="linkedin" id="linkedin" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LinkedIn Profile Link" required="" />

                            </div>
                        </div>



                    </div>

                </div>
                    
                    <div className="text-center my-20">
                        <button type="submit" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                    </div>
            </div>
        </>
    )
}



export default Submission;