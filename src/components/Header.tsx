import reactjs from '../assets/icons8-react.png'
import nodejs from '../assets/icons8-node-js.png'
import nextjs from '../assets/icons8-next.js.png'

export default function Header() {
    const imgSize = 150;
    return (
        <>
          <header className="container flex flex-col gap-3">
            <div className="flex justify-center">
              <img src={nodejs} alt="nodejs-logo" height={imgSize} width={imgSize} />
              <img src={reactjs} alt="reactjs-logo" height={imgSize} width={imgSize} />
              <img src={nextjs} alt="nextjs-logo" height={imgSize} width={imgSize} />
            </div>
            <div>
              <h1 className="text-5xl font-medium text-turquoise">Task Manager</h1>
            </div>
          </header>
        </>
    )
}