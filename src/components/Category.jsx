export const Category = () => {
  return (
    <div className="wrapper mt-3 pr-4 justify-end">
      <select className="category-dropdown">
        <option selected>Newest</option>
        <option>Oldest</option>
        <option>A-Z</option>
        <option>Z-A</option>
      </select>
    </div>
  );
};
