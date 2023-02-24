import { PostsProvider } from '../../contexts/PostsProvider';
import { ThemeProvider } from 'styled-components';
import { CounterProvider } from '../../contexts/CounterProvider';
import { theme } from '../../styles/theme';
import * as S from './styles';
import { Heading } from '../../components/Heading';
import { GlobalStyles } from '../../styles/global-styles';

export function App() {
  return (
    <CounterProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PostsProvider>
          <S.Wrapper background="blue">
            <div>
              <h1>Hello world!</h1>
              <Heading>O texto teste</Heading>
            </div>
          </S.Wrapper>
        </PostsProvider>
      </ThemeProvider>
    </CounterProvider>
  );
}
