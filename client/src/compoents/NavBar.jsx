function NavBar() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-sem">RayzorPay Learning</h1>
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex gap-12">
          <li className="list-none">
            <a href="/">Contact</a>
          </li>
          <li>
            <a className="list-none" href="/">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
