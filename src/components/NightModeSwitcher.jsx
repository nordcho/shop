import React from 'react';

const NightModeSwitcher = (props) => {
    return (
        <div className='NightModeSwitcherContainer'>
            <label className='NightModeSwitcherLabel' for='NightModeSwitcher'>Ночная тема</label>
            <input className='NightModeSwitcher' id='NightModeSwitcher' type="checkbox" onChange={props.setTheme}/>
        </div>
    );
};

export default NightModeSwitcher;