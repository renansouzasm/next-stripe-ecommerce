import "./style.css";

export const MenuBtn = ({ X, setMenu }) => {
  return (
    <button className="menuBtn" onClick={() => setMenu(false)}>
      <X size={22} />
    </button>
  );
};
