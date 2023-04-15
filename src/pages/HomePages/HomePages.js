import Header from "../../components/Header";
import "../../assets/css/background.css";

const HomePages = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="mt-4">
        <div className="home-bg">
          <div className="container max-w-5xl mx-auto  grid grid-cols-2 py-24 ">
            <div>
              <h1 className="font-bold text-4xl pb-5 text-white">
                Start Your Day with
                <br />
                Coffee and Good Meals
              </h1>
              <div className="font-normal text-xs pb-12 text-white">
                We provide high quality beans, good taste, and healthy <br />
                meals made by love just for you. Start your day with us <br />
                for a bigger smile!
              </div>
              <button className="py-4 px-16 bg-amber-500 rounded-md text-amber-900 drop-shadow-3xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePages;
