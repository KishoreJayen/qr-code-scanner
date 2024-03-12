import { useState } from "react"


export const Qrcode = () => {

    const [image, setImage]= useState("");
    const [load, setLoad] = useState(false);
    const[qrname, setName]= useState("https://youtube.com/")
    const [size, setSize]= useState("150");

 async function generate(){
  setLoad(true);
  try{
    const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrname)}`;
    setImage(url);
  }catch(error){
    console.error("There is an problem", error);
}finally{
    setLoad(false);
}
 }

function download(name){
   fetch(image)
  .then((response)=> response.blob())
  .then((blob)=>{
    const link = document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="qr-downloading";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }).catch((error)=>{
    console.log("There is an error", error)
  });
}

  return (
    <div className="first-container">
        <h1>QR Code Generator</h1>
       {image && <img src={image} className="qrcode"     alt="" />}
      {load && <p>Please wait....</p>}
      <label htmlFor="dataInput" className="inputlabel">Data for QR Code </label>
      <input type="text" id="dataInput" value={qrname}   placeholder="Enter data for QR Code"
      onChange={(e)=>{
        setName(e.target.value)
      }}/>
      <label  htmlFor="sizeInput"    className="inputLabel" >Image Size (eg..,150);</label>
      <input type="text"  id="sizeInput"  value={size}   placeholder="Enter the Image Size"  onChange={(e)=>
        setSize(e.target.value)
      } />
      <div className="but">
      <button className="generate" onClick={generate}  >Generated QR Code</button>
      <button className="download"  onClick={download} >Download QR Code</button>
      </div>
    </div>
    
  )
}
