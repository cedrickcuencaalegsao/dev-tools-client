export const Suggestions = () => {
  return (
    <div className="p-4">
      <div className="mb-3">
        <span className="text-lg font-semibold">Suggestions</span>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="suggest-btn-active">
          Glassmorphism
        </button>
        <button className="suggest-btn">
          Custom Borders
        </button>
        <button className="suggest-btn">
          Tailwind Compo
        </button>
        <button className="suggest-btn ">
          Icons
        </button>
        <button className="suggest-btn">
          Bootstrap Compo
        </button>
        <button className="suggest-btn ">
          Icon Components
        </button>
        <button className="suggest-btn">
          Image Sliders
        </button>
        <button className="suggest-btn">
          Scroll Animations
        </button>
      </div>
    </div>
  );
};
