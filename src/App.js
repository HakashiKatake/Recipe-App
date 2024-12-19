import './App.css';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import React, { useState } from 'react'


import TextField from '@mui/material/TextField'; 
import Autocomplete from '@mui/material/Autocomplete'; 
import { Card } from '@mui/material';


function App() {
  
  const [myOptions, setMyOptions] = useState([])

const getDataFromAPI = () => {
	console.log("Options Fetched from API")

	fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
	return response.json()
	}).then((res) => {
	console.log(res.data)
	for (var i = 0; i < res.data.length; i++) {
		myOptions.push(res.data[i].employee_name)
	}
	setMyOptions(myOptions)
	})
}

return (
  <div className="App">
	<h3>Greetings from GeeksforGeeks!</h3>
  <Header />
	<Autocomplete
		style={{ width: 500 }}
		freeSolo
		autoComplete
		autoHighlight
		options={myOptions}
		renderInput={(params) => (
		<TextField {...params}
			onChange={getDataFromAPI}
			variant="outlined"
			label="Search Box"
		/>
		)}
    
	/>
	</div>
);
}

export default App;
