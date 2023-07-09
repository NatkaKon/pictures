import React, {FC} from 'react';
import s from './FilterButtons.module.css';

type PropsType = {
    changeFilter: (value: string) => void;
};

export const FilterButtons: FC<PropsType> = ({ changeFilter }) => {
    const buttons = [
        { label: 'All', value: 'all' },
        { label: 'Eggs', value: 'eggs' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Bird', value: 'bird' },
        { label: 'Frog', value: 'frog' },
        { label: 'Butterflies', value: 'butterflies' },
        { label: 'Flamingos', value: 'flamingos' },
        { label: 'Monkey', value: 'monkey' },
    ];

    return (
        <div className={s.filterBlock}>
            {buttons.map(({ label, value }) => (
                <button key={value} onClick={() => changeFilter(value)}>
                    {label}
                </button>
            ))}
        </div>
    );
};