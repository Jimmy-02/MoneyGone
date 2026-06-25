import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

function App() {

  return (
    <>
      <header>
        <Show when="signed-out">
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>

      <p className="text-red-500" >hekjdakwd</p>
      <button className="btn btn-primary">click me</button>
    </>
  );
}

export default App
