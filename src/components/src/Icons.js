import React from 'react';
import clsx from 'clsx';
import {Spring} from 'react-spring/renderprops';

const useIcon = (props) => {
  const {className = 'svg icon', extraClassName, ...otherProps} = props;
  const clsName = clsx(extraClassName, className);
  return [clsName, otherProps];
};

//https://material.io/tools/icons/?icon=alarm_add&style=round
export const IconInfo = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" {...otherProps}>
    <path
        d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>;
});

export const IconWarning = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" {...otherProps}>
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
  </svg>;
});

export const IconError = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" {...otherProps}>
    <path
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/>
  </svg>;
});

export const IconOk = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" {...otherProps}>

    <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
  </svg>;
});

export const IconClear2 = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 512 512" {...otherProps}>
    <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
  </svg>;
});

export const IconClear = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" {...otherProps}>
    <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>;
});

export const IconArrowUp = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              width="1em" height="1em"
              viewBox="0 0 24 24" {...otherProps}>
    <path fill="none" d="M0 0h24v24H0V0z"/>
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
  </svg>;
});

export const IconArrowLeft = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" {...otherProps}>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
  </svg>;
});

export const IconArrowRight = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              {...otherProps} viewBox="0 0 24 24">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
  </svg>;
});

export const IconArrowRightBlack = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" {...otherProps}
              fill="black">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M10 17l5-5-5-5v10z"/>
  </svg>;
});

export const IconArrowDown = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" {...otherProps}>
    <path opacity=".87" fill="none" d="M24 24H0V0h24v24z"/>
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
  </svg>;
});

//wrong
export const IconStar = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" {...otherProps}>
    <path
        d="M0 0h24v24H0V0zm0 0h24v24H0V0zm12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
  </svg>;
});

export const IconStarBorder = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" {...otherProps}>
    <path
        d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
  </svg>;
});

export const IconStarHalf = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" {...otherProps}>
    <path fill="none" d="M0 0h24v24H0z"/>
    <path
        d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
  </svg>;
});

export const IconChecked = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" {...otherProps}>
    <path
        d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>

  </svg>;
});

export const IconChecked2 = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" {...otherProps}>
    <path fill="none" d="M0 0h24v24H0V0z"/>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
  </svg>;
});

export const IconUnChecked = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" {...otherProps}>
    <path
        d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </svg>;
});

export const IconCheckedNothing = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" {...otherProps}>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path
        d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </svg>;
});

export const IconCheckedIndeterminate = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              height="24" viewBox="0 0 24 24"
              width="24" {...otherProps}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>;
});

export const IconRadioUnChecked = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" {...otherProps}>
    <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
  </svg>;
});

export const IconRadioChecked = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" {...otherProps}>
    <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    <Spring
        from={{number: 0}}
        to={{number: 5}}>
      {
        springProps =>
            <circle cx="12" cy="12" r={springProps.number}/>
      }
    </Spring>
  </svg>;
});

export const IconList = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              viewBox="0 0 24 24" {...otherProps}>
    <path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"/>
  </svg>;
});

export const IconSearch = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} {...otherProps}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path
        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>;
});

export const IconQuestion = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName} xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable={false}
              viewBox="0 0 24 24" {...otherProps}>
    <path
        d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"/>
  </svg>;
});

export const IconNoData = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName}
              xmlns="http://www.w3.org/2000/svg"
              width="1em" height="1em"
              viewBox="0 0 24 24" {...otherProps}>
    <path fill="none" d="M0 0h24v24H0V0z"/>
    <path
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 2.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"/>
  </svg>;
});

export const IconHome = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"  {...otherProps}>
    <path fill="none" d="M0 0h24v24H0V0z"/>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/>
  </svg>;
});

export const IconCalendar = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" {...otherProps}>
    <path fill="none" d="M0 0h24v24H0V0z"/>
    <path
        d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"/>
  </svg>;
});

export const IconTime = React.forwardRef((props, ref) => {
  const [clsName, otherProps] = useIcon(props);
  return <svg ref={ref} className={clsName}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" {...otherProps}>
    <path fill="none" d="M0 0h24v24H0V0z"/>
    <path
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>;
});

