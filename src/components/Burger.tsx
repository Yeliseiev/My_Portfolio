import React, { useEffect } from 'react';

interface Props {
  isChecked: boolean;
  onCheck: (check: boolean) => void;
}

export const Burger: React.FC<Props> = ({ isChecked, onCheck }) => {
  useEffect(() => {
    const { body } = document;

    if (body) {
      body.classList.toggle('hide-scroll', isChecked);
    }
  }, [isChecked]);

  return (
    <div className="burger">
      <input
        className="burger__checkbox"
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={() => onCheck(!isChecked)}
      />
      <label htmlFor="checkbox" className="burger__label">
        <div className="burger__label--icon-E" />
        <div className="burger__label--icon-X" />
      </label>
    </div>
  );
};
