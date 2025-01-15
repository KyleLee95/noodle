import {
  SignedOut,
  SignedIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
const LINKS = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Projects",
    url: "/projects",
  },
  {
    text: "Settings",
    url: "/settings",
  },
];
const Header = () => {
  return (
    <header className="flex justify-around">
      {LINKS.map((link) => (
        <a key={link.url} href={link.url}>
          {link.text}
        </a>
      ))}
      <div>
        <SignedOut>
          <SignInButton>
            <Button variant="ghost">Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
