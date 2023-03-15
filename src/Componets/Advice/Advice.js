import 'bootstrap/dist/css/bootstrap.min.css'
import './AdStyle.css';
import { Row, Col, Container, Button,} from 'react-bootstrap'
import { useState } from 'react';

export default function Advice() {
    const [id, setId] = useState(0);
    const [advice, setAdvice] = useState(" ");

    async function getData() {
          const response = await fetch('https://api.adviceslip.com/advice');
          const data = await response.json();
        //   console.log(data.slip)
          return data.slip;
    }

    const renderId = async () => {
        const data = await getData();
        setId(data.id)
        console.log(data.id)
    }
    const renderAdvice = async () => {
        const data2 = await getData();
        setAdvice(data2.advice)
        console.log(data2.advice)
    }
      return (
        <div className='Body-center Body-Background'>
            <div className='Yes Yes2'>advice/src/Componets/assets/favicon-32x32.png</div>
            <div className='Body-center Main-Background Box Box-Absolute'>

            <h1 className='text-center m-8 Text-Green'>ADVICE  #{id}</h1>

            <h1 className='Text-LightGrey Text-Absolute'>"{advice}"</h1>

            <svg className='Divder-Absolute' width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>

            <Button className="Button Button-Hover Button-Active Button-Absolute" onClick={() => { renderId(); renderAdvice() } }><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></Button>

            </div>
        </div>
      );

}

