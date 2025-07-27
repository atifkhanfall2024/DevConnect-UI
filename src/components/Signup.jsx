import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../Utils/constant";

const Signup = () => {
  const [Error, setError] = useState("");
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    about: "",
    photoUrl: "",
    skills: "",
  });

  async function Submit(e) {
    e.preventDefault();
    console.log("hello signup");
    try {
      const res = await axios.post(BaseUrl + "/signup", {
        firstName: formData.name,
        email: formData.email,
        passward: formData.password,
        age: formData.age,
        gender: formData.gender,
        photo: formData.photoUrl,
        skills: formData.skills,
        about: formData.about,
      });
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data);
      console.log(err.message);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else alert("Signup completed!");
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const progressPercent = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <div id="signup" className=" flex items-center justify-center">
      <div className="bg-white  rounded-lg shadow-md  ">
        <h2 id="namee" className="login-title mt-2">Sign Up</h2>

        {/* ✅ FORM with conditional submission */}
        <form onSubmit={step < 3 ? handleNext : Submit} className="space-y-4">
          {step === 1 && (
            <>
              <input
                id="input"
                type="text"
                name="name"
                placeholder="Enter your FullName"
                className="login-input"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                id="input"
                type="email"
                placeholder="Enter your email"
                name="email"
                className="login-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                id="input"
                type="password"
                placeholder="Enter your password"
                name="password"
                className="login-input"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </>
          )}

          {step === 2 && (
            <>
              <input
                id="input"
                type="number"
                placeholder="Enter your age"
                name="age"
                className="login-input"
                value={formData.age}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="input"
                placeholder="Enter your gender"
                name="gender"
                className="login-input"
                value={formData.gender}
                onChange={handleChange}
                required
              />
              <textarea
                id="input"
                name="about"
                placeholder="Tell us about yourself"
                className="login-textarea"
                value={formData.about}
                onChange={handleChange}
                required
              ></textarea>
            </>
          )}

          {step === 3 && (
            <>
              <input
                type="text"
                id="input"
                placeholder="Photo URL"
                name="photoUrl"
                className="login-input"
                value={formData.photoUrl}
                onChange={handleChange}
                required
              />
              <input
                id="input"
                type="text"
                placeholder="Your skills"
                name="skills"
                className="login-input"
                value={formData.skills}
                onChange={handleChange}
                required
              />
            </>
          )}

          <p className="text-red-500 -translate-y-3 text-center">{Error}</p>

          <div className="flex justify-between gap-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="login-button"
                style={{ transform: "translate(0% , 20%)" }}
              >
                Back
              </button>
            )}

            <button
              type="submit"
              className={`w-full ${step > 1 ? "w-1/2" : "w-full"} login-button`}
              style={{ transform: "translate(0% , 20%)" }}
            >
              {step < 3 ? "Next" : "Sign Up"}
            </button>
          </div>
        </form>

        <div id="pb" className="mt-6">
          <div id="pb" className="w-full bg-gray-200 rounded-full h-3">
            <div
              id="pb"
              className="h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%`, backgroundColor: "#191e24" }}
            ></div>
          </div>
          <p
            id="pb"
            className="text-center  text-sm"
            style={{ color: "#191e24" }}
          >
            {progressPercent}% Completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
