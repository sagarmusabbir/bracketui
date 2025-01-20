import NavBar from "../src/app/Nav";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white z-50 backdrop-blur-2xl bg-opacity-80 shadow-sm">
      <div className="max-w-5xl flex flex-row justify-between items-center  px-4 py-2 mx-auto">
        {/* <Link href="#" className=" font-medium text-xl self-center">
          BRACKET<strong>UI</strong>
        </Link> */}
        <NavBar />
      </div>
    </div>
  );
};
export default Header;
