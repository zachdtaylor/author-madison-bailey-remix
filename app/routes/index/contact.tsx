import type { MetaFunction } from "remix";
import { Margin } from "../../components/lib";

export let meta: MetaFunction = () => {
  return {
    title: "Contact | Author Madison Bailey",
    description:
      "Contact Madison Bailey at her email: hello@authormadisonbailey.com",
  };
};

export default function Contact() {
  return (
    <Margin>
      <div className="text-center">
        <p className="text-xl">
          I would love to hear from you! Send me an email at
          hello@authormadisonbailey.com
        </p>
      </div>
    </Margin>
  );
}
