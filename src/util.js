import React from 'react';
import {Circle, Popup} from 'react-leaflet';
// import numeral from 'numeral'

export const sortData = (data) => {
    const sortedData = [...data]
    
    return sortedData.sort((a,b)=>a.cases>b.cases ? -1 : 1)
}

const casesTypeColors = {
    cases: {
        hex:'#CC1034',
        multiplier:200,
    },
    recovered:{
        hex:'#00ff00',
        multiplier:100,
    },
    deaths: {
        hex:'#FF0000',
        multiplier:600,
    }
}
export const showDataOnMap = (data, casesType) => (
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            // color="#00ff00"
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType])*casesTypeColors[casesType].multiplier
            }
        >
            <Popup className="popup">
                <div className="popup">
                    <div className="popup_container">
                        {/* <div className="popup_flag" style={{ backgroundImage: `url(${country.countryInfo.flag})` }}></div> */}
                        <div className="popup_container"><img src={country.countryInfo.flag} alt="flag"/></div>
                    </div>
                    <div className="popup_country">{country.country }</div>
                    <div>Cases : {country.cases} </div>
                    <div>Recovered: {country.recovered} </div>
                    <div>Deaths : {country.deaths} </div>
                    
                </div>
            </Popup>
        </Circle>
    ))
)