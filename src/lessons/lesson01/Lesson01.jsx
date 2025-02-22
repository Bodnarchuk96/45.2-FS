import viteLogo from '/vite.svg'
import reactLogo from '../../assets/react.svg'



function Lesson01() {
    return (
<>
<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Привіт, це React </h1>
      <p className="read-the-docs">
        Привіт, я пишу код
      </p>
</>
    );
}
export default Lesson01