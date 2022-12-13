import React from "react";
import news from "../../assets/img/news.svg";

export default function Newsletter4() {
  return (
    <section className="lg:mx-20 lg:p-20">
      <div className="bg-black w-full text-white rounded-md lg:p-20 p-10">
        <div className="lg:flex items-center lg:mx-5">
          <div>
            <strong className="text-3xl">Sign up for our newsletter</strong>
            <div className="mt-5">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </div>
          </div>
          <div>
            <input type="email" name="" id="" placeholder="Enter your email" className="w-full py-2 px-3 rounded-md" />{" "}
            <div className="mt-3">
              <span>
                We care about the protection of your data. Read our Privacy
                Policy.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
