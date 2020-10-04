import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import Geosuggest from 'react-geosuggest';
import '.views/Image.css';

const App = () => {
  const geosuggestEl = useRef(null);
 
  const fixtures = [
    {label: 'New York', location: {lat: 40.7033127, lng: -73.979681}},
    {label: 'Rio', location: {lat: -22.066452, lng: -42.9232368}},
    {label: 'Tokyo', location: {lat: 35.673343, lng: 139.710388}}
  ];
 
  /**
   * When a suggest got selected
   */
  const onSuggestSelect = (suggest) => console.log(suggest);
 
  return (
    <div>
         <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCeI0Ah10MP960pph5frhgcy_PvTqgoHD0&libraries=places"></script>
      <Geosuggest
        ref={geosuggestEl}
        placeholder="Start typing!"
        initialValue="Hamburg"
        fixtures={fixtures}
        onSuggestSelect={onSuggestSelect}
        location={new google.maps.LatLng(53.558572, 9.9278215)}
        radius="20" />
 
      {/* {* Buttons to trigger exposed component functions *} */}
      <button onClick={()=>geosuggestEl.current.focus()}>Focus</button>
      <button onClick={()=>geosuggestEl.current.update('New Zealand')}>Update</button>
      <button onClick={()=>geosuggestEl.current.clear()}>Clear</button>
      <button onClick={()=>geosuggestEl.current.selectSuggest()}>Search</button>
    </div>
  );
};
 
ReactDOM.render(<App />, document.getElementById('app'));