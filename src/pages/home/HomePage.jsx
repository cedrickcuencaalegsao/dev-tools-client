import { IoSearch } from "react-icons/io5";
import { InfoCard } from "../../components/ToolsInfoCard";

export const HomePage = () => {
  return (
    <div className="homepage-section">
      <div className="lg:px-8 md:px-3">
        <div className="wrapper search-container">
          <IoSearch className="icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Search Recipe here..."
          />
        </div>

        <div className="suggestion-container">
          <span className="mr-5">Suggestions</span>

          <button className="suggest-btn-active">Glassmorphism</button>
          <button className="suggest-btn">Custom Borders</button>
          <button className="suggest-btn">Tailwind Compo</button>
          <button className="suggest-btn">Icons</button>
          <button className="suggest-btn">Bootstrap Compo</button>
          <button className="suggest-btn">Icon Components</button>
          <button className="suggest-btn">Image Sliders</button>
          <button className="suggest-btn">Scroll Animations</button>
        </div>

        <div className="wrapper mt-3 pr-4 justify-end">
          <select className="category-dropdown">
            <option selected>Newest</option>
            <option>Oldest</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
        </div>

        <div className="cards-container">
          <div className="flex justify-end">
            <InfoCard />
          </div>

          <div className="flex justify-end">
            <InfoCard />
          </div>
          <div className="flex justify-end">
            <InfoCard />
          </div>
          <div className="flex justify-end">
            <InfoCard />
          </div>
          <div className="flex justify-end">
            <InfoCard />
          </div>
          <div className="flex justify-end">
            <InfoCard />
          </div>
          <div className="flex justify-end">
            <InfoCard />
          </div>
          <div className="flex justify-end">
            <InfoCard />
          </div>

        </div>
      </div>
    </div>
  );
};
