import React from 'react'

export default function Header({ handleToggleDarkMode }) {
    return (
        <div className='flex justify-between items-center py-6'>
            <button
                onClick={
                    () => handleToggleDarkMode(
                        (previouDarkMode) => !previouDarkMode)
                }
                className='bg-[#e1e1e1] border-none rounded-xl py-[5px] px-[10px] text-[#AE445A]'>dark mode
            </button>
        </div>
    )
}