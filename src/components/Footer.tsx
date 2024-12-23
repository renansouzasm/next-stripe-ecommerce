import { NavBar } from "./NavBar";

export function Footer() {
  return (
    <footer className="bg-bgColor1 w-full h-16 px-3 flex justify-center items-center sticky bottom-0 lg:relative">
      <NavBar />

      <p className="text-sm hidden lg:block">
        Copyright © 2023 All Rights Reserved
      </p>
    </footer>
  );
}
