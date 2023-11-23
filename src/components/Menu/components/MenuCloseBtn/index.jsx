import "./style.css";

export const MenuCloseBtn = ({ X, setMenu }) => {
  return (
    <button className="menuCloseBtn" onClick={() => setMenu(false)}>
      <X size={22} />
    </button>
  );
};
