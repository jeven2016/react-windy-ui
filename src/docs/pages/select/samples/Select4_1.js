import React from 'react';
import {Divider, Select} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCar, faLaptop, faMobileAlt} from '@fortawesome/free-solid-svg-icons';

const rootStyle = {
  display: 'flex',
  flex: '1 1 200px',
};

const iconColumn = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '0 0 2rem',
  color: '#f2791a',
  marginRight: '1rem',
};

const infoColumn = {
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
};

const titleStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '.25rem',
};

const descStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '.25rem',
  color: '#f2791a',
  fontSize: '.8rem',
};

const Template = ({icon, title, desc}) => {
  return <div style={rootStyle}>
    <div style={iconColumn}>
      {icon}
    </div>
    <div style={infoColumn}>
      <div style={titleStyle}>
        {title}
      </div>
      <div style={descStyle}>
        {desc}
      </div>
    </div>
  </div>;
};

const Template2 = ({icon, title}) => {
  return <div style={rootStyle}>
    <div style={iconColumn}>
      {icon}
    </div>
    <div style={infoColumn}>
      <div style={titleStyle}>
        {title}
      </div>
    </div>
  </div>;
};

export default function Select4_1() {
  return <>
    {/*render content using text property*/}
    <div className="doc doc-row">
      <Select defaultValue="a"
              onSelect={(value) => console.log(value)}>
        <Select.Option value="a" text="Laptop">

          <Template title="Laptop"
                    desc="$500 (On Sale)"
                    icon={<FontAwesomeIcon size='2x' icon={faLaptop}/>}/>
        </Select.Option>

        <Divider/>
        <Select.Option value="b" text="Phone">

          <Template title="Phone"
                    desc="$300 (On Sale)"
                    icon={<FontAwesomeIcon size='2x' icon={faMobileAlt}/>}/>
        </Select.Option>
        <Divider/>

        <Select.Option value="c" text="Car">

          <Template title="Car"
                    desc="$50,000 (On Sale)"
                    icon={<FontAwesomeIcon size='2x' icon={faCar}/>}/>
        </Select.Option>
      </Select>
    </div>


    {/* same content rendered in Option and Select*/}
    <div className="doc doc-row">
      <Select defaultValue="a"
              hasArrow={false}
              onSelect={(value) => console.log(value)}>
        <Select.Option value="a">
          <Template title="Laptop"
                    desc="$500 (On Sale)"
                    icon={<FontAwesomeIcon size='2x' icon={faLaptop}/>}/>

        </Select.Option>
        <Divider/>
        <Select.Option value="b">
          <Template title="Phone"
                    desc="$300 (On Sale)"
                    icon={<FontAwesomeIcon size='2x' icon={faMobileAlt}/>}/>
        </Select.Option>
        <Divider/>
        <Select.Option value="c">
          <Template title="Car"
                    desc="$50,000 (On Sale)"
                    icon={<FontAwesomeIcon size='2x' icon={faCar}/>}/>
        </Select.Option>
      </Select>
    </div>

    {/*render different content using render() function*/}
    <div className="doc doc-row">
      <Select defaultValue="a"
              onSelect={(value) => console.log(value)}>
        <Select.Option value="a" render={() =>
            <Template2 title="Laptop"
                       icon={<FontAwesomeIcon icon={faLaptop}/>}/>}>

          <Template title="Laptop"
                    desc="$500 (On Sale)"
                    icon={<FontAwesomeIcon size='2x' icon={faLaptop}/>}/>
        </Select.Option>
        <Divider/>
        <Select.Option value="b" render={() =>
            <Template2 title="Phone"
                       icon={<FontAwesomeIcon icon={faMobileAlt}/>}/>}>

          <Template title="Phone"
                    desc="$300 (On Sale)"
                    icon={<FontAwesomeIcon size='2x' icon={faMobileAlt}/>}/>
        </Select.Option>
        <Divider/>
        <Select.Option value="c" render={() =>
            <Template2 title="Car"
                       icon={<FontAwesomeIcon icon={faCar}/>}/>}>

          <Template title="Car"
                    desc="$50,000 (On Sale)"
                    icon={<FontAwesomeIcon size='2x' icon={faCar}/>}/>
        </Select.Option>
      </Select>
    </div>


  </>;

}