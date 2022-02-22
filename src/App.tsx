import React from 'react';
import tw from 'twin.macro';
import { Button, Logo } from './components';
import 'styled-components/macro';

interface ContainerProps {
  hasBackground?: boolean;
}

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: ContainerProps) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-green-500`,
  ],
};

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
);

export default App;
