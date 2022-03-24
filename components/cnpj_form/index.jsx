import { useState } from "react";

export function CnpjForm() {

  const [cnpj, setCnpj] = useState('');
  const [trimmedString, setTrimmedString] = useState('');

  function removeCharacters() {
    const trimmedString = cnpj.replace(/[^a-zA-Z0-9]/g, '');
    setTrimmedString(trimmedString);
  }

  function resetCnpj(){
    setCnpj('');
    setTrimmedString('');
  }

  return (
    <div>
      <h1>Insert merchant's TAX ID here: </h1>
      <p>This tool will remove ALL special characters from the TAX ID, leaving only numbers, give a try!</p>
      <input type="text" name="" id="" onChange={(e) => setCnpj(e.target.value)} value={cnpj} defaultValue={''}/>

      <button onClick={() => removeCharacters()}>Remove characters</button>
      <button onClick={() => resetCnpj()}>Reset Tax ID</button><br /><br />

      {trimmedString.length>=14 ?
        (<span> There you go: {trimmedString}</span>)
      : (<span>Insert a valid TAX ID! </span>)}
    </div>
  )
}