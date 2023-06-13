import UserInfo from './components/UserInfo';

const users = [
  {
    name: 'Teste nome',
    birthday: '10/10/10',
    email: "teste@teste.com"
  },
  {
    name: 'Teste nome 2',
    birthday: '10/10/10',
    email: "teste2@teste.com"
  },
  {
    name: 'Teste nome 3',
    birthday: '10/10/10',
    email: "teste3@teste.com"
  },
]

function App() {
  return (
    <div>
      <ul>
        {users.map(user => (
          <UserInfo 
            key={user.email}
            name={user.name} 
            birthday={user.birthday} 
            email={user.email}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
