import React from 'react';
import { CheckType } from './Order';

type Check = {
  check: CheckType;
  onChecked: (check: CheckType) => void;
};

const CheckboxGroup = ({ check, onChecked }: Check) => {
  const handleCheck = (text: string) => {
    onChecked({ err: '', select: text });
  };

  return (
    <div className="flex justify-between items-center pb-3 px-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            className="sr-only"
            type="checkbox"
            id="dhaka"
            value="dhaka"
            checked={check.select === 'dhaka'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleCheck(e.target.value)
            }
          />
          <label
            htmlFor="dhaka"
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer
              ${check.select === 'dhaka' ? 'border-green-600' : 'bg-white border-gray-300'}`}
          >
            {check.select === 'dhaka' && (
              <span className="block w-3 h-3 rounded-full bg-green-600"></span>
            )}
          </label>
        </div>
        <span>Dhaka</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            className="sr-only"
            type="checkbox"
            id="outside"
            value="outside"
            checked={check.select === 'outside'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleCheck(e.target.value)
            }
          />
          <label
            htmlFor="outside"
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer
              ${check.select === 'outside' ? 'border-green-600' : 'bg-white border-gray-300'}`}
          >
            {check.select === 'outside' && (
              <span className="block w-3 h-3 rounded-full bg-green-600"></span>
            )}
          </label>
        </div>
        <span>Out Side</span>
      </div>
    </div>
  );
};

export default CheckboxGroup;
