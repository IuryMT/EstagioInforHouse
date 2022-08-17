import './App.css'
import { Header } from './components/Header';
import { Main } from './components/Main'
import { Section1 } from './components/Section1';
// import { message, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';




function App() {

  // const [date, setDate] = useState(null);
  // const handleChange = value => {
  //   message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
  //   setDate(value);
  // }

  
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Main />
      
       {/* <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </div> */}

    </div>
  );
};


export default App;