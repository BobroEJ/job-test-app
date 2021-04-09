import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className='sort'>
                <div>
                    <button className='top-sort'>ID</button>
                    <button className='top-sort'>Имя</button>
                    <button className='top-sort'>Возраст</button>
                </div>
                <div>
                    <button className='bot-sort'>По возрастанию</button>
                    <button className='bot-sort'>По убыванию</button>
                </div>
            </div>
            <div className='view'>
                <button>Таблица</button>
                <button>Превью</button>
            </div>
        </div>
    )
}

export default Header;