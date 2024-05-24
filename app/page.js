"use client"
import { useState } from "react";
export default function Page() {
  const [opencart, setOpencart] = useState(false)
  const [array, setArray] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [adress, setAdress] = useState("")
  const [phone, setPhone] = useState("")
  const [err, setErr] = useState("")
  const [userid, setUserid] = useState(null)
  const open = () => {
    setOpencart(true)
  }
  const adduser = () => {
    var username = name.trim()
    var useremail = email.trim()
    var useradress = adress.trim()
    var userphone = phone.trim()
    if (username.length < 3 || useremail.length < 3 || useradress.length < 3 || userphone.length < 3) {
      setErr("put the write value in . input")
    } else {
      const userobj = {
        Name: name,
        Email: email,
        Address: adress,
        Phone: phone,
      }
      setArray([...array, userobj])
    }
    setName("");
    setEmail("");
    setAdress("");
    setPhone("");
    setErr("")
  }
  const edit = (item, id) => {
    setName(item.Name)
    setEmail(item.Email)
    setAdress(item.Address)
    setPhone(item.Phone)
    setUserid(id)
    setOpencart(true)

  }
  const updated = () => {
    const obj = {
      Name: name,
      Email: email,
      Address: adress,
      Phone: phone,
    }
    const updated = array.map((item, index) => {
    if (userid !== null) {
      return (userobj)
    }
    else {
      return item
    }
  })
  setArray(updated)
  setOpencart(false)
  setUserid(null)
  setName("")
  setEmail("")
  setAdress("")
  setPhone("")
}
const removeUser = (id) => {
  const updatedArray = array.filter((user, item) => item !== id);
  setArray(updatedArray);
};
return (
  <>
    <div className="flex justify-center my-[60px]  ">
      <div className=" w-[80%] bg-[#F5F5F5]  overflow-auto h-[80vh]">
        <div className="h-[50px] bg-[#435D7D]">
          <div className="flex items-center justify-around   ">
            <h1 className="text-[white] font-bold  mt-[12px] " >Manage Employees</h1>
            <button className="h-[30px] w-[auto] text-[white] bg-[#28a745] rounded-md ml-[300px] mt-[10px] px-3 " onClick={open} > + Add New Employee</button>

          </div>
        </div>
        <table className=" w-[100%] border border-solid border-black border-collapse	 ">
          <tr >
            <th className='border border-gray-300 text-left p-2 bg-gray-200'>No</th>
            <th className='border border-gray-300 text-left p-2 bg-gray-200'>	Name</th>
            <th className='border border-gray-300 text-left p-2 bg-gray-200' >Email</th>
            <th className='border border-gray-300 text-left p-2 bg-gray-200'>Address</th>
            <th className='border border-gray-300 text-left p-2 bg-gray-200'>Phone</th>
            <th className='border border-gray-300 text-left p-2 bg-gray-200'>Actions</th>
          </tr>
          {
            array.map((user, id) => {
              return (
                <tr className="bg-[#e5e7eb]">
                  <td className='border border-gray-300 text-left p-2 bg-gray-200'>{id + 1}</td>
                  <td className='border border-gray-300 text-left p-2 bg-gray-200'>{user.Name}</td>
                  <td className='border border-gray-300 text-left p-2 bg-gray-200' >{user.Email}</td>
                  <td className='border border-gray-300 text-left p-2 bg-gray-200'>{user.Address}</td>
                  <td className='border border-gray-300 text-left p-2 bg-gray-200'>{user.Phone}</td>
                  <div className="flex justify-around border border-gray-300 text-left p-2 bg-gray-200">
                    <button className="bg-[#e5e7eb] border-none text-[20px]" onClick={() => edit(user, id)}>✏️</button>
                    <button className="bg-[#e5e7eb] border-none text-[30px]" onClick={() => removeUser(id)}>🗑</button>
                  </div>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
    {opencart &&
      <div className="h-full drop-shadow-2xl w-full bg-[#7a7a7a69] absolute top-[0px] left-[0px]">
        <div className="h-[430px] drop-shadow-2xl w-[400px] bg-[#345c8b] absolute top-[65px] left-[450px] ">
          <div className="flex justify-around">
            <h1 className="font-bold text-[white] mt-[15px] ">Add Employee</h1>
            <button className="text-[white] ml-[190px] mt-[15px]" onClick={() => close(setOpencart(false))}>x</button>
          </div>
          <hr className="mt-[10px]" />
          <label>
            <h1 className="text-[white] ml-[45px] mt-[15px]">Name</h1>
            <input type="text" className="h-[30px] w-[300px] ml-[45px] mt-[5px] outline-none pl-[10px] rounded-[5px]" onChange={(e) => { setName(e.target.value) }} value={name} />
            <h1 className="text-[white] ml-[45px] mt-[15px]">Email</h1>
            <input type="email" className="h-[30px] w-[300px] ml-[45px] mt-[5px] outline-none pl-[10px] rounded-[5px]" onChange={(e) => { setEmail(e.target.value) }} value={email} />
            <h1 className="text-[white] ml-[45px] mt-[15px]">Adress</h1>
            <input type="text" className=" h-[30px] w-[300px] ml-[45px] mt-[5px] outline-none pl-[10px] rounded-[5px]" onChange={(e) => { setAdress(e.target.value) }} value={adress} />
            <h1 className="text-[white] ml-[45px] mt-[15px]">Phone</h1>
            <input type="number" className=" h-[30px] w-[300px] ml-[45px] mt-[5px] outline-none pl-[10px] rounded-[5px] " onChange={(e) => { setPhone(e.target.value) }} value={phone} />
            {/* <form class="max-w-sm mx-auto">
                <div class="flex items-center">
                  <button id="dropdown-phone-button" data-dropdown-toggle="dropdown-phone" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                    <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2" /><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2" /></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd" /><path fill="#46467F" d="M0 .5h8.4v6.533H0z" /><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd" /></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" /><stop offset="1" stop-color="#F0F0F0" /></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="1" /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" /></filter></defs></svg>
                    +1 <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" /></svg>
                  </button>
                  <div id="dropdown-phone" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg absolute mt-1 w-full min-w-max dark:bg-gray-800 dark:divide-gray-700 dark:text-gray-300" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-phone-button" tabindex="-1" style={{}}>
                    <p class="text-gray-800 py-1 pl-1.5 pr-4 font-semibold dark:text-gray-200">+1 <span class="text-gray-500">United States</span></p>
                    <p class="text-gray-800 py-1 pl-1.5 pr-4 font-semibold dark:text-gray-200">+44 <span class="text-gray-500">United Kingdom</span></p>
                  </div>
                  <input id="phone" type="tel" name="phone" class="flex-1 block w-full px-4 py-2.5 text-sm text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-200 focus:border-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-600 dark:border-gray-600" placeholder="Phone Number" required style={{}} />
                </div>
              </form> */}


          </label>
          <div className="items-center  justify-center flex mt-4">
          <p className="text-[red] ml-[80px]">{err ? err : ""}</p>
          <button className="text-white  mt-2 ml-9">Cancel</button>
          {userid == null?
          <button className="bg-[#28a745] h-[30px] w-[100px] text-[white] ml-[20px] mt-2 rounded-[5px]" onClick={()=>adduser()} > Add</button>
          :
          <button className="bg-[#28a745] h-[30px] w-[100px] text-[white] ml-[20px]  mt-2  rounded-[5px]" onClick={()=> updated()} > updATE</button>
          
          }

          </div>

        </div>


      </div>
    }
  </>

);
}