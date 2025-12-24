import Navigation from "../components/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "NExt Movies",
  },
  description: "The best",
};
export default function Page() {
  return (
    <div>
      <h1> About Us</h1>
    </div>
  );
}
