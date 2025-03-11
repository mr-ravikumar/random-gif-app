import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
  return (

    <div className="w-screen h-screen relative flex flex-col background overflow-x-hidden items-center">
      <h1 className="bg-white py-4 text-3xl font-bold rounded-sm w-11/12 text-center mt-[40px]">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>

  );
}
