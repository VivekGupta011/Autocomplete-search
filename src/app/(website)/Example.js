// pages/index.js
"use client";
import { useState } from 'react';
import Autosuggest from 'react-autosuggest';

// Manually added dummy data
const manualDummyData = [
  {
    profileImage: 'https://picsum.photos/30/30?random=10',
    name: 'Aarav Sharma',
    username: 'aarav_sharma',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=11',
    name: 'Aanya Patel',
    username: 'aanya_patel',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=12',
    name: 'Arjun Gupta',
    username: 'arjun_gupta',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=13',
    name: 'Aditi Verma',
    username: 'aditi_verma',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=14',
    name: 'Aryan Singh',
    username: 'aryan_singh',
  },

  {
    profileImage: 'https://picsum.photos/30/30?random=15',
    name: 'Zara Khan',
    username: 'zara_khan',
  },{
    profileImage: 'https://picsum.photos/30/30?random=16',
    name: 'Bhavya Sharma',
    username: 'bhavya_sharma',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=17',
    name: 'Chetan Patel',
    username: 'chetan_patel',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=18',
    name: 'Deepa Gupta',
    username: 'deepa_gupta',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=19',
    name: 'Esha Verma',
    username: 'esha_verma',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=20',
    name: 'Fahad Singh',
    username: 'fahad_singh',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=22',
    name: 'Gauri Khan',
    username: 'gauri_khan',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=24',
    name: 'Hitesh Sharma',
    username: 'hitesh_sharma',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=25',
    name: 'Isha Patel',
    username: 'isha_patel',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=26',
    name: 'Jatin Gupta',
    username: 'jatin_gupta',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=28',
    name: 'Lavanya Sharma',
    username: 'lavanya_sharma',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=1',
    name: 'Jatin Sharma',
    username: 'jatin_sharma',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=2',
    name: 'Kavya Patel',
    username: 'kavya_patel',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=3',
    name: 'Lakshay Gupta',
    username: 'lakshay_gupta',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=4',
    name: 'Maya Verma',
    username: 'maya_verma',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=5',
    name: 'Nikhil Singh',
    username: 'nikhil_singh',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=6',
    name: 'Vidya Khan',
    username: 'vidya_khan',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=7',
    name: 'Gaurav Sharma',
    username: 'gaurav_sharma',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=8',
    name: 'Deepika Patel',
    username: 'deepika_patel',
  },
  {
    profileImage: 'https://picsum.photos/30/30?random=9',
    name: 'Sanjay Gupta',
    username: 'sanjay_gupta',
  },
];

// Autosuggest component
const AutoSuggestComponent = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (inputValue) => {
    const regex = new RegExp(inputValue.trim(), 'i');
    return manualDummyData.filter((user) => regex.test(user.name) || regex.test(user.username));
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    console.log(`Selected: ${suggestion.name}`);
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => (
    <div>
      <img src={suggestion.profileImage} alt={suggestion.name} style={{ width: '30px', marginRight: '10px' }} />
      <span>{suggestion.name} ({suggestion.username})</span>
    </div>
  );

  const inputProps = {
    placeholder: 'Type a name or username',
    value,
    onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default function Example() {
  return (
    <div>
      <h1>Autocomplete Example with Manual Dummy Data</h1>
      <AutoSuggestComponent />
    </div>
  );
}
