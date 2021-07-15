import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginPopUp } from '../../redux/actions';
import { RootState } from '../../redux/store';
import './pop-up.scss';

export type PopUpProps = {
  children: ReactNode;
};

const PopUp: React.FC<PopUpProps> = ({ children }: PopUpProps) => {
  const isPopupOpened = useSelector((state: RootState) => state.login.isPopUpOpened);
  const dispatch = useDispatch();

  return (
    <div
      className={`pop-up ${isPopupOpened ? 'pop-up_visible' : 'pop-up_hidden'}`}
      onClick={() => dispatch(toggleLoginPopUp())}
    >
      <div className="pop-up__content" onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
