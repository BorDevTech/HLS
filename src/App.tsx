import "./App.css";

function App() {
  return (
    <>
        <nav>
          <ul>
            <li><a href={"/"}>HLS</a></li>
            <li><input placeholder={"search"}/></li>
            <li><button>Favorites</button></li>
            <li><button><a href={"/login"}>Login</a></button></li>
            <li><button>Profile</button></li>
            </ul>
    </nav>
      <br />
      Welcome
      <br />
      Footer
      <br />
    </>
  );
}

export default App;
