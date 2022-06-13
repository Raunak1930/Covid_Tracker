import React, { useState, useEffect } from 'react'
import "./App.css";
import Title from "./components/Title";
import InfoBox from "./components/InfoBox";
import Map from "./components/MapData";
import Table from "./components/Table";
import Graph from "./components/Graph";
import "./css/Title.css";
import "./css/InfoBox.css";
import "./css/Table.css";
import "./css/Map.css";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios'
import { sortData } from './util'
import {showDataOnMap} from './util';
import 'leaflet/dist/leaflet.css';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  // creating an empty array for storing name of all countries 
  const [countries, setCountries] = useState([])
  // track current country in dropdown
  const [curcountry, setCurcountry] = useState("worldwide")
  // store all data of curcountry
  const [countryInfo, setCountryInfo] = useState({})
  // store coutries data in tabluar sorted form
  const [tableData, setTableData] = useState([])
  // store map center
  // const [mapCenter, setMapCenter] = useState([28.5937, 78.9629]) india
  const [mapCenter, setMapCenter] = useState([41.8719,12.5674])
  // store zoom
  const [mapZoom, setMapZoom] = useState(2.3)
  // store name and flag for maps
  const [mapCountries, setMapCountries] = useState([])
  // store type of cases
  const [casesType, setCasesType] = useState("cases")

  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      })
  }, [])   // when App.js load

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        setMapCountries(data)
      })
      }, [])

    useEffect(() => {
      // we have to wait, untill req come from url therfore use async await...
      const getcountryData = async () => {
        const response = await axios.get('https://disease.sh/v3/covid-19/countries')
        const data = response.data
        // console.log(data);
        // mapping the response data and store inside array
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2
        }))
        setCountries(countries)
        const sortedData = sortData(data);
        setTableData(sortedData)
        // console.log(data);
      }
      getcountryData()
    }, [countries])   // when all countries are updated

  
    useEffect(() => {
      const getCountryInfo = async () => {
        const url = curcountry === "worldwide" ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${curcountry}`
        const responseData = await axios.get(url)
        setCountryInfo(responseData.data)
        // console.log(responseData);
        if (curcountry != "worldwide") {
          setMapCenter([responseData.data.countryInfo.lat, responseData.data.countryInfo.long])
        }
        setMapZoom(4);
        // console.log(mapCenter);
        // console.log(mapZoom);
        // setMapCountries(responseData.data)
      }
      getCountryInfo()
    }, [curcountry])  // when a new country is updated in dropdown


    // when any change in dropdown update curcountry
    const handleChange = async (e) => {
      setCurcountry(e.target.value);
    };

  useEffect(() => {
    setIndex(Math.floor(Math.random()*9))
  }, [])
    

    return (
      <div className="app">


        {/* header */}
        <div className="app_header">
          <Title />
          {/* <Dropdown /> */}
          <div className="dropdown">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={curcountry}
                onChange={handleChange}
              >
                <MenuItem value="worldwide">WorldWide</MenuItem>
                {
                  countries.map(country => (
                    <MenuItem value={country.value}>{country.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </div>
        </div>
        {/* header ends */}


        {/* app middle */}
        <div className="app_middle">

          {/* app left section */}
          <div className="app_left">
            {/* InfoBoxes */}
            <h1 className="app_left_title">{curcountry === "worldwide" ? "World Wide" : countryInfo.country}</h1>
            <div className="info_boxes">
              <InfoBox
                active={casesType==='cases'}
                onClick={e=>setCasesType("cases")}
                title="Corana cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
              <InfoBox
                active={casesType==='recovered'}
                onClick={e=>setCasesType("recovered")}
                title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
              <InfoBox
                active={casesType==='deaths'}
                onClick={e=>setCasesType("deaths")}
                title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
            </div>

            {/* map */}
            <Map countries={mapCountries} casesType={casesType} centerPoint={mapCenter} zoomPoint={mapZoom}></Map>
          </div>
          {/* app left section ends */}

          {/* app right section */}
          <div className="app_right">
            {/* table */}
            <Table countries={tableData} />
            {/* graph */}
            <Graph index={index} />
          </div>
          {/* app right section ends */}

        </div>
        {/* app middle ends */}

      </div>
    );
  }     


export default App
