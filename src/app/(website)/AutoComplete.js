// pages/index.js
"use client";
import { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { manualDummyData } from '@/components/data';

// Autosuggest component
const AutoSuggestComponent = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

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
    // Add the selected user to the list
    setSelectedUsers([...selectedUsers, suggestion]);
    // Clear the input field after selection
    setValue('');
  };

  const onUserDelete = (index) => {
    // Remove the selected user from the list
    const updatedUsers = [...selectedUsers];
    updatedUsers.splice(index, 1);
    setSelectedUsers(updatedUsers);
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => (
    <div>
      <img
        src={suggestion.profileImage}
        alt={suggestion.name}
        style={{ width: '30px', marginRight: '10px', borderRadius: '50%' }}
      />
      <span>{suggestion.name} ({suggestion.username})</span>
    </div>
  );

  const inputProps = {
    placeholder: 'Type a name or username',
    value,
    onChange,
    style: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      color: '#333',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
  };

  return (
    <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <div style={{ marginTop: '10px' }}>
        {selectedUsers.map((user, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <img
              src={user.profileImage}
              alt={user.name}
              style={{ width: '30px', marginRight: '10px', borderRadius: '50%' }}
            />
            <span>{user.name} ({user.username})</span>
            <button onClick={() => onUserDelete(index)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
              &#10006; 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function AutoComplete() {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
        Autocomplete Example with Manual Dummy Data
      </h1>
      <AutoSuggestComponent />
    </div>
  );
}
