import { useState } from "react";
import Swal from "sweetalert2";

const CreateUser = () => {
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [activeChecked, setActiveChecked] = useState(false);
  const [inactiveChecked, setInactiveChecked] = useState(false);

  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const handleChecked = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "maleChecked":
        setMaleChecked(checked);
        setFemaleChecked(false);
        setGender("Male");
        break;
      case "femaleChecked":
        setFemaleChecked(checked);
        setMaleChecked(false);
        setGender("female");
        break;
      case "activeChecked":
        setActiveChecked(checked);
        setInactiveChecked(false);
        setStatus("Active");
        break;
      case "inactiveChecked":
        setInactiveChecked(checked);
        setActiveChecked(false);
        setStatus("Inactive");
        break;
      default:
        break;
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email, gender, status };
    fetch("https://users-server-site-jzeu5v5k1-brcshakil.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Good job!", "Saved the user!", "success");
        }
      });
  };

  return (
    <div className="hero max-w-7xl mx-auto my-10 md:my-20">
      <div className=" flex-col md:w-4/5 mx-auto">
        <h2 className="text-2xl font-bold text-center">Create New User</h2>
        <p className="text-xl font-semibold text-center pb-5">
          Use the below from to create a new account
        </p>
        <div className="w-full">
          <form onSubmit={handleSave} className="w-full space-y-4">
            <div className="">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="w-full p-3 border"
                required
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="w-full p-3 border"
                required
              />
            </div>
            <div className="flex items-center gap-6">
              <h2>Gender:</h2>
              <div className="flex">
                <label className="pr-5 flex gap-2">
                  <input
                    type="checkbox"
                    name="maleChecked"
                    checked={maleChecked}
                    onChange={handleChecked}
                  />
                  Male
                </label>

                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    name="femaleChecked"
                    checked={femaleChecked}
                    onChange={handleChecked}
                  />
                  Female
                </label>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <h2>Status:</h2>
              <div className="flex">
                <label className="pr-5 flex gap-2">
                  <input
                    type="checkbox"
                    name="activeChecked"
                    checked={activeChecked}
                    onChange={handleChecked}
                  />
                  Active
                </label>

                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    name="inactiveChecked"
                    checked={inactiveChecked}
                    onChange={handleChecked}
                  />
                  Inactive
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="py-3 bg-emerald-500 hover:bg-emerald-400 text-xl font-semibold text-black">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
