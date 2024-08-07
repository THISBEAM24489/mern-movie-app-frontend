import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type DateTimePickerProps = {
    value: Date | null;
    onChange: (date: Date | null) => void;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({ value, onChange }) => {
    return (
        <DatePicker className='bg-gray-500 text-white mb-2 justify-center items-center p-1 rounded-md hover:cursor-pointer'
            selected={value}
            onChange={onChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
        />
    );
};

export default DateTimePicker;
