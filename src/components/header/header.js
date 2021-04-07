import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className='sort'>
                <div>
                    <button>ID</button>
                    <button>Имя</button>
                    <button>Возраст</button>
                </div>
                <div>
                    <button>По возрастанию</button>
                    <button>По убыванию</button>
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