import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";

function App() {
  return (
    <div className="bg-[#191D26] text-white">
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
        <HeroSection></HeroSection>
        <TaskBoard></TaskBoard>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
