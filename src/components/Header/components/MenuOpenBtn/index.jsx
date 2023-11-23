export const MenuOpenBtn = ({ List, setMenu }) => {
  return (
    <button className="menuOpenBtn" onClick={() => setMenu(true)}>
      <List size={22} />
    </button>
  );
};
