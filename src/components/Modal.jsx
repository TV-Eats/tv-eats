import React, { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Modal = ({name, city, state, website, webStatus, description, address}) => {
  const [showModal, setShowModal] = useState(false);

  const escape = (address) => {
    return encodeURIComponent(address);
    }   
  return (
    <div>
      
      <button type="button" onClick={() => setShowModal(true)} className="sm:max-w-sm mt-4 mx-2 bg-white border border-gray-200 rounded-lg shadow-md" >
                <img className="hidden md:block show border rounded-t-lg" src="https://cdn.vox-cdn.com/thumbor/_rkY834oqWMSnPe_W9MQcp6wYIk=/68x0:2933x1500/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10370303/1_t09vJE85R489sI-QC2BaeQ.0.0.0.0.jpeg" alt="guy fieri placeholder" />
                <div className="py-4">
                    <h1 className="font-bold">{name}</h1>
                    <p>{city}, {state}</p>
                </div>
            </button>
      {showModal ? (
        <div>
          <div className=" backdrop-blur-sm flex justify-center  items-center overflow-x-hidden overflow-y-hidden fixed inset-0  outline-none focus:outline-none">           
            <div className="relative w-full my-4 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  
                  <div className="">
                    <div className="px-8 py-8 text-left">
                        <h1 className="text-7xl font-bold">{name}</h1>
                        <h3 className="text-2xl pt-4">{city}, {state}</h3>
                        {website !== null && webStatus === "Up" ? <a href={website} target="_blank"><span className="inline-flex items-center pt-2 text-xl text-gray-500 space-x-2">
                                                        <span><FaLink /> </span>
                                                        <span>{name}'s website</span>
                                                    </span></a> : null}
                        <p className="pt-2">{description}</p>

                        <iframe
                            width="400"
                            height="300"
                            loading="lazy"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDHRL7If953RLfKsfBOZ64Ws7RgU07-Jgc&q=${escape(address)}`}
                            className="pt-4">
                        </iframe>
                    </div>
                  
                  <button
                    className="btn bg-blue text-white"
                    onClick={() => setShowModal(false)}
                  >Close</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
      ) : null}
    
    </div>
  )
};

export default Modal;

/**
 * <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button>
 */