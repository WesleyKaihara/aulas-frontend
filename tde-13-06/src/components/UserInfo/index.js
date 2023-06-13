import './style.css'

export default function UserInfo ({ name, birthday, email }) {
  return (
    <li className="userInfo">
      <b>Nome:</b> { name }, <b>Data de nascimento:</b> { birthday }, <b>e-mail:</b> { email }
    </li>
  )
}
