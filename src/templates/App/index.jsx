import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/CounterProvider';
import * as S from './styles';
import { Heading } from '../../components/Heading';

export function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <S.Wrapper background="blue">
          <div>
            <h1>Hello world!</h1>
            <Heading>O texto teste</Heading>
          </div>
        </S.Wrapper>
      </PostsProvider>
    </CounterProvider>
  );
}
