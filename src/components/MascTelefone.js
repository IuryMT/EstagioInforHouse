import React from 'react';
import InputCpf from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskedInput = ({ value, onChange, name, mask }) => {
    function handleChange(event){
    onChange({
        ...event,
        target: {
            ...event.target,
            name,
            value: onlyNumbers(event.target.value)
        }
    });
}
return (
    <>
    <InputCpf
    mask={mask}
    value={value}
    onChange={handleChange} />
    </>
)


}

export default MaskedInput