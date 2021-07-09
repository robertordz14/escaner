import './App.css';
import React, {useState} from 'react'
import QrScan from 'react-qr-reader'

function App() {

    const [qrscan, setQrscan] = useState('Ningun QR escaneado');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
            if(qrscan !== "Ningun QR escaneado"){
              alerta()
            }
        }
    }
    const handleError = err => {
    console.error(err)
    }
  
    return (
      <div className="escaneador">
            <h1>Escanea el código QR</h1>
              <div className="lector">
                <QrScan 
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
                
              </div>

            {/* <div>
             <Button href={qrscan}>Ir a la pagina</Button>            
            </div> */}
            
      </div>
    );

    function alerta(){
      var otros = window.confirm("Codigo QR escaneado con exito, ¿desea abrir la página?");
      if (otros === true) {
           window.location.href=(qrscan)
        // console.log(qrscan);
       } else {
         window.alert("Escaneo cancelado")
      }
    }
  }
  
  export default App;
  