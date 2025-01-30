import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { Link } from "react-router";
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
    <header className="flex flex-row justify-around bg-white text-black">
      {LINKS.map((link) => (
        <Link key={link.url} to={link.url}>
          {link.text}
        </Link>
      ))}
    </header>
  );
};

export default Header;
