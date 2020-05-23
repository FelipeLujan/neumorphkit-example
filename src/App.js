import React, { useState } from 'react';
import {
  Binary,
  Button,
  Checkbox,
  Surface,
  Textinput,
  Radio,
} from 'neumorphkit';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './App.css';
import Coffee from './coffee/Coffee';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
`;
const Center = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  margin: 1rem;
`;
const App = () => {
  const [value, setValue] = useState('1 Check');
  const [checks, setChecks] = useState(['Option A']);
  const [radio, setRadio] = useState(undefined);
  const [copied, setCopied] = useState(false);
  const items = ['1 Check', '2 Check', '3 Check'];
  const list = ['Option A', 'Option B', 'Option C'];

  const handleChecks = (event) => {
    console.log('event', event);
    const { name } = event.target;
    const newChecks = checks;
    if (checks.includes(name)) {
      const index = newChecks.indexOf(name);
      newChecks.splice(index, 1);
    } else {
      newChecks.push(name);
    }
    setChecks([...newChecks]);
  };

  const handleRadio = (event) => {
    const { value } = event.target;
    console.log('value', value);
    setRadio(value);
  };

  return (
    <Container>
      <Surface width={550}>
        <Center>
          <h1>Neumorphkit</h1>
          <h2>
            A set of react components inspired on neumorphic design and animated
            with react-spring{' '}
            <a href="https://www.npmjs.com/package/neumorphkit">NPM</a>
          </h2>
        </Center>
        <Center>
          <Button>Click me</Button>
          <Button active>Im pressed</Button>
        </Center>
        <Center>
          <Binary
            options={['Option A', 'Option B']}
            handleClick={(e) => console.log(e)}
            title="Pick one or none"
          ></Binary>
        </Center>
        <Center>
          <Textinput
            name={'text'}
            value={value}
            handleChange={(event) => {
              setValue(event.target.value);
            }}
            placeholderText="This is a text input"
          ></Textinput>
        </Center>
        <br />
        <Center>
          {items.map((number) => (
            <Checkbox
              key={number}
              label={number}
              checked={checks.includes(number)}
              handleChange={handleChecks}
              name={number}
            />
          ))}
        </Center>
        <br />
        <Center>
          {list.map((option) => (
            <Radio
              key={option}
              checked={radio === option}
              handleChange={handleRadio}
              value={option}
              label={option}
            ></Radio>
          ))}
        </Center>
        <hr></hr>
        <Center>
          <span>
            <strong>Donate</strong>
          </span>
        </Center>
        <Center>
          <span>{'3ATbMwAzJg2DDLTJA4oun7SsEvUXceikYs'}</span>
          {'   '}
          <CopyToClipboard
            text={'3ATbMwAzJg2DDLTJA4oun7SsEvUXceikYs'}
            onCopy={() => setCopied(true)}
          >
            {/* <div style={{ transform: 'scale(0.7)' }}> */}
            <span style={{ 'margin-left': '1rem', cursor: 'pointer' }}>
              <strong>{copied ? 'Copied' : 'Copy'}</strong>
            </span>
            {/* </div> */}
          </CopyToClipboard>
        </Center>
        <Center>
          <Coffee></Coffee>
        </Center>
      </Surface>
    </Container>
  );
};

export default App;
