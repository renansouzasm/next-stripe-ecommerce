import { MagnifyingGlass } from "@phosphor-icons/react";
import { useContext, useRef } from "react";
import { Context } from "../context/Context";

export function SearchBar() {
  const context = useContext(Context);
  const queryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (queryRef.current) {
      context.setQuery(queryRef.current.value);
    }
  }

  return (
    <form
      className="bg-bgColor2 h-9 flex-1 rounded-full flex items-center max-w-96 md:max-w-[640px] lg:w-96"
      method="POST"
      onSubmit={(event) => handleSubmit(event)}
    >
      <input
        className="text-placeHolder bg-transparent text-sm outline-none h-full w-full px-3"
        type="text"
        ref={queryRef}
      />

      <button
        className="text-sm min-h-9 min-w-12 rounded-full flex justify-center items-center"
        type="submit"
      >
        <MagnifyingGlass />
      </button>
    </form>
  );
}
