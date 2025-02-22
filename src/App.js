import { Routes, Route } from "react-router-dom";

import "./App.css";
import Accordion from "./components/Accordion";
import FooterCis from "./components/Cisse/FooterCis";
import Newsletter4 from "./components/Cisse/NewsletterCis";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer/Footer";
import Footer3 from "./components/Footer/Footer3";
import Footer4 from "./components/Footer/Footer4";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import NavBar3 from "./components/NavBar/NavBar3";
import NavBar4 from "./components/NavBar/NavBar4";
import Index from "./components/Newsletter/index";
import Newsletter1 from "./components/Newsletter/Newsletter1";
import Newsletter3 from "./components/Newsletter/Newsletter3";
import Newsletter5 from "./components/Newsletter/Newsletter5";
import PricingSection from "./components/PricingSection";
import SignIn from "./components/SignIn/SignIn";
import SignIn1 from "./components/SignIn/SignIn1";
import SignIn3 from "./components/SignIn/SignIn3";
import SignIn5 from "./components/SignIn/SignIn5";
import SignUp from "./components/SignUp/SignUp";
import SignUp2 from "./components/SignUp/SignUp2";
import SignUp4 from "./components/SignUp/SignUp4";
import TeamSection from "./components/TeamSection";
import { FooterOrp1, FooterOrp2 } from "./exports/Footer";
import { NavBarOrp1, NavBarOrp2 } from "./exports/NavBar";
import { NewsletterOrp, NewsletterOne } from "./exports/Newslatter";
import { ResetPasswordOne, ResetPasswordOrp } from "./exports/ResetPassword";
import { SignInOne, SignInOrp } from "./exports/SignIn";
import { SignUpOne, SignUpOrp } from "./exports/SignUp";
import { UpdatePasswordOne, UpdatePasswordOrp } from "./exports/UpdatePassword";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home />} />

                {/*Navbar pages*/}
                <Route path="/navbar1" element={<NavBarOrp1 />} />
                <Route path="/navbar2" element={<NavBarOrp2 />} />
                <Route path="/navbar3" element={<NavBar3 />} />
                <Route path="/navbar4" element={<NavBar4 />} />
                <Route path="/navbar" element={<NavBar />} />

                {/*Sing up pages*/}
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/signup1" element={<SignUpOrp />} />
                <Route path="/signup2" element={<SignUp2 />} />
                <Route path="/signup4" element={<SignUp4 />} />
                <Route path="/sign-up-one" element={<SignUpOne />} />

                {/*Theme section page*/}
                <Route path="/teamSection" element={<TeamSection />} />

                {/*Footer pages*/}
                <Route path="/footer" element={<Footer />} />
                <Route path="/footer1" element={<FooterOrp1 />} />
                <Route path="/footer2" element={<FooterOrp2 />} />
                <Route path="/footer3" element={<Footer3 />} />
                <Route path="/footer4" element={<Footer4 />} />
                <Route path="/footer5" element={<FooterCis />} />

                {/*Sign in pages*/}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signin1" element={<SignIn1 />} />
                <Route path="/signin2" element={<SignInOrp />} />
                <Route path="/signin3" element={<SignIn3 />} />
                <Route path="/signin5" element={<SignIn5 />} />
                <Route path="/sign-in-one" element={<SignInOne />} />

                {/*Reset password pages*/}
                <Route path="/reset-password-one" element={<ResetPasswordOne />} />
                <Route path="/reset-password-o" element={<ResetPasswordOrp />} />

                {/*Update password page*/}
                <Route path="/update-password-one" element={<UpdatePasswordOne />} />
                <Route path="/update-password-o" element={<UpdatePasswordOrp />} />

                {/*Newsletter pages*/}
                <Route path="/newsletter" element={<Index />} />
                <Route path="/newsletter1" element={<Newsletter1 />} />
                <Route path="/newsletter2" element={<NewsletterOrp />} />
                <Route path="/newsletter3" element={<Newsletter3 />} />
                <Route path="/newsletter4" element={<Newsletter4 />} />
                <Route path="/newsletter5" element={<Newsletter5 />} />
                <Route path="/newsletter-one" element={<NewsletterOne />} />

                {/*FAQ pages*/}
                <Route path="/faq" element={<FaqSection />} />

                {/*Pricing pages*/}
                <Route path="/pricing" element={<PricingSection />} />

                {/*Accordion pages*/}
                <Route path="/accordion" element={<Accordion />} />
            </Routes>
        </div>
    );
}
export default App;
