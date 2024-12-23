import { Link } from "react-router";

export function Error() {
  return (
    <main>
      <h1 className="mx-3 my-32 text-2xl text-center">
        404 Page not found, go back to{" "}
        <Link to={"/"}>
          <strong className="text-textColor3 cursor-pointer">home page</strong>
        </Link>
      </h1>
    </main>
  );
}
