export const Suggestions = () => {
  return (
    <div className="p-4">
      <div className="suggestion-container">
        <span className="block text-lg font-semibold mb-4">Suggestions</span>
        <div className="flex flex-wrap gap-3">
          <button className="suggest-btn-active bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
            Glassmorphism
          </button>
          <button className="suggest-btn bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow">
            Custom Borders
          </button>
          <button className="suggest-btn bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow">
            Tailwind Compo
          </button>
          <button className="suggest-btn bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow">
            Icons
          </button>
          <button className="suggest-btn bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow">
            Bootstrap Compo
          </button>
          <button className="suggest-btn bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow">
            Icon Components
          </button>
          <button className="suggest-btn bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow">
            Image Sliders
          </button>
          <button className="suggest-btn bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow">
            Scroll Animations
          </button>
        </div>
      </div>
    </div>
  );
};
